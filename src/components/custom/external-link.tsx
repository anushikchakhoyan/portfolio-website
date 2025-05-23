import { FiArrowUpRight } from "react-icons/fi";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type ExternalLinkProps = {
  to: string;
  text: string;
  Icon?: string;
  className?: string;
}

const ExternalLink: React.FC<ExternalLinkProps> = ({ text, to, Icon = FiArrowUpRight, className }) => (
  <Button
    variant="link"
    className={cn(`border border-gray-300 dark:border-gray-500 rounded-3xl transition-colors 
               hover:border-p dark:hover:border-gray-700 group dark:hover:bg-white`, className)}>
    <a
      href={to}
      target="_blank"
      rel="noreferrer"
      className="flex items-center gap-1 text-gray-700 dark:text-gray-300 transition-colors
                dark:group-hover:text-gray-800"
    >
      {text}
      <Icon size={18}
        className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5
         group-hover:text-primary dark:group-hover:text-primary" />
    </a>
  </Button>
);

export default ExternalLink;
