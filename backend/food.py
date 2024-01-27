class Food:
    def __init__(self, name, location, meal_session, meal_date, serving_size, calories, protein, carbohydrates, 
                 total_fat, saturated_fat, trans_fat, fiber, sodium, diet_violation, allergen_violation,
                 nutrient_violation, special_violation, ingredients):
        self.name = name
        self.location = location
        self.meal_session = meal_session
        self.meal_date = meal_date
        self.serving_size = serving_size
        self.calories = calories
        self.protein = protein
        self.carbohydrates = carbohydrates
        self.total_fat = total_fat
        self.saturated_fat = saturated_fat
        self.trans_fat = trans_fat
        self.fiber = fiber
        self.sodium = sodium
        self.diet_violation = diet_violation
        self.allergen_violation = allergen_violation
        self.nutrient_violation = nutrient_violation
        self.special_violation = special_violation
        self.ingredients = ingredients