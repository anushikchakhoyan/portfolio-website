
import { cn } from "@/lib/utils"
import Title from "./title";

interface GeneralTextBlockProps {
    id?: string;
    title: string;
    subtitle: string;
    description: string;
    descrptionClassName?: string;
    children?: React.ReactNode,
}

const GeneralTextBlock: React.FC<GeneralTextBlockProps> = ({
    title, subtitle, description, descrptionClassName, children
}) => {

    return (
        <div className="flex-1 flex items-center justify-center px-5">
            <div className="w-full md:w-2/3 flex flex-col items-center gap-4">
                <h2 className="text-sm font-medium">{title}</h2>
                <Title title={subtitle}
                    className={cn("text-2xl md:text-2xl lg:text-4xl font-medium !text-primary")} />
                <p className={cn(`text-center text-sm max-w-lg whitespace-break-spaces`, descrptionClassName)}>
                    {description}
                </p>
                {children}
            </div>
        </div>
    );
};

export default GeneralTextBlock;
