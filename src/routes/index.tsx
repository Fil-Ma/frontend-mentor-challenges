import PageLayout from "@components/PageLayout/PageLayout";
import { lazy } from "react";
import PATHS from "./paths";

const HomePage = lazy(() => import("@pages/index"));
const BentoGrid = lazy(() => import("@pages/BentoGrid"));
const ProductListWithCart = lazy(() => import("@pages/ProductListWithCart"));
const MortgageCalculator = lazy(() => import("@pages/MortgageCalculator"));

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
    ],
  },
];
