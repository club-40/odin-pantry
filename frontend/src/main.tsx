import React from "react";
import { createRoot } from "react-dom/client";
import "@/index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import routes from "@/misc/routing";

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root: HTMLElement = document.getElementById("root")!;

const queryClient = new QueryClient();

createRoot(root).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={createBrowserRouter(routes(queryClient))} />
      <ReactQueryDevtools />
    </QueryClientProvider>
  </React.StrictMode>
);
