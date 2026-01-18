import { HomePage } from "@/components/main/it-solution/home";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(it-solutions)/")({
  component: RouteComponent,
  head: () => ({
    meta: [{ title: "Indiglobe | IT Solutions" }],
  }),
});

function RouteComponent() {
  return <HomePage />;
}
