/**
 * Privacy-friendly Analytics Wrapper for GoatCounter / Cloudflare Analytics.
 * Handles ?ref= parameter capturing, localStorage ignore flag, and event tracking.
 */

// Capture ?ref= query param on initial script load and save to sessionStorage
function initRefTracking(): string | null {
  if (typeof window === 'undefined') return null;
  try {
    const urlParams = new URLSearchParams(window.location.search);
    const ref = urlParams.get('ref');
    if (ref) {
      sessionStorage.setItem('referrer_ref', ref);
      return ref;
    }
    return sessionStorage.getItem('referrer_ref');
  } catch (e) {
    return null;
  }
}

const currentRef = initRefTracking();

export function isAnalyticsIgnored(): boolean {
  if (typeof window === 'undefined') return true;
  try {
    // Exclude owner route
    if (window.location.hash.includes('/owner')) return true;
    // Exclude browser ignore flag
    if (localStorage.getItem('ignore_analytics') === 'true') return true;
  } catch (e) {
    return false;
  }
  return false;
}

export function trackEvent(eventName: string, params: Record<string, any> = {}): void {
  if (isAnalyticsIgnored()) {
    console.log(`[Analytics Ignored] Event: ${eventName}`, { ...params, ref: currentRef });
    return;
  }

  const endpoint = import.meta.env.VITE_ANALYTICS_ENDPOINT;
  const payload = {
    event: eventName,
    ref: currentRef || 'direct',
    timestamp: new Date().toISOString(),
    path: window.location.hash || '/',
    ...params,
  };

  console.log(`[Analytics Event] ${eventName}:`, payload);

  if (endpoint) {
    try {
      fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
        keepalive: true,
      }).catch(() => {});
    } catch (e) {}
  }
}

export function trackPageView(pagePath: string): void {
  trackEvent('page_view', { page: pagePath });
}
