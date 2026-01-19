import { HomePage } from "@/components/main/it-solution/home";
import { createFileRoute } from "@tanstack/react-router";
import video from "@/assets/hero-video.mp4";

export const Route = createFileRoute("/(it-solutions)/")({
  component: RouteComponent,
  head: () => ({
    meta: [
      { title: "Indiglobe | IT Solutions" },
      {
        name: "description",
        content:
          "Professional IT solutions company in Nadia, West Bengal offering tele-calling, digital marketing, and website design services. Trusted by local businesses with 3+ years of experience.",
      },
    ],
    links: [{ fetchPriority: "low", rel: "preload", as: "video", href: video }],
  }),
});

function RouteComponent() {
  return <HomePage />;
}
