import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
import type { QueryClient } from "@tanstack/react-query";
import type {
  LoaderFunction,
  ActionFunction,
  createBrowserRouter,
  RouteObject,
} from "react-router-dom";

type Page = {
  default: () => JSX.Element;
  loader: (queryClient: QueryClient) => LoaderFunction;
  action: (queryClient: QueryClient) => ActionFunction;
  errorBoundary: () => JSX.Element;
};

const patterns = {
  route: [/^\/src\/pages\/|^\/pages\/|\.(jsx|tsx)$/g, ""],
  splat: [/\[\.{3}\w+\]/g, "*"],
  param: [/\[([^\]]+)\]/g, ":$1"],
  slash: [/^index$|\./g, "/"],
  optional: [/^-(:?[\w-]+)/, "$1?"],
} as const;

type Bases<T> = Partial<Record<"_app" | "404", T>>;
type routeType = {
  id?: string;
  path?: string;
  children?: routeType[];
  // lazy importing makes any necessary
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
} & Record<string, any>;
// eslint-disable-next-line no-unused-vars
type BuildFx<K, T> = (func: K, key: string) => T;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const generateBaseRoutes = <T,>(files: Record<string, T | any>): Bases<T> =>
  Object.keys(files).reduce((routes, key) => {
    const path = key.replace(...patterns.route);
    return { ...routes, [path]: files[key]?.default };
  }, {});

const generatePathRoutes = <T extends routeType, K>(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  files: Record<string, any>,
  buildFx: BuildFx<K, T>
) => {
  const filtered = Object.keys(files).filter((k) => !k.includes("/_"));

  return filtered.reduce<T[]>((routes, key) => {
    const func = files[key];
    const route = {
      id: key.replace(...patterns.route),
      ...buildFx(func, key),
    };

    const segments = key
      .replace(...patterns.route)
      .replace(...patterns.splat)
      .replace(...patterns.param)
      .split("/")
      .filter(Boolean);

    segments.reduce((parent, segment, index) => {
      const path = segment
        .replace(...patterns.slash)
        .replace(...patterns.optional);
      const root = index === 0;
      const leaf = index === segments.length - 1 && segments.length > 1;
      const node = !root && !leaf;
      const group = /\(\w+\)/.test(path);
      const insert = /^\w|\//.test(path) ? "unshift" : "push";

      if (root) {
        const last = segments.length === 1;
        if (last) {
          routes.push({ path, ...route });
          return parent;
        }
      }

      if (root || node) {
        const current = root ? routes : parent.children;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const found = current?.find((r) => r.path === path || r.id === path);

        // eslint-disable-next-line no-nested-ternary
        const props = group
          ? route?.component
            ? { id: path, path: "/" }
            : { id: path }
          : { path };

        if (found) found.children ??= [];
        else current?.[insert]({ ...props, children: [] });

        return (
          found ||
          (current?.[
            insert === "unshift" ? 0 : current.length - 1
          ] as routeType)
        );
      }

      if (leaf) {
        parent?.children?.[insert](route?.index ? route : { path, ...route });
      }

      return parent;
    }, {} as routeType);

    return routes;
  }, []);
};

const BASES = import.meta.glob<Page>("/src/pages/(_app|404).tsx", {
  eager: true,
});
const PATHS = import.meta.glob<Page>(
  ["/src/pages/**/[\\w[-]*.tsx", "!**/(_app|404).*"],
  { eager: true }
);

const baseRoutes = generateBaseRoutes<() => JSX.Element>(BASES);
const pathRoutes = (queryClient: QueryClient) =>
  generatePathRoutes<RouteObject, Partial<Page>>(PATHS, (func, key) => {
    const index =
      /index\.(jsx|tsx)$/.test(key) && !key.includes("pages/index")
        ? { index: true }
        : {};

    return {
      ...index,
      Component: func?.default,
      ErrorBoundary: func?.errorBoundary,
      loader: func?.loader ? func?.loader(queryClient) : undefined,
      action: func?.action ? func?.action(queryClient) : undefined,
    };
  });

// this is a static key, not a dangling key
// eslint-disable-next-line dot-notation
const App = baseRoutes?.["_app"] || Outlet;
const FourOFour = baseRoutes?.["404"] || Fragment;

const routes = (
  queryClient: QueryClient
): Parameters<typeof createBrowserRouter>[0] => [
  {
    element: <App />,
    children: [
      ...pathRoutes(queryClient),
      { path: "*", element: <FourOFour /> },
    ],
  },
];

export default routes;
