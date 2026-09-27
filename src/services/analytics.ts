const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzlaEr8L9g924Jm2M6dK4MHyJXmGWdZPKFes39r6l6b8xSu5r9pY2VM8RtMGii4xYULSg/exec";

export interface AnalyticsEvent {
  event: string;
  page?: string;
  visitorId?: string;
  sessionId?: string;
  name?: string;
  email?: string;
  role?: string;
  organization?: string;
  details?: string;
  device?: string;
  source?: string;
  duration?: number;
  scrollDepth?: number;
  ctaName?: string;
}

const generateId = () =>
  Math.random().toString(36).substring(2, 15) +
  Math.random().toString(36).substring(2, 15);

const getVisitorId = () => {
  if (typeof window === 'undefined') return '';

  let vid = localStorage.getItem('visitorId');

  if (!vid) {
    vid = generateId();
    localStorage.setItem('visitorId', vid);
  }

  return vid;
};

const getSessionId = () => {
  if (typeof window === 'undefined') return '';

  let sid = sessionStorage.getItem('sessionId');

  if (!sid) {
    sid = generateId();
    sessionStorage.setItem('sessionId', sid);
  }

  return sid;
};

const getDevice = () => {
  if (typeof window === 'undefined') return 'desktop';

  const ua = navigator.userAgent;

  if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
    return 'tablet';
  }

  if (
    /Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
      ua
    )
  ) {
    return 'mobile';
  }

  return 'desktop';
};

const getSource = () => {
  if (typeof window === 'undefined') return 'direct';

  return document.referrer || 'direct';
};

const recentEvents = new Map<string, number>();

export const trackEvent = async (
  event: string,
  data: Partial<AnalyticsEvent> = {}
) => {
  if (typeof window === 'undefined') return;

  const page = data.page || window.location.pathname;

  const dedupKey = JSON.stringify({
    event,
    page,
    ctaName: data.ctaName,
    details: data.details,
    scrollDepth: data.scrollDepth,
  });

  const now = Date.now();
  const lastFired = recentEvents.get(dedupKey);

  if (lastFired && now - lastFired < 1000) {
    return;
  }

  recentEvents.set(dedupKey, now);

  if (recentEvents.size > 20) {
    for (const [key, timestamp] of recentEvents.entries()) {
      if (now - timestamp > 5000) {
        recentEvents.delete(key);
      }
    }
  }

  const payload: AnalyticsEvent = {
    ...data,
    event,
    page,
    visitorId: getVisitorId(),
    sessionId: getSessionId(),
    device: getDevice(),
    source: getSource(),
  };

  try {
    fetch(APPS_SCRIPT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "text/plain;charset=utf-8",
      },
      body: JSON.stringify(payload),
    }).catch(() => {
      // Ignore fetch errors to avoid breaking the UI
    });
  } catch (err) {
    // Ignore errors
  }
};


/* ================================
   SCROLL DEPTH TRACKING
================================ */

const scrollDepthsSent = new Set<number>();

export const trackScrollDepth = (page?: string) => {
  if (typeof window === 'undefined') return;

  const scrollTop = window.scrollY;

  const documentHeight =
    document.documentElement.scrollHeight - window.innerHeight;

  if (documentHeight <= 0) return;

  let percentage = Math.round((scrollTop / documentHeight) * 100);

  if (percentage > 100) {
    percentage = 100;
  }

  const thresholds = [25, 50, 75, 90, 100];

  thresholds.forEach((threshold) => {
    if (
      percentage >= threshold &&
      !scrollDepthsSent.has(threshold)
    ) {
      scrollDepthsSent.add(threshold);

      trackEvent('scroll_depth', {
        page: page || window.location.pathname,
        scrollDepth: threshold,
        details: `${threshold}%`,
      });
    }
  });
};