# Full-Stack Diagnostic Assignment

## Overview

In this assignment, you will build a small full-stack movie app.

You will build:

* a **frontend** using:

  * HTML
  * CSS
  * Vanilla JavaScript
  * Fetch API

* a **backend** using:

  * Node.js
  * Node.js built-in modules only
  * JSON file read/write

**Important:**

* You are **NOT** allowed to use libraries or frameworks such as:

  * React
  * Next.js
  * Express.js
  * Bootstrap
  * jQuery
  * Axios
  * any ORM
* You must use **Git** while working and submit your work as a **GitHub repository**
* Submit this assignment as **one repository** that contains both frontend and backend
* You are encouraged to keep things simple. Do NOT over-engineer

---

## Goal

Build a small movie app where a user can:

* view a list of movies
* click a movie to see its details
* add a new movie

Your frontend must use **your own backend API**.

---

## Data Source

Here is a JSON file that contains movie data:
[Download it](./assets/movies-db.json)

You should use this file as your main data source.

This means:

* read movies from the JSON file
* when a new movie is added, save it to the JSON file

**Note:**
The JSON file may contain fields like `vote_average`, `release_date`, or `overview`.
You may map these to simpler fields such as:

* `rating`
* `year`
* `description`

---

## Project Structure (Suggestion)

You may organize your project like this:

```
/frontend
/backend
```

This is not required, but it can help keep your project organized.

---

## Important Note

The requirements below are ordered from **most important to least important**.

If you cannot finish everything, focus on the **top requirements first**.

---

## Part 1: Backend Requirements

### 1. Build a Node.js Server

* Build a server using **Node.js only**
* Do not use Express.js or any backend framework

---

### 2. Create the Required Endpoints

#### Get all movies

* `GET /movies`
* Return all movies in **JSON format**

#### Get one movie by ID

* `GET /movies/:id`
* Return one movie
* If not found, return an error

#### Add a new movie

* `POST /movies`
* Add a new movie to the JSON file
* Expect a **JSON request body**

---

### 3. Read and Write the JSON File

* Read from the JSON file
* Write to the JSON file when a new movie is added

---

### 4. Validation

At minimum:

* `title` is required
* `year` should be a number
* `rating` should be a number if provided

---

### 5. Error Handling

Handle:

* invalid routes
* movie not found
* invalid request body
* file errors
* server errors

Return clear error messages.

---

### 6. Status Codes

Use appropriate status codes:

* `200 OK`
* `201 Created`
* `400 Bad Request`
* `404 Not Found`
* `500 Internal Server Error`

---

## Part 2: Frontend Requirements

### 1. Movie List

* When the page loads, fetch movies from **your backend**
* Display them in a list
* Each movie should be clickable

---

### 2. Movie Details

* When a movie is clicked, show its details

At minimum, show:

* title
* year
* rating
* genre (if available)
* description
  (you may use the `overview` field from the JSON data)

---

### 3. Add Movie Form

* Create a form to add a new movie

At minimum, include:

* title
* year
* rating

When submitted:

* send data to backend (`POST`)
* save it in the JSON file
* update the UI

---

### 4. States

Handle:

* **Loading state**
  Example: `Loading...`

* **Error state**
  Show a message if something goes wrong

* **Empty state**
  Show a message if no movies exist

---

### 5. Responsive Design

Your UI should work on:

* **mobile**: 320px to 767px
* **tablet**: 768px to 1023px
* **desktop**: 1024px and above

Keep the layout simple, clean, and readable.

### 6. Test Your API Using Postman

Use **Postman** to test your endpoints while building the project.

Download: [https://www.postman.com/downloads/](https://www.postman.com/downloads/)

Make sure your endpoints work correctly.

---

## Code Quality

Your code should be:

* easy to read
* organized
* not repeating the same code many times

---

## Useful Resources to Help You Complete the Assignment

### Frontend

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

### Backend

* Introduction to Node.js (8 mins): [https://youtu.be/P-fDVxjSXEw](https://youtu.be/P-fDVxjSXEw)
* Build your first Node.js server (9 mins): [https://youtu.be/VShtPwEkDD0](https://youtu.be/VShtPwEkDD0)
* Node.js basics playlist (first 4 videos only): [https://www.youtube.com/playlist?list=PL4cUxeGkcC9jsz4LDYc6kv3ymONOKxwBU](https://www.youtube.com/playlist?list=PL4cUxeGkcC9jsz4LDYc6kv3ymONOKxwBU)
* Node.js crash course: [https://youtu.be/fBNz5xF-Kx4](https://youtu.be/fBNz5xF-Kx4)
* Learn JSON in 15 minutes: [https://youtu.be/0kHFDV1lAuI](https://youtu.be/0kHFDV1lAuI)
* Manipulating JSON with Node.js: [https://youtu.be/HrjC6RwEpt0](https://youtu.be/HrjC6RwEpt0)
* Testing APIs with Postman (only first 12 mins): [https://youtu.be/MFxk5BZulVU?si=Q_CD4riVYtQZRaPT](https://youtu.be/MFxk5BZulVU?si=Q_CD4riVYtQZRaPT)

### General

* Git, Github & Github Desktop crash course (20 mins): [https://youtu.be/8Dd7KRpKeaE?si=IDT2hey3Eu8aDrXP](https://youtu.be/8Dd7KRpKeaE?si=IDT2hey3Eu8aDrXP)
* Testing APIs with Postman (only first 12 mins): [https://youtu.be/MFxk5BZulVU?si=Q_CD4riVYtQZRaPT](https://youtu.be/MFxk5BZulVU?si=Q_CD4riVYtQZRaPT)

**Important Note:**
These resources are suggestions. You don't need to use all or even any of them. 
You are encouraged to find and use your own resources as well.

---

## Git & Submission

* Use **Git**
* Write clear commit messages

Examples:

* `Create GET /movies endpoint`
* `Add movie list UI`
* `Connect frontend to backend`

Submit a **GitHub repository link**.

---

## README (Required)

Include:

* **How to run the project**
  Explain how to start both frontend and backend

* **List of endpoints**

* **Example request body**

* **Any assumptions you made**
  Was anything unclear? What did you assume?

* **Any known limitations**
  What did you not implement or simplify? Why?

* **Your progress**
  What you completed, what you didn’t, and why

* **Challenges you faced**
  What was hardest for you

---

## Bonus (Advanced)

### Delete

* `DELETE /movies/:id`
* Add delete button

### Update

* `PATCH /movies/:id`
* Add edit functionality

### Search

* Search movies via backend

### Poster Image

* Add `poster_image` using `imdb_id` + API

---

## Final Notes

* Focus on finishing the main requirements first.
* Do your best: it is okay if you do not finish everything.
* I care about how far you get and how you think, not only the final result.