import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(it-solutions)/contact/")({
  component: RouteComponent,
  head: () => ({
    meta: [
      { title: "Indiglobe | Contact" },
      {
        name: "description",
        content:
          "Contact a reliable IT solutions company in Nadia, West Bengal for tele-calling, digital marketing, and website design services. Get in touch today.",
      },
    ],
  }),
});

function RouteComponent() {
  return <div>Hello "/(it-solutions)/contact/"!</div>;
}
