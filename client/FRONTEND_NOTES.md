App
│
├── NavBar
│   ├── Link to Home
│   ├── Link to User Profile
│   └── (Other navigation links)
│
├── Router
│   ├── Route for Login
│   │   ├── LoginForm
│   │   └── (Authentication Logic)
│   │   └── Redirect to Home (On successful login)
│   │
│   ├── Route for Home
│   │   ├── BlogPostList
│   │   │   ├── BlogPostItem
│   │   │   └── (Blog Post Data)
│   │   └── (Fetch Blog Posts Data)
│   │
│   ├── Route for Blog Post Details
│       ├── UserProfile
│       │   ├── UserPostsList
│       │   │   ├── UserPostItem
│       │   │   └── (User's Blog Post Data)
│       │   └── (Fetch User's Blog Posts Data)
│       └── (User Profile Data)
│
└── (Authentication Logic)

npm:
1. [] Formik
2. [] React-bootstrap
