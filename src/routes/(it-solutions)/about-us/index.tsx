import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(it-solutions)/about-us/")({
  component: RouteComponent,
  head: () => ({
    meta: [
      { title: "Indiglobe | About us" },
      {
        name: "description",
        content:
          "Learn about our IT solutions company in Nadia, West Bengal with 3+ years of experience in tele-calling, digital marketing, and website development.",
      },
    ],
  }),
});

function RouteComponent() {
  return <div>Hello "/(it-solutions)/about-us/"!</div>;
}
