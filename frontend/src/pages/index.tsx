import React from "react";

export const loader = () => () => "Route loader";
export const action = () => () => "Route action";
export const errorBoundary = () => <div>Route errorrrrrr</div>;

export default function Home() {
  return <h1>Home - Basic</h1>;
}
