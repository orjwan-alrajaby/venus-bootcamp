# WEEK 2 – Assignment

## Overview

This week’s assignment will focus on:

- teamwork
- refactoring
- React.js
- Express.js
- GitHub workflow

You will be working in **pairs**. You have been assigned to the following teams:

### Teams

| Team    | Members                          |
|---------|----------------------------------|
| JUPITER | Ali Mamdouh & Mahmoud Amer       |
| MARS    | Mohammed Debes & Raghda Alnajjar |
| NEPTUNE | Ahmed Habeeb & Basma Ayash       |
| SATURN  | Ibrahim Awad & Rashadah          |
| VENUS   | Maha Humaid & Saleem Qandeel     |

---

## Goal

Your goal this week is to **refactor and rebuild your previous assignment** using:

- **React.js** for the frontend
- **Express.js** for the backend

You are not starting from zero.  
You are taking your previous work and improving it using better tools and structure.

Beside your previous work, [here](./Assets.md) are all the things you're gonna need from week1 to complete this week's assignment.

---

## Repository Setup

Each team should create **one shared GitHub repository** called:

`[TEAM_NAME]_movies_app_with_react_and_express`

Example: `jupiter_movies_app_with_react_and_express`

Inside the repository:

- You may keep your old assignment folders for reference
- Your main goal is to build **one new improved version of the app together**

---

## Workflow Requirements

You will work using a structured GitHub workflow.

### Issues

- A list of issues/tasks has been provided. Access them [here](./Issues.md).
- Recreate these issues in your repository under the **Issues** tab.
- Work on the project **issue by issue**.
- When working on an issue, assign that issue to the team member working on it. This will help you keep track of who is working on what.

### Branches & Pull Requests

- Create a new branch with a meaningful, descriptive name for each issue (when possible).
- Open a **Pull Request (PR)** when the issue is completed.

Each PR description should include:

- what changes were made
- why those changes were made
- screenshots or videos (when applicable)

### Commits

- Make small, clear commits.
- Reference the issue number in your commit messages.

Example:

`#3 Build functional search feature in React`

Do not push everything in one large commit.

---

## Roles (Important)

Each team member should take a clear role:

- **Fullstack/Frontend Developer** → focus on building the UI first and utilize the usage of mock data.
- **Fullstack/Backend Developer** → focus on building backend APIs & documenting them for the usage of other developers.

Work in parallel. Do not wait for each other to finish everything.
 
Integration can and will be happening later.

---

## Teamwork Expectations

Both team members are expected to contribute.

This means:

- both team members should have commits in the repository
- both should understand the final implementation
- one person should not do all the work

---

## Technical Requirements

- Use **React.js** for the frontend
- Use **Express.js** for the backend
- Structure your code into smaller, reusable components
- Keep your code organized and readable

The app should:

- work correctly
- not contain obvious bugs
- handle core features properly
- have a clean, stable, and responsive UI

---

## Required Features

Your app must include:

### Frontend

- Movie list
- Movie details view (selected movie with full details)
- Search functionality
- Carousel behavior
- Add movie form
- Update movie (edit)
- Delete movie

### Backend

- `GET /movies`
- `GET /movies/:id`
- `POST /movies`
- `PATCH /movies/:id`
- `DELETE /movies/:id`
- Search support  
  Example: `GET /movies?search=batman`
- Limit results  
  Example: `GET /movies?limit=20`

---

## Code Quality

Your code should be:

- easy to read
- well organized
- not repeating the same logic

---

## Git & Submission

You should submit:

- your team’s GitHub repository link

Your repository should include:

- issues
- pull requests
- commit history

---

## README (Required)

Your README should include:

- team member names
- how to run the frontend
- how to run the backend
- what features each team member worked on (with related issues and PRs)
- Utilizing the usage of postman collections to document & share BE APIs.
- **Any assumptions you made**
- **Any known limitations**
- **Your progress**
- **Challenges you faced individually & as a team**

---

## Expectations

- The app should be stable and usable
- Core features should work correctly
- Requirements should be completed as much as possible
- Git workflow should be clean and collaborative
- Pull requests on GitHub should be descriptive
- **Each feature on the FE should have a corresponding API to consume on the BE, and vice versa. Close any gaps you find between the 2 apps.**
---

## Resources

### English Resources

- Become a React Pro in 1.5 Hours: https://youtu.be/3OqiKTyH4r0?si=l6xPM88E0uXYGtaP
- Git & GitHub Crash Course (50 minutes): https://youtu.be/vA5TTz6BXhY?si=Vt5IsxKlIddsvphq
- Learn Express.js in 35 minutes: https://youtu.be/SccSCuHhOw0?si=Pd55XgrSMk9_9nyg
- Introduction to Postman Collections (18 mins): https://youtu.be/GtGQ3YsOrt4?si=qhsFxOAQx2b7_8Fl

### Arabic Resources

- React.js Basics in 90 Mins (Arabic): https://youtu.be/fJSFus0pxZI?si=frKeJ0a6VjVAJVLD
- Git & GitHub Crash Course in 45 minutes (Arabic): https://youtu.be/N7qWNQxFq90?si=_XcgreuBsdsNLXDC
- Express.js Crash Course in 30 minutes (Arabic): https://youtu.be/DURM6yft8RU?si=DN0SdI1KKs9kZkyv
- Postman: Collections, Tests & Scripts (Arabic): https://youtu.be/A8e8HBHMttg?si=AtCD_2Wk9kuc1YNn
  (Note: In this tutorial, we only care about the collections part)

**Important Note:**  
These resources are optional. You can use them if you find them helpful, but you do not have to.  
Feel free to find and use your own resources as well.
