# SportsMax — Sports Analytics & Athlete Performance Intelligence Platform

> **Sports Data. Performance Intelligence. Intelligent Automation. Connected Engagement.**
> 
> The core product flow:
> **DATA CAPTURE → INTELLIGENCE → AUTOMATION → ENGAGEMENT**

---

## 1. Project Overview

**SportsMax** is a sports technology and performance intelligence platform designed to bridge the gap between high-frequency athletic telemetry and actionable training decisions. The platform transforms raw running and biometric data into visual dashboards, predictive trends, automated reports, personalized coaching recommendations, and community milestones.

It is purpose-built for **Athletes, Coaches, Performance Analysts, Sports Organizations, Academies, and Sports Communities**.

---

## 2. Key Features

* **Run Analytics App**: In-depth running telemetry including distance, pace over distance, speed trend, moving duration, cadence, heart rate zones, elevation gain, and SVG GPS route analysis.
* **Athlete Performance Intelligence**: Dedicated athlete profile (**Alex Mercer**) tracking rolling progress, personal bests, training frequency, and multi-session consistency.
* **Organization Analytics Dashboard**: Multi-filter telemetry aggregator supporting sport categories (`All Sports`, `Running`, `Track & Field`, `Cross Country`), KPI metric cards, performance area trends, and multi-athlete performance comparison tables.
* **Automated Performance Insights**: Signal detection engine categorizing metrics into `Milestone`, `Alert`, `Recommendation`, and `Trend` with expandable context drawers explaining *"Why this matters"* and *"Suggested action"*.
* **Personalized Recommendations**: Priority-badged action items (`High`, `Medium`, `Maintenance`, `Optimization`) with supporting data evidence and interactive *"Added to plan"* state management.
* **Community Challenges & Leaderboards**: Competitive engagement platform featuring active community challenges, fictional athlete activity feed, and ranked leaderboards with Gold, Silver, and Bronze tier indicators.
* **Ideal Customer Profile (ICP) Solutions**: 6 dedicated persona modules on the homepage mapping distinct challenges to SportsMax values and platform features.
* **Connected Automation Workflows**: Visual demonstration of internal analytics automation vs. external community engagement flows.
* **Modern Sports-Tech Design System**: Premium `#07111F` dark navy aesthetic with `#00C2FF` cyan accents, subtle micro-glows, and GPU-accelerated micro-animations.
* **Full Accessibility & Responsiveness**: Semantic HTML5, visible focus indicators, accessible contrast ratios, and complete `@media (prefers-reduced-motion: reduce)` support.

---

## 3. Pages & Routing Architecture

The application contains 9 primary routes powered by TanStack Router:

| Route | Page Title | Primary Purpose |
| :--- | :--- | :--- |
| **`/`** | **Home** | The complete product story: Hero, Value Proposition (4 Pillars), 3-Layer Architecture, Automated Insights, ICP Persona Grid, Ecosystem Roles, and Primary Conversion CTAs. |
| **`/run-analytics`** | **Run Analytics** | Detailed single-session telemetry, GPS route visualization, pace curves, cadence/heart rate distributions, and training volume charts. |
| **`/athlete-performance`** | **Athlete Performance** | Profile of featured athlete Alex Mercer with date-range filters (`7 Days`, `30 Days`, `90 Days`, `All time`), consistency scores, and long-term pace trends. |
| **`/dashboard`** | **Analytics Dashboard** | Multi-athlete squad view with KPI cards, time-period selectors (`Weekly`, `Monthly`, `Yearly`), sport category filters, and comparative tabular roster analytics. |
| **`/insights`** | **Performance Insights** | Automated intelligence engine surfacing alerts, training patterns, and pace milestones with confidence scoring. |
| **`/recommendations`** | **Recommendations** | Actionable coaching guidance categorized by priority with interactive action commitment states. |
| **`/community`** | **Sports Community** | Social engagement layer featuring active participant challenges, activity feed, and ranked athlete leaderboard. |
| **`/about`** | **About SportsMax** | Platform vision, mission, engineering philosophy, and 3-Layer Intelligence System architecture. |
| **`/contact`** | **Contact** | Organization and team inquiry form with field validation, role selectors, and confirmation states. |

---

## 4. Technology Stack

* **Core Framework**: React 19 + TypeScript
* **Routing**: `@tanstack/react-router` (File-based route architecture)
* **Build System**: Vite 6
* **Styling**: Tailwind CSS v4 (`@tailwindcss/vite`) + Custom OKLCH Design Tokens in Vanilla CSS (`src/styles.css`)
* **Data Visualization**: Recharts (`ResponsiveContainer`, `LineChart`, `AreaChart`, `BarChart`, custom SVG curves)
* **Iconography**: `lucide-react`
* **Primitive Components**: Radix UI primitives (`@radix-ui/react-dialog`, `@radix-ui/react-slot`, etc.)

---

## 5. Architecture & Intelligence Layers

SportsMax structures performance data through three distinct intelligence layers:

```text
┌─────────────────────────────────────────────────────────────┐
│ LAYER 01 — DATA CAPTURE                                     │
│ GPS Traces · Pace · Speed · Cadence · Heart Rate · Elevation│
└──────────────────────────────┬──────────────────────────────┘
                               │
                               ▼
┌─────────────────────────────────────────────────────────────┐
│ LAYER 02 — INTELLIGENCE                                     │
│ Trend Detection · Fatigue Curves · Rolling Baseline Context │
└──────────────────────────────┬──────────────────────────────┘
                               │
                               ▼
┌─────────────────────────────────────────────────────────────┐
│ LAYER 03 — AUTOMATION & ENGAGEMENT                          │
│ Automated Reports · Priority Recommendations · Leaderboards │
└─────────────────────────────────────────────────────────────┘
```

* **Application Shell (`src/components/site-shell.tsx`)**: Global sticky header with responsive mobile drawer, brand mark, and unified 4-column footer.
* **Component Engine (`src/components/sports-ui.tsx`)**: Reusable `PageIntro`, `MetricCard`, `LineChartCard`, `BarChartCard`, `AreaChartCard`, `InsightCard`, `Segmented`, `EmptyState`, `LoadingState`, and `ErrorState`.
* **State Management**: Local and component-level React state for active filters, time windows, and interactive UI commitments.

---

## 6. Data Architecture & Centralized Demo Data

### Current State: Demo / Mock Data
All application data is centralized in [`src/lib/sports-data.ts`](src/lib/sports-data.ts). Components consume structured TypeScript models without hardcoded duplicates.

* **Fictional Roster**: Alex Mercer, Jordan Patel, Priya Singh, Liam Torres, Kai Nakamura.
* **Entities**: `Athlete`, `RunSession`, `Insight`, `Recommendation`, `LeaderboardEntry`, `Achievement`.

### Future API Specification (Example Endpoints)
When connecting to a real backend, the frontend service layer will interface with REST/GraphQL endpoints:
* `GET /api/athletes` — Multi-athlete roster profiles and metrics
* `GET /api/runs` — Session telemetry, GPS coordinates, and biometric traces
* `GET /api/analytics` — Aggregated squad volumes and fatigue trends
* `GET /api/insights` — Rule-engine and ML-generated alerts and signals
* `GET /api/recommendations` — Prioritized recovery and training next steps
* `GET /api/community` — Active challenges, posts, and leaderboard ranks

---

## 7. Future Backend Integration Scope

The following items are designated for future production phases:
1. **User Authentication**: Replacing the prototype auth modal with production OAuth2 / JWT (Supabase, Firebase, Auth0).
2. **Database Persistence**: PostgreSQL / TimescaleDB for time-series biometric telemetry storage.
3. **Hardware & Telemetry Ingestion**: Webhook integrations for Garmin Connect, Strava API, Apple HealthKit, and Wahoo.
4. **Real-time Streaming**: WebSocket connections for live race telemetry and coach tracking.
5. **Automated Notification Services**: Email and push notifications for recovery alerts and weekly reports.

---

## 8. Ideal Customer Profile (ICP) Framework

The platform natively supports six target user groups:

| ICP Persona | Primary Problem / Challenge | SportsMax Value Proposition | Relevant Features |
| :--- | :--- | :--- | :--- |
| **1. Sports Organizations** | Managing multiple squads, disparate data silos, manual reporting. | Centralizes data, automates weekly reporting, organization-wide visibility. | Dashboard, Athlete Performance, Automated Reports |
| **2. Coaches & Performance Teams** | Manual tracking, lack of time for deep analysis across multi-athlete rosters. | Brings metrics, trends, insights, and recommendations into one view. | Athlete Performance, Run Analytics, Insights Engine |
| **3. Sports Analysts** | Data scattered across sources, repetitive spreadsheets, tedious chart generation. | Turns raw telemetry into structured curves and automated reporting. | Analytics Dashboard, Performance Area Charts, Export Tools |
| **4. Athletes** | Complex raw metrics, lack of trend visibility, uncertain training next steps. | Converts runs into plain-language insights and recovery recommendations. | Run Analytics, Personal Insights, Recommendations |
| **5. Sports Academies** | Managing multi-athlete programs, inconsistent progress records. | Scalable performance ecosystem for coaches, trainers, and athletes. | Athlete Management, Team Dashboard, Training Volume |
| **6. Communities & Fan Platforms** | Static sports statistics, lack of personalized milestone engagement. | Converts performance into challenges, leaderboards, and progress celebrations. | Community Hub, Active Challenges, Leaderboards |

---

## 9. Approved Design System

```text
Background:   #07111F  (oklch(.115 .028 246)) — Deep Navy
Surface:      #141D2B  (oklch(.158 .030 245)) — Dark Slate
Primary:      #00C2FF  (oklch(.780 .170 206)) — Electric Cyan
Positive:     #00E5A3  (oklch(.720 .180 145)) — Athletic Green
Destructive:  #EF4444  (oklch(.620 .220 025)) — Muted Crimson
Border:       #212E42  (oklch(.270 .030 243)) — Border Accent
```

* **Typography**: `Space Grotesk` (Headings & Display), `Manrope` (Body & UI), `JetBrains Mono` (Telemetry & Metrics).
* **Spacing Scale**: 8px, 16px, 24px, 32px, 48px, 64px, 80px, 96px (`.content-wrap`: `max-width: 1180px`).
* **Radius Hierarchy**: `--radius-sm` (5px), `--radius` (8px), `--radius-xl` (11px), `rounded-full` (Pill badges).
* **Motion & GPU**: `.reveal`, `.pulse-glow`, `.float`, `.metric-card` hover transitions (exclusively animating `transform` and `opacity`).

---

## 10. QA & Verification Summary

* **Route Verification**: All 9 routes verified and functioning cleanly with client-side routing.
* **Navigation**: Desktop header and mobile overlay drawer verified with automatic drawer dismissal upon navigation.
* **Contact Inquiries**: Complete form fields (Name, Email, Organization, Role, Area of Interest, Message) with accessible labels and confirmation modal.
* **Data Disclaimers**: Explicit `Demo data` pill indicators and non-medical advisory notices displayed across telemetry views.
* **Console Health**: Verified clean browser console with zero unhandled exceptions or React key warnings.

---

## 11. Development Commands

### Installation
```bash
npm install
```

### Start Development Server
```bash
npm run dev
```
*Application runs at `http://localhost:5173`.*

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

---

## 12. Project Folder Structure

```text
sports-intelligence-hub/
├── src/
│   ├── assets/              # Static media (hero runner image)
│   ├── components/
│   │   ├── ui/              # Radix UI primitives (button, dialog, input, etc.)
│   │   ├── site-shell.tsx   # Global Header, Brand mark, Footer, and Auth modal
│   │   └── sports-ui.tsx    # Reusable MetricCard, ChartCard, Workflow, EmptyState, etc.
│   ├── lib/
│   │   ├── sports-data.ts   # Centralized mock data models (athletes, runs, insights)
│   │   └── utils.ts         # Utility class merging helper (cn)
│   ├── routes/              # TanStack 9-route pages
│   │   ├── __root.tsx       # Root layout, error boundary, and 404 handler
│   │   ├── index.tsx        # Homepage (Hero, Value Prop, Architecture, ICP, Automation)
│   │   ├── run-analytics.tsx
│   │   ├── athlete-performance.tsx
│   │   ├── dashboard.tsx
│   │   ├── insights.tsx
│   │   ├── recommendations.tsx
│   │   ├── community.tsx
│   │   ├── about.tsx
│   │   └── contact.tsx
│   ├── styles.css           # Tailwind v4 theme, OKLCH design tokens, and keyframes
│   └── main.tsx             # Application bootstrap entry point
├── package.json
├── tsconfig.json
└── vite.config.ts
```

---

## 13. Final Handoff Checklist

- [x] **Frontend Complete**: All 9 core pages fully styled and structured.
- [x] **Routes Verified**: Seamless navigation across the entire user journey.
- [x] **Responsive Design Verified**: Fully tested on desktop, tablet, and mobile viewport sizes.
- [x] **Accessibility Verified**: High-contrast text, semantic elements, focus rings, and reduced-motion support.
- [x] **Demo Data Clearly Identified**: Non-medical and mock telemetry disclaimers present.
- [x] **README Complete**: Exhaustive technical documentation and architecture blueprints recorded.
- [x] **Production Build Verified**: Build passes with clean bundling.
- [x] **Backend Integration Documented**: Clear separation between current mock state and future API contracts.
- [x] **Authentication Identified as Future Scope**: Functional front-end dialog ready for backend auth connection.
- [x] **External Telemetry Identified as Future Scope**: Sensor and watch APIs categorized for production roadmap.

---

### Project Status:
* **SportsMax Frontend**: **COMPLETE & PRESENTATION-READY**
* **Backend API Layer**: **FUTURE INTEGRATION**
* **Authentication Services**: **FUTURE INTEGRATION**
* **External Sensor Telemetry**: **FUTURE INTEGRATION**

•	Running distance

•	Running duration

•	Pace

•	Speed

•	Cadence

•	Stride length

•	Heart rate

•	Calories

•	Elevation

•	GPS route

•	Training frequency

•	Historical performance

•	User behavior

•	Session information

The website should clearly communicate that these are examples of data that can be captured by the Run Analytics App.

________________________________________

Layer 2 — Intelligence

Convert raw data into useful intelligence.

Examples:

•	Performance trends

•	Pace analysis

•	Speed trends

•	Endurance analysis

•	Training consistency

•	Fatigue indicators

•	Personal best tracking

•	Progress comparison

•	Training patterns

•	Performance forecasting

•	Strength and weakness identification

Display these insights in an easy-to-understand way.

________________________________________

Layer 3 — Intelligence Automation

Automate the transformation of analytics into useful actions.

Examples:

•	Automated performance summaries

•	Automated dashboards

•	Weekly athlete reports

•	Performance alerts

•	Personalized recommendations

•	Training suggestions

•	Goal tracking

•	Progress notifications

•	Performance milestones

Clearly communicate that automation helps athletes and coaches spend less time manually analyzing data.

________________________________________

4. Automation Architecture

Represent two automation flows.

Internal Automation

Internal analytics automation should show:

Data → Processing → Analytics → Dashboard → Report

Example:

Running Data

↓

Data Processing

↓

Performance Analytics

↓

Automated Insights

↓

Dashboard

↓

Performance Report

Internal automation is primarily for:

•	Analysts

•	Coaches

•	Sports organizations

•	Administrators

________________________________________

External Automation

External engagement automation should show:

Insight → Recommendation → Athlete/Fan Engagement

Examples:

Performance Insight

↓

Personalized Recommendation

↓

Athlete Notification

or

Sports Event / Performance Update

↓

Automated Content

↓

Fan Engagement

External automation can support:

•	Athletes

•	Coaches

•	Fans

•	Sports communities

________________________________________

5. Website Structure

Create the following major pages:

1.	Home

2.	Run Analytics

3.	Analytics Dashboard

4.	Athlete Performance

5.	Insights

6.	Recommendations

7.	Sports Community

8.	About SportsMax

9.	Contact

Include a Login / Sign Up interface for future platform integration.

________________________________________

6. HOME PAGE

Create a visually impressive hero section.

Hero headline:

Turn Sports Data Into Performance Intelligence

Supporting text:

SportsMax combines athlete data, running analytics, intelligent insights, and automation to help athletes and sports communities understand performance and improve continuously.

Primary CTA:

Explore Run Analytics

Secondary CTA:

View Analytics

________________________________________

Hero Visual

Do NOT use a generic stock sports image as the primary visual.

Instead create a modern sports analytics visualization containing:

•	Athlete running silhouette/photo

•	GPS running route

•	Pace indicators

•	Heart-rate visualization

•	Performance charts

•	Speed metrics

•	Analytics cards

•	AI/insight indicators

The visual should communicate:

Sports + Data + Analytics + Intelligence

________________________________________

7. HOME — DATA TO INTELLIGENCE SECTION

Create a section titled:

From Raw Data to Real Performance Insights

Show the three-layer architecture visually.

Card 1 — Capture

Icon: Activity / Database

Text:

Capture

Collect running and athlete performance data from every training session.

Example metrics:

•	Distance

•	Pace

•	Speed

•	Cadence

•	Heart rate

•	GPS

•	Duration

________________________________________

Card 2 — Intelligence

Icon: Brain / Analytics

Text:

Analyze

Transform performance data into meaningful insights and trends.

Examples:

•	Performance trends

•	Endurance

•	Consistency

•	Fatigue

•	Progress

________________________________________

Card 3 — Automation

Icon: Zap / AI

Text:

Automate

Automatically deliver dashboards, reports, alerts, and personalized recommendations.

________________________________________

8. RUN ANALYTICS PAGE

Create a dedicated page for the Run Analytics App.

Headline:

Run Smarter. Understand Better. Perform Stronger.

Explain that the Run Analytics App transforms running sessions into actionable performance intelligence.

Include a dashboard preview.

Metrics to display:

•	Distance

•	Pace

•	Average Speed

•	Cadence

•	Heart Rate

•	Calories

•	Duration

•	Elevation

•	Personal Best

________________________________________

Interactive Run Analytics Dashboard

Create a realistic dashboard using mock/demo data.

Include:

Performance Summary

Example:

Distance:

8.42 km

Average Pace:

5:18 min/km

Average Speed:

11.3 km/h

Duration:

44:38

Cadence:

168 spm

Heart Rate:

154 bpm

________________________________________

Charts

Include:

1.	Pace over distance

2.	Heart rate over time

3.	Speed trend

4.	Weekly distance

5.	Training consistency

6.	Performance progression

Charts should be interactive where practical.

________________________________________

9. ATHLETE PERFORMANCE PAGE

Create an athlete-focused performance dashboard.

Include:

Athlete Profile

•	Athlete name

•	Sport

•	Training goal

•	Current level

•	Total sessions

•	Total distance

Use demo athlete data.

________________________________________

Performance Overview

Create cards for:

•	Current performance

•	Weekly progress

•	Monthly progress

•	Personal best

•	Training consistency

________________________________________

Performance Trends

Use charts to visualize:

•	Pace improvement

•	Distance progression

•	Speed improvement

•	Training frequency

•	Heart-rate trends

________________________________________

Performance Insight Panel

Example:

Performance Insight

Your average pace has improved over the last 4 weeks while maintaining consistent training volume.

Show the insight as an automatically generated analytics result.

________________________________________

10. RECOMMENDATIONS PAGE

Create an intelligent recommendation interface.

Title:

Personalized Performance Recommendations

Recommendations should be generated from demo analytics data.

Examples:

Recommendation 01

Improve Recovery

Your recent training volume has increased. Consider adding a recovery session before your next high-intensity workout.

Recommendation 02

Build Endurance

Your longer runs show consistent pacing. Gradually increasing long-run distance may support endurance development.

Recommendation 03

Maintain Consistency

You completed 4 training sessions this week. Maintaining consistent training frequency can help support long-term progress.

Make clear in the UI that these are analytics-based demo recommendations, not medical advice.

________________________________________

11. AUTOMATED INSIGHTS

Create a section showing how SportsMax automatically converts data into insights.

Title:

Intelligence That Works for You

Display an automated insight feed.

Example:

Performance Alert

Your pace improved by 6% compared with your previous four sessions.

________________________________________

Training Insight

Your highest training consistency occurred during the last three weeks.

________________________________________

Milestone

You have crossed your monthly distance goal.

________________________________________

Recommendation

Your recent training pattern suggests maintaining your current training volume before increasing intensity.

________________________________________

12. ANALYTICS DASHBOARD

Create a professional sports analytics dashboard.

Dashboard layout should include:

Top KPI Cards

•	Active Athletes

•	Total Sessions

•	Total Distance

•	Average Pace

•	Performance Improvement

Use realistic demo values.

________________________________________

Main Analytics

Performance Trend

Line chart showing performance over time.

Weekly Activity

Bar chart showing training activity.

Pace Distribution

Chart showing different pace zones.

Athlete Performance

Table containing:

Athlete	Sessions	Distance	Avg Pace	Progress

Athlete A	12	84 km	5:10	+8%

Athlete B	9	61 km	5:42	+5%

Athlete C	14	102 km	4:58	+11%

Use demo data only.

________________________________________

13. SPORTS COMMUNITY PAGE

Create a community-focused section.

Purpose:

Connect analytics with sports engagement.

Include:

Community Feed

Example posts:

•	Athlete milestones

•	Running achievements

•	Performance updates

•	Challenges

•	Events

________________________________________

Challenges

Create cards such as:

10K Challenge

2,340 participants

Weekly Distance Challenge

1,245 participants

Personal Best Challenge

856 participants

________________________________________

Leaderboard

Create a demo leaderboard.

Columns:

•	Rank

•	Athlete

•	Distance

•	Sessions

•	Achievement

Allow filtering by:

•	Weekly

•	Monthly

•	All Time

________________________________________

14. FAN ENGAGEMENT

Create a section showing how analytics can support sports fans.

Examples:

•	Athlete performance updates

•	Match/event insights

•	Performance milestones

•	Community challenges

•	Athlete profiles

•	Interactive statistics

Use visually engaging cards.

________________________________________

15. INTERNAL AUTOMATION PAGE / SECTION

Create a dedicated section titled:

Internal Analytics Automation

Show a visual workflow:

Data Capture

→

Data Processing

→

Analytics Engine

→

Insight Generation

→

Automated Dashboard

→

Performance Report

Use animated arrows or subtle motion.

Explain each step.

________________________________________

16. EXTERNAL AUTOMATION PAGE / SECTION

Create a second workflow:

External Engagement Automation

Show:

Performance Data

→

Insight

→

Recommendation

→

Notification

→

Athlete / Fan Engagement

Example:

Athlete completes run

↓

Analytics processed

↓

Performance insight generated

↓

Personalized recommendation generated

↓

Athlete receives update

________________________________________

17. ABOUT SPORTSMAX

Explain the platform clearly.

Heading:

Making Sports Data More Meaningful

Suggested content:

SportsMax is a sports analytics platform designed to transform performance data into understandable insights and actionable intelligence.

By combining data capture, analytics, dashboards, and automation, SportsMax helps athletes, coaches, analysts, and sports communities better understand performance and engagement.

________________________________________

18. TECHNOLOGY / INTELLIGENCE SECTION

Create a modern technology section showing the conceptual platform architecture.

Data Layer

•	Athlete Data

•	Running Data

•	GPS Data

•	Performance Data

•	Engagement Data

Intelligence Layer

•	Analytics

•	Trend Detection

•	Performance Analysis

•	Predictive Insights

Automation Layer

•	Automated Reports

•	Recommendations

•	Alerts

•	Engagement

Use icons and diagrams rather than excessive text.

________________________________________

19. DESIGN REQUIREMENTS

The website must look like a premium sports technology startup.

Design direction:

•	Modern

•	Professional

•	Athletic

•	Data-driven

•	Clean

•	Futuristic but not overly flashy

Use a strong visual hierarchy.

Suggested visual style:

•	Dark or dark-blue sports-tech theme

•	Bright accent color for analytics

•	White/light text

•	Glassmorphism used sparingly

•	Gradient highlights

•	Clean cards

•	Rounded corners

•	Subtle shadows

•	Smooth animations

Do not make the website look like a gaming website.

Do not overload the interface with neon effects.

________________________________________

20. RESPONSIVE DESIGN

The website must work properly on:

•	Desktop

•	Laptop

•	Tablet

•	Mobile

Create responsive navigation.

Desktop:

Logo | Home | Run Analytics | Dashboard | Insights | Community | About | Contact | Login

Mobile:

Use a hamburger menu.

All dashboards and charts must adapt to smaller screens.

________________________________________

21. ANIMATIONS

Use subtle professional animations.

Include:

•	Scroll reveal

•	Card hover effects

•	Animated counters

•	Chart animations

•	Smooth page transitions

•	Dashboard metric animations

•	Workflow animation

•	Subtle athlete movement in hero section

Avoid excessive animations that reduce readability.

________________________________________

22. NAVIGATION

Create a sticky navigation bar.

Logo:

SPORTSMAX

Navigation:

Home

Run Analytics

Dashboard

Athlete Performance

Insights

Community

About

Right side:

Login

Primary CTA:

Get Started

________________________________________

23. FOOTER

Create a professional footer.

SPORTSMAX

Sports Analytics. Performance Intelligence. Smarter Engagement.

Sections:

Platform:

•	Run Analytics

•	Dashboard

•	Insights

•	Recommendations

Community:

•	Athletes

•	Challenges

•	Leaderboard

•	Events

Company:

•	About

•	Contact

Include:

© 2026 SportsMax. All rights reserved.

________________________________________

24. FUNCTIONALITY

Build the website with reusable components.

Important components:

•	Navbar

•	Footer

•	Hero

•	MetricCard

•	AnalyticsCard

•	ChartCard

•	AthleteCard

•	InsightCard

•	RecommendationCard

•	CommunityPost

•	Leaderboard

•	WorkflowDiagram

•	Dashboard

Use mock data initially.

Structure the application so that real APIs can be integrated later.

________________________________________

25. DATA AND BACKEND READINESS

For the initial version, use realistic mock data.

However, structure the frontend so that it can later consume APIs.

Prepare conceptual API structures for:

Athlete

GET /api/athletes

Running Sessions

GET /api/runs

Analytics

GET /api/analytics

Insights

GET /api/insights

Recommendations

GET /api/recommendations

Community

GET /api/community

Do NOT create fake backend functionality that claims to be connected to real athlete data.

Clearly use demo/sample data.

________________________________________

26. INTERACTIVE FEATURES

Implement where practical:

•	Date filters

•	Athlete filters

•	Sport filters

•	Weekly / Monthly / Yearly analytics

•	Dashboard chart filtering

•	Leaderboard filtering

•	Search

•	Responsive charts

•	Hover tooltips

•	Expandable insight cards

________________________________________

27. ACCESSIBILITY

Ensure:

•	Good text contrast

•	Keyboard navigation

•	Accessible buttons

•	Meaningful labels

•	Responsive typography

•	Alt text for meaningful images

•	Clear focus states

________________________________________

28. PERFORMANCE

Optimize the website for fast loading.

Avoid unnecessarily large images.

Use lazy loading where appropriate.

Keep animations lightweight.

Use reusable components.

________________________________________

29. IMPORTANT CONTENT PRINCIPLE

Do not present SportsMax as merely a website displaying sports information.

The core story should always be:

DATA → INTELLIGENCE → AUTOMATION → ENGAGEMENT

Every major section should reinforce this concept.

________________________________________

30. FINAL USER JOURNEY

The intended user journey should be:

Step 1

User enters SportsMax.

↓

Step 2

Understands the SportsMax concept.

↓

Step 3

Explores Run Analytics.

↓

Step 4

Views athlete performance data.

↓

Step 5

Sees analytics and insights.

↓

Step 6

Receives recommendations.

↓

Step 7

Explores community and engagement features.

↓

Step 8

Understands how automation connects the entire ecosystem.

________________________________________

31. FINAL QUALITY REQUIREMENT

The final website should feel like a real, presentation-ready sports analytics product prototype suitable for demonstrating to:

•	Management

•	Clients

•	Sports organizations

•	Athletes

•	Coaches

•	Investors

•	Technical teams

Prioritize clarity, professional UI, meaningful data visualization, and a strong product story over unnecessary features.

Build the complete responsive frontend with realistic demo data and polished interactions.

Before finishing, verify that:

•	All navigation links work.

•	All pages are responsive.

•	Charts render correctly.

•	Dashboard cards display correctly.

•	Mobile layout works.

•	No placeholder lorem ipsum remains.

•	No broken images exist.

•	Buttons have meaningful actions.

•	The overall visual language is consistent.

•	The platform clearly communicates:

SportsMax = Sports Data + Analytics + Intelligence + Automation + Engagement

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/acbbbec9-3ad8-4e0b-84f9-c91ada3c601d).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
