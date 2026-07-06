// Analytics helper — ready for Facebook Pixel + Meta CAPI wiring.
// Replace CAPI_ENDPOINT with your server route when wiring the backend.

export const CAPI_ENDPOINT = "/api/public/capi";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

export type TrackEventName =
  | "PageView"
  | "ViewContent"
  | "InitiateCheckout"
  | "Purchase"
  | "Lead";

export function trackEvent(name: TrackEventName, payload: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;
  try {
    window.fbq?.("track", name, payload);
  } catch {
    // no-op
  }
  // Fire-and-forget server-side CAPI relay (safe if endpoint not wired yet)
  if (typeof fetch !== "undefined") {
    fetch(CAPI_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ event: name, payload, ts: Date.now() }),
      keepalive: true,
    }).catch(() => {});
  }
}
