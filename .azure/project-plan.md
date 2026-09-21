# Baby Shower Invitation

**Status**: Approved
**Created**: 2026-09-20
**Mode**: Guided

## 1. Project Overview

Create a frontend-only, publicly viewable baby shower invitation as a single-page React application. The experience will present the event details, welcoming visual design, and clear guest-facing information without authentication, APIs, or persistent data.

## 2. Services

| Service  | Technology              | Purpose                                                      |
| -------- | ----------------------- | ------------------------------------------------------------ |
| Frontend | React, Vite, TypeScript | Render the responsive baby shower invitation in the browser. |

## 3. Data Stores & Authentication

**Data Stores**: No datastore required.
**Authentication**: No. The invitation is publicly viewable and has no application API.

## 4. Functional Requirements

- Show the baby shower title, celebratory welcome, date, time, venue, and host information.
- Present event details in a clear, mobile-friendly single-page layout.
- Provide a prominent RSVP or contact call-to-action without implementing a backend submission flow.
- Use semantic HTML and accessible interaction states for keyboard and screen-reader users.
- Adapt cleanly to mobile and desktop viewport sizes.

## 5. Technical Implementation

- Scaffold one Vite React TypeScript frontend service.
- Keep event content in local typed configuration or component data; do not add API calls, database migrations, authentication, or seed data.
- Organize the page into focused invitation sections and reusable presentation components where useful.
- Use responsive CSS with stable layout constraints and include a production build configuration supplied by Vite.

## 6. Design System & UI

**Component Library**: Fluent UI v9
**Visual Direction**: Warm, celebratory, and editorial, with a soft garden-inspired palette, expressive typography, and restrained decorative details.
**Layout**: A welcoming opening section followed by scannable event details and a clear RSVP/contact action, with generous spacing and responsive stacking on narrow screens.
**Accessibility**: Maintain readable contrast, semantic landmarks, visible focus states, descriptive labels, and reduced-motion-friendly transitions.

## 7. Validation

- Run the Vite production build and TypeScript checks.
- Verify the invitation renders at mobile and desktop widths.
- Confirm all event information and the RSVP/contact action are visible and usable without a backend.
