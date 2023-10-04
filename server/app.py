from flask import make_response, jsonify, request, session
from flask_restful import Resource

from config import app, db, api
# This line will run the config.py file and initialize our app
from models import User, BlogPost, Comment, Category
from sqlalchemy.exc import IntegrityError


class Signup(Resource):
    def post(self):

        request_json = request.get_json()

        username = request_json.get('username')
        password = request_json.get('password')
        bio = request_json.get('bio')

        user = User(
            username=username,
            bio=bio
        )

        user.password_hash = password

        try: 
            db.session.add(user)
            db.session.commit()

            session['user_id'] = user.id
            return user.to_dict(), 201
        
        except IntegrityError: 

            return {'error': "422 Unprocessable Entity"}, 422


class CheckSession(Resource):
    def get(self):
        if session.get('user_id'):
            user = User.query.filter(User.id == session['user_id']).first()
            return user.to_dict(), 200
        return {'error': '401 Unauthorized'}, 401

class Login(Resource):
    def post(self):

        request_json = request.get_json()

        username = request_json.get('username')
        password = request_json.get('password')

        user = User.query.filter(User.username == username). first()

        if user: 
            if user.authenticate(password):
                session['user_id'] = user.id
                return user.to_dict(), 200
            return {'error': '401 Unauthorized'}, 401


class Logout(Resource):
    def delete(self):
        if session.get('user_id'):
            session['user_id'] = None
            return {}, 204
        return {'error': '401 Unauthorized'}, 401

api.add_resource(Signup, '/signup', endpoint='signup')
api.add_resource(Signup, '/CheckSession', endpoint='check_session')
api.add_resource(Signup, '/login', endpoint='login')
api.add_resource(Signup, '/logout', endpoint='logout')


# @app.route('/')!!!


@app.route('/users')
def users():

    users = User.query.all()
    user_serialized = [user.to_dict() for user in users]

    response = make_response(
        jsonify(user_serialized),
        200
    )

    return response 

@app.route('/users/<int:id>', methods=['GET', 'POST', 'PATCH', 'DELETE'])
def user_by_id(id):
    user = User.query.filter_by(id=id).first()

    if request.method == 'GET':
        user_serialized = user.to_dict()
    
        return make_response(
            jsonify(user_serialized),
            200
        )
    
    elif request.method == 'POST':
        user = User(
            title = request.get.form('title'),
            blog_content = request.get.form('blog_content'),
            publication_date = request.get.form('publication_date'),
            edited_at = request.get.form('edited_at')
        )

        db.session.add(user)
        db.session.commit()

        user_dict = user.to_dict()

        response = make_response(
            jsonify(user_dict),
            201
        )

        return response
    
    elif request.method == 'PATCH':
        for attr in request.form:
            setattr(user, attr, request.form.get(attr))

            db.session.add(user)
            db.session.commit()

            user_dict = user.to_dict()

            return make_response(
                jsonify(user_dict),
                200
            )

    elif request.method == 'DELETE':
        db.session.delete(user)
        db.session.commit()

        response_dict = {'message': 'user successfully deleted'}

        return response(
            jsonify(response_dict),
            200
        )

@app.route('/blog_posts')
def blog_posts():
    blog_posts = BlogPost.query.all()
    blog_posts_serialized = [blog_post.to_dict() for blog_post in blog_posts]

    response = make_response(
        jsonify(blog_posts_serialized),
        200
    )

    return response 

@app.route('/blog_posts/<int:id>', methods=['GET', 'POST', 'PATCH', 'DELETE'])
def blog_post_by_id(id):
    blog_post = BlogPost.query.filter_by(id=id).first()

    if request.method == 'GET':
        blog_post_serialized = blog_post.to_dict()

        return make_response(
            jsonify(blog_post_serialized),
            200
        )
    
    elif request.method == 'POST':
        blog_post = BlogPost(
            title=request.form.get('title'),
            blog_content = request.form.get('blog_content'),
            publication_date = request.form.get('publication_date')
        )

        db.session.add(blog_post)
        db.session.commit()

        blog_post_dict = blog_post.to_dict()

        response = make_response(
            jsonify(blog_post_dict),
            201
        )

        return response

    elif request.method == 'PATCH':
        for attr in request.form:
            setattr(blog_post, attr, request.form.get(attr))

            db.session.add(blog_post)
            db.session.commit()

            blog_post_dict = blog_post.to_dict()

            response = make_response(
                jsonify(blog_post_dict),
                200
            )

            return response 

    elif request.method == 'DELETE': 
        db.session.delete(blog_post) 
        db.session.commit()

        response_dict = {'message': 'record successfully deleted'}

        response = make_response(
            jsonify(response_dict),
            200
        )

        return response 
    

@app.route('/comments')
def comments():

    comments = Comment.query.all()
    comment_serialized = [comment.to_dict() for comment in comments]

    return make_response(
        jsonify(comment_serialized),
        200
    )

@app.route('/comment/<int:id>', methods=['GET', 'PATCH', 'POST', 'DELETE'])
def comment_by_id(id):
    comment = Comment.query.filter_by(id=id).first()

    if request.method == 'GET':
        comment_serialized = comment.to_dict()

        return make_response(
            jsonify(comment_serialized),
            200
        )
    
    elif request.method == 'POST':
        comment = Comment(
            comment_content = request.form.get('comment_content'),
            publication_date = request.form.get('publication_date'),
            edited_at = request.form.get('edited_at')
    )

        db.session.add(comment)
        db.session.commit()

        comment_dict = comment.to_dict()

        return make_response(
            jsonify(comment_dict),
            201
        )
    
    elif request.method == 'PATCH':
        for attr in request.form:
            setattr(comment, attr, request.form.get(attr))

            db.session.add(comment)
            db.session.commit()

            comment_dict = comment.to_dict()

            return make_response(
                jsonify(comment_dict),
                200
            ) 
        
    elif request.method == 'DELETE':
        db.session.delete(comment)
        db.session.commit()

        response_dict = {'message': 'comment successfully deleted'}

        response = make_response(
            jsonify(response_dict),
            200
        )

        return response 


@app.route('/categories')
def categories():
    categories = Category.query.all()
    category_serialized = [category.to_dict() for category in categories]

    return make_response(
        jsonify(category_serialized),
        200
    )

@app.route('/category<int:id>', methods=['GET', 'POST', 'PATCH', 'DELETE'])
def category_by_id(id): 
    category = Category.query.filter_by(id=id).first()

    if request.method == 'GET':
        category_serialized = category.to_dict()

        return make_response(
            jsonify(category_serialized),
            200
        )
    
    elif request.method == 'POST':
        category = Category(
            name = request.form.get('name'),
            description = request.form.get('description')
        )

        db.session.add(category)
        db.session.commit()

        category_dict = category.to_dict()

        return make_response(
            jsonify(category_dict),
            201
        )
    
    elif request.method == 'PATCH':
        for attr in request.form:
            setattr(category, attr, request.form.get(attr))

            db.session.add(category)
            db.session.commit()

            category_dict = category.to_dict()

            return make_response(
                jsonify(category_dict),
                200
            )
        
    elif request.method == 'DELETE':
        db.session.delete(category)
        db.session.commit()

        response_dict = {'message': 'category successfully deleted'}

        return make_response(
            jsonify(response_dict),
            200
        )


if __name__ == '__main__':
    app.run(port=5555, debug=True)