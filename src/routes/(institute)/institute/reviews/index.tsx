import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(institute)/institute/reviews/")({
  component: RouteComponent,
  head: () => ({
    meta: [{ title: "Indiglobe | Reviews" }],
  }),
});

function RouteComponent() {
  return <div>Hello "/(institute)/reviews/"!</div>;
}
