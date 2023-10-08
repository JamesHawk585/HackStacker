# Phase 5 Project Minimum Requirements:

01. [] Use a Flask/SQLAlchemy API backend with a React frontend.
02. [x] Have at least 4 models on the backend, that include the following:
        - [x] At least 1 many-to-many relationship.
        - [] Full CRUD actions for at least one resource, following REST conventions.
            a. Start with blog. Full crud for comment if time allows. 
        - [] User can interact with all models, directly or indirectly (no unused models).
03. [] Have at least 3 different client-side routes using React Router. Be sure to include a nav bar or other UI element that allows users to navigate between routes.
04. [x] Implement password hashing and authentication.
05. [] Validations implemented on:
        - [] frontend
        - [x] backend
06. [x] Use SQLAlchemy validations to verify and protect data on the backend.
07. [] Use forms and validation through Formik on all input.
08. [x] At least one data type validation.
09. [] At least one string/number format validation.
10. [] Connect the client and server using fetch().
        - [] [optional/highly recommended] Implement something new not taught in the curriculum. (Check in with your instructor to ensure the scope of your idea is appropriate.)
        - [] [optional/highly recommended] Implement useContext or Redux.
        - [] [optional/highly recommended] Fully deploy and host your project.

### Note: a user should only be able to edit and delete user-specific resources if they are logged in and the creator of that resource, with the exception of high permission users such as admin roles if implemented. For example, if we consider the example described below with models of User, DogHouse, and Review, I would only be able to edit or delete the reviews that I created.

# DB Relationship To-Do List: 
## 01. [x] One user to many blog posts

### In the User class
    blog_post = db.relationship('Blog_post', backref='user')

### In the Blog_post class
    user_id = db.Column(db.Integer(), db.ForeignKey('user.id'))

## 02. [x] One user to many comments 

### In the User class
    comment = db.relationship('comment', backref='user')

### In the Comment class
    user_id = db.column(db.Integer(), db.ForeignKey('user.id'))

## 03. [x] Many blog post to many categories

### In the User class
    category = relationship("Category", secondary=join_table)

### In the Category class
    user = relationship("User", secondary=join_table)




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


### Stretch: As a user, I can:

<!-- 01. [] View dog houses on a map -->
<!-- 02. [] Search dog houses based on their distance from my location, -->
<!-- 03. [] Filter dog houses based on their average rating. -->

# Notes
01. [] Use app.route and SQLAlchemy-Serializer for server-side routing 

### Short To-Do:
01. [] Finish relationship modeling 
    - Constraints
    - Validations
02. [] Create Flask app
03. [] Create seeds in seed.py
04. [] Generate revision and seed db
05. [] Create Client 
06. [] Create Routes and test with Postman
07. [] Create React app  


 # Bug Fix Notes
1. Changes were made to the validations in models.py. The return statement for the strings were moved outside of the nested if statements.
2. A changes was made to the user_id attribute in the blog_post shcema. Validations were prohibiting users from being created after used_id 17. 
3. Ran seed.py to reseed db.  
4. Blog_post, user, and comments routes in app.py throw a 500 error. 
'/' route and catergory/categories routes function as intended. 


Suggestions: 
1. Remember to disallow related objects in serialize_rules. 
2. Always include a trailing comma if the tuple contains only one value. 