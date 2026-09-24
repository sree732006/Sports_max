import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Activity, ChevronRight, LogIn, Menu, X, MessageCircle, FileText, Bot } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

const links = [
  ["Home", "/"],
  ["Run Analytics", "/run-analytics"],
  ["Performance", "/athlete-performance"],
  ["Dashboard", "/dashboard"],
  ["Insights", "/insights"],
  ["Recommendations", "/recommendations"],
  ["Community", "/community"],
  ["About", "/about"],
  ["Contact", "/contact"],
] as const;
function Brand() { return <Link to="/" className="flex shrink-0 items-center gap-2.5" aria-label="SportsMax home"><span className="grid h-8 w-8 place-items-center rounded-md bg-primary text-primary-foreground glow-sm ring-1 ring-primary/30"><Activity className="h-5 w-5" /></span><span className="font-display text-lg font-bold tracking-tight">SPORTS<span className="text-primary">MAX</span></span></Link>; }
function AuthDialog({ children }: { children: React.ReactNode }) { const [mode,setMode]=useState<"login"|"signup">("login"); return <Dialog><DialogTrigger asChild>{children}</DialogTrigger><DialogContent className="border-border bg-card sm:max-w-md"><DialogHeader><DialogTitle>{mode === "login" ? "Welcome back" : "Create your SportsMax account"}</DialogTitle><DialogDescription>Prototype access only — account services are not connected yet.</DialogDescription></DialogHeader><div className="grid gap-4 pt-2"><label className="grid gap-2 text-sm">Email<Input type="email" placeholder="athlete@example.com" /></label><label className="grid gap-2 text-sm">Password<Input type="password" placeholder="••••••••" /></label><Button type="button">{mode === "login" ? "Log in" : "Sign up"}<ChevronRight /></Button><button className="text-sm text-muted-foreground hover:text-foreground" onClick={() => setMode(mode === "login" ? "signup" : "login")}>{mode === "login" ? "New to SportsMax? Create an account" : "Already have an account? Log in"}</button></div></DialogContent></Dialog>; }
export function SiteHeader() { const [open,setOpen]=useState(false); return <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/95 backdrop-blur-xl"><div className="content-wrap flex h-16 items-center justify-between"><Brand/><nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">{links.map(([label,to]) => <Link key={to} to={to} activeOptions={{exact:to==="/"}} activeProps={{className:"bg-primary/10 text-primary font-semibold"}} inactiveProps={{className:"text-muted-foreground hover:text-foreground hover:bg-muted/40"}} className="rounded px-2.5 py-1.5 text-xs transition-all duration-150">{label}</Link>)}</nav><div className="hidden items-center gap-2 lg:flex"><AuthDialog><Button variant="ghost" size="sm"><LogIn className="mr-1.5 h-3.5 w-3.5" />Login</Button></AuthDialog><Button asChild size="sm" className="glow-sm"><Link to="/run-analytics">Get started</Link></Button></div><Button aria-label="Open menu" variant="ghost" size="icon" className="lg:hidden" onClick={() => setOpen(!open)}>{open?<X className="h-5 w-5"/>:<Menu className="h-5 w-5"/>}</Button></div>{open && <div className="border-t border-border bg-background p-4 lg:hidden"><nav className="content-wrap grid gap-1">{links.map(([label,to]) => <Link key={to} to={to} onClick={()=>setOpen(false)} className="rounded-md px-3 py-2.5 text-sm font-medium text-muted-foreground hover:bg-secondary hover:text-foreground">{label}</Link>)}<div className="mt-3 grid grid-cols-2 gap-2"><AuthDialog><Button variant="outline">Login</Button></AuthDialog><Button asChild><Link to="/run-analytics" onClick={()=>setOpen(false)}>Get started</Link></Button></div></nav></div>}</header>; }
export function SiteFooter() { return <footer className="border-t border-border bg-card"><div className="content-wrap grid gap-10 py-14 md:grid-cols-[1.5fr_1fr_1fr_1fr]"><div><Brand/><p className="mt-4 max-w-sm text-sm leading-6 text-muted-foreground">Sports data. Performance intelligence. Smarter engagement.</p><p className="mt-7 text-xs text-muted-foreground/60">© 2026 SportsMax. All rights reserved.</p></div><FooterGroup title="Platform" items={[["Run Analytics","/run-analytics"],["Dashboard","/dashboard"],["Insights","/insights"],["Recommendations","/recommendations"]]}/><FooterGroup title="Community" items={[["Athletes","/athlete-performance"],["Challenges","/community"],["Leaderboard","/community"],["Events","/community"]]}/><FooterGroup title="Company" items={[["About","/about"],["Contact","/contact"]]}/></div></footer>; }
function FooterGroup({title,items}:{title:string;items:readonly (readonly [string,string])[]}) { return <div><h3 className="text-sm font-semibold">{title}</h3><ul className="mt-4 grid gap-3">{items.map(([label,to])=><li key={label}><Link to={to} className="text-sm text-muted-foreground transition hover:text-primary">{label}</Link></li>)}</ul></div>; }

export function FloatingCTAs() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      <Button
        size="icon"
        variant="secondary"
        className="h-14 w-14 rounded-full shadow-lg border border-border/50 bg-card hover:bg-muted"
        onClick={() => alert("Chatbot integration would open here")}
        title="Chat with us"
      >
        <Bot className="h-6 w-6 text-primary" />
      </Button>
      <Button
        size="icon"
        variant="secondary"
        className="h-14 w-14 rounded-full shadow-lg border border-border/50 bg-card hover:bg-muted"
        asChild
        title="Contact Form"
      >
        <Link to="/contact">
          <FileText className="h-6 w-6 text-primary" />
        </Link>
      </Button>
      <Button
        size="icon"
        className="h-14 w-14 rounded-full shadow-lg bg-[#25D366] hover:bg-[#20b858] text-white"
        onClick={() => window.open('https://wa.me/1234567890', '_blank')}
        title="WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
      </Button>
    </div>
  );
}
