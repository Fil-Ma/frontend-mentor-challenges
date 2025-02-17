import { TAddOns, TService } from "../types";

export const defaultServices: TService[] = [
  {
    name: TAddOns.ONLINE_STORAGE,
    title: "Online service",
    description: "Access to multiplayer games",
    checked: false,
    price: {
      monthly: 1,
      yearly: 10,
    },
  },
  {
    name: TAddOns.LARGER_STORAGE,
    title: "Larger storage",
    description: "Extra 1TB of cloud save",
    checked: false,
    price: {
      monthly: 2,
      yearly: 20,
    },
  },
  {
    name: TAddOns.CUSTOMIZABLE_PROFILE,
    title: "Customizable profile",
    description: "Custom theme on your profile",
    checked: false,
    price: {
      monthly: 2,
      yearly: 20,
    },
  },
];
