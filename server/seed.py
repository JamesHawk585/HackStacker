from faker import Faker
from models import User, Blog_post, Comment, Category
from config import db, app, bcrypt
from random import randint

fake = Faker()

print('Seeding db... 🌱')

with app.app_context():

    print("Deleting all records...")
    User.query.delete()
    Blog_post.query.delete()
    Comment.query.delete()
    Category.query.delete()

    usernames = []
    users = []
    
    titles = []
    blog_posts = []

    comments = []

    category_names = []




    print('Creating users...:alien: ')

    for i in range(20):
            username = fake.first_name()
            while username in usernames:
                  username = fake.first_name()
            usernames.append(username)

            user = User(
                  username = username,
                  bio = fake.paragraph(nb_sentences=4),
            )

            user.password_hash = user.username + 'password'
            users.append(user)

            user.password_hash = username 
            # We are calling the password_hash setter method here


            db.session.add_all(users)

    # Blog_post
    print("Creating blog posts...:computer:")

    for i in range (50):
        title = fake.sentence(nb_words=6)
        while title in titles:
            title = fake.sentence(nb_words=6)
        titles.append(title)

        blog_post = Blog_post(
             title = title,
             blog_content = fake.paragraph(nb_sentences=10),
             publication_date = fake.date_time_this_year(),
             edited_at = fake.date_time_this_year() 
        )
        blog_posts.append(blog_post)
        
        db.session.add_all(blog_posts)
            


    # Comment
    print("Creating comments...🖱️")
    for i in range (30):
        comment_content = fake.sentence(nb_words=15)
        while comment_content in comments:
             comment_content = fake.sentence(nb_words=15)
        comments.append(comment_content)

        comment_instance = Comment(
            comment_content = comment_content,
            publication_date = fake.date_this_year(),
            edited_at = fake.date_this_year(),
        ) 

        comments.append(comment_instance)
        db.session.add_all(comments)

    # Category
    print("Creating categories...:brain:")

    for i in range(5):
        name = fake.word()
        while name in category_names:
            name = fake.word()
        category_names.append(name)

        category_instance = Category(
            name = name, 
            description = fake.sentence(nb_words=10), 
        )

        db.session.add_all(category_instance)

    
    db.session.commit()