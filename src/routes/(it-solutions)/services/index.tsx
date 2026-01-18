import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(it-solutions)/services/")({
  component: RouteComponent,
  head: () => ({
    meta: [{ title: "Indiglobe | Services" }],
  }),
});

function RouteComponent() {
  return <div>Hello "/(it-solutions)/services/"!</div>;
}
