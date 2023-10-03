# cookies, authentication logic, password protection. 


from flask import make_response, jsonify, request
# from flask_restful import Resource

from config import app, db, api # This line will run the config.py file and initialize our app
from models import User, BlogPost, Comment, Category

# All routes here!
# Using app.route()

# class Signup(Resource)

# class CheckSession(Resource):

# class Login(Resource):

# class Logout(Resource):

# @app.route('/')

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
            # Is publication date automatically generated? 
        )

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

if __name__ == '__main__':
    app.run(port=5555, debug=True)