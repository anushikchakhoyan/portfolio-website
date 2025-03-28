import * as React from "react";
import { useTranslations } from "next-intl";

import { Step } from "@/lib/types";
import { generateSteps } from "@/lib/utils";

import Title from "../title";
import Stepper from "../stepper";

interface WorkflowProps {
    title: string;
    subtitle: string;
    steps: Step[];
}

interface WorkflowComponentProps {
    titleKey: string;
    subtitleKey: string;
    stepKeys: string[];
}

// factory function
const createWorkflowComponent = ({ titleKey, subtitleKey, stepKeys }: WorkflowComponentProps): React.FC => {
    return () => {
        const t = useTranslations("Workflows");
        const steps = React.useMemo(() => generateSteps(stepKeys), [stepKeys, t]);

        return (
            <WorkflowSection
                title={t(titleKey)}
                subtitle={t(subtitleKey)}
                steps={steps}
            />
        );
    };
};

const WorkflowSection: React.FC<WorkflowProps> = ({ title, subtitle, steps }) => {
    return (
        <div className="space-y-8">
            <div className="space-y-2">
                <Title title={title} className="text-2xl sm:text-4xl md:text-4xl text-start" />
                <p className="text-base">{subtitle}</p>
            </div>
            <Stepper steps={steps} />
        </div>
    )
};
WorkflowSection.displayName = "WorkflowSection";


const BuildWebsite = createWorkflowComponent({
    titleKey: "workingWithClient",
    subtitleKey: "buildingWebsite",
    stepKeys: [
        "discoveryConsultation",
        "planningStrategy",
        "designDevelopment",
        "testingFeedback",
        "launchSupport",
    ],
});
BuildWebsite.displayName = "BuildWebsite";

const Mentorship = createWorkflowComponent({
    titleKey: "mentorshipSteps",
    subtitleKey: "guidingMentee",
    stepKeys: [
        "initialMeeting",
        "personalizedLearningPlan",
        "guidedPractice",
        "progressReview",
        "careerGuidanceFinalEvaluation",
    ],
});
Mentorship.displayName = "Mentorship";

const Collaboration = createWorkflowComponent({
    titleKey: "collaborationSteps",
    subtitleKey: "workingOnProject",
    stepKeys: [
        "projectDiscussion",
        "communicationSetup",
        "executionCoordination",
        "taskDistribution",
        "testing",
        "finalization",
    ],
});
Collaboration.displayName = "Collaboration";

export { BuildWebsite, Mentorship, Collaboration };