# Backend Diagnostic Assignment

## Overview

In this assignment, you will build a backend server for a movie browsing web app using:

* Node.js
* Node.js built-in modules only
* JSON file read/write

**Important:**

* You are **NOT** allowed to use libraries or frameworks such as:

  * Express.js
  * Fastify
  * NestJS
  * Axios
  * any ORM
  * any validation library
* You must use **Git** while working and submit your project as a **GitHub repository**
* You are encouraged to keep things simple. Do NOT over-engineer

---

## Data Source

Here is a JSON file that contains movie data:
[Download it](./assets/movies-db.json)

You should use this file as your main data source.

This means:

* your server should read movie data from the JSON file
* when a movie is added, updated, or deleted, the JSON file should also be updated

**Note:**
The JSON file may contain fields like `vote_average`, `release_date`, or `overview`.
In your API, you may map these to simpler fields such as:

* `rating`
* `year`
* `description`

---

## Important Note

The requirements below are ordered from **most important to least important**.

If you cannot finish everything, focus on the **top requirements first**.

---

## Requirements

### 1. Build a Node.js Server

* Build a server using **Node.js only**
* Do not use Express.js or any other backend framework
* Your server should listen on a port and respond to HTTP requests

---

### 2. Create the Required Endpoints

Your server must support the following endpoints:

#### Get all movies

* `GET /movies`
* Return all movies from the JSON file
* Response should be in **JSON format**

#### Get one movie by ID

* `GET /movies/:id`
* Return one movie only
* If the movie does not exist, return a proper error response

#### Add a new movie

* `POST /movies`
* Add a new movie to the JSON file
* Expect a **JSON request body**

#### Update a movie

* `PATCH /movies/:id`
* Update an existing movie in the JSON file
* Expect a **JSON request body**

#### Delete a movie

* `DELETE /movies/:id`
* Delete a movie from the JSON file

---

### 3. Read and Write the JSON File

Your app must use Node.js file operations to work with the JSON file.

This means:

* read from the file when needed
* write back to the file when data changes

For example:

* `POST` should save the new movie
* `PATCH` should save the updated movie
* `DELETE` should remove the movie from the file

---

### 4. Handle Request Data Correctly

Your server should be able to:

* read the request method (`GET`, `POST`, `PATCH`, `DELETE`)
* read the request URL
* read route parameters like `:id`
* read JSON request bodies for `POST` and `PATCH`

---

### 5. Validation

At minimum, your API should validate the following:

* `title` is required when creating a movie
* `year` should be a number
* `rating` should be a number if provided

If the request data is invalid, return a clear error message.

---

### 6. Error Handling

Your API should handle common problems clearly.

Examples:

* invalid route
* movie not found
* invalid request body
* file read/write errors
* unexpected server error

Return a clear error message when something goes wrong.

---

### 7. Use Proper Status Codes

Use appropriate HTTP status codes where possible.

Examples:

* `200 OK` → successful GET, PATCH, DELETE
* `201 Created` → successful POST
* `400 Bad Request` → invalid input
* `404 Not Found` → movie does not exist
* `500 Internal Server Error` → server problem

---

### 8. Test Your API Using Postman

Use **Postman** to test your endpoints while building the project.

Download: [https://www.postman.com/downloads/](https://www.postman.com/downloads/)

Make sure your endpoints work correctly.

---

## Code Quality

Your code should be:

* easy to read
* organized
* not repeating the same code many times

Try to keep your logic clear and simple.

---

## Useful Resources to Help You Complete the Assignment

* Git, Github & Github Desktop crash course (20 mins): [https://youtu.be/8Dd7KRpKeaE?si=IDT2hey3Eu8aDrXP](https://youtu.be/8Dd7KRpKeaE?si=IDT2hey3Eu8aDrXP)
* Introduction to Node.js (8 mins): [https://youtu.be/P-fDVxjSXEw](https://youtu.be/P-fDVxjSXEw)
* Build your first Node.js server (9 mins): [https://youtu.be/VShtPwEkDD0](https://youtu.be/VShtPwEkDD0)
* Node.js basics playlist (first 4 videos only): [https://www.youtube.com/playlist?list=PL4cUxeGkcC9jsz4LDYc6kv3ymONOKxwBU](https://www.youtube.com/playlist?list=PL4cUxeGkcC9jsz4LDYc6kv3ymONOKxwBU)
* Node.js crash course: [https://youtu.be/fBNz5xF-Kx4](https://youtu.be/fBNz5xF-Kx4)
* Learn JSON in 15 minutes: [https://youtu.be/0kHFDV1lAuI](https://youtu.be/0kHFDV1lAuI)
* Manipulating JSON with Node.js: [https://youtu.be/HrjC6RwEpt0](https://youtu.be/HrjC6RwEpt0)
* Testing APIs with Postman (only first 12 mins): [https://youtu.be/MFxk5BZulVU?si=Q_CD4riVYtQZRaPT](https://youtu.be/MFxk5BZulVU?si=Q_CD4riVYtQZRaPT)

**Important Note:**
These resources are optional. You can use them if you find them helpful, but you don’t have to.
Feel free to find and use your own resources as well.

---

## Git & Submission

* Use **Git** while working on the project
* Write clear commit messages

Examples:

* `Create GET /movies endpoint`
* `Add PATCH /movies/:id logic`
* `Fix JSON file update bug`

Submit a **GitHub repository link** when you are done.

---

## README (Required)

Your repository must include a README file.

In your README, include:

* **How to run the server**
  Explain how someone can start and test your project

* **List of endpoints**
  Write all the endpoints you built

* **Example request body** for `POST` and `PATCH`
  Show an example of the JSON you expect

* **Any assumptions you made**
  Was anything unclear or missing in the requirements?
  What did you decide to assume instead?
  Example: `If a new movie has no rating, I set it to 0`

* **Any known limitations**
  What did you not implement or simplify? Why?
  Example: `Search is case-sensitive to keep things simple`

* **Your progress**
  What parts of the assignment did you complete?
  What parts did you not complete?
  Why? (for example: time, difficulty, unclear requirements, etc.)

* **Challenges you faced**
  What was the hardest part of this assignment for you?

---

## Bonus (Advanced)

If you finish the main requirements, you can do one or more of the following:

### Bonus 1: Search

Add support for searching movies by title.

Example:

* `GET /movies?search=batman`

---

### Bonus 2: Limit results

Add support for limiting the number of returned movies.

Example:

* `GET /movies?limit=20`

---

### Bonus 3: Poster image

Enrich returned movie objects with a `poster_image` field using:

* the movie’s `imdb_id`
* this external API: [https://imdbapi.dev/](https://imdbapi.dev/)

This is a bonus requirement. It is **not required**.

---

## Final Notes

* Focus on finishing the main requirements first.
* Do your best: it is okay if you do not finish everything.
* I care about how far you get and how you think, not only the final result.