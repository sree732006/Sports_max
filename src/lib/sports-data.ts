export const runTrend = [
  { label: "0", pace: 5.42, heart: 138, speed: 10.7 },
  { label: "1", pace: 5.31, heart: 145, speed: 11.0 },
  { label: "2", pace: 5.18, heart: 151, speed: 11.3 },
  { label: "3", pace: 5.25, heart: 155, speed: 11.1 },
  { label: "4", pace: 5.12, heart: 158, speed: 11.5 },
  { label: "5", pace: 5.21, heart: 154, speed: 11.2 },
  { label: "6", pace: 5.08, heart: 161, speed: 11.7 },
  { label: "7", pace: 5.16, heart: 157, speed: 11.4 },
  { label: "8", pace: 5.05, heart: 163, speed: 11.8 },
];

export const weekly = [
  { label: "Mon", distance: 7.2, sessions: 1 },
  { label: "Tue", distance: 10.4, sessions: 2 },
  { label: "Wed", distance: 5.8, sessions: 1 },
  { label: "Thu", distance: 12.1, sessions: 2 },
  { label: "Fri", distance: 4.5, sessions: 1 },
  { label: "Sat", distance: 16.2, sessions: 2 },
  { label: "Sun", distance: 8.4, sessions: 1 },
];

export const progression = [
  { label: "Apr", performance: 68, consistency: 71 },
  { label: "May", performance: 72, consistency: 74 },
  { label: "Jun", performance: 76, consistency: 78 },
  { label: "Jul", performance: 79, consistency: 82 },
  { label: "Aug", performance: 84, consistency: 85 },
  { label: "Sep", performance: 88, consistency: 91 },
];

export const athletes = [
  { name: "Alex Mercer", initials: "AM", sessions: 12, distance: "84 km", pace: "5:08", progress: "+9%" },
  { name: "Jordan Patel", initials: "JP", sessions: 10, distance: "74 km", pace: "5:22", progress: "+6%" },
  { name: "Priya Singh", initials: "PS", sessions: 14, distance: "96 km", pace: "4:52", progress: "+12%" },
  { name: "Liam Torres", initials: "LT", sessions: 11, distance: "108 km", pace: "5:49", progress: "+5%" },
  { name: "Kai Nakamura", initials: "KN", sessions: 8, distance: "42 km", pace: "5:51", progress: "+3%" },
];

export const sessions = [
  { athlete: "Alex Mercer", distance: "8.2 km", duration: "42:10", pace: "5:08 /km", date: "Demo" },
  { athlete: "Jordan Patel", distance: "12.4 km", duration: "68:30", pace: "5:31 /km", date: "Demo" },
  { athlete: "Priya Singh", distance: "5.0 km", duration: "24:45", pace: "4:57 /km", date: "Demo" },
  { athlete: "Liam Torres", distance: "18.6 km", duration: "108:20", pace: "5:49 /km", date: "Demo" },
  { athlete: "Kai Nakamura", distance: "3.8 km", duration: "22:15", pace: "5:51 /km", date: "Demo" },
  { athlete: "Alex Mercer", distance: "10.0 km", duration: "50:40", pace: "5:04 /km", date: "Demo" },
  { athlete: "Jordan Patel", distance: "6.5 km", duration: "34:10", pace: "5:15 /km", date: "Demo" },
  { athlete: "Priya Singh", distance: "8.0 km", duration: "38:55", pace: "4:52 /km", date: "Demo" },
  { athlete: "Liam Torres", distance: "21.0 km", duration: "125:00", pace: "5:57 /km", date: "Demo" },
  { athlete: "Kai Nakamura", distance: "5.2 km", duration: "30:20", pace: "5:50 /km", date: "Demo" },
];

export const insights = [
  {
    type: "Performance Trend",
    title: "Pace improving across recent sessions",
    detail: "Average pace has improved across the last four sessions while training volume has remained steady — a positive performance trend.",
    metric: "+6.0%",
  },
  {
    type: "Training Pattern",
    title: "Training volume increasing",
    detail: "Total weekly distance has increased by approximately 15% over the past three weeks — a positive sign of growing training capacity.",
    metric: "+15%",
  },
  {
    type: "Consistency",
    title: "Consistency streak active",
    detail: "Training sessions completed on 5 of the last 7 days — one of the most consistent training periods on record.",
    metric: "5/7 days",
  },
  {
    type: "Pace",
    title: "Pace control improving",
    detail: "Pace variation within individual runs has narrowed — suggesting more controlled and efficient running across sessions.",
    metric: "Stable",
  },
  {
    type: "Milestone",
    title: "Personal best in 5K pace",
    detail: "Most recent 5K effort recorded the best average pace to date. Current trajectory suggests further improvement is possible.",
    metric: "New PB",
  },
  {
    type: "Recovery Pattern",
    title: "Rest day impact identified",
    detail: "Sessions following a rest day show consistently stronger average pace — recovery appears to positively influence performance output.",
    metric: "+4.2%",
  },
  {
    type: "Endurance",
    title: "Endurance load building",
    detail: "Longest session this month is 20% further than the longest session last month — a sign of building endurance capacity.",
    metric: "+20%",
  },
  {
    type: "Goal Progress",
    title: "Weekly distance target on track",
    detail: "Based on current training volume, the target weekly distance is on track to be reached by the end of the current week.",
    metric: "On track",
  },
];

export const recommendations = [
  {
    number: "01",
    title: "Build consistency first",
    type: "Consistency",
    priority: "High priority",
    detail: "Your recent pattern suggests training frequency varies week to week. Consider establishing a regular session rhythm before increasing training volume.",
    evidence: "Avg. 3.2 sessions/week",
  },
  {
    number: "02",
    title: "Manage early-run pace",
    type: "Pacing",
    priority: "This week",
    detail: "Your early-kilometre pace tends to be faster relative to your final kilometre in longer sessions. A more controlled start may preserve performance across the full distance.",
    evidence: "Pace variance +8% km 1",
  },
  {
    number: "03",
    title: "Schedule a recovery session",
    type: "Recovery",
    priority: "This week",
    detail: "Your recent training block has included several consecutive days of activity. Consider scheduling a lighter session or rest day to allow for recovery.",
    evidence: "5 consecutive days",
  },
  {
    number: "04",
    title: "Gradually increase distance",
    type: "Endurance",
    priority: "Ongoing",
    detail: "Your total weekly distance has remained stable for several weeks. A gradual, incremental increase in weekly volume may support progression toward your distance goal.",
    evidence: "Volume stable 3 weeks",
  },
  {
    number: "05",
    title: "Track cadence consistency",
    type: "Consistency",
    priority: "Ongoing",
    detail: "Your cadence data shows variation across recent sessions. Monitoring cadence consistency may help identify opportunities to improve running efficiency.",
    evidence: "Cadence range 158–176 spm",
  },
  {
    number: "06",
    title: "Balance effort levels",
    type: "Recovery",
    priority: "This week",
    detail: "Higher-effort runs are appearing frequently in your session history. Consider balancing higher-effort sessions with recovery-focused or lower-intensity runs.",
    evidence: "4 high-effort sessions",
  },
  {
    number: "07",
    title: "Set a near-term milestone",
    type: "Endurance",
    priority: "Suggested",
    detail: "Your current training volume suggests a near-term distance personal best is within reach. Consider setting a target session to aim for that milestone.",
    evidence: "Trajectory trending up",
  },
  {
    number: "08",
    title: "Establish a weekly long run",
    type: "Endurance",
    priority: "Ongoing",
    detail: "Your session history does not show a consistent longer weekly session. Incorporating a regular long run may support endurance development over time.",
    evidence: "No long run last 3 weeks",
  },
];

export const leaderboard = [
  { rank: 1, name: "Liam Torres", distance: "108 km", sessions: 11, achievement: "Distance leader" },
  { rank: 2, name: "Priya Singh", distance: "96 km", sessions: 14, achievement: "Pace improver" },
  { rank: 3, name: "Alex Mercer", distance: "84 km", sessions: 12, achievement: "Consistency streak" },
  { rank: 4, name: "Jordan Patel", distance: "74 km", sessions: 10, achievement: "10K finisher" },
  { rank: 5, name: "Kai Nakamura", distance: "42 km", sessions: 8, achievement: "First milestone" },
  { rank: 6, name: "Maya Chen", distance: "38 km", sessions: 7, achievement: "Personal best" },
  { rank: 7, name: "Noah Williams", distance: "35 km", sessions: 6, achievement: "Building volume" },
  { rank: 8, name: "Aisha Raman", distance: "31 km", sessions: 5, achievement: "Consistent effort" },
  { rank: 9, name: "Leo Martins", distance: "28 km", sessions: 5, achievement: "Recovery focus" },
  { rank: 10, name: "Sam Rivera", distance: "22 km", sessions: 4, achievement: "New starter" },
];

export const achievements = [
  { title: "Distance Milestone — 100km", athlete: "Alex Mercer", description: "Total cumulative distance reached 100km", badge: "🏅" },
  { title: "Personal Best — 5K Pace", athlete: "Priya Singh", description: "New personal best average pace recorded", badge: "⚡" },
  { title: "Consistency Streak — 7 Days", athlete: "Liam Torres", description: "7 consecutive days with a recorded session", badge: "🔥" },
  { title: "Challenge Completion — 10K", athlete: "Jordan Patel", description: "10K distance challenge successfully completed", badge: "🏆" },
  { title: "Training Milestone — 10 Sessions", athlete: "Kai Nakamura", description: "10th training session recorded", badge: "✅" },
];
