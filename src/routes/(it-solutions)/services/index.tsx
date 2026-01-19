import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(it-solutions)/services/")({
  component: RouteComponent,
  head: () => ({
    meta: [
      { title: "Indiglobe | Services" },
      {
        name: "description",
        content:
          "Explore our professional IT services in Nadia, West Bengal including digital marketing, website design, and tele-calling solutions tailored for local businesses.",
      },
    ],
  }),
});

function RouteComponent() {
  return <div>Hello "/(it-solutions)/services/"!</div>;
}
