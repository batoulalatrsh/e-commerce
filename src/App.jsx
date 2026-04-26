import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage, { loader as homeLoader } from "./pages/Home";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/api";
import Root from "./pages/Root";
import React from "react";
import "./App.css";
const ProductDeatailsPage = React.lazy(() => import("./pages/ProductDetails"));
const ProductsPage = React.lazy(() => import("./pages/Products"));
const CartPage = React.lazy(() => import("./pages/CartPage"));

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
        path: "products",
        element: (
          <React.Suspense>
            <ProductsPage />
          </React.Suspense>
        ),
      },
      {
        path: "products/:gendre",
        element: (
          <React.Suspense>
            <ProductsPage />
          </React.Suspense>
        ),
      },
      {
        path: "product/:id",
        element: (
          <React.Suspense>
            <ProductDeatailsPage />
          </React.Suspense>
        ),
      },
      {
        path: "cart",
        element: (
          <React.Suspense>
            <CartPage />
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
