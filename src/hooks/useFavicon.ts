import { useEffect } from "react";

const useFavicon = (customFavicon: string) => {
  useEffect(() => {
    const faviconUpdate = async () => {
      const favicon = document.getElementById("favicon") as HTMLLinkElement;
      if (favicon) favicon.href = customFavicon;
    };

    faviconUpdate();
  }, []);
};

export default useFavicon;
