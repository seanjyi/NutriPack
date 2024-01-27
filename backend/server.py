from food import Food
from flask import Flask, request, jsonify
 
server = Flask(__name__)

# temp dict variable; k: user, v: array of meals 
database = {}

# USER ENDPOINTS
@server.route('/user/meal', methods=["GET"])
def get_user_meals():
    return ""

@server.route('/user/meal/<user>', methods=["POST"])
def add_user_meal(user):
    new_meal = request.get_json()
    name = set(new_meal).pop()
    location = new_meal[name]['location']
    meal_session = new_meal[name]['meal_session']
    meal_date = new_meal[name]['meal_date']
    serving_size = new_meal[name]['servingSize']
    calories = new_meal[name]['calories']
    protein = new_meal[name]['protein']
    carbohydrates = new_meal[name]['totalCarbohydrate']
    total_fat = new_meal[name]['totalFat']
    saturated_fat = new_meal[name]['saturatedFat']
    trans_fat = new_meal[name]['transFat']
    fiber = new_meal[name]['fiber']
    sodium = new_meal[name]['sodium']
    diet_violation = new_meal[name]['diet_violation']
    allergen_violation = new_meal[name]['allergen_violation']
    nutrient_violation = new_meal[name]['nutrient_violation']
    special_violation = new_meal[name]['special_violation']
    ingredients = new_meal[name]['ingredients']

    new_food = Food(name, location, meal_session, meal_date, serving_size, calories, protein, carbohydrates, total_fat, saturated_fat, trans_fat, fiber, sodium, diet_violation, allergen_violation, nutrient_violation, special_violation, ingredients)

    if user in database:
        database[user].append(new_food)
    else:
        database[user] = [new_food]

    return jsonify(success=True)

# SEARCH ENDPOINTS
@server.route('/search', methods=["POST"])
def food_search():
    search_req = request.get_json()
    return search_req

if __name__ == '__main__':
    server.run()