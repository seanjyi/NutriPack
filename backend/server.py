from datetime import datetime
import pandas as pd
from food import Food
from user import User
from flask import Flask, request, jsonify
 
server = Flask(__name__)

# initial setup
foods = pd.DataFrame(columns=["meal_session", "meal_date", "location", "servingSize", "calories", "protein", "totalCarbohydrate", "totalFat", "saturatedFat", "transFat", "fiber", "sodium", "diet_violation", "allergen_violation", "nutrient_violation", "special_violation", "ingredients"])

# add food to dataframe

user_db = {}
user_db['sjyi'] = User('sjyi')

# USER ENDPOINTS

# weekly calorie intake, last 5 meals, weekly avg 
@server.route('/user/meal/<user>', methods=["GET"])
def get_user_meals(user):
    return user_db[user].toJson()

@server.route('/user/meal/<user>', methods=["POST"])
def add_user_meal(user):
    new_meal = request.get_json()
    name = set(new_meal).pop()
    meal_session = new_meal[name]['meal_session']
    meal_date = new_meal[name]['meal_date']
    serving_size = new_meal[name]['servingSize']
    calories = new_meal[name]['calories']
    protein = new_meal[name]['protein']
    carbohydrates = new_meal[name]['totalCarbohydrate']
    total_fat = new_meal[name]['totalFat']

    user_db[user].add_meal(meal_session, meal_date, serving_size, calories, protein, carbohydrates, total_fat)

    return jsonify(success=True)

# SEARCH ENDPOINTS
def violations(vioation_search):
    for i in req[vioation_search]:
        if i in data[vioation_search].tolist()[0]:
            return True
    return False

@server.route('/search', methods=["POST"])
def food_search():
    search_req = request.get_json()

    data = foods[(pd.to_datetime(foods['meal_date']) == pd.to_datetime(search_req['date'])) & (foods['meal_session'] == search_req['meal_time'])]

    # take out any foods that don't exist
    if req['location']:
        data = data[data['location']==req['location']]
    for d_violation in ['diet_violation', 'allergen_violation', 'nutrient_violation']: 
        data['to_delete'] = data.apply(lambda x: violations(d_violation), axis=1)
        data = data[data['to_delete'] == False]

    data = data.reset_index(drop=True)
    return data.to_json(orient='records')

if __name__ == '__main__':
    server.run()