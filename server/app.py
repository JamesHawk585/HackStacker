from flask import make_response, jsonify, request
# from flask_restful import Resource

from config import app, db 
# This line will run the config.py file and initialize our app
from models import User, BlogPost, Comment, Category

# All routes here!
# Using app.route()

# class Signup(Resource)

# class CheckSession(Resource):

# class Login(Resource):

# class Logout(Resource):

# @app.route('/')


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
                # I think 200 is correct here? 
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

# Category routes here 

if __name__ == '__main__':
    app.run(port=5555, debug=True)