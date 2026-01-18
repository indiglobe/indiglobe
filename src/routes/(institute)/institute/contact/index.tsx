import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(institute)/institute/contact/")({
  component: RouteComponent,
  head: () => ({
    meta: [{ title: "Indiglobe | Contact" }],
  }),
});

function RouteComponent() {
  return <div>Hello "/(institute)/contact/"!</div>;
}
