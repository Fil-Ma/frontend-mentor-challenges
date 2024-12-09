import { useEffect, useState } from "react";

const checkIsMobile = (threshold: number) => window.innerWidth <= threshold;

const useIsMobile = (pixelThreshold: number) => {
  const [isMobile, setIsMobile] = useState(() => checkIsMobile(pixelThreshold));

  useEffect(() => {
    const eventCallback = () => setIsMobile(checkIsMobile(pixelThreshold));

    window.addEventListener("resize", eventCallback);
    return () => window.removeEventListener("resize", eventCallback);
  }, []);

  return isMobile;
};

export default useIsMobile;
