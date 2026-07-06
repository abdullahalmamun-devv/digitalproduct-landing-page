import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Monetrix — সাশ্রয়ী দামে Lovable Pro সাবস্ক্রিপশন" },
      {
        name: "description",
        content:
          "৯৫% পর্যন্ত ছাড়ে Lovable Pro পান। তাৎক্ষণিক ডেলিভারি, আনলিমিটেড জেনারেশন, ২৪/৭ প্রিমিয়াম সাপোর্ট।",
      },
      { name: "author", content: "Monetrix" },
      { property: "og:title", content: "Monetrix — সাশ্রয়ী দামে Lovable Pro সাবস্ক্রিপশন" },
      {
        property: "og:description",
        content: "তাৎক্ষণিক অ্যাক্টিভেশন। আনলিমিটেড জেনারেশন। সব প্রো ফিচার আনলক।",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Monetrix — সাশ্রয়ী দামে Lovable Pro সাবস্ক্রিপশন" },
      {
        name: "twitter:description",
        content: "তাৎক্ষণিক অ্যাক্টিভেশন। আনলিমিটেড জেনারেশন। সব প্রো ফিচার আনলক।",
      },
      { name: "description", content: "৯৫% পর্যন্ত ছাড়ে Lovable Pro পান। তাৎক্ষণিক ডেলিভারি, আনলিমিটেড জেনারেশন, ২৪/৭ প্রিমিয়াম সাপোর্ট।" },
      { property: "og:description", content: "৯৫% পর্যন্ত ছাড়ে Lovable Pro পান। তাৎক্ষণিক ডেলিভারি, আনলিমিটেড জেনারেশন, ২৪/৭ প্রিমিয়াম সাপোর্ট।" },
      { name: "twitter:description", content: "৯৫% পর্যন্ত ছাড়ে Lovable Pro পান। তাৎক্ষণিক ডেলিভারি, আনলিমিটেড জেনারেশন, ২৪/৭ প্রিমিয়াম সাপোর্ট।" },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/5f8c7036-2e1e-466b-b27f-b283e25d80f2/id-preview-ad714e77--785059e2-b137-44e4-a7eb-f85f53caafe6.lovable.app-1783352584598.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/5f8c7036-2e1e-466b-b27f-b283e25d80f2/id-preview-ad714e77--785059e2-b137-44e4-a7eb-f85f53caafe6.lovable.app-1783352584598.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@400;500;600;700&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="bn" className="dark">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}
