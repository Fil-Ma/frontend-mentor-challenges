import PageLayout from "@components/PageLayout/PageLayout";
import { lazy } from "react";
import PATHS from "./paths";

const HomePage = lazy(() => import("@pages/index"));
const BentoGrid = lazy(() => import("@pages/BentoGrid"));
const ProductListWithCart = lazy(() => import("@pages/ProductListWithCart"));
const MortgageCalculator = lazy(() => import("@pages/MortgageCalculator"));
const Blogr = lazy(() => import("@pages/Blogr"));
const Crowdfunding = lazy(() => import("@pages/Crowdfunding"));
const ChatAppillustration = lazy(() => import("@pages/ChatAppIllustration"));

export const routes = [
  {
    path: "/",
    element: <PageLayout />,
    children: [{ index: true, element: <HomePage /> }],
  },
  {
    path: "",
    element: <PageLayout />,
    children: [
      { path: PATHS.BENTO_GRID, element: <BentoGrid /> },
      { path: PATHS.PRODUCT_LIST_WITH_CART, element: <ProductListWithCart /> },
      { path: PATHS.MORTGAGE_CALCULATOR, element: <MortgageCalculator /> },
      { path: PATHS.BLOGR, element: <Blogr /> },
      { path: PATHS.CROWDFUNDING, element: <Crowdfunding /> },
      { path: PATHS.CHAT_APP_ILLUSTRATION, element: <ChatAppillustration /> },
    ],
  },
];
