# JobTrackr – A Calm and Focused Job Application Tracker

JobTrackr is a thoughtfully designed job application tracker built with Next.js and Tailwind CSS, specifically created for people with ADHD and anxiety who struggle with organization during the job search process.

This app simplifies the often chaotic experience of applying for jobs by providing a clean, accessible interface for tracking applications, follow-ups, deadlines, and productivity goals — all with a mental-health-first design philosophy.

## ✨ Key Features

- **Clear, accessible UI** tailored for neurodivergent users
- **Custom typography system** using Karla (body text) and Nunito (headings)
- **Flexible, responsive buttons** designed for form submissions, filters, modals, and more
- **Animated external links** with accessible motion settings
- **Component-driven architecture** for reusability and clarity
- **Planned features include:**
  - Goal tracking (e.g., "Apply to 10 jobs per week")
  - Filtering by application status
  - Optional recruiter/company profiles (future roadmap)
  - Emotional-first UI to reduce overwhelm and encourage consistency

## 🧠 Tech Stack

- **Framework:** Next.js 14
- **Styling:** Tailwind CSS + SCSS
- **Fonts:** Google Fonts (Karla, Nunito)
- **Animations:** Framer Motion
- **Accessibility:** Focus-visible styles, ARIA props, semantic HTML
- **Utilities:** Custom component system with `cn()` class merging

## 🗂 Folder Highlights

```
components/
├── ui/
│   ├── buttons/       # All button variants (primary, secondary, delete, etc.)
│   ├── links/         # Link wrappers with accessibility and animation
│   └── typography/    # Heading.tsx, BodyText.tsx, fully styled and DRY
lib/
├── utils/
│   └── cn.ts          # Utility to merge Tailwind classNames
public/
├── icons/             # Optional static icons
styles/
├── globals.css        # Tailwind base, global styles, gradients
```

## 🧪 Getting Started

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Then visit [http://localhost:3000](http://localhost:3000) in your browser.

## 🛠 Development Notes

- Buttons follow a variant system. Build once, use anywhere.
- Typography components abstract away repetitive markup while retaining semantic flexibility.
- Icons are stored as inline SVGs for easier animation and consistent styling.
- Layout and UI choices are made to reduce stress, increase clarity, and help users stay on track — even on bad days.

## 🌍 Future Plans

- Persistent tracking with Firebase or Supabase
- Analytics for user job-hunting behavior (optional)
- Monetized version with additional recruiter tools
- Community mode for encouragement and shared goals

## 💡 Why This Exists

JobTrackr isn’t just a task manager. It’s a quiet support system — a small, intentional space where users can see their progress without being overwhelmed. It's here to help people reclaim clarity in a process that often feels chaotic.

---

Built by [Joel Borofsky](https://github.com/joelborofskydev) with care, caffeine, and compassion.
