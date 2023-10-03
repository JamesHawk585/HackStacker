from faker import Faker
from models import User
from config import db, app, bcrypt

faker = Faker()

with app.app_context():

    User.query.delete()

    for _ in range(20):
        username = faker.profile(fields=["username"])["username"]
        user = User(
            username=username
        )
        
        user.password_hash = username # We are calling the password_hash setter method here
        db.session.add(user)
        db.session.commit()