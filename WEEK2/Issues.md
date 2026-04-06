## 🔵 SETUP

---

### Issue #1 — Setup React App

```md
### Task
Set up the React frontend project.

### Requirements

- Create a React app
- Clean default files
- Create basic folders:

/components  
/pages  

- Make sure the app runs successfully

### Expected Outcome

- React app runs without errors
```

---

### Issue #2 — Setup Express Server

```md
### Task
Set up the Express backend server.

### Requirements

- Initialize Express
- Create a basic server
- Add test route:

GET /test

Return:
"Server is working"

### Expected Outcome

- Server runs successfully
- /test endpoint works
```

---

## 🟢 BACKEND ISSUES

---

### Issue #3 — GET /movies

```md
### Task
Create endpoint to return all movies.

### Requirements

- GET /movies
- Read from JSON file
- Return appropriate JSON response (when successful)
- Return appropriate JSON response (when an error occurs)

### Expected Outcome

- Movies returned correctly
```

---

### Issue #4 — GET /movies/:id

```md
### Task
Get a single movie.

### Requirements

- Read from JSON file
- Return appropriate JSON response (when successful and a result is found)
- Return appropriate JSON response (when successful and a result is not found)
- Return appropriate JSON response (when an error occurs)

### Expected Outcome

- Works correctly
```

---

### Issue #5 — POST /movies

```md
### Task
Create movie endpoint.

### Requirements

- Read from JSON file
- Check if movie exists.
    - If movie exists: refuse the user's request and return appropriate JSON response.
    - If movie doesn't exist:
        - Validate request:
        - title required
        - description is required
        - year is required and is number
        - Save to JSON file
- Return appropriate JSON response (when successful)
- Return appropriate JSON response (when an error occurs)

### Expected Outcome

- Movie is created and can be found in the JSON file.
```

---

### Issue #6 — PATCH /movies/:id

```md
### Task
Update movie.

### Requirements

- Read from JSON file
- Check if movie exists.
    - If movie does not exist: refuse the user's request and return appropriate JSON response.
    - If movie exists:
        - Update only the fields sent by the user
        - Validate request:
            - if `title` is sent, it must not be empty
            - if `description` is sent, it must not be empty
            - if `year` is sent, it must be a number
        - Save changes to JSON file
- Return appropriate JSON response (when successful)
- Return appropriate JSON response (when an error occurs)

### Expected Outcome

- Movie is updated and the changes can be found in the JSON file.
```

---

### Issue #7 — DELETE /movies/:id

```md
### Task
Delete movie.

### Requirements

- Read from JSON file
- Check if movie exists.
    - If movie does not exist: refuse the user's request and return appropriate JSON response.
    - If movie exists:
        - Remove the movie from JSON file
        - Save changes
- Return appropriate JSON response (when successful)
- Return appropriate JSON response (when an error occurs)

### Expected Outcome

- Movie is deleted and can no longer be found in the JSON file.
```

---

### Issue #8 — Search API

```md
### Task
Add search functionality.

### Requirements

- Read from JSON file
- Support query param:
  GET /movies?search=term
- Filter movies by title
- Return appropriate JSON response (when successful and results are found)
- Return appropriate JSON response (when successful and no results are found)
- Return appropriate JSON response (when an error occurs)

### Expected Outcome

- API returns movies filtered by title according to the search term.
```

---

### Issue #9 — Limit Results

```md
### Task
Limit results.

### Requirements

- Read from JSON file
- Support query param:
  GET /movies?limit=20
- Return only the requested number of movies
- Return appropriate JSON response (when successful)
- Return appropriate JSON response (when an error occurs)

### Expected Outcome

- API returns a limited list of movies according to the limit value.
```

---

# 🟣 FRONTEND ISSUES

---

### Issue #10 — Build Movie List (Static)

```md
### Task
Recreate the movie list from week 1. 

### Requirements

- Horizontal movie list
- Movie card UI
- Default selected movie (via props)
- No API yet (use mock data)

### Expected Outcome

- UI of movie list matches [Figma design](https://www.figma.com/design/pC1VMigXHreqR242jkzutI/Assignment?node-id=2-43&t=tYHFtt0bejvPyAVD-1).
```

---

### Issue #11 — Build Selected Movie (Details & Background)

```md
### Task
Implement selection logic.

### Requirements

- Default selected movie
- Show default selected movie details:
  - title
  - rating
  - year
  - duration
  - genre
- Background is the default selected movie poster.

### Expected Outcome

- Selection works correctly.
- Selected movie shows on the background, according to [Figma design](https://www.figma.com/design/pC1VMigXHreqR242jkzutI/Assignment?node-id=0-1&t=tYHFtt0bejvPyAVD-1).
```

---

### Issue #12 — Dynamic Click & Hover Behavior (Blocked by issue #10 & issue #11)

This issue needs issues #10 & issue #11 to be already merged.

```md
### Task
Implement click and hover behaviors.

### Requirements

- When the user hovers over a movie:
    - the movie should grow in size
    - the hovered movie's details should be previewed:
        - title
        - rating
        - year
        - duration
        - genre
    - the background should update to the hovered movie's poster

- When the user clicks a movie:
    - that movie should become the selected movie
    - the selected movie's details should be shown
    - the background should update to the selected movie's poster

- When the mouse leaves a movie:
    - the UI should stop previewing the hovered movie
    - the UI should go back to showing the currently selected movie
    - the background should also go back to the selected movie's poster

### Expected Outcome

- Hover behavior works like Week 1
- Click behavior updates the selected movie correctly
- Background and movie details always reflect the correct movie according to current user interaction
```

---

### Issue #13 — Carousel

```md
### Task
Implement horizontal scrolling.

### Requirements

- Make movie list scrollable horizontally
- Add left and right buttons
- Clicking left button should move the list to the left
- Clicking right button should move the list to the right
- Scrolling should feel smooth

### Expected Outcome

- Movie list behaves like a simple carousel, similar to Week 1.
```

---

### Issue #14 — Search UI

```md
### Task
Add search functionality.

### Requirements

- Add input field
- Trigger search when user presses Enter
- Update movie list according to search term
- Handle states:
    - loading (search is currently happening)
    - error (something went wrong while searching)
    - empty (no movies matched the search term)

### Expected Outcome

- Search works correctly and gives the user appropriate feedback.
```

---

# 🔶 INTEGRATION

---

### Issue #15 — Connect Frontend to Backend

```md
### Task
Replace mock data with real API.

### Requirements

- Remove mock data
- Fetch movies from backend
- Display returned movies in the UI
- Handle states:
    - loading
    - error
- Make sure existing movie list and selected movie logic still work correctly

### Expected Outcome

- App uses real backend data instead of mock data.
- UI updates according to current state.
```

---

### Issue #16 — Add Movie (Full Flow)

```md
### Task
Connect form to backend.

### Requirements

- Create form UI for adding a movie
- Form should include at minimum:
    - title
    - description
    - year
- Send POST request
- Update UI after successful creation
- Handle states:
    - loading (movie is currently being added)
    - error (movie failed to add)
    - success (movie added successfully)

### Expected Outcome

- UI tells the user clearly whether the movie has been added successfully or not.
- Newly added movie can be found in the UI and in the JSON file.
```

---

### Issue #17 — Update Movie (Full Flow)

```md
### Task
Connect edit functionality.

### Requirements

- Create UI for editing a movie
- Send PATCH request
- Update UI after successful update
- Handle states:
    - loading (movie is currently being updated)
    - error (movie failed to update)
    - success (movie updated successfully)

### Expected Outcome

- UI tells the user clearly whether the movie has been updated successfully or not.
- Updated movie data is reflected in the UI and in the JSON file.
```

---

### Issue #18 — Delete Movie (Full Flow)

```md
### Task
Connect delete functionality.

### Requirements

- Add delete action in the UI
- Send DELETE request
- Remove movie from UI after successful deletion
- Handle states:
    - loading (movie is currently being deleted)
    - error (movie failed to delete)
    - success (movie deleted successfully)

### Expected Outcome

- UI tells the user clearly whether the movie has been deleted successfully or not.
- Deleted movie can no longer be found in the UI or in the JSON file.
```

### Issue #19 — Poster Images

```md
### Task
Add poster images to the movie data.

### Requirements

- Read from JSON file
- Use each movie's `imdb_id`
- Fetch poster data from the external API
- Make sure displayed movies always include a poster image:
    - on first load
    - after search
- Do not enrich all movies in the JSON file at once
- Only save poster images for movies when they are actually needed
- Save poster image to JSON file after it has been fetched
- Return appropriate JSON response (when successful)
- Return appropriate JSON response (when an error occurs)

### Expected Outcome

- Movies shown in the UI always have poster images
- Search results also always have poster images
- The JSON file is updated gradually, only for the movies that were requested
```