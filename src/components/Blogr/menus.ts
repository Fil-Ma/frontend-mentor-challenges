import { TNavItem, TNavRawItem } from "./Header/types";

const productItems: TNavRawItem[] = [
  {
    label: "Overview",
    action: () => console.log("Overview"),
  },
  {
    label: "Pricing",
    action: () => console.log("Pricing"),
  },
  {
    label: "Marketplace",
    action: () => console.log("Marketplace"),
  },
  {
    label: "Features",
    action: () => console.log("Features"),
  },
  {
    label: "Integrations",
    action: () => console.log("Integrations"),
  },
];

const companyItems: TNavRawItem[] = [
  {
    label: "About",
    action: () => console.log("About"),
  },
  {
    label: "Team",
    action: () => console.log("Team"),
  },
  {
    label: "Blog",
    action: () => console.log("Blog"),
  },
  {
    label: "Careers",
    action: () => console.log("Careers"),
  },
];

const connectItems: TNavRawItem[] = [
  {
    label: "Contact",
    action: () => console.log("Contact"),
  },
  {
    label: "Newsletter",
    action: () => console.log("Newsletter"),
  },
  {
    label: "LinkedIn",
    action: () => console.log("LinkedIn"),
  },
];

const navItems: TNavItem[] = [
  {
    label: "Product",
    action: () => console.log("Product"),
    children: productItems,
  },
  {
    label: "Company",
    action: () => console.log("Company"),
    children: companyItems,
  },
  {
    label: "Connect",
    action: () => console.log("Connect"),
    children: connectItems,
  },
];

export default navItems;
