import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(institute)/institute/about/")({
  component: RouteComponent,
  head: () => ({
    meta: [{ title: "Indiglobe | About" }],
  }),
});

function RouteComponent() {
  return <div>Hello "/(institute)/about/"!</div>;
}
