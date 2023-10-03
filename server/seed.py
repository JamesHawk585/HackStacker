from faker import Faker
from models import User, Blog_post, Comment
from config import db, app, bcrypt
from random import randint, choice as rc

faker = Faker()

print('Seeding db... 🌱')

with app.app_context():

    print("Deleting all records...")
    User.query.delete()
    Blog_posts.query.delete()

    for _ in range(20):
        username = faker.profile(fields=["username"])["username"]
        user = User(
            username=username
        )
        
        user.password_hash = username # We are calling the password_hash setter method here
        db.session.add(user)
        db.session.commit()