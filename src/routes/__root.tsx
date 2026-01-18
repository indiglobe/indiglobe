import {
  HeadContent,
  Scripts,
  createRootRouteWithContext,
} from "@tanstack/react-router";
import appCss from "../styles/styles.css?url";
import type { QueryClient } from "@tanstack/react-query";
import DevTools from "../integrations/tanstack-query/devtools";
import { ThemeProvider } from "@/integrations/theme/theme-provider";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { cn } from "@/lib/utils";
import Main, { RootError, RootNotFound } from "@/components/main";

interface MyRouterContext {
  queryClient: QueryClient;
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
  head: () => ({
    meta: [
      {
        charSet: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        title: "Indiglobe | Home",
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),

  shellComponent: RootDocument,

  errorComponent: RootError,

  notFoundComponent: RootNotFound,
});

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body className={cn(`flex min-h-dvh max-w-svw flex-col`)}>
        <ThemeProvider>
          <Header />
          <Main>{children}</Main>
          <Footer />
          <DevTools />
          <Scripts />
        </ThemeProvider>
      </body>
    </html>
  );
}
