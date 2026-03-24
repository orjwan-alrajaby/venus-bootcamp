# Frontend Diagnostic Assignment

## Overview

In this assignment, you will build a movie browsing page using:

* HTML
* CSS
* Vanilla JavaScript
* Fetch API

**Important Notes:**

* You are NOT allowed to use any libraries or frameworks (no React, no Bootstrap, no jQuery, etc.).
* You must use **Git** while working and submit your project as a **GitHub repository**.
* You are encouraged to keep things simple. Do NOT over-engineer.

---

## Design

Figma Design:
[https://www.figma.com/design/pC1VMigXHreqR242jkzutI/Assignment?node-id=2-12&m=dev&t=yfwDrmI9TDI13OFq-1](https://www.figma.com/design/pC1VMigXHreqR242jkzutI/Assignment?node-id=2-12&m=dev&t=yfwDrmI9TDI13OFq-1)

Make an account on Figma so you can access the design and all of its information.

---

## API

Use this API to get movie data:
[https://imdbapi.dev/](https://imdbapi.dev/)

---

## Important Note

The requirements below are ordered from **most important to least important**.

If you cannot finish everything, focus on the **top requirements first**.

---

## Requirements

### 1. Movie List

* When the page loads, show a **horizontal list of 20 movies**
* The list should be **scrollable horizontally**
* Each movie item should be **clickable**

---

### 2. Default Selected Movie

* When the page loads, the **first movie should be selected by default**
* The page should show that movie’s:

  * title
  * IMDb rating
  * year
  * duration
  * genre

---

### 3. Hover and Click Behavior

* When the user moves the mouse over a movie (**hover**):

  * the movie should look bigger (as shown in the design)
  * the page should preview that movie’s data

* When the user clicks a movie:

  * it becomes the selected movie

* When the mouse leaves a movie:

  * the page should go back to showing the last selected movie

**Note:**
On touch devices such as phones and tablets, hover does not work in the same way. In that case, **click/tap behavior is enough**.

---

### 4. Background Update

* The page background should change to the **poster of the current movie**
  (hovered or selected)

---

### 5. Search

* There should be a search input field
* The search should work when the user presses **Enter**
* After searching:

  * update the list with the **first 20 results** based on the search term

---

### 6. States (Very Important)

Your app must handle these states:

* **Loading state**
  Show something like `Loading...` while waiting for data

* **Error state**
  If something goes wrong, show a clear message
  Example: `Something went wrong`

* **Empty state**
  If no results are found, show a clear message
  Example: `No results found`

---

### 7. Responsive Design

Your UI should work on:

* **mobile**: 320px to 767px
* **tablet**: 768px to 1023px
* **desktop**: 1024px and above

Build the layout **mobile first**.

The UI should:

* not break
* not overflow
* remain readable and usable

---

### 8. Design Matching

* Use the **Poppins** font
* Follow the **colors, spacing, and layout** from the design as closely as possible
* Focus on functionality first

---

### 9. Carousel Behavior

* Add a **left button** and a **right button**
* Clicking them should move the list smoothly
* It does **not** need to loop

---

### 10. Code Quality

Your code should be:

* easy to read
* organized
* not repeating the same code many times

---

### 11. Handling Missing Data

* If some movie data is missing:

  * your app should not break
  * it should still work

---

## Useful Resources to Help You Complete the Assignment

* Git, Github & Github Desktop crash course (20 mins): [https://youtu.be/8Dd7KRpKeaE?si=IDT2hey3Eu8aDrXP](https://youtu.be/8Dd7KRpKeaE?si=IDT2hey3Eu8aDrXP)
* HTML crash course (16 mins): [https://youtu.be/vY2xUc4TVmY](https://youtu.be/vY2xUc4TVmY)
* CSS crash course (30 mins): [https://youtu.be/j6nOnIT-T1o](https://youtu.be/j6nOnIT-T1o)
* Flexbox crash course (15 mins): [https://youtu.be/fYq5PXgSsbE?si=WdrIxq8G5jnHZ-sR](https://youtu.be/fYq5PXgSsbE?si=WdrIxq8G5jnHZ-sR)
* Using Fetch API in 6 minutes: [https://youtu.be/cuEtnrL9-H0](https://youtu.be/cuEtnrL9-H0)
* Using Async/Await with Fetch: [https://youtu.be/Yp9KIcSKTNo](https://youtu.be/Yp9KIcSKTNo)
* The JavaScript DOM explained: [https://youtu.be/NO5kUNxGIu0](https://youtu.be/NO5kUNxGIu0)
* DOM manipulation crash course (20 mins): [https://youtu.be/y17RuWkWdn8](https://youtu.be/y17RuWkWdn8)
* Event listeners (short intro): [https://youtu.be/i_8NQuEAOmg](https://youtu.be/i_8NQuEAOmg)
* Event listeners crash course: [https://youtu.be/XF1_MlZ5l6M?si=GNFS_Xme1XgKj3jK](https://youtu.be/XF1_MlZ5l6M?si=GNFS_Xme1XgKj3jK)
* HTML forms in 8 minutes: [https://youtu.be/2O8pkybH6po?si=Jy1RnOwN_l3dHZf-](https://youtu.be/2O8pkybH6po?si=Jy1RnOwN_l3dHZf-)

**Important Note:**
These resources are optional. You can use them if you find them helpful, but you don’t have to.
Feel free to find and use your own resources as well.

---

## Git & Submission

* Use **Git** while working on the project
* Write clear commit messages

Examples:

* `Add movie list`
* `Implement search`
* `Fix carousel scrolling`

Submit a **GitHub repository link**.

---

## README (Required)

Your repository must include a README file.

In your README, include:

* **How to run the project**
  Explain how someone can set up, open, and use your app

* **Any assumptions you made**
  Was anything unclear or missing in the requirements?
  What did you decide to assume instead?
  Example: `I assumed all movies have a poster image, so I did not add a placeholder image.`

* **Any known limitations**
  What did you not implement or simplify? Why?
  Example: `Carousel does not loop for simplicity.`

* **Your progress**
  What parts of the assignment did you complete?
  What parts did you not complete?
  Why? (for example: time, difficulty, unclear requirements, etc.)

* **Challenges you faced**
  What was the hardest part of this assignment for you?

---

## Final Notes

* Focus on finishing the main requirements first.
* Do your best: it is okay if you do not finish everything.
* I care about how far you get and how you think, not only the final result.