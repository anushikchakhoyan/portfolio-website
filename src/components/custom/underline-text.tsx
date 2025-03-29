import { cn } from "@/lib/utils";

type UnderlineTextTypes = {
  text: string;
  className?: string;
}

const UnderlineText: React.FC<UnderlineTextTypes> = ({ text, className }) => {

  return (
    <p className={cn(
      `text-base font-medium
      transition-colors duration-200 ease-in-out ${className}`
    )}>
      {text}
    </p>
  )
}

export default UnderlineText;
