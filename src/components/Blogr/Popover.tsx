import ClickAwayListener from "@components/ClickAwayListener";
import colors from "@constants/colors";
import React, { useEffect, useRef, useState } from "react";
import styled, { css, keyframes } from "styled-components";
import { Styles } from "styled-components/dist/types";

type Verticals = "top" | "bottom";
type Horizontals = "right" | "left";
type BasePositions = Verticals | Horizontals;

type Position<FirstPosition extends BasePositions> =
  FirstPosition extends Verticals
    ? `${FirstPosition}-${Horizontals | "center"}`
    : `${FirstPosition}-${Verticals | "center"}`;

type AllPositions = Position<BasePositions>;

type FinalPopoverPosition = Partial<Record<BasePositions, number>>;

type TOffset = {
  x?: number;
  y?: number;
};

interface PopoverProps {
  anchorEl: HTMLElement | null;
  onClose: VoidFunction;
  position?: AllPositions;
  offset?: TOffset;
  children: React.ReactNode;
  width?: number;
}

const Popover = ({
  anchorEl,
  onClose,
  width = 300,
  position = "bottom-center",
  offset,
  children,
}: PopoverProps) => {
  const [popoverPosition, setPopoverPosition] = useState<FinalPopoverPosition>(
    {},
  );
  const [height, setHeight] = useState(30);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (anchorEl) {
      const anchorPosition = anchorEl.getBoundingClientRect();
      const finalPosition = getPopoverPosition(anchorPosition, position, {
        offset,
        width,
        height,
      });
      setPopoverPosition(finalPosition);
    }
  }, [anchorEl, position, offset, width, height]);

  const popoverHeight = containerRef.current?.getBoundingClientRect().height;
  useEffect(() => {
    if (typeof popoverHeight === "number") {
      setHeight(popoverHeight);
    }
  }, [popoverHeight]);

  if (!anchorEl) return null;

  return (
    <ClickAwayListener onClickAway={onClose}>
      <Container
        ref={containerRef}
        $isVisible={!!anchorEl}
        $customStyles={{
          width: `${width}px`,
          ...popoverPosition,
        }}
      >
        {children}
      </Container>
    </ClickAwayListener>
  );
};

export default Popover;

const fadeIn = keyframes`
from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

const popoverAnimation = css`
  animation: ${fadeIn} 0.3s ease forwards;
`;

type ContainerProps = {
  $customStyles?: Styles<object>;
  $isVisible: boolean;
};

const Container = styled.div<ContainerProps>`
  position: fixed;
  box-sizing: border-box;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
  background-color: ${colors.blogr.neutral.white};
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);

  ${(props) => props.$isVisible && popoverAnimation}

  ${(props) => props.$customStyles && css(props.$customStyles)}
`;

type TParams = {
  offset?: TOffset;
  width: number;
  height: number;
};

type ComputePopoverPosition = (
  anchorRect: DOMRect,
  popoverPosition: AllPositions,
  params: TParams,
) => Partial<Record<BasePositions, number>>;

const getPopoverPosition: ComputePopoverPosition = (
  anchorRect,
  popoverPosition,
  params,
) => {
  const [position, alignment] = popoverPosition.split("-");
  const { offset, width, height } = params;

  const styles: FinalPopoverPosition = {};

  const offsetX = offset?.x || 0;
  const offsetY = offset?.y || 0;

  // Calculate `top` or `bottom` based on vertical position
  if (position === "top") {
    styles.top = anchorRect.top - height - offsetY;
  } else if (position === "bottom") {
    styles.top = anchorRect.bottom + offsetY;
  }

  // Calculate `left` or `right` based on horizontal position
  if (position === "left") {
    styles.left = anchorRect.left - width - offsetX;
  } else if (position === "right") {
    styles.left = anchorRect.right + offsetX;
  }

  // Handle alignment for horizontal adjustments
  if (alignment === "left") {
    styles.left = anchorRect.right - width - offsetX;
  } else if (alignment === "right") {
    styles.left = anchorRect.left + offsetX;
  } else if (
    alignment === "center" &&
    (position === "top" || position === "bottom")
  ) {
    styles.left = anchorRect.left - width / 2 + anchorRect.width / 2;
  }

  // Handle alignment for vertical adjustments
  if (alignment === "top") {
    styles.top = anchorRect.bottom - height - offsetY;
  } else if (alignment === "bottom") {
    styles.top = anchorRect.top + offsetY;
  } else if (
    alignment === "center" &&
    (position === "left" || position === "right")
  ) {
    styles.top = anchorRect.top - height / 2 + anchorRect.height / 2;
  }

  return styles;
};
