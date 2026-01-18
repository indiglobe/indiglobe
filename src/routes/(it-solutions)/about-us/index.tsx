import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(it-solutions)/about-us/")({
  component: RouteComponent,
  head: () => ({
    meta: [{ title: "Indiglobe | About us" }],
  }),
});

function RouteComponent() {
  return <div>Hello "/(it-solutions)/about-us/"!</div>;
}
