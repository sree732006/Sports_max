import { useState, useEffect, useCallback } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  Users, Activity, Eye, MousePointerClick, BarChart2,
  Mail, RefreshCw, Clock, Smartphone, Globe, Zap, TrendingUp,
  AlertCircle, Database,
} from "lucide-react";
import {
  ResponsiveContainer, LineChart, Line, BarChart, Bar,
  PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from "recharts";
import { Button } from "@/components/ui/button";
import { LoadingState, ErrorState, EmptyState, Eyebrow } from "@/components/sports-ui";
import { fetchAnalyticsDashboard, type AnalyticsDashboardData } from "../services/analyticsData";

export const Route = createFileRoute("/analytics")({
  head: () => ({
    meta: [
      { title: "Analytics Dashboard — SportsMax" },
      { name: "description", content: "Real-time analytics tracking traffic, engagement, feature usage and user behavior across SportsMax." },
      { property: "og:title", content: "Analytics Dashboard — SportsMax" },
    ],
    links: [{ rel: "canonical", href: "/analytics" }],
  }),
  component: AnalyticsDashboard,
});

// ─── Tooltip style matching existing SportsMax design ───────────────────────
const tooltipStyle = {
  backgroundColor: "var(--popover)",
  border: "1px solid var(--border)",
  borderRadius: "6px",
  color: "var(--popover-foreground)",
  fontSize: "12px",
  boxShadow: "0 8px 24px rgba(0,0,0,.4)",
};

// ─── Chart palette reusing CSS vars ─────────────────────────────────────────
const CHART_COLORS = [
  "var(--chart-1)",
  "var(--chart-2)",
  "var(--chart-3)",
  "var(--chart-4)",
  "var(--chart-5)",
];

// ─── KPI Card ────────────────────────────────────────────────────────────────
function KpiCard({
  label, value, note, icon,
}: {
  label: string;
  value: string | number;
  note?: string;
  icon: React.ReactNode;
}) {
  return (
    <article className="metric-card">
      <div className="flex items-start justify-between gap-3">
        <p className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">{label}</p>
        <span className="text-primary">{icon}</span>
      </div>
      <p className="mt-5 text-3xl font-semibold tabular-nums text-foreground">
        {value === 0 || value === "" ? "0" : value}
      </p>
      {note && (
        <p className="mt-2 text-xs text-muted-foreground">{note}</p>
      )}
    </article>
  );
}

// ─── Chart Card wrapper ───────────────────────────────────────────────────────
function ChartCard({ title, subtitle, children }: { title: string; subtitle?: string; children: React.ReactNode }) {
  return (
    <article className="chart-card">
      <div className="mb-6">
        <h3 className="font-semibold">{title}</h3>
        {subtitle && <p className="mt-1 text-xs text-muted-foreground">{subtitle}</p>}
      </div>
      {children}
    </article>
  );
}

// ─── Section wrapper ─────────────────────────────────────────────────────────
function DashSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <section className={`py-6 ${className}`}><div className="content-wrap">{children}</div></section>;
}

// ─── Donut/Pie chart (generic) ────────────────────────────────────────────────
function DonutChart({ data, nameKey, valueKey }: { data: Record<string, string | number>[]; nameKey: string; valueKey: string }) {
  if (!data.length) return <EmptyState title="No data available yet" description="Data will appear here once events are collected." />;
  return (
    <div className="h-64 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            dataKey={valueKey}
            nameKey={nameKey}
            cx="50%"
            cy="50%"
            innerRadius={55}
            outerRadius={90}
            paddingAngle={3}
          >
            {data.map((_, i) => (
              <Cell key={i} fill={CHART_COLORS[i % CHART_COLORS.length]} />
            ))}
          </Pie>
          <Tooltip contentStyle={tooltipStyle} />
          <Legend
            iconType="circle"
            iconSize={8}
            formatter={(value) => <span className="text-xs text-muted-foreground">{value}</span>}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

// ─── No-data guard for empty arrays ──────────────────────────────────────────
function NoDataFallback({ children, data }: { children: React.ReactNode; data: unknown[] }) {
  if (!data || data.length === 0) {
    return <EmptyState title="No data available yet" description="Data will appear here once events are collected." />;
  }
  return <>{children}</>;
}

// ─── Main Dashboard ───────────────────────────────────────────────────────────
function AnalyticsDashboard() {
  const [data, setData] = useState<AnalyticsDashboardData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [lastRefresh, setLastRefresh] = useState<Date>(new Date());

  const load = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const result = await fetchAnalyticsDashboard();
      setData(result);
      setLastRefresh(new Date());
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to load analytics");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { load(); }, [load]);

  const fmt = (n: number | undefined) =>
    typeof n === "number" ? n.toLocaleString() : "—";

  return (
    <>
      {/* ── Header ── */}
      <section className="page-intro border-b border-border">
        <div className="content-wrap grid gap-5 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
          <div>
            <Eyebrow>Real-time analytics</Eyebrow>
            <h1 className="text-3xl font-semibold leading-tight text-foreground sm:text-4xl lg:text-5xl">
              SportsMax Analytics
            </h1>
            <p className="mt-3 max-w-2xl text-base leading-7 text-muted-foreground">
              Track traffic, engagement, feature usage and user behavior across SportsMax.
            </p>
            {data && (
              <p className="mt-3 flex items-center gap-1.5 text-xs text-muted-foreground">
                <Clock className="h-3.5 w-3.5" />
                Last updated: {lastRefresh.toLocaleTimeString()}
              </p>
            )}
          </div>
          <div className="flex items-center gap-3 flex-wrap">
            <Button
              onClick={load}
              disabled={loading}
              variant="outline"
              size="sm"
              className="gap-2"
              id="analytics-refresh-btn"
            >
              <RefreshCw className={`h-3.5 w-3.5 ${loading ? "animate-spin" : ""}`} />
              Refresh Analytics
            </Button>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/25 bg-primary/10 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-widest text-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-primary pulse-glow" />
              Live Data
            </span>
          </div>
        </div>
      </section>

      {/* ── Loading ── */}
      {loading && (
        <DashSection>
          <LoadingState message="Fetching analytics data from Google Sheets…" />
        </DashSection>
      )}

      {/* ── Error ── */}
      {!loading && error && (
        <DashSection>
          <ErrorState
            title="Unable to load analytics"
            message={error}
            onRetry={load}
          />
          <div className="mt-4 flex items-start gap-3 rounded-md border border-primary/20 bg-primary/5 p-4 text-sm text-muted-foreground">
            <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
            <span>
              The Apps Script backend requires a <code className="text-primary">doGet</code> function to serve analytics data.
              Make sure you've deployed the updated script with the <code className="text-primary">?action=dashboard</code> handler and published a new deployment.
            </span>
          </div>
        </DashSection>
      )}

      {/* ── Dashboard Content ── */}
      {!loading && !error && data && (
        <>
          {/* ── KPI Cards ── */}
          <DashSection>
            <div className="mb-6">
              <h2 className="text-xl font-semibold">Key Metrics</h2>
              <p className="mt-1 text-sm text-muted-foreground">Aggregated from all event sheets</p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
              <KpiCard label="Total Visitors" value={fmt(data.summary.totalVisitors)} note="Unique visitor IDs" icon={<Users className="h-4 w-4" />} />
              <KpiCard label="Total Sessions" value={fmt(data.summary.totalSessions)} note="Unique session IDs" icon={<Activity className="h-4 w-4" />} />
              <KpiCard label="Page Views" value={fmt(data.summary.pageViews)} note="page_view events" icon={<Eye className="h-4 w-4" />} />
              <KpiCard label="CTA Clicks" value={fmt(data.summary.ctaClicks)} note="cta_click events" icon={<MousePointerClick className="h-4 w-4" />} />
              <KpiCard label="Run Sessions" value={fmt(data.summary.runAnalyticsSessions)} note="run_session events" icon={<BarChart2 className="h-4 w-4" />} />
              <KpiCard label="Contact Forms" value={fmt(data.summary.contactSubmissions)} note="contact_submission events" icon={<Mail className="h-4 w-4" />} />
            </div>
          </DashSection>

          {/* ── Trend Charts ── */}
          <DashSection>
            <div className="grid gap-5 lg:grid-cols-2">
              {/* Visitor & Session Trend */}
              <ChartCard title="Visitors & Sessions" subtitle="Daily visitor and session activity over time">
                <NoDataFallback data={data.visitorTrend}>
                  <div className="h-64 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={data.visitorTrend} margin={{ top: 8, right: 8, left: -22, bottom: 0 }}>
                        <CartesianGrid stroke="var(--border)" strokeDasharray="3 3" vertical={false} />
                        <XAxis dataKey="label" stroke="var(--muted-foreground)" tickLine={false} axisLine={false} tick={{ fontSize: 11 }} />
                        <YAxis stroke="var(--muted-foreground)" tickLine={false} axisLine={false} tick={{ fontSize: 11 }} />
                        <Tooltip contentStyle={tooltipStyle} />
                        <Legend iconType="circle" iconSize={8} />
                        <Line type="monotone" dataKey="visitors" stroke="var(--chart-1)" strokeWidth={2.5} dot={false} activeDot={{ r: 5 }} />
                        <Line type="monotone" dataKey="sessions" stroke="var(--chart-2)" strokeWidth={2} dot={false} activeDot={{ r: 5 }} />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </NoDataFallback>
              </ChartCard>

              {/* Page View Trend */}
              <ChartCard title="Page Views Over Time" subtitle="Daily page_view event volume">
                <NoDataFallback data={data.pageViewTrend}>
                  <div className="h-64 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={data.pageViewTrend} margin={{ top: 8, right: 8, left: -22, bottom: 0 }}>
                        <CartesianGrid stroke="var(--border)" strokeDasharray="3 3" vertical={false} />
                        <XAxis dataKey="label" stroke="var(--muted-foreground)" tickLine={false} axisLine={false} tick={{ fontSize: 11 }} />
                        <YAxis stroke="var(--muted-foreground)" tickLine={false} axisLine={false} tick={{ fontSize: 11 }} />
                        <Tooltip contentStyle={tooltipStyle} />
                        <Line type="monotone" dataKey="views" stroke="var(--chart-1)" strokeWidth={2.5} dot={false} activeDot={{ r: 5 }} />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </NoDataFallback>
              </ChartCard>
            </div>
          </DashSection>

          {/* ── Bar Charts ── */}
          <DashSection>
            <div className="grid gap-5 lg:grid-cols-2">
              {/* Most Viewed Pages */}
              <ChartCard title="Most Viewed Pages" subtitle="Sorted by page view count">
                <NoDataFallback data={data.pages}>
                  <div className="h-72 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart
                        data={[...data.pages].sort((a, b) => b.count - a.count)}
                        layout="vertical"
                        margin={{ top: 4, right: 16, left: 8, bottom: 0 }}
                      >
                        <CartesianGrid stroke="var(--border)" strokeDasharray="3 3" horizontal={false} />
                        <XAxis type="number" stroke="var(--muted-foreground)" tickLine={false} axisLine={false} tick={{ fontSize: 11 }} />
                        <YAxis type="category" dataKey="page" stroke="var(--muted-foreground)" tickLine={false} axisLine={false} tick={{ fontSize: 10 }} width={120} />
                        <Tooltip contentStyle={tooltipStyle} />
                        <Bar dataKey="count" fill="var(--chart-1)" radius={[0, 4, 4, 0]} opacity={0.85} />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </NoDataFallback>
              </ChartCard>

              {/* Feature Engagement */}
              <ChartCard title="Feature Engagement" subtitle="Event counts per major feature">
                <NoDataFallback data={data.features}>
                  <div className="h-72 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={data.features} margin={{ top: 8, right: 8, left: -22, bottom: 0 }}>
                        <CartesianGrid stroke="var(--border)" strokeDasharray="3 3" vertical={false} />
                        <XAxis dataKey="feature" stroke="var(--muted-foreground)" tickLine={false} axisLine={false} tick={{ fontSize: 11 }} />
                        <YAxis stroke="var(--muted-foreground)" tickLine={false} axisLine={false} tick={{ fontSize: 11 }} />
                        <Tooltip contentStyle={tooltipStyle} />
                        <Bar dataKey="count" fill="var(--chart-2)" radius={[4, 4, 0, 0]} opacity={0.85} />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </NoDataFallback>
              </ChartCard>
            </div>
          </DashSection>

          {/* ── Donut Charts ── */}
          <DashSection>
            <div className="grid gap-5 lg:grid-cols-3">
              {/* Traffic Sources */}
              <ChartCard title="Traffic Sources" subtitle="Where visitors originate from">
                <DonutChart
                  data={data.trafficSources.map(s => ({ name: s.source, value: s.count }))}
                  nameKey="name"
                  valueKey="value"
                />
              </ChartCard>

              {/* Device Distribution */}
              <ChartCard title="Device Distribution" subtitle="Devices used to visit SportsMax">
                <DonutChart
                  data={data.devices.map(d => ({ name: d.device, value: d.count }))}
                  nameKey="name"
                  valueKey="value"
                />
              </ChartCard>

              {/* CTA Performance */}
              <ChartCard title="CTA Performance" subtitle="Click count per call-to-action">
                <NoDataFallback data={data.ctas}>
                  <div className="h-64 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={data.ctas} layout="vertical" margin={{ top: 4, right: 16, left: 8, bottom: 0 }}>
                        <CartesianGrid stroke="var(--border)" strokeDasharray="3 3" horizontal={false} />
                        <XAxis type="number" stroke="var(--muted-foreground)" tickLine={false} axisLine={false} tick={{ fontSize: 11 }} />
                        <YAxis type="category" dataKey="cta" stroke="var(--muted-foreground)" tickLine={false} axisLine={false} tick={{ fontSize: 10 }} width={100} />
                        <Tooltip contentStyle={tooltipStyle} />
                        <Bar dataKey="count" fill="var(--chart-3)" radius={[0, 4, 4, 0]} opacity={0.85} />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </NoDataFallback>
              </ChartCard>
            </div>
          </DashSection>

          {/* ── User Behavior Summary ── */}
          <DashSection>
            <div className="grid gap-5 lg:grid-cols-2">
              <div className="surface-card p-6">
                <div className="mb-5 flex items-center gap-2.5">
                  <span className="grid h-9 w-9 place-items-center rounded-lg bg-primary/10 text-primary ring-1 ring-primary/20">
                    <Database className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-semibold">User Behavior Summary</h3>
                    <p className="text-xs text-muted-foreground">Calculated from real collected data</p>
                  </div>
                </div>
                <dl className="grid gap-3 text-sm">
                  {[
                    ["Total tracked events", fmt(data.summary.totalEvents)],
                    ["Most visited page", data.summary.mostVisitedPage || "—"],
                    ["Most used feature", data.summary.mostUsedFeature || "—"],
                    ["Top CTA", data.summary.topCta || "—"],
                    ["Top traffic source", data.summary.topTrafficSource || "—"],
                  ].map(([label, val]) => (
                    <div key={label} className="flex justify-between border-b border-border pb-3 last:border-0 last:pb-0">
                      <dt className="text-muted-foreground">{label}</dt>
                      <dd className="font-medium text-foreground">{val}</dd>
                    </div>
                  ))}
                </dl>
              </div>

              {/* Contact / Lead Summary */}
              <div className="surface-card p-6">
                <div className="mb-5 flex items-center gap-2.5">
                  <span className="grid h-9 w-9 place-items-center rounded-lg bg-primary/10 text-primary ring-1 ring-primary/20">
                    <Mail className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-semibold">Contact & Lead Activity</h3>
                    <p className="text-xs text-muted-foreground">From Contact_Leads sheet</p>
                  </div>
                </div>
                <dl className="grid gap-3 text-sm">
                  {[
                    ["Total contact submissions", fmt(data.contactTotal)],
                    ["Latest submission", data.latestContact || "No submissions yet"],
                  ].map(([label, val]) => (
                    <div key={label} className="flex justify-between border-b border-border pb-3 last:border-0 last:pb-0">
                      <dt className="text-muted-foreground">{label}</dt>
                      <dd className="font-medium text-foreground truncate max-w-[200px] text-right">{val}</dd>
                    </div>
                  ))}
                </dl>
                {data.contactTotal === 0 && (
                  <p className="mt-6 text-center text-xs text-muted-foreground">
                    No contact submissions yet. Visit the{" "}
                    <a href="/contact" className="text-primary hover:underline">Contact page</a> to test.
                  </p>
                )}
              </div>
            </div>
          </DashSection>

          {/* ── Recent Events Table ── */}
          <DashSection className="pb-16">
            <div className="surface-card overflow-hidden">
              <div className="flex items-center justify-between border-b border-border p-5">
                <div>
                  <h3 className="font-semibold">Recent Activity</h3>
                  <p className="mt-1 text-xs text-muted-foreground">Latest analytics events — most recent first</p>
                </div>
                <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <Zap className="h-3.5 w-3.5 text-primary" />
                  Live
                </span>
              </div>

              {data.recentEvents.length === 0 ? (
                <div className="p-8">
                  <EmptyState title="No events recorded yet" description="Analytics events will appear here as visitors interact with SportsMax." />
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[640px] text-left text-sm">
                    <thead className="bg-secondary text-xs uppercase tracking-wider text-muted-foreground">
                      <tr>
                        {["Timestamp", "Event", "Page", "Device", "Source"].map((h) => (
                          <th key={h} className="px-5 py-3 font-semibold">{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {data.recentEvents.map((evt, i) => (
                        <tr key={i} className="border-t border-border transition hover:bg-secondary/40">
                          <td className="px-5 py-3 font-mono text-xs text-muted-foreground whitespace-nowrap">{evt.timestamp}</td>
                          <td className="px-5 py-3">
                            <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/25 bg-primary/10 px-2 py-0.5 text-[11px] font-semibold text-primary">
                              {evt.event}
                            </span>
                          </td>
                          <td className="px-5 py-3 text-muted-foreground font-mono text-xs">{evt.page}</td>
                          <td className="px-5 py-3">
                            <span className="flex items-center gap-1 text-muted-foreground">
                              <Smartphone className="h-3 w-3 shrink-0" />
                              {evt.device}
                            </span>
                          </td>
                          <td className="px-5 py-3">
                            <span className="flex items-center gap-1 text-muted-foreground">
                              <Globe className="h-3 w-3 shrink-0" />
                              <span className="max-w-[160px] truncate">{evt.source || "direct"}</span>
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </DashSection>
        </>
      )}
    </>
  );
}
