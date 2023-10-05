[x]App
  |[x]├── NavBar
  │   ├── [] Home.js (Shows all blog posts)
  │   ├── [] UserProfile.js (Shows user blog posts and details)
  │   └── [] Newpost.js (User can create a category when posting blog)
            <!-- └── Advice on how best to search posts by category -->
            <!-- Many-to-many relationship -->
  │
[]├── Router
  │   ├── [] Route for Login
  │   │   ├── [] LoginForm.js
  │   │   ├── [](Authentication Logic)
  │   │   ├── [] Home.js (On successful login)
  |   |   └── [] UserProfile.js 
  │   │
  │   ├── [] Home.js (displays each blog posts title, author, and publication date)
  │   │      └── [] BlogPost.js (displays full text of all individual post)
                 [] MakeComment.js (form to allow user to post comment)
  │   │             └── [] Comments.js (List of all comment for a post)
  │   │                 └── [] MakeComment.js (form to allow user to post comment)
  <!--│   Focus on Home.js    -->
  <!--|   Full CRUD for blog posts. (It is a blog posting site afterall.)  -->
  │   │
  │   └── [] Route Users Blog Post Details
  │       └── [] UserProfile.js (Displays all info in the USer class)
  │           └── [] UserPostsList.js (allows user to see a list of all their posts. Full CRUD)
  │                └── [] UserPostItem.js (Allows user to post a new blog)
  │     
[]└── (Authentication Logic)

npm:
1. [x] Formik
2. [x] React-bootstrap

Front-end Requirements: 
1. [] Have at least 3 different client-side routes using React Router. Be sure to include a nav bar or other UI element that allows users to navigate between routes.
2. [] Frontend validations 
3. [] All forms through Formik
4. [] Full CRUD for at least one resource (blog posts)
