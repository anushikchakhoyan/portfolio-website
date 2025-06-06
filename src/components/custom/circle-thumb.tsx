import { cn } from "@/lib/utils"
import Image, { StaticImageData } from "next/image";

type CircleThumbTypes = {
  className?: string;
  size?: "sm" | "md" | "lg";
  imageSrc?: string | StaticImageData;
}

const CircleThumb: React.FC<CircleThumbTypes> = ({
  className,
  size = "md",
  imageSrc = "",
}) => {
  const sizeOptions = {
    sm: "w-[200px] h-[200px]",
    md: "w-[300px] h-[300px]",
    lg: "w-[400px] h-[400px]"
  }

  return (
    <div
      className={cn(`absolute top-0 left-0 overflow-hidden z-10 rounded-[62%_47%_82%_35%/45%_45%_80%_66%] animate-slider-shape`,
        sizeOptions[size], className)}
    >
      {imageSrc && (
        <Image
          src={imageSrc}
          alt="Profile picture"
          className="w-full h-full object-cover"
        />
      )}
    </div>
  )
}

export default CircleThumb
