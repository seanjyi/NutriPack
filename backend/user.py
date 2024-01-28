# total calorie, protien, fat per day
# past 14 day calories
# past 5 meals sessions
import pandas as pd

class User:
    def __init__(self, name):
        self.name = name
        self.meals = pd.DataFrame(columns=['meal_date', 'meal_session', 'calories', 'protein', 'carbohydrates', 'total_fat'])
    
    def add_meal(self, meal_session, meal_date, serving_size, calories, protein, carbohydrates, total_fat):
        new_meal = pd.DataFrame([{
            'meal_date': meal_date, 
            'meal_session': meal_session, 
            'calories': calories, 
            'protein': protein, 
            'carbohydrates': carbohydrates, 
            'total_fat': total_fat
        }])

        self.meals = pd.concat([self.meals, new_meal])

    def toJson(self):
        self.meals.group_by('meal_date')

        return {
            'total_day_stats': {

            },
            'past_biweek_calories': [],
            'past_five': []
        }