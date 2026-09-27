const APPS_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbzlaEr8L9g924Jm2M6dK4MHyJXmGWdZPKFes39r6l6b8xSu5r9pY2VM8RtMGii4xYULSg/exec";

export interface KpiSummary {
  totalVisitors: number;
  totalSessions: number;
  pageViews: number;
  ctaClicks: number;
  runAnalyticsSessions: number;
  contactSubmissions: number;
  totalEvents: number;
  mostVisitedPage: string;
  mostUsedFeature: string;
  topCta: string;
  topTrafficSource: string;
}

export interface TrendPoint {
  label: string;
  visitors: number;
  sessions: number;
}

export interface PageViewPoint {
  label: string;
  views: number;
}

export interface PageCount {
  page: string;
  count: number;
}

export interface SourceCount {
  source: string;
  count: number;
}

export interface DeviceCount {
  device: string;
  count: number;
}

export interface FeatureCount {
  feature: string;
  count: number;
}

export interface CtaCount {
  cta: string;
  count: number;
}

export interface RecentEvent {
  timestamp: string;
  event: string;
  page: string;
  device: string;
  source: string;
}

export interface AnalyticsDashboardData {
  success: boolean;
  lastUpdated: string;
  summary: KpiSummary;
  visitorTrend: TrendPoint[];
  pageViewTrend: PageViewPoint[];
  pages: PageCount[];
  trafficSources: SourceCount[];
  devices: DeviceCount[];
  features: FeatureCount[];
  ctas: CtaCount[];
  recentEvents: RecentEvent[];
  contactTotal: number;
  latestContact: string;
}

export async function fetchAnalyticsDashboard(): Promise<AnalyticsDashboardData> {
  const response = await fetch(`${APPS_SCRIPT_URL}?action=dashboard`, {
    method: "GET",
    headers: { "Content-Type": "text/plain;charset=utf-8" },
  });

  if (!response.ok) {
    throw new Error(`Analytics fetch failed: ${response.status}`);
  }

  const text = await response.text();
  let data: AnalyticsDashboardData;
  try {
    data = JSON.parse(text);
  } catch {
    throw new Error("Invalid JSON from analytics endpoint");
  }

  if (!data.success) {
    throw new Error("Analytics endpoint returned success: false");
  }

  return data;
}
