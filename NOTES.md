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
        - [] [optional/highly recommended] Implement something new not taught in the curriculum. (Check in with your instructor to ensure the scope of your idea is appropriate.)
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


### Short To-Do: 
01. [] Test server-side routes with Postman
02. [] Build out BlogPost.js (GET, PATCH, DELETE)
03. [] Build out PostBlog.js (POST with Formik)
04. [] Login
05. [] Logout
06. [] Signup
07. [] Sessions and Cookies


# Routes
### 1. users():
    [x] GET
### 2. user_by_id():
    [x] GET
    [] POST (ValueError: username field is required)
    [] PATCH (TypeError: The view function for 'user_by_id' did not return a valid response. The function either returned None or ended without a return statement.)

    [x] DELETE 
### 3. blog_posts():
    [x] GET
### 4. blog_post_by_id():
    [x] GET
    [] POST (TypeError: object of type 'NoneType' has no len())
    [] PATCH (TypeError: The view function for 'blog_post_by_id' did not return a valid response. The function either returned None or ended without a return statement.)
    [x] DELETE

### 5. comments():
    [x] GET
### 6. comment_by_id():
    [x] GET
    [] POST (TypeError: object of type 'NoneType' has no len())
    [] PATCH (TypeError: The view function for 'comment_by_id' did not return a valid response. The function either returned None or ended without a return statement.)
    [] DELETE (TypeError: 'Comment' object is not iterable)

### 7. categories():
    [x] GET
### 8. category_by_id():
    [x]GET    
    [x] POST (Returns null despite values being passed into keys)
