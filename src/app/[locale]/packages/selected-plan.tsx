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

type PlanTypes = {
    title: string,
    service: Service,
    popular?: boolean,
    onSubmit: (values: FormikValues) => Promise<void>;
    onChoosePlan: ({ title, service }: SelectedPlanType) => Promise<void>;
}

const SelectedPlan: React.FC<PlanTypes> = ({ title, service, onSubmit, popular, onChoosePlan }) => {
    const t = useTranslations("Packages");
    const tContact = useTranslations("Contact");

    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <Button
                    size="lg"
                    variant={popular ? 'default' : 'outline'}
                    onClick={() => onChoosePlan({ title, service })}
                    className="rounded-full px-8 py-3 cursor-pointer">
                    {t("choose")}
                </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle className="text-center tracking-wide text-xl md:text-2xl
                                                 font-italiana font-medium">
                        {t("choosePlanCta")}
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
