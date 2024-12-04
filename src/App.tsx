import { BrowserRouter, useRoutes } from "react-router";
import { routes } from "./routes";
import { Suspense } from "react";
import LoadingSpinner from "@components/Loading/LoadingSpinner";

function AppRoutes() {
  const element = useRoutes(routes);
  return element;
}

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingSpinner color="rgba(0, 0, 0, 0.7)" />}>
        <AppRoutes />
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
