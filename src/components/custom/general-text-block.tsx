
import clsx from "clsx";
import Title from "./title";

interface GeneralTextBlockProps {
    id?: string;
    title: string;
    subtitle: string;
    description: string;
    descrptionClasses?: string;
    children?: React.ReactNode
}

const GeneralTextBlock: React.FC<GeneralTextBlockProps> = ({
    title, subtitle, description, descrptionClasses, children
}) => {

    return (
        <div className="flex-1 flex items-center justify-center py-4">
            <div className="w-full md:w-2/3 flex flex-col items-center gap-4 md:px-5">
                <h2 className="text-sm font-medium">{title}</h2>
                <Title title={subtitle} className="text-2xl md:text-2xl lg:text-4xl font-medium" />
                <p className={clsx(`text-center text-sm max-w-lg whitespace-break-spaces`, descrptionClasses)}>
                    {description}
                </p>
                {children}
            </div>
        </div>
    );
};

export default GeneralTextBlock;
