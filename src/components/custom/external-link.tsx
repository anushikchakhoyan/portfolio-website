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
    className={cn(`bg-white dark:bg-background border border-gray-300 dark:border-gray-500 rounded-3xl transition-colors 
               group dark:hover:bg-white hover:no-underline`, className)}>
    <a
      href={to}
      target="_blank"
      rel="noreferrer"
      className="flex items-center gap-1 text-gray-700 dark:text-gray-300 transition-colors dark:group-hover:text-gray-800"
    >
      {text}
      <Icon size={18}
        className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
    </a>
  </Button>
);

export default ExternalLink;
