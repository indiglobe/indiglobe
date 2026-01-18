import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(it-solutions)/contact/")({
  component: RouteComponent,
  head: () => ({
    meta: [{ title: "Indiglobe | Contact" }],
  }),
});

function RouteComponent() {
  return <div>Hello "/(it-solutions)/contact/"!</div>;
}
