import PageLayout from "../page-layout";
import { BuildWebsite, Mentorship, Collaboration } from "./components";
import { SERVICES_CATEGORY } from "@/lib/constants";

type WorkflowType = keyof typeof workflowComponents;

const workflowComponents = {
    [SERVICES_CATEGORY.website]: <BuildWebsite />,
    [SERVICES_CATEGORY.mentorship]: <Mentorship />,
    [SERVICES_CATEGORY.collaboration]: <Collaboration />,
} as const;

const Workflow: React.FC<{ type: WorkflowType }> = ({ type }) => (
    <PageLayout id="workflow">
        {workflowComponents[type]}
    </PageLayout>
);

export default Workflow;