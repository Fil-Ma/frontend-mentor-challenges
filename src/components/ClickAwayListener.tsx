import React, { useEffect, useRef } from "react";

interface ClickAwayListenerProps {
  children: React.ReactNode;
  onClickAway: VoidFunction;
}

const ClickAwayListener = ({
  children,
  onClickAway,
}: ClickAwayListenerProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickAway = (event: any) => {
      event.stopImmediatePropagation();
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        onClickAway();
      }
    };

    document.addEventListener("mousedown", handleClickAway);
    document.addEventListener("touchstart", handleClickAway);

    return () => {
      document.removeEventListener("mousedown", handleClickAway);
      document.removeEventListener("touchstart", handleClickAway);
    };
  }, [onClickAway]);

  return <div ref={containerRef}>{children}</div>;
};

export default ClickAwayListener;
