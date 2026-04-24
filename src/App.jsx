import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage, { loader as homeLoader } from "./pages/Home";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/api";
import Root from "./pages/Root";
import React from "react";
import "./App.css";

const ProductDeatailsPage = React.lazy(() => import("./pages/ProductDetails"));

const routerDefenation = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <HomePage />,
        loader: homeLoader,
      },
      {
        path: "product/:id",
        element: (
          <React.Suspense>
            <ProductDeatailsPage />
          </React.Suspense>
        ),
        loader: (meta) =>
          import("./pages/ProductDetails").then((module) => module.loader),
      },
    ],
  },
]);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={routerDefenation} />
    </QueryClientProvider>
  );
}

export default App;
