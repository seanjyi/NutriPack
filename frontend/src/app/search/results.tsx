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
            "dietaryList": ["Vegetarian", "Vegan", "Halal", "Wolf Approved"],
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
            "dietaryList": ["Pork"],
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
        }
    }


    if (!data) {
        return <p>No results to display</p>
    }
    return (
        <>
        <table>
            <tr className="border-b-2">
                <th className="w-[256px] text-start">Item</th>
                <th className="w-[100px] text-start">Calories</th>
                <th className="w-[512px] text-start">Dietary Restrictions</th>
            </tr>
            {
                Object.keys(mockData).map((key) => {
                    const foodItem = mockData[key as keyof typeof mockData];
                    return (
                        <>
                        <tr>
                            <td>{key}</td>
                            <td>{foodItem.calories}</td>
                            <td>{foodItem.dietaryList.join(", ")}</td>
                        </tr>
                        </>
                    )
                })
            }
        </table>
        </>
    );
}
