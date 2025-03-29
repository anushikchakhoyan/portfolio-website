'use client';

import * as Yup from 'yup';
import { toast } from 'sonner';
import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { useTranslations } from "next-intl";
import { IoWarning } from 'react-icons/io5';
import { useSearchParams } from 'next/navigation';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { type FormikValues, type FormikHelpers, Formik, Form } from "formik";

import { EMAIL_JS_PUBLIC_KEY, EMAIL_JS_SERVICE_ID, EMAIL_JS_TEMPLATE_ID } from "@/lib/constants";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import InputField from '@/components/custom/input-field';
import SelectField from '@/components/custom/select-field';
import PhoneField from '@/components/custom/phone-field';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

import "react-phone-number-input/style.css";

type SubscribeTypes = {
    email: string;
    phone: string;
    name: string;
    message: string;
    service: string;
};

const ContactForm: React.FC = () => {
    const t = useTranslations("Contact");
    const tService = useTranslations("Header");
    const searchParams = useSearchParams();
    const selectedPlan = searchParams.get("plan");
    const userEmail = searchParams.get("email");
    const selectedService = searchParams.get("service");

    const [showAlert, setShowAlert] = useState(!!selectedPlan);

    const validationSchema = Yup.object().shape({
        name: Yup.string().required(t("requiredField") as string),
        email: Yup.string()
            .matches(
                /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                t("invalidEmail") as string
            ).required(t("requiredField") as string),
        phone: Yup.string().matches(
            /^\+[1-9]{1}[0-9]{5,14}$/,
            t("invalidPhone") as string
        ).required(t("requiredField") as string),
        message: Yup.string().required(t("requiredField") as string),
        service: Yup.string().required(t("requiredField") as string),
    });

    const handleSubmit = async (
        values: FormikValues,
        { setSubmitting, resetForm }: FormikHelpers<FormikValues>
    ): Promise<void> => {
        try {
            const response = await emailjs.send(
                EMAIL_JS_SERVICE_ID,
                EMAIL_JS_TEMPLATE_ID,
                {
                    name: values.name,
                    email: values.email,
                    phone: values.phone,
                    message: values.message,
                    service: values.service,
                    plan: selectedPlan || "N/A"
                },
                EMAIL_JS_PUBLIC_KEY
            );

            if (response.status === 200) {
                toast(t('emailSent'), {
                    description: t('emailSentDesc'),
                })
                resetForm();
                setShowAlert(false);
            }
        } catch (error) {
            console.error("EmailJS error:", error);
            toast(t('emailFailed'), {
                description: t('emailFailedDesc'),
            })
        } finally {
            setSubmitting(false);
        }
    };

    const initialValues: SubscribeTypes = {
        email: userEmail || "",
        phone: "",
        name: "",
        message: selectedPlan ? (
            `${t('additionalDetailsPrompt', { plan: selectedPlan })}`
        ) : "",
        service: selectedService || ""
    };

    return (
        <div className="w-full md:w-1/2">
            {showAlert && (
                <Alert variant="warning" className="mb-5">
                    <IoWarning className="h-8 w-8" />
                    <AlertTitle>{t("warningOfPlanTitle")}</AlertTitle>
                    <AlertDescription>
                        {t('warningOfPlanDesc')}
                    </AlertDescription>
                </Alert>
            )}
            <Formik
                enableReinitialize
                onSubmit={handleSubmit}
                initialValues={initialValues}
                validationSchema={validationSchema}
            >
                {({ isSubmitting }) => (
                    <Form className="flex flex-col gap-4 w-full">
                        <InputField name="name" label={t("fullName")} />
                        <InputField name="email" label={t("email")} />
                        <PhoneField name="phone" label={t("phone")} />
                        <SelectField
                            name="service"
                            label={tService("services")}
                            options={[
                                { value: "website", label: tService('websiteCreation') },
                                { value: "mentorship", label: tService("mentorship") },
                                { value: "collab", label: tService("collaboration") },
                            ]}
                        />
                        <InputField
                            as={Textarea}
                            name="message"
                            label={t("tellUsYourself")}
                            className="resize-none h-28" />
                        <Button
                            size="xl"
                            type="submit"
                            disabled={isSubmitting}
                            className="mt-4 text-lg"
                        >
                            {isSubmitting ? (
                                <AiOutlineLoading3Quarters className="animate-spin text-2xl" />
                            ) : t("send")}
                        </Button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default ContactForm;
