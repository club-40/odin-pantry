import React from "react";
import { createRoot } from "react-dom/client";
import "@/index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "@/misc/routing";

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root: HTMLElement = document.getElementById("root")!;

createRoot(root).render(
  <React.StrictMode>
    <RouterProvider router={createBrowserRouter(routes)} />
  </React.StrictMode>
);
