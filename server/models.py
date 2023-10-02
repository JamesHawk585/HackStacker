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


# !!! Double check syntax of serialize_rules !!!





class User(db.model, SerializerMixin):

    # Ignore relationship as well to avoid infinite loop
    serialize_rules = ('-_password_hash','-blog_post', '-comment', '-category')

    __tablename__ = 'user'
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    _password_hash = db.Column(db.String)
    bio = db.Column(db.String(250))

    blog_post = db.relationship('Blog_post', backref='user')
    comment = db.relationship('comment', backref='user')
    category = relationship("Category", secondary=join_table)

    @validates('username')
    def validate_name(self, key, username):
        usernames = db.session.query(User.name).all()
        if not username:
            raise ValueError("Name field is required")
        elif username in usernames:
            raise ValueError("Name must be unique")
        return username 

    @validates('username', 'bio')
    def validate_length(self, key, string):
        if ( key == 'username'):
            if len(string) >= 80:
                raise ValueError("username must be 80 characters or less.")
            if ( key == 'bio'):
                raise ValueError('Bio must be 250 characters or less.')
            return string 

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

    serialize_rules = ('-user_id')

    __tablename__ = 'blog_post'
    id = db.Colum(db.Integer, primary_key=True)
    title = db.Column(db.String(50))
    blog_content = db.Column(db.String(5000))
    publication_date = db.Column(db.DateTime, server_default=db.func.nom())
    edited_at = db.Column(db.DateTime, onupdate=db.func.now())
    
    user_id = db.Column(db.Integer(), db.ForeignKey('user.id'))

    @validates('title', 'blog_content')
    def validate_length(self, key, string):
        if ( key == 'blog_content'):
            if len(string) >= 5000:
                raise ValueError("Blog posts must be 5000 characters or less.")
            if ( key == 'title'):
                raise ValueError('Title must be 50 characters or less.')
            return string 
    
class Comment(db.model, SerializerMixin):

    serialize_rules = ('-user_id')

    __tablename__ = 'comment'
    id = db.Column(id.Integer, primary_key=True)
    comment_content = db.Column(db.String(250))
    publication_date = db.Column(db.DateTime, server_default=db.func.nom())
    edited_at = db.Column(db.DateTime, onupdate=db.func.now())

    user_id = db.column(db.Integer(), db.ForeignKey('user.id'))

    @validates('comment_content')
    def validate_length(self, key, string):
        if len(string) >= 250:
            raise ValueError('Comments must be less than 250 characters in length')

class Category(db.model, SerializerMixin):

    serialize_rules = ('-user')

    __tablename__ = 'category'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(30), unique=True)
    description = db.Column(db.String(50), unique=True)
    user = relationship("User", secondary=join_table)














    


