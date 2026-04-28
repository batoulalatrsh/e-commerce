import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/api";
import { store } from "./store/store";
import { Provider } from "react-redux";
import Root from "./pages/Root";
import React from "react";
import "./App.css";
import HomePage, { loader as homeLoader } from "./pages/Home";
const ProductDeatailsPage = React.lazy(() => import("./pages/ProductDetails"));
const ProductsPage = React.lazy(() => import("./pages/Products"));
const CartPage = React.lazy(() => import("./pages/CartPage"));
const CheckOutPage = React.lazy(() => import("./pages/CheckOut"));
const ErrorPage = React.lazy(() => import("./pages/Error"));
const NotFoundPage = React.lazy(() => import("./pages/NotFound"));

const routerDefenation = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: (
      <React.Suspense fallback="Error Page Laoding..">
        <ErrorPage />
      </React.Suspense>
    ),
    children: [
      {
        index: true,
        element: <HomePage />,
        loader: homeLoader,
      },
      {
        path: "*",
        element: (
          <React.Suspense fallback="NotFound Page Laoding..">
            <NotFoundPage />,
          </React.Suspense>
        ),
      },
      {
        path: "products",
        element: (
          <React.Suspense fallback="Product Page Laoding..">
            <ProductsPage />
          </React.Suspense>
        ),
      },
      {
        path: "products/:gendre",
        element: (
          <React.Suspense fallback="Product Page Laoding..">
            <ProductsPage />
          </React.Suspense>
        ),
      },
      {
        path: "product/:id",
        element: (
          <React.Suspense fallback="ProductDetails Page Laoding..">
            <ProductDeatailsPage />
          </React.Suspense>
        ),
      },
      {
        path: "cart",
        element: (
          <React.Suspense fallback="Cart Page Laoding..">
            <CartPage />
          </React.Suspense>
        ),
      },
      {
        path: "cart/checkout",
        element: (
          <React.Suspense fallback="CheckOut Page Laoding..">
            <CheckOutPage />
          </React.Suspense>
        ),
      },
    ],
  },
]);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <RouterProvider router={routerDefenation} />
      </Provider>
    </QueryClientProvider>
  );
}

export default App;
