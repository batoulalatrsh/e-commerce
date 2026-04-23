import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/api";
import Root from "./pages/Root";
import HomePage, { loader as homeLoader } from "./pages/Home";
import "./App.css";

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
