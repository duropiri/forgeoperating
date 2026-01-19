# ForgeOS Project - LLM Handoff Document

## Project Overview

**Project Name:** ForgeOS (formerly "Sales Training Hub")  
**Project Path:** `/home/ubuntu/sales-training-hub`  
**Current Version:** `79983dad`  
**Tech Stack:** Vite + React 19 + TypeScript + Tailwind CSS 4 + tRPC + Drizzle ORM  
**Dev Server Port:** 3000 (falls back to 3001 if busy)

---

## Business Context

### What This Is
ForgeOS is a **dual-purpose web application**:
1. **Customer-Facing Marketing Website** (at `/`) - Sells AI-powered marketing systems to local businesses
2. **Internal Training Hub** (at `/dashboard`) - Training portal for sales reps and fulfillment VAs

### Business Model (Based on Kai Stone / Stone Systems Playbook)
- Sells "systems" not "services" to local businesses (plumbers, dentists, HVAC, etc.)
- Core offering is a "Value Stack" of 5 interconnected AI-powered tools
- Uses GoHighLevel (GHL) as the backend platform for fulfillment
- High-ticket sales model with demo calls as the conversion mechanism

### The Value Stack (5 Core Products)
1. **AI Website** - Lead-generating website built in GHL
2. **Conversation AI** - AI chatbot for lead qualification
3. **Missed Call Text Back** - Automatic text when calls are missed
4. **Review Automation** - 5-star review funnel system
5. **Database Reactivation** - Re-engage old leads/customers

---

## What Was Built

### Customer-Facing Website (`/`)

**Design:** Cream/beige theme (#F7F4EF) with teal accents (#0D9488), inspired by stonesystems.io

**Pages Created:**
- **Landing Page** (`/`) - Hero with "Stop chasing leads. Let them chase you.", stats bar, feature cards, testimonials, FAQ accordion
- **9 Feature Pages** (`/features/[slug]`) - Individual landing pages with VSL video placeholder and GHL calendar embed placeholder:
  - `/features/functional-website`
  - `/features/missed-call-text-back`
  - `/features/all-in-one-inbox`
  - `/features/business-phone`
  - `/features/local-seo`
  - `/features/review-funnel`
  - `/features/marketing-campaigns`
  - `/features/lead-follow-up`
  - `/features/database-reactivation`
- **Contact Page** (`/contact`) - Contact form with GHL form embed placeholder
- **Privacy Policy** (`/privacy`) - Standard privacy policy
- **Terms of Service** (`/terms`) - Standard terms

**Shared Components:**
- `PublicNavbar.tsx` - Sticky navbar with Features dropdown (9 items in 3x3 grid), Contact, Team Login, Book a Demo CTA
- `PublicFooter.tsx` - Footer with company info, quick links, features links, contact info

### Internal Training Hub (`/dashboard`)

**Design:** Dark theme with orange accents, sidebar navigation

**Training Modules (Sales):**
- **Playbook** (`/playbook`) - The System Stack methodology, "Systems vs Services" philosophy
- **Scripts** (`/scripts`) - Call scripts for Review Repair, GPT Lead, Assumptive Close
- **Objections** (`/objections`) - Objection handling database with search functionality

**Training Modules (Fulfillment Ops):**
- **AI Website Setup** (`/ai-website-setup`) - Step-by-step GHL site generation walkthrough
- **System Installation** (`/system-installation`) - Value Stack setup guide for VAs
- **QA Checklist** (`/qa-checklist`) - Interactive pre-launch verification checklist

**Shared Components:**
- `Layout.tsx` - Sidebar navigation with user info, logout button, "Back to Main Site" link
- `ProtectedRoute.tsx` - Authentication wrapper that redirects to OAuth login if not authenticated

---

## Authentication System

**Status:** Enabled and working

**How It Works:**
- Uses built-in Manus OAuth system
- `ProtectedRoute` component wraps all `/dashboard/*` routes
- Unauthenticated users are redirected to OAuth login page
- After login, users see their avatar/name in the sidebar with Sign Out option

**Protected Routes:**
- `/dashboard`
- `/playbook`
- `/scripts`
- `/objections`
- `/ai-website-setup`
- `/system-installation`
- `/qa-checklist`

**Key Files:**
- `client/src/components/ProtectedRoute.tsx` - Auth wrapper component
- `client/src/_core/hooks/useAuth.ts` - Authentication hook
- `client/src/const.ts` - Contains `getLoginUrl()` function

---

## Key Files & Structure

```
/home/ubuntu/sales-training-hub/
├── client/
│   ├── src/
│   │   ├── pages/
│   │   │   ├── Landing.tsx          # Customer-facing homepage
│   │   │   ├── FeaturePage.tsx      # Dynamic feature page template
│   │   │   ├── Contact.tsx          # Contact page
│   │   │   ├── Privacy.tsx          # Privacy policy
│   │   │   ├── Terms.tsx            # Terms of service
│   │   │   ├── Home.tsx             # Dashboard home (training hub)
│   │   │   ├── Playbook.tsx         # Sales training - System Stack
│   │   │   ├── Scripts.tsx          # Sales training - Call scripts
│   │   │   ├── Objections.tsx       # Sales training - Objection handling
│   │   │   ├── AIWebsiteSetup.tsx   # Fulfillment - Website setup guide
│   │   │   ├── SystemInstallation.tsx # Fulfillment - System install guide
│   │   │   └── QAChecklist.tsx      # Fulfillment - QA checklist
│   │   ├── components/
│   │   │   ├── PublicNavbar.tsx     # Customer-facing navbar
│   │   │   ├── PublicFooter.tsx     # Customer-facing footer
│   │   │   ├── Layout.tsx           # Training hub sidebar layout
│   │   │   ├── ProtectedRoute.tsx   # Auth protection wrapper
│   │   │   └── ui/                  # shadcn/ui components
│   │   ├── App.tsx                  # Main routing configuration
│   │   ├── index.css                # Global styles (cream theme + dark theme)
│   │   └── const.ts                 # Constants including getLoginUrl()
│   └── index.html                   # HTML template with SEO meta tags
├── server/                          # tRPC server (Express + tRPC)
├── drizzle/                         # Database schema
├── todo.md                          # Project task tracking
└── package.json                     # Dependencies
```

---

## Routing Structure

### Public Routes (No Auth Required)
| Route | Component | Description |
|-------|-----------|-------------|
| `/` | Landing.tsx | Customer-facing homepage |
| `/features/:slug` | FeaturePage.tsx | Dynamic feature pages (9 total) |
| `/contact` | Contact.tsx | Contact form |
| `/privacy` | Privacy.tsx | Privacy policy |
| `/terms` | Terms.tsx | Terms of service |

### Protected Routes (Auth Required)
| Route | Component | Description |
|-------|-----------|-------------|
| `/dashboard` | Home.tsx | Training hub dashboard |
| `/playbook` | Playbook.tsx | System Stack training |
| `/scripts` | Scripts.tsx | Call scripts |
| `/objections` | Objections.tsx | Objection handling |
| `/ai-website-setup` | AIWebsiteSetup.tsx | GHL website setup guide |
| `/system-installation` | SystemInstallation.tsx | Value Stack installation |
| `/qa-checklist` | QAChecklist.tsx | Pre-launch QA checklist |

---

## Design System

### Customer-Facing (Light Theme)
- **Background:** `#F7F4EF` (warm cream)
- **Text Primary:** `#1A1A1A` (near black)
- **Text Secondary:** `#555555` / `#666666`
- **Accent:** `#0D9488` (teal)
- **Font:** Inter (Google Fonts)

### Training Hub (Dark Theme)
- **Background:** Dark gray/black
- **Text:** White/light gray
- **Accent:** Orange (`#F97316`)
- **Font:** Inter

---

## Placeholders That Need Real Content

### GHL Embeds (Search for "GHL" or "placeholder" in codebase)
1. **Calendar Widget** - Replace "Book a Demo" buttons with actual GHL calendar embed
2. **Contact Form** - Replace contact form placeholder with GHL form embed
3. **Feature Page CTAs** - Each feature page has a calendar embed placeholder

### Video Content
1. **VSL Videos** - Each feature page has a video placeholder in the hero section
2. **Training Videos** - Training modules reference Loom videos that need to be recorded

### Testimonials
- Current testimonials are placeholder content
- Need real client names, businesses, and results

---

## Failed Attempts / Technical Notes

### Next.js Migration (Failed)
- Attempted to convert from Vite to Next.js 14 with App Router
- Failed due to conflicts between App Router and Pages Router error pages
- The `Html` import error in `_error.js` couldn't be resolved
- **Decision:** Rolled back to working Vite version

### Key Technical Decisions
1. **Vite over Next.js** - Simpler, works reliably with the template
2. **tRPC for API** - Type-safe API calls, already configured in template
3. **Manus OAuth** - Built-in auth system, no need for custom auth
4. **shadcn/ui** - Component library for consistent UI

---

## Commands Reference

```bash
# Start dev server
cd /home/ubuntu/sales-training-hub && pnpm dev

# Install dependencies
pnpm install

# Database push (after schema changes)
pnpm db:push

# Run tests
pnpm test

# Build for production
pnpm build
```

---

## Suggested Next Steps

### Immediate (High Priority)
1. **Add GHL Calendar Embed** - Replace "Book a Demo" placeholders with actual GoHighLevel calendar widget
2. **Record VSL Videos** - Create feature-specific sales videos for each feature page
3. **Add Real Testimonials** - Replace placeholder testimonials with real client results

### Short-Term
4. **Role-Based Access** - Use `user.role` field to restrict certain training modules to specific roles
5. **Progress Tracking** - Add database table to track which modules each team member has completed
6. **Industry-Specific Landing Pages** - Clone Landing page for verticals (plumbers, dentists, HVAC)

### Long-Term
7. **Video Testimonials** - Embed video testimonials for higher conversion
8. **Live Chat Widget** - Add GHL chat widget to the customer-facing site
9. **Analytics Dashboard** - Track page views, demo bookings, and conversion rates

---

## Business Name Recommendation

**Chosen Name:** ForgeOS  
**Recommended Domain:** forgeos.io or forgeos.com

**Rationale:**
- "Forge" implies building/creating something powerful
- "OS" suggests a complete operating system for their business
- Clean, tech-forward, memorable
- Works for both sales and fulfillment positioning

---

## Contact / Resources

### Inspiration
- **Stone Systems** (stonesystems.io) - Kai Stone's agency, primary design/business model inspiration
- **Kai Stone Intelligence Package** - Analyzed for methodology and positioning

### Key Methodology Points (From Kai Stone)
- Sell "Systems" not "Services" - creates stickiness and recurring revenue
- The "Value Stack" - 5 interconnected tools that work together
- Speed to Lead - Call leads within 5 minutes
- Downward inflection - Speak with authority, not like a telemarketer
- The sale begins at "No" - Use objection handling to pivot and close

---

*Last Updated: January 19, 2026*  
*Checkpoint Version: 79983dad*
