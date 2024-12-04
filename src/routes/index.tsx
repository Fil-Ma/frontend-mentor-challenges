import PageLayout from "@components/PageLayout/PageLayout";
import { lazy } from "react";
import PATHS from "./paths";
import ProductListWithCart from "@pages/ProductListWithCart";

const BentoGrid = lazy(() => import("../pages/BentoGrid"));
const HomePage = lazy(() => import("@pages/index"));

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
    ],
  },
];
