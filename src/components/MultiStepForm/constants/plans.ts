import arcadeIcon from "@assets/MultiStepForm/icon-arcade.svg?inline";
import advancedIcon from "@assets/MultiStepForm/icon-advanced.svg?inline";
import proIcon from "@assets/MultiStepForm/icon-pro.svg?inline";
import { TPlanCardAttributes } from "../types";

export const defaultPlans: TPlanCardAttributes[] = [
  {
    imageSrc: arcadeIcon,
    name: "arcade",
    price: {
      monthly: 9,
      yearly: 90,
    },
  },
  {
    imageSrc: advancedIcon,
    name: "advanced",
    price: {
      monthly: 12,
      yearly: 120,
    },
  },
  {
    imageSrc: proIcon,
    name: "pro",
    price: {
      monthly: 15,
      yearly: 150,
    },
  },
];
