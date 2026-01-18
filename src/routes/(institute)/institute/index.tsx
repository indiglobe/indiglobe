import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(institute)/institute/")({
  component: RouteComponent,
  head: () => ({
    meta: [{ title: "Indiglobe | Institute" }],
  }),
});

function RouteComponent() {
  return <div>Hello "/(institute)/institute/"!</div>;
}
