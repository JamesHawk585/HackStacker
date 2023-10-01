from sqlalchemy.ext.hybrid import hybrid_property
from sqlalchemy_serializer import SerializerMixin
from sqlalchemy import Table, Column, ForeignKey
from sqlalchemy.orm import declarative_base, relationship, validates

from config import db, bcrypt

Base = declarative_base()

join_table = Table(
    "user_to_category",
    Base.metadata,
    Column("user_id", ForeignKey("user.id")),
    Column("category_id", ForeignKey("category.id")),

)

class User(db.model, SerializerMixin):

    # Ignore relationship as well
    serialize_rules = ('-_password_hash',)

    __tablename__ = 'user'
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    _password_hash = db.Column(db.String)
    bio = db.Column(db.String(250))

    # backref to relate blog_post to user.id 
    blog_post = db.relationship('Blog_post', backref='user')
    comment = db.relationship('comment', backref='user')
    category = relationship("Category", secondary=join_table)

    @validates('name')
    def validate_name(self, key, name):
        names = db.session.query(User.name).all()
        if not name:
            raise ValueError("Name field is required")
        elif name in names:
            raise ValueError("Name must be unique")
        return name 


    @hybrid_property
    def password_hash(self):
        raise AttributeError('Password hashes may not be viewed.')

    @password_hash.setter
    def password_hash(self, password):
        password_hash = bcrypt.generate_password_hash(
            password.encode('utf-8'))
        self._password_hash = password_hash.decode('utf-8')

    def authenticate(self, password):
        return bcrypt.check_password_hash(
            self._password_hash, password.encode('utf-8'))

    def __repr__(self):
        return f'<User {self.username}>'
    

class Blog_posts(db.Model, SerializerMixin):
    __tablename__ = 'blog_post'
    # Add contraints? 
    id = db.Colum(db.Integer, primary_key=True)
    title = db.Column(db.String(50))
    blog_content = db.Column(db.String(5000))
    publication_date = db.Column(db.DateTime, server_default=db.func.nom())
    edited_at = db.Column(db.DateTime, onupdate=db.func.now())
    
    # foreign_key to relate blog_post to user.id
    user_id = db.Column(db.Integer(), db.ForeignKey('user.id'))
    
class Comment(db.model, SerializerMixin):
    __tablename__ = 'comment'
    id = db.Column(id.Integer, primary_key=True)
    comment_content = db.Column(db.String(250))
    publication_date = db.Column(db.DateTime, server_default=db.func.nom())
    edited_at = db.Column(db.DateTime, onupdate=db.func.now())

    user_id = db.column(db.Integer(), db.ForeignKey('user.id'))

class Category(db.model, SerializerMixin):
    __tablename__ = 'category'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(30), unique=True)
    description = db.Column(db.String(50), unique=True)
    user = relationship("User", secondary=join_table)














    


