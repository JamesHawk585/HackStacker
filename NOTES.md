  <!-- Double click, hit F2 to highlight all instances of word. -->
  <!-- rafce -->

# Phase 5 Project Minimum Requirements:

01. [x] Use a Flask/SQLAlchemy API backend with a React frontend.
02. [x] Have at least 4 models on the backend, that include the following:
        - [x] At least 1 many-to-many relationship.
        - [] Full CRUD actions for at least one resource, following REST conventions.
            a. Start with blog. Full crud for comment if time allows. 
        - [] User can interact with all models, directly or indirectly (no unused models).
03. [x] Have at least 3 different client-side routes using React Router. Be sure to include a nav bar or other UI element that allows users to navigate between routes.
04. [x] Implement password hashing and authentication.
05. [] Validations implemented on:
        - [] frontend
        - [x] backend
06. [x] Use SQLAlchemy validations to verify and protect data on the backend.
07. [] Use forms and validation through Formik on all input.
08. [x] At least one data type validation.
09. [x] At least one string/number format validation.
10. [x] Connect the client and server using fetch().
        - [] [optional/highly recommended] Implement something new not taught in the curriculum. (React BootStrap)
        - [] [optional/highly recommended] Implement useContext or Redux.
        - [] [optional/highly recommended] Fully deploy and host your project.

### Note: a user should only be able to edit and delete user-specific resources if they are logged in and the creator of that resource, with the exception of high permission users such as admin roles if implemented. For example, if we consider the example described below with models of User, DogHouse, and Review, I would only be able to edit or delete the reviews that I created.

# User Story

### MVP: As a user, I can:

01. [] User:
        - [] Sign up for an account 
        - [] Log in and remain logged in
        - [] Log out
05. [] Blog Posts: 
        - [] Create new post
        - [] Read all posts  
        - [] Update my posts
        - [] Delete my posts
06. [] Comments: 
        - [] Create a new comment. 
        - [] Read all comments
        - [] Update my comments
        - [] Delete my comments
07. [] Categories:
        - [] Assign a category to a blog post
        - [] Filter existing blog post to return by category



# Validation Routes 
### 1. Signup
    [x] POST (Successfully persist to the db, but still generates a 500?)
### CheckSession
    [] GET (user_id) "message": "The method is not allowed for the requested URL."
### Login
    [x] POST (Login and Signup are both adding users to the db. Both generate 500 errors.) 
### Logout
    [] DELETE "message": "The method is not allowed for the requested URL. (How can I see if the session was succesfully deleted?)

# Routes
### 1. users():
    [x] GET
    [x] POST 
### 2. user_by_id():
    [x] GET
    [x] PATCH (TypeError: The view function for 'user_by_id' did not return a valid response. The function either returned None or ended without a return statement.)
    [x] DELETE 
### 3. blog_posts():
    [x] GET
    [x] POST 
        - [] Successfully posts to db, but foreign relationship to user_id returns null.
### 4. blog_post_by_id():
    [x] GET
    [x] PATCH
    [x] DELETE

### 5. comments():
    [x] GET
### 6. comment_by_id():
    [x] GET
    [x] POST 
        - [] Sucessfuly posts comment, but persists null for user_id and throws 500 error.
    [x] PATCH 
        - [] Sucessfuly patches comment, but returns TypeError: 'Comment' object is not iterable.
    [x] DELETE 
        - [] Successfully deletes comment,  but returns TypeError: 'Comment' object is not iterable.

### 7. categories():
    [x] GET
### 8. category_by_id():
    [x]GET    
    [x] POST (Returns null despite values being passed into keys)


# Possible Root Causes:
1. [] SQLAlchemySchema does not match 
