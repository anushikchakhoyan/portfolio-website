import { cn } from "@/lib/utils"

type LinkTypes = {
  to: string;
  text?: string;
  children?: React.ReactNode;
  className?: string;
}

const Link: React.FC<LinkTypes> = ({ text, to, children, className }) => {

  return (
    <Link to={to} className={cn(
      `text-base font-medium transition-colors duration-200 ease-in-out no-underline ${className}`
    )}>
      {text}
      {children}
    </Link>
  )
}
export default Link;
