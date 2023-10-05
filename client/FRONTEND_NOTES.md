App
│
├── NavBar
│   ├── Home.js (Shows all blog posts)
│   ├── UserProfile.js (Shows user blog posts and details)
│   └── Newpost.js
│
├── Router
│   ├── Route for Login
│   │   ├── LoginForm.js
│   │   ├──(Authentication Logic)
│   │   ├── Home.js (On successful login)
|   |   └── UserProfile.js 
│   │
│   ├── Home.js
│   │   └── BlogPostList.js (displays each blog posts title, author, and publication date)
│   │      └── BlogPostItem.js (displays full text of all individual post)
│   │          └── Comments.js (List of all comment for a post)
│   │              └── MakeComment.js (form to allow user to post comment)
│   │   
│   │
│   └── Route Users Blog Post Details
│       └── UserProfile.js (Displays all info in the USer class)
│           └── UserPostsList.js (allows user to see a list of all their posts. Full CRUD)
│               └── UserPostItem.js (Allows user to post a new blog)
│     
│
└── (Authentication Logic)

npm:
1. [x] Formik
2. [x] React-bootstrap
