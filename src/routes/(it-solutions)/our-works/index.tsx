import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(it-solutions)/our-works/")({
  component: RouteComponent,
  head: () => ({
    meta: [
      { title: "Indiglobe | Our works" },
      {
        name: "description",
        content:
          "View our completed IT, digital marketing, and website design projects delivered for businesses in Nadia, West Bengal. Proven results and satisfied clients.",
      },
    ],
  }),
});

function RouteComponent() {
  return <div>Hello "/(it-solutions)/our-works/"!</div>;
}
