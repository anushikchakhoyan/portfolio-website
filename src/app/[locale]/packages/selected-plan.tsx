import { useTranslations } from "next-intl";
import { Form, Formik, type FormikValues } from 'formik';

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button";

import type { SelectedPlanType, Service } from "@/lib/types";
import InputField from "@/components/custom/input-field";
import Title from "@/components/custom/title";

type PlanTypes = {
    title: string,
    service: Service,
    onSubmit: (values: FormikValues) => Promise<void>;
    onChoosePlan: ({ title, service }: SelectedPlanType) => Promise<void>;
}

const SelectedPlan: React.FC<PlanTypes> = ({ title, service, onSubmit, onChoosePlan }) => {
    const t = useTranslations("Packages");
    const tContact = useTranslations("Contact");

    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <Button variant="outline" onClick={() => onChoosePlan({ title, service })}>
                    {t("choose")}
                </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>
                        <Title title={t("choosePlanCta")} className="!text-2xl mb-5" />
                    </AlertDialogTitle>
                </AlertDialogHeader>
                <Formik
                    initialValues={{
                        email: "",
                    }}
                    onSubmit={onSubmit}>
                    {() => (
                        <Form>
                            <InputField name="email" label={tContact("email")} />
                        </Form>
                    )}
                </Formik>
                <AlertDialogFooter>
                    <AlertDialogAction>{tContact("send")}</AlertDialogAction>
                    <AlertDialogCancel>{tContact("cancel")}</AlertDialogCancel>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}

export default SelectedPlan;
