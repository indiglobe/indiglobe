import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(institute)/institute/courses/")({
  component: RouteComponent,
  head: () => ({
    meta: [{ title: "Indiglobe | Courses" }],
  }),
});

function RouteComponent() {
  return <div>Hello "/(institute)/courses/"!</div>;
}
