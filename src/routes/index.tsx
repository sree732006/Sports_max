import { createFileRoute, Link } from "@tanstack/react-router";
import { Activity, ArrowRight, BarChart3, BrainCircuit, Building2, Database, Gauge, GraduationCap, HeartPulse, Radio, Sparkles, Users, UsersRound, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DemoBadge, Eyebrow, InsightCard, SectionHead, Workflow } from "@/components/sports-ui";
import { insights } from "@/lib/sports-data";
import runnerImage from "@/assets/sportsmax-runner.jpg";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [{ title: "SportsMax — Sports Analytics & Performance Intelligence" }, { name: "description", content: "Turn athlete and running data into performance intelligence, automated insights, and smarter engagement." }, { property: "og:title", content: "SportsMax — Performance Intelligence" }, { property: "og:description", content: "Sports data, analytics, intelligence, automation, and engagement in one platform." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }], links: [{ rel: "canonical", href: "/" }] }), component: HomePage,
});
function HomePage() { return <>
  <section className="relative min-h-[min(860px,92vh)] overflow-hidden border-b border-border pt-17">
    <img src={runnerImage} width={1600} height={1000} fetchPriority="high" decoding="async" alt="Runner on a track with integrated performance data traces" className="absolute inset-0 h-full w-full object-cover object-[62%_center]" />
    <div className="absolute inset-0 bg-[linear-gradient(90deg,var(--background)_0%,color-mix(in_oklab,var(--background)_96%,transparent)_35%,color-mix(in_oklab,var(--background)_35%,transparent)_72%,color-mix(in_oklab,var(--background)_55%,transparent)_100%)]" />
    <div className="sport-grid absolute inset-0 opacity-15" />
    <div className="content-wrap relative flex min-h-[min(790px,calc(92vh-68px))] items-center py-16"><div className="max-w-2xl reveal"><div className="mb-6 flex flex-wrap items-center gap-3"><DemoBadge/><span className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">Athlete intelligence platform</span></div><h1 className="text-balance text-5xl font-semibold leading-[.98] sm:text-6xl lg:text-7xl">Turn Sports Data Into <span className="text-primary">Performance Intelligence</span></h1><p className="mt-6 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg">SportsMax combines athlete data, running analytics, intelligent insights, and automation to help athletes and sports communities improve continuously.</p><div className="mt-8 flex flex-wrap gap-3"><Button asChild size="lg"><Link to="/run-analytics">Explore Run Analytics<ArrowRight/></Link></Button><Button asChild size="lg" variant="outline"><Link to="/dashboard">View Analytics</Link></Button></div><div className="mt-12 grid max-w-xl grid-cols-3 gap-3 border-t border-border/70 pt-6"><Stat value="24.8K" label="Demo sessions"/><Stat value="+8.6%" label="Avg. progress"/><Stat value="91%" label="Consistency"/></div></div></div>
    <div className="absolute bottom-7 right-[7%] hidden w-72 rounded-xl border border-primary/30 bg-card/85 p-4 backdrop-blur-md lg:block glow-sm">
      <div className="flex items-center justify-between">
        <span className="text-xs font-bold uppercase tracking-widest text-primary">Live pace</span>
        <Activity className="h-4 w-4 text-primary pulse-glow"/>
      </div>
      <div className="mt-3 flex items-end justify-between">
        <span className="font-display text-3xl font-semibold">5:18</span>
        <span className="rounded-full bg-primary/15 px-2 py-0.5 text-xs font-semibold text-primary">min/km · optimal</span>
      </div>
      <div className="mt-4 flex h-10 items-end gap-1">{[42,57,48,66,52,78,61,85,70,92,74,88].map((v,i)=><span key={i} className="flex-1 rounded-sm bg-primary/70" style={{height:`${v}%`}} />)}</div>
      <div className="mt-4 grid grid-cols-3 gap-3 border-t border-border/60 pt-3 text-center">
        <div><p className="font-mono text-sm font-semibold">8.4<span className="text-xs text-muted-foreground">km</span></p><p className="text-[10px] uppercase tracking-wide text-muted-foreground">Distance</p></div>
        <div><p className="font-mono text-sm font-semibold">168<span className="text-xs text-muted-foreground">bpm</span></p><p className="text-[10px] uppercase tracking-wide text-muted-foreground">Heart rate</p></div>
        <div><p className="font-mono text-sm font-semibold trend-up">+8.4%</p><p className="text-[10px] uppercase tracking-wide text-muted-foreground">Progress</p></div>
      </div>
    </div>
  </section>
  <section className="border-b border-border bg-card/20 py-16">
    <div className="content-wrap">
      <SectionHead eyebrow="Value proposition" title="Engineered for Every Phase of Athletic Performance" text="Four connected pillars that transform raw biometric data into meaningful sports intelligence." />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[
          ["01", "Capture", "Collect high-frequency biometric, GPS, and training telemetry with zero friction.", Database],
          ["02", "Analyze", "Translate multi-session loads into clear fatigue, pace, and endurance curves.", BrainCircuit],
          ["03", "Automate", "Generate contextual reports, priority alerts, and personalized next actions.", Zap],
          ["04", "Engage", "Deliver progress updates, milestones, and challenges directly to athlete communities.", Users]
        ].map(([num, title, desc, Ico]) => {
          const Icon = Ico as typeof Database;
          return (
            <article key={String(title)} className="surface-card group p-6 transition">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold text-primary">{String(num)}</span>
                <span className="grid h-9 w-9 place-items-center rounded-lg bg-primary/10 text-primary ring-1 ring-primary/20"><Icon className="h-5 w-5"/></span>
              </div>
              <h3 className="mt-5 text-xl font-semibold">{String(title)}</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{String(desc)}</p>
            </article>
          );
        })}
      </div>
    </div>
  </section>
  <section className="py-20"><div className="content-wrap"><SectionHead eyebrow="Core architecture" title="From Raw Data to Real Performance Insights" text="Every training signal moves through a clear intelligence system built to make performance understandable and actionable."/><div className="grid gap-4 lg:grid-cols-3"><Layer icon={<Database/>} number="01" title="Capture" text="Collect running and athlete performance data from every training session." tags={["Distance","Pace","Speed","Cadence","Heart rate","GPS","Duration"]}/><Layer icon={<BrainCircuit/>} number="02" title="Analyze" text="Transform raw performance data into meaningful trends, context, and forecasts." tags={["Endurance","Consistency","Fatigue","Progress","Patterns"]}/><Layer icon={<Zap/>} number="03" title="Automate" text="Deliver dashboards, weekly reports, alerts, and recommendations automatically." tags={["Reports","Alerts","Goals","Milestones"]}/></div></div></section>
  <section className="border-y border-border bg-card/35 py-20"><div className="content-wrap"><SectionHead eyebrow="Automated intelligence" title="Intelligence That Works for You" text="SportsMax continuously turns recent activity into clear signals for athletes and coaches." action={<Button asChild variant="outline"><Link to="/insights">All insights<ArrowRight/></Link></Button>}/><div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">{insights.map(i=><InsightCard key={i.title} {...i}/>)}</div></div></section>
  <section className="py-20">
    <div className="content-wrap">
      <SectionHead eyebrow="Who SportsMax is for" title="Built for the People Behind Sports Performance" text="From individual athletes to sports organizations, SportsMax helps teams turn performance data into actionable intelligence and connected experiences." />
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {[
          {
            title: "Sports Organizations",
            icon: Building2,
            desc: "Manage athlete performance, analytics, reporting, and engagement through a centralized sports intelligence platform.",
            challenge: "Managing multiple teams, manual reporting, and fragmented analytics across disparate data silos.",
            value: "Centralize performance data, automate analytics, and create organization-wide visibility.",
            cta: "Explore Organization Analytics",
            to: "/dashboard"
          },
          {
            title: "Coaches & Performance Teams",
            icon: UsersRound,
            desc: "Monitor athlete performance and turn training data into understandable insights.",
            challenge: "Manual performance tracking, limited time for deep analysis, and monitoring multi-athlete rosters.",
            value: "Bring performance metrics, trends, insights, and recommendations into one place.",
            cta: "Explore Athlete Performance",
            to: "/athlete-performance"
          },
          {
            title: "Sports Analysts",
            icon: BarChart3,
            desc: "Transform large amounts of sports performance data into dashboards, trends, and meaningful insights.",
            challenge: "Data scattered across sources, repetitive reporting, and time-consuming manual performance reviews.",
            value: "Turn raw performance data into structured analytics and automated reporting.",
            cta: "Explore Analytics",
            to: "/dashboard"
          },
          {
            title: "Athletes",
            icon: Activity,
            desc: "Understand your running and performance data and track meaningful progress over time.",
            challenge: "Difficult to understand raw metrics, limited visibility into trends, and tracking progress manually.",
            value: "Transform every run into understandable performance insights and personalized recommendations.",
            cta: "Explore Run Analytics",
            to: "/run-analytics"
          },
          {
            title: "Sports Academies & Training Centers",
            icon: GraduationCap,
            desc: "Monitor athletes across training programs and create a centralized view of performance.",
            challenge: "Managing multiple athletes, tracking training consistency, and manual performance records.",
            value: "Create a structured performance ecosystem for athletes, coaches, and training teams.",
            cta: "Explore Performance Management",
            to: "/dashboard"
          },
          {
            title: "Sports Communities & Fan Platforms",
            icon: Users,
            desc: "Connect athlete performance data with community experiences and fan engagement.",
            challenge: "Static sports statistics, limited meaningful engagement, and lack of personalized milestone celebrations.",
            value: "Transform performance insights into challenges, achievements, leaderboards, updates, and engaging experiences.",
            cta: "Explore Community",
            to: "/community"
          }
        ].map((icp) => {
          const Icon = icp.icon;
          return (
            <article key={icp.title} className="surface-card group flex flex-col justify-between p-6 transition">
              <div>
                <div className="flex items-center justify-between">
                  <span className="grid h-10 w-10 place-items-center rounded-lg bg-primary/10 text-primary ring-1 ring-primary/20 transition group-hover:bg-primary/20">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-primary">ICP Segment</span>
                </div>
                <h3 className="mt-5 text-xl font-semibold">{icp.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{icp.desc}</p>
                <div className="mt-6 border-t border-border pt-4">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">Key Challenge</p>
                  <p className="mt-1 text-xs leading-5 text-muted-foreground">{icp.challenge}</p>
                </div>
                <div className="mt-4 rounded-md border border-primary/20 bg-primary/5 p-3">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-primary">SportsMax Value</p>
                  <p className="mt-1 text-xs leading-5 text-foreground">{icp.value}</p>
                </div>
              </div>
              <div className="mt-6 pt-2">
                <Button asChild variant="outline" size="sm" className="w-full justify-between hover:border-primary/40 hover:text-primary">
                  <Link to={icp.to}>
                    <span>{icp.cta}</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </Button>
              </div>
            </article>
          );
        })}
      </div>
      <div className="mt-16 rounded-xl border border-border bg-card/40 p-8 sm:p-10">
        <SectionHead eyebrow="Ecosystem alignment" title="Different Roles. One Intelligence Platform." text="How SportsMax unifies fragmented workflows across every athletic discipline." />
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Common Industry Challenges</h4>
            <ul className="mt-4 grid gap-2.5 text-sm text-muted-foreground">
              {["Data scattered across disparate sensors and watches","Manual, time-consuming spreadsheet preparation","Repetitive, static weekly reporting with no context","Limited real-time visibility across multi-athlete rosters","Difficulty converting telemetry into community engagement"].map((item) => (
                <li key={item} className="flex items-center gap-2.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-destructive" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-lg border border-primary/25 bg-secondary/30 p-6">
            <h4 className="text-sm font-bold uppercase tracking-wider text-primary">The SportsMax Approach</h4>
            <div className="mt-4 grid gap-3 text-sm">
              <div><strong className="text-foreground">Capture:</strong> Bring high-frequency telemetry together without friction.</div>
              <div><strong className="text-foreground">Analyze:</strong> Transform raw telemetry into actionable fatigue and pace curves.</div>
              <div><strong className="text-foreground">Automate:</strong> Deliver contextual insights, reports, and recommendations automatically.</div>
              <div><strong className="text-foreground">Engage:</strong> Connect athletes, coaches, organizations, and fans through shared progress.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="py-20"><div className="content-wrap"><SectionHead eyebrow="Connected automation" title="One system. Two powerful flows." text="Reduce manual analysis internally, then turn intelligence into timely engagement externally."/><div className="grid gap-5"><Workflow title="Internal Analytics Automation" description="For analysts, coaches, organizations, and administrators." steps={["Data capture","Processing","Analytics engine","Insight generation","Dashboard","Report"]}/><Workflow title="External Engagement Automation" description="For athletes, coaches, fans, and sports communities." steps={["Performance data","Insight","Recommendation","Notification","Athlete update","Engagement"]}/></div></div></section>
  <section className="border-t border-border bg-secondary/40 py-20"><div className="content-wrap"><SectionHead eyebrow="Built for the ecosystem" title="Intelligence for every side of sport"/><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"><Use icon={<Gauge/>} title="Athletes" text="Understand effort, progress, and next actions."/><Use icon={<BrainCircuit/>} title="Coaches" text="See trends across athletes and training blocks."/><Use icon={<Users/>} title="Communities" text="Build challenges and celebrate milestones."/><Use icon={<Radio/>} title="Fans" text="Engage with timely performance stories."/></div></div></section>
  <section className="border-t border-border bg-card/60 py-20">
    <div className="content-wrap text-center">
      <Eyebrow>Ready to experience sports intelligence?</Eyebrow>
      <h2 className="mx-auto max-w-2xl text-balance text-3xl font-semibold sm:text-4xl">Turn Sports Performance Data Into Real Competitive Advantage</h2>
      <p className="mx-auto mt-4 max-w-xl text-base text-muted-foreground">Explore interactive session telemetry, automated coach recommendations, and organization-scale analytics.</p>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Button asChild size="lg" className="glow-sm"><Link to="/run-analytics">Explore Run Analytics<ArrowRight className="ml-1 h-4 w-4"/></Link></Button>
        <Button asChild size="lg" variant="outline"><Link to="/dashboard">Open Analytics Dashboard</Link></Button>
      </div>
    </div>
  </section>
</>; }
function Stat({value,label}:{value:string;label:string}){return <div><div className="font-display text-xl font-semibold text-foreground">{value}</div><div className="mt-1 text-[11px] uppercase tracking-wider text-muted-foreground">{label}</div></div>}
function Layer({icon,number,title,text,tags}:{icon:React.ReactNode;number:string;title:string;text:string;tags:string[]}){return <article className="group surface-card p-6 transition"><div className="flex items-center justify-between"><span className="grid h-11 w-11 place-items-center rounded-lg bg-primary/10 text-primary ring-1 ring-primary/20 transition group-hover:bg-primary/20">{icon}</span><span className="font-mono text-xs font-bold text-muted-foreground">{number}</span></div><h3 className="mt-8 text-2xl font-semibold">{title}</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">{text}</p><div className="mt-6 flex flex-wrap gap-2">{tags.map(tag=><span key={tag} className="rounded-full border border-border bg-secondary/80 px-2.5 py-1 text-xs text-muted-foreground">{tag}</span>)}</div></article>}
function Use({icon,title,text}:{icon:React.ReactNode;title:string;text:string}){return <article className="group rounded-xl border border-border bg-card p-5 transition hover:border-primary/40 hover:bg-card"><span className="inline-grid h-9 w-9 place-items-center rounded-lg bg-primary/10 text-primary ring-1 ring-primary/20">{icon}</span><h3 className="mt-5 font-semibold">{title}</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">{text}</p></article>}
