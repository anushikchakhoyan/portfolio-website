import { Field, useField } from "formik";

import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

type InputProps = {
    as?: React.ElementType;
    name: string,
    label: string,
    className?: string,
}

const InputField: React.FC<InputProps> = ({ name, label, className, ...props }) => {
    const [field, meta] = useField<string>(name);

    return (
        <div className="w-full flex flex-col gap-2">
            <Field
                as={Input}
                {...field}
                {...props}
                placeholder={label}
                // onValueChange={(value: string) => {
                //     helpers.setValue(value);
                // }}
                className={cn(`h-12 border-gray-200`, className, meta.touched && meta.error && "border-red-500")}
            />
            {meta.touched && meta.error && (
                <div className="text-red-500 text-xs">{meta.error}</div>
            )}
        </div>
    )
}

export default InputField;