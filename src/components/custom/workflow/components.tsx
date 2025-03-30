import * as React from "react";
import { useTranslations } from "next-intl";
import Stepper from "../stepper";
import Title from "../title";

interface Step {
    id: number;
    title: string;
    description: string;
}

interface WorkflowProps {
    title: string;
    subtitle: string;
    steps: Step[];
}

interface WorkflowConfig {
    titleKey: string;
    subtitleKey: string;
    stepKeys: string[];
}

type WorkflowTranslationKeys =
    | "workingWithClient"
    | "buildingWebsite"
    | "mentorshipSteps"
    | "guidingMentee"
    | "collaborationSteps"
    | "workingOnProject"
    | "discoveryConsultation"
    | "discoveryConsultationDesc"
    | "planningStrategy"
    | "planningStrategyDesc"
    | "designDevelopment"
    | "designDevelopmentDesc"
    | "testingFeedback"
    | "testingFeedbackDesc"
    | "launchSupport"
    | "launchSupportDesc"
    | "initialMeeting"
    | "initialMeetingDesc"
    | "personalizedLearningPlan"
    | "personalizedLearningPlanDesc"
    | "guidedPractice"
    | "guidedPracticeDesc"
    | "progressReview"
    | "progressReviewDesc"
    | "careerGuidanceFinalEvaluation"
    | "careerGuidanceFinalEvaluationDesc"
    | "projectDiscussion"
    | "projectDiscussionDesc"
    | "communicationSetup"
    | "communicationSetupDesc"
    | "executionCoordination"
    | "executionCoordinationDesc"
    | "taskDistribution"
    | "taskDistributionDesc"
    | "testing"
    | "testingDesc"
    | "finalization"
    | "finalizationDesc";

const WorkflowSection: React.FC<WorkflowProps> = React.memo(({ title, subtitle, steps }) => (
    <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-2">
            <Title title={title} className="text-2xl sm:text-4xl md:text-4xl text-start" />
            <p className="text-base">{subtitle}</p>
        </div>
        <Stepper steps={steps} />
    </div>
));
WorkflowSection.displayName = "WorkflowSection";

/**
 * Factory function to generate workflow components dynamically.
 */
const createWorkflowComponent = ({ titleKey, subtitleKey, stepKeys }: WorkflowConfig): React.FC => {
    const WorkflowComponent: React.FC = () => {
        const t = useTranslations("Workflows");

        const steps: Step[] = React.useMemo(
            () =>
                stepKeys.map((key, index) => ({
                    id: index + 1,
                    title: t(key as WorkflowTranslationKeys),
                    description: t(`${key}Desc` as WorkflowTranslationKeys),
                })),
            [t]
        );

        return (
            <WorkflowSection
                title={t(titleKey as WorkflowTranslationKeys)}
                subtitle={t(subtitleKey as WorkflowTranslationKeys)}
                steps={steps}
            />
        );
    };

    WorkflowComponent.displayName = `WorkflowComponent(${titleKey})`;
    return React.memo(WorkflowComponent);
};

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

export { BuildWebsite, Mentorship, Collaboration };