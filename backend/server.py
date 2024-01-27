import food
from flask import Flask, request
 
server = Flask(__name__)

# temp dict variable; k: user, v: array of meals 
database = {}

# USER ENDPOINTS
@server.route('/user/meal', methods=["GET"])
def get_user_meals():
    return ""

@server.route('/user/meal', methods=["POST"])
def add_user_meal():
    new_meal = request.get_json()
    return search_req

# SEARCH ENDPOINTS
@server.route('/search', methods=["POST"])
def food_search():
    search_req = request.get_json()
    return search_req

if __name__ == '__main__':
    server.run()