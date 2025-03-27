import { LG_BREAKPOINT } from "@/lib/constants";
import { useEffect, useState } from "react";

export default function useIsMobile() {
  const getIsMobile = () => typeof window !== "undefined" && window.innerWidth <= LG_BREAKPOINT;
  const [isMobile, setIsMobile] = useState(getIsMobile());

  useEffect(() => {
    const onResize = () => {
      setIsMobile(getIsMobile());
    }

    if (typeof window !== "undefined") {
      window.addEventListener("resize", onResize);
    }

    return () => {
      window.removeEventListener("resize", onResize);
    }
  }, []);

  return isMobile;
}
