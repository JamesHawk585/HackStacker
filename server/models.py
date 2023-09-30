from sqlalchemy.ext.hybrid import hybrid_property
from sqlalchemy_serializer import SerializerMixin

from config import db, bcrypt

class User(db.model, SerializerMixin):

    # Ignore relationship as well
    serialize_rules = ('-_password_hash',)

    __tablename__ = 'user'
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String, unique=True, nullable=False)
    _password_hash = db.Column(db.String)
    bio = db.Column(db.String)

    # Relationship logic goes here 

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
    

class blog_posts(db.Model, SerializerMixin):
    __tablename__ = 'blog_post'
    # Add contraints? 
    id = db.Colum(db.Integer, primary_key=True)
    title = db.Column(db.String)
    publication_date = db.Column(db.DateTime, server_default=db.func.nom())
    edited_at = db.Column(db.DateTime, onupdate=db.func.now())
    
    # comments = foreign_key relationship to comment

class Comment(db.model, SerializerMixin):
    __tablename__ = 'comment'
    id = db.Column(id.Integer, primary_key=True)
    comment_content = db.Column(db.String)
    publication_date = db.Column(db.DateTime, server_default=db.func.nom())
    edited_at = db.Column(db.DateTime, onupdate=db.func.now())

    # user = foreign_key relationship to user
    # associate_blog_post = foreign_key relationship to blog_post






    


