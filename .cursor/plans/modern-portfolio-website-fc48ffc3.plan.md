<!-- fc48ffc3-86d6-4caf-b2f0-81aaccb97ae9 888c51f2-127e-4bba-808e-9e245d40f16d -->

# Modern Portfolio Website Implementation Plan

## Overview

Transform the existing portfolio structure into a modern, professional website with easily editable content, enhanced UI components, and all required sections (projects, experience, education, skills, contact).

## Key Files to Modify/Create

### 1. Data Structure (`src/data/portfolio.ts`)

- Create centralized TypeScript config file for all portfolio content
- Include: personal info, projects, experience, education, tech stack, skills, contact details
- Type-safe interfaces for all data structures

### 2. Hero Section (`src/components/hero-section.tsx`)

- Enhance layout with better responsive design
- Integrate 3D skull model more seamlessly
- Pull content from data config
- Add smooth animations and modern styling
- Improve text hierarchy and spacing

### 3. Header/Navigation (`src/components/header.tsx`)

- Implement smooth scroll navigation with anchor links
- Add scroll spy for active section highlighting
- Use shadcn Button components for navigation items
- Make it sticky/fixed with backdrop blur
- Add mobile-responsive hamburger menu using shadcn Sheet

### 4. About Section (`src/components/about.tsx`)

- Create professional about section with personal details
- Use shadcn Card components for structured layout
- Add profile image support
- Pull content from data config

### 5. Projects Section (`src/components/projects.tsx`)

- Enhance existing projects grid
- Use shadcn Card components for consistency
- Add hover effects and animations
- Support project tags/technologies
- Pull from data config

### 6. Experience Section (`src/components/experience.tsx`) - NEW

- Create timeline-style experience section
- Use shadcn Card and Separator components
- Display: company, role, duration, description, technologies
- Pull from data config

### 7. Education Section (`src/components/education.tsx`) - NEW

- Create education/academic details section
- Use shadcn Card components
- Display: institution, degree, year, achievements
- Pull from data config

### 8. Tech Stack Section (`src/components/tech-stack.tsx`)

- Create interactive tech stack display
- Use shadcn Badge components for tech tags
- Add icons/logos for technologies (lucide-react where available)
- Group by categories (Frontend, Backend, Tools, etc.)
- Pull from data config

### 9. Skills Section (`src/components/skills.tsx`) - NEW

- Create skills section separate from tech stack
- Use shadcn Progress or custom skill bars
- Display soft skills, languages, certifications
- Pull from data config

### 10. Contact Section (`src/components/contacts.tsx`)

- Create professional contact section
- Use shadcn Card and Button components
- Display: email, phone, LinkedIn, GitHub with lucide-react icons
- Add click-to-copy functionality for email/phone
- Pull from data config

### 11. Layout (`src/components/layout.tsx`)

- Enhance background gradient
- Add smooth scrolling behavior
- Improve overall spacing and container max-widths
- Add section spacing utilities

### 12. App Structure (`src/App.tsx`)

- Add Experience and Education sections
- Add Skills section
- Ensure proper section ordering
- Add section IDs for navigation

## Design Principles

- Use shadcn components (Card, Button, Badge, Separator, Sheet, etc.) for consistency
- Use lucide-react for all icons
- Modern glassmorphism effects with backdrop blur
- Smooth animations and transitions
- Responsive design (mobile-first approach)
- Professional color scheme maintaining blue gradient theme
- Unique interactive elements (3D model integration)

## Implementation Details

- All content will be centralized in `src/data/portfolio.ts` for easy editing
- TypeScript interfaces for type safety
- Responsive breakpoints using Tailwind
- Smooth scroll behavior for navigation
- Hover effects and micro-interactions
- Professional spacing and typography hierarchy

### To-dos

- [ ] Create centralized data config file (src/data/portfolio.ts) with TypeScript interfaces for all portfolio content (personal info, projects, experience, education, tech stack, skills, contact)
- [ ] Enhance hero section with better layout, responsive design, and integrate 3D skull model seamlessly with improved styling
- [ ] Build professional header with smooth scroll navigation, scroll spy, sticky positioning, and mobile hamburger menu using shadcn components
- [ ] Create About section with personal details using shadcn Card components, pulling from data config
- [ ] Enhance Projects section with shadcn Card components, hover effects, and project tags, pulling from data config
- [ ] Create Experience section with timeline layout using shadcn Card and Separator components, pulling from data config
- [ ] Create Education section with academic details using shadcn Card components, pulling from data config
- [ ] Create Tech Stack section with interactive badges and icons, grouped by categories, using shadcn Badge components
- [ ] Create Skills section with progress indicators or skill bars using shadcn components, pulling from data config
- [ ] Create Contact section with email, phone, LinkedIn, GitHub links using shadcn Card and Button components with lucide-react icons and copy functionality
- [ ] Enhance Layout component with improved styling, smooth scrolling, and better spacing
- [ ] Update App.tsx to include all new sections (Experience, Education, Skills) with proper ordering and section IDs
