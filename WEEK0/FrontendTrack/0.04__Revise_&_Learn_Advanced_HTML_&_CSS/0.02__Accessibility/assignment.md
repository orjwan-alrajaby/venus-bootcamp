# Assignment — Accessible Countries Explorer ♿🌍

## Overview

You are building an interactive, accessible country explorer for the MENA region.

The HTML and CSS are already built.

Your job is to implement **all JavaScript behavior** while improving **accessibility, keyboard support, and interaction quality**.

This assignment focuses on real-world UI behavior, not just DOM manipulation.

[Starter Code.]("./code").

---

## Goals 🎯

By the end of this assignment, your app should:

- Be fully semantic (use the appropriate tags to describe content)
- be fully usable with keyboard only
- support screen readers reasonably well
- have working modal, dropdown, accordion, and navigation behavior
- include smooth UI transitions (open/close, panel switching, modal)
- maintain correct focus behavior for interactive elements
- avoid keyboard traps

---

## Rules ⚠️

- Do NOT change HTML structure
- Do NOT use external libraries
- Use only vanilla JavaScript
- Keep code readable and modular
- Avoid duplicated logic

---

## Your Task & the Core Features to Implement 🧩

### 1. Country Modal (JS Generated)
- Inject the modal using JavaScript (an HTML modal already exists inside the HTML code)
- Populate modal dynamically using `countryData`
- Open modal from "Read More" buttons
- Close modal using:
  - close button
  - clicking outside modal
  - Escape key
- Lock background scroll while open
- Move focus into modal when opened
- Add focus trapping inside modal
- Add `aria-expanded` where appropriate

---

### 2. Navigation Scroll Behavior
- Clicking a country in the top navigation:
  - scrolls to its card
  - briefly highlights it (feel free to pick the CSS effect you want)
  - The country should be highlighted as the selected section, long as its hash is in the URL.
- Navigation must be keyboard accessible (`Enter` / `Space`)

---

### 3. Hero Button Scroll
- "Explore Countries" scrolls smoothly to the countries section

---

### 4. "Quick Facts" Section's Dropdown
- Toggle dropdown open/close
- Switch active category
- Update label dynamically
- Swap visible content panel
- Close dropdown when clicking outside or losing focus

---

### 5. FAQ Accordion
- Toggle answers open/close
- Must be keyboard accessible
- Clean, simple show/hide behavior
- Add `aria-expanded` where appropriate

---

## Accessibility Requirements ♿

Your implementation must ensure:

- full semantic markup support
- full keyboard navigation support
- visible focus states
- proper use of buttons for interactive elements
- logical tab order
- ESC key closes overlays (modal, dropdown where relevant)
- ARIA roles where appropriate:
  - modal dialog
  - buttons
  - expanded states where needed
- focus management in modal (trap focus)


### How You Should Test 🧪

After finishing your improvements:

1. Disconnect your mouse.

2. Use ONLY:

* `Tab`
* `Shift + Tab`
* `Enter`
* `Space`

3. Ask yourself:

* Can I reach everything?
* Can I tell where focus is?
* Do buttons make sense?
* Do forms make sense?
* Is navigation frustrating?
* Would a screen reader user understand this?

---

## Bonus (Optional, but good)
- Add fade/scale transitions for modal and dropdown
- Improve navigation highlighting animations

---

## Deliverables 📦

- completed assignment
- short list of accessibility improvements you implemented
- screen recording  successful keyboard navigation of all controls and flows

--- 

## Resources

- What is accessibility? (video): https://youtu.be/grrx2Lva7T0?si=T1FgFi1bF3qEQQ58
- How to do Accessibility (videos): 
    - https://youtu.be/2oiBKSjOOFE?si=Ljrd8wIrwzu6CYwl
    - (optional watch): https://youtu.be/Y7nhXvJ7yH8?si=b24clUSKuu_HTrhD
    - (optional watch): https://youtu.be/1A6SrPwmGpg?si=LZAqBwBkwpu4FY7m
- How to test for Accessibility (video): https://youtu.be/56zCnwj58e4?si=mA2ACxToJVrwF7RB
- A talk about accessibility (optional watch): https://youtu.be/TomOQYxFnrU?si=Amt4vAA9cEx4JT7I