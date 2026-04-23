import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/api";
import Root from "./pages/Root";
import "./App.css";
import React from "react";
import HomePage, { loader as homeLoader } from "./pages/Home";
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
