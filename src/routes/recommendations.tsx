import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Check, CircleGauge, Dumbbell, MoonStar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DemoBadge, DemoNotice, PageIntro, Segmented } from "@/components/sports-ui";
import { recommendations } from "@/lib/sports-data";
export const Route=createFileRoute("/recommendations")({head:()=>({meta:[{title:"Performance Recommendations — SportsMax"},{name:"description",content:"Explore personalized demo recommendations based on athlete performance analytics and recent training patterns."},{property:"og:title",content:"Personalized Recommendations — SportsMax"},{property:"og:description",content:"Analytics-based next steps for recovery, endurance, and consistency."},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary_large_image"}],links:[{rel:"canonical",href:"/recommendations"}]}),component:Recommendations});
const icons: Record<string, typeof MoonStar> = {
  Recovery: MoonStar,
  Endurance: CircleGauge,
  Consistency: Dumbbell,
  Readiness: CircleGauge
};
const priorityColors: Record<string, string> = {
  High: "border-destructive/30 bg-destructive/15 text-destructive",
  Medium: "border-primary/30 bg-primary/10 text-primary",
  Maintenance: "border-accent/30 bg-accent/10 text-accent",
  Optimization: "border-chart-2/30 bg-chart-2/15 text-chart-2"
};
function Recommendations(){const [filter,setFilter]=useState("All");const [saved,setSaved]=useState<number[]>([]);const shown=filter==="All"?recommendations:recommendations.filter(r=>r.type===filter);return <><PageIntro eyebrow="Actionable intelligence" title="Personalized Performance Recommendations" text="Demo analytics translate recent training signals into focused next steps you can review with your coach." action={<DemoBadge/>}/><section className="py-12"><div className="content-wrap"><div className="mb-6 flex flex-wrap items-center justify-between gap-4"><Segmented values={["All","Recovery","Endurance","Consistency"]} value={filter} onChange={setFilter}/><span className="text-xs text-muted-foreground">Based on the latest 28 sessions · Updated in real-time</span></div><div className="grid gap-4 lg:grid-cols-3 sm:grid-cols-2">{shown.map((r)=>{const actualIndex=recommendations.indexOf(r);const Icon=icons[r.type] ?? CircleGauge;const isSaved=saved.includes(actualIndex);return <article key={r.number} className="surface-card flex min-h-96 flex-col p-6 transition"><div className="flex items-start justify-between"><span className="font-mono text-xs text-muted-foreground">REC / {r.number}</span><span className={`rounded-full border px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider ${priorityColors[r.priority] || "border-primary/25 bg-primary/10 text-primary"}`}>{r.priority}</span></div><div className="mt-6 grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/20"><Icon className="h-6 w-6"/></div><p className="mt-5 text-xs font-bold uppercase tracking-widest text-primary">{r.type}</p><h2 className="mt-2 text-xl font-semibold">{r.title}</h2><p className="mt-3 flex-1 text-sm leading-6 text-muted-foreground">{r.detail}</p><div className="mt-6 border-t border-border pt-4"><p className="text-xs text-muted-foreground">Supporting signal</p><p className="mt-1 font-mono text-sm font-semibold text-primary">{r.evidence}</p><Button onClick={()=>setSaved(isSaved?saved.filter(i=>i!==actualIndex):[...saved,actualIndex])} variant={isSaved?"secondary":"outline"} className={`mt-4 w-full ${isSaved ? "bg-primary/20 text-primary" : "hover:border-primary/40 hover:text-primary"}`}>{isSaved?<><Check className="mr-1 h-4 w-4"/>Added to plan</>:<>Review action<ArrowRight className="ml-1 h-4 w-4"/></>}</Button></div></article>})}</div><div className="mt-6"><DemoNotice/></div></div></section></>}
