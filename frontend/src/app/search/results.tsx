"use client"

interface ResultsTableProps {
    data: any
}

export function ResultsTable(props: ResultsTableProps) {
    const { data } = props;
    const mockData = {
        "Lentils with Pineapple" : {
            "servingSize": "SERVING (1/2 cup)",
            "calories": 151.9,
            "protein": 10.1,
            "totalCarbohydrate": 23.2,
            "totalFat": 2.7,
            "saturatedFat": 0.2,
            "transFat": 0,
            "fiber": 7.7,
            "sodium": 55.7,
            "diet_violation": ["Vegetarian", "Vegan", "Halal"],
            "allergen_violation" : [],
            "nutrient_violation" : [],
            "special_violation" : [],
            "ingredients": [
                "Lentils",
                "Pineapple",
                "Yellow Onion",
                "Canola Oil",
                "Garlic",
                "Salt Kosher",
                "Black Pepper",
                "Water"
            ],
            "location" : "Fountain",
            "time" : "Lunch"
        },
        "Dijon Rosemary Pork Loin" : {
            "servingSize": "Serving",
            "calories": 244.8,
            "protein": 32.7,
            "totalCarbohydrate": 0,
            "totalFat": 11.5,
            "saturatedFat": 4,
            "fiber": 0,
            "sodium": 589.2,
            "diet_violation": ["Pork"],
            "allergen_violation" : [],
            "nutrient_violation" : ["Low Protein"],
            "special_violation" : [],
            "ingredients": [
                "Pork Loin",
                "Dijon Mustard",
                "Distilled White Vinegar", 
                "Mustard Seed", 
                "Water", 
                "Salt", 
                "White Wine", 
                "Citric Acid", 
                "Tartaric Acid", 
                "Fruit Pectin", 
                "Sugar", 
                "Spices",
                "Salt Kosher",
                "Rosemary",
                "Black Pepper"
            ],
            "location" : "Fountain",
            "time" : "Lunch"
        },
        "Fresh Broccoli": {
            "servingSize": "SERVING",
            "calories": 30.4,
            "protein": 2.7,
            "totalCarbohydrate": 5.4,
            "totalFat": 0.3,
            "saturatedFat": 0,
            "transFat": 0,
            "fiber": 2,
            "sodium": 287.7,
            "diet_violation": ["Vegetarian", "Vegan", "Halal"],
            "allergen_violation" : [],
            "nutrient_violation" : [],
            "special_violation" : [],
            "ingredients": [
                "Broccoli",
                "Salt Kosher",
                "White Pepper"
            ],
            "location": "Fountain",
            "meal_session": "Lunch",
            "meal_date": "1/26/2024"
        },
        "Roasted Eggplant, Tomato, & Olives": {
            "servingSize": "serving",
            "calories": 82.7,
            "protein": 1.1,
            "totalCarbohydrate": 4.9,
            "totalFat": 6.8,
            "saturatedFat": 1,
            "transFat": 0,
            "fiber": 1.7,
            "sodium": 279.5,
            "diet_violation": ["Vegetarian", "Vegan", "Halal"],
            "allergen_violation" : [],
            "nutrient_violation" : [],
            "special_violation" : [],
            "ingredients": [
                 "Eggplant",
                "Heirloom Tomatoes",
                "Red Onion",
                "Blended Olive Oil",
                "Canola Oils",
                "Kalamata Olives", 
                "Red Wine Vinegar", 
                "Olive Oil",
                "Garlic",
                "Salt Kosher",
                "Oregano",
                "Black Pepper",
                "Parsley",
                "Basil"
            ],
            "location": "Fountain",
            "meal_session": "Lunch",
            "meal_date": "1/26/2024"
        },
        "Roasted Root Vegetables": {
            "servingSize": "Serving (1/2 cup)",
            "calories": 61,
            "protein": 1.1,
            "totalCarbohydrate": 10.9,
            "totalFat": 1.8,
            "saturatedFat": 0.3,
            "transFat": 0,
            "fiber": 2.8,
            "sodium": 142.5,
            "diet_violation": ["Vegetarian", "Vegan", "Halal"],
            "allergen_violation" : [],
            "nutrient_violation" : [],
            "special_violation" : [],
            "ingredients": [
                "Carrot",
                "Turnip",
                "Butternut Squash",
                "Parsnips",
                "Red Onion",
                "Blended Olive Oil",
                "Thyme",
                "Salt Kosher"
            ],
            "location": "Fountain",
            "meal_session": "Lunch",
            "meal_date": "1/26/2024"
        },
        "French Fries": {
            "servingSize": "SERVING (2/3 cup)",
            "calories": 379.1,
            "protein": 4.5,
            "totalCarbohydrate": 43.1,
            "totalFat": 21.5,
            "saturatedFat": 4,
            "transFat": 0,
            "fiber": 4.5,
            "sodium": 1109.6,
            "diet_violation": ["Vegetarian", "Vegan", "Halal"],
            "allergen_violation" : ["Peanuts"],
            "nutrient_violation" : [],
            "special_violation" : [],
            "ingredients": [
                "French Fries", 
                "Potatoes", 
                "Vegetable Oil", 
                "Canola Oil", 
                "Sunflower Oil", 
                "Cottonseed Oil", 
                "Palm Oil", 
                "Corn Oil", 
                "Soybean Oil", 
                "Disodium Dihydrogen Pyrophosphate", 
                "Dextrose",
                "Shortening", 
                "Soybean Oil", 
                "TBHQ", 
                "Dimethylpolysiloxane",
                "Salt Kosher"
            ],
            "location": "Fountain",
            "meal_session": "Lunch",
            "meal_date": "1/26/2024"
        },
        "Hamburger Bun": {
            "servingSize": "Each",
            "calories": 143.6,
            "protein": 4.1,
            "totalCarbohydrate": 27.7,
            "totalFat": 1.5,
            "saturatedFat": 0,
            "transFat": 0,
            "fiber": 1,
            "sodium": 276.9,
            "diet_violation": ["Vegetarian", "Gluten Allergen", "Soy Allergen", "Sesame Allergen"],
            "allergen_violation" : [],
            "nutrient_violation" : [],
            "special_violation" : [],
            "ingredients": [
                "Unbleached Enriched Wheat Flour", 
                "Flour", 
                "Malted Barley Flour", 
                "Niacin", 
                "Reduced Iron", 
                "Thiamin Mononitrate", 
                "Riboflavin", 
                "Folic Acid",
                "Water",
                "High Fructose Corn Syrup",
                "Yeast",
                "Wheat Gluten",
                "Vegetable Oil (Soybean and/or Canola Oil)",
                "Salt",
                "Dough Conditioners (Sodium Stearoyl Lactylate, Calcium Stearoyl-2-Lactylate, Monoglycerides, Calcium Peroxide, DATEM)",
                "Soy Flour",
                "Calcium Sulfate",
                "Calcium Propionate",
                "Monocalcium Phosphate",
                "Yeast Food (Ammonium Sulfate)",
                "Sesame Seeds"
            ],
            "location": "Fountain",
            "meal_session": "Lunch",
            "meal_date": "1/26/2024"
        },
        "Cheeseburger Patty": {
            "servingSize": "SERVING (1 burger)",
            "calories": 229.2,
            "protein": 20,
            "totalCarbohydrate": 0.5,
            "totalFat": 16.1,
            "saturatedFat": 6.9,
            "transFat": 0.8,
            "fiber": 0,
            "sodium": 318.4,
            "diet_violation": ["Dairy Allergen", "Soy Allergen"],
            "allergen_violation" : [],
            "nutrient_violation" : [],
            "special_violation" : [],
            "ingredients": [
                "Beef Patty (beef)",
                "American Cheese", 
                "Cultured Milk And Skim Milk", 
                "Water", 
                "Cream", 
                "Sodium Citrate", 
                "Salt", 
                "Sodium Phosphate", 
                "Sorbic Acid (Preservative)", 
                "Citric Acid", 
                "Acetic Acid", 
                "Enzymes", 
                "Soy Lecithin", 
                "Artificial Color"
            ],
            "location": "Fountain",
            "meal_session": "Lunch",
            "meal_date": "1/26/2024"
        }
    }


    if (!data) {
        return <p>No results to display</p>
    }
    return (
        <>
        <table>
            <tr className="border-b-4">
                <th className="w-[256px] text-start">Item</th>
                <th className="w-[100px] text-start">Calories</th>
                <th className="w-[100px] text-start">Protein</th>
                <th className="w-[100px] text-start">Fats</th>
                <th className="w-[100px] text-start">Carbs</th>
                <th className="w-[512px] text-start">Dietary Information</th>
            </tr>
            {
                Object.keys(mockData).map((key) => {
                    const foodItem = mockData[key as keyof typeof mockData];
                    return (
                        <>
                        <tr className="border-b-2">
                            <td>{key}</td>
                            <td>{Math.round(foodItem.calories)}</td>
                            <td>{Math.round(foodItem.protein)}</td>
                            <td>{Math.round(foodItem.totalFat)}</td>
                            <td>{Math.round(foodItem.totalCarbohydrate)}</td>
                            <td>{foodItem.diet_violation.concat(foodItem.allergen_violation).concat(foodItem.nutrient_violation).join(", ")}</td>
                        </tr>
                        </>
                    )
                })
            }
        </table>
        </>
    );
}
