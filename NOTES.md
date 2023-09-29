# Phase 5 Project Minimum Requirements:

01. [] Use a Flask/SQLAlchemy API backend with a React frontend.
02. [] Have at least 4 models on the backend, that include the following:
        - [] At least 1 many-to-many relationship.
        - [] Full CRUD actions for at least one resource, following REST conventions.
        - [] User can interact with all models, directly or indirectly (no unused models).
03. [] Have at least 3 different client-side routes using React Router. Be sure to include a nav bar or other UI element that allows users to navigate between routes.
04. [] Implement password hashing and authentication.
05. [] Validations implemented on frontend and backend
06. [] Use SQLAlchemy validations to verify and protect data on the backend.
07. [] Use forms and validation through Formik on all input.
08. [] At least one data type validation.
09. [] At least one string/number format validation.
10. [] Connect the client and server using fetch().
        - [] [optional/highly recommended] Implement something new not taught in the curriculum. (Check in with your instructor to ensure the scope of your idea is appropriate.)
        - [] [optional/highly recommended] Implement useContext or Redux.
        - [] [optional/highly recommended] Fully deploy and host your project.

### Note: a user should only be able to edit and delete user-specific resources if they are logged in and the creator of that resource, with the exception of high permission users such as admin roles if implemented. For example, if we consider the example described below with models of User, DogHouse, and Review, I would only be able to edit or delete the reviews that I created.