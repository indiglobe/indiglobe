import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(it-solutions)/our-works/")({
  component: RouteComponent,
  head: () => ({
    meta: [{ title: "Indiglobe | Our works" }],
  }),
});

function RouteComponent() {
  return <div>Hello "/(it-solutions)/our-works/"!</div>;
}
