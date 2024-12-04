import styled, { keyframes } from "styled-components";

const rotate = keyframes`
100% {
    transform: rotate(360deg);
  }
`;

const dash = keyframes`
0% {
    stroke-dasharray: 1, 150;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -35;
  }
  100% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -124;
  }
`;

const Spinner = styled.svg<{ $color: string; $size: number }>`
  animation: ${rotate} 2s linear infinite;
  z-index: 2;
  position: absolute;
  top: 50%;
  left: 50%;
  margininline: 0;
  marginblock: -${(props) => props.$size / 2}px;
  width: ${(props) => props.$size}px;
  height: ${(props) => props.$size}px;

  circle {
    stroke: ${(props) => props.$color};
    stroke-linecap: round;
    animation: ${dash} 1.5s ease-in-out infinite;
  }
`;

const LoadingSpinner = ({
  color = "hsl(210, 70, 75)",
  size = 50,
}: {
  color?: string;
  size?: number;
}) => {
  return (
    <Spinner viewBox="0 0 50 50" $color={color} $size={size}>
      <circle
        cx={size / 2}
        cy={size / 2}
        r="20"
        fill="none"
        stroke-width="5"
      ></circle>
    </Spinner>
  );
};

export default LoadingSpinner;
