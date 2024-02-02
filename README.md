# NutriPack - Sustainable nutrition starts here

NutriPack is an application aimed to solve student's nutrition and dining hall food waste. Students of Computer Science, Statistics, and Food Science came together for NC State's [Make-A-Thon](https://sustainability.ncsu.edu/get-involved/events/makeathon/).

<img src="https://github.com/seanjyi/NutriPack/assets/80228469/c05da460-83b1-49ee-a308-97f4f065c305" width="800">

[NutriPack Slides](https://github.com/seanjyi/NutriPack/blob/main/NutriPack%20Slide%20Deck.pdf)
## Team members
[Nik Gudmundsson](https://www.linkedin.com/in/nikgudmundsson/), [Abel Lu](https://www.linkedin.com/in/aluprof4/), [Alex Swanson-Boyd](https://www.linkedin.com/in/alexswansonboyd/), [Sean Yi](https://www.linkedin.com/in/seanjyi/)

### Application Tools

We used **Docker** to run two containers: backend and frontend. Backend implemented **Flask** for api endpoints, the **Pandas** to manipulate dining hall data, and **Beautiful Soup** for web scraping real time dining hall menus. Frontend utilized **Next.js**.  

To run the application clone the repo and then run the following command:
> docker-compose up --build --force-recreate

### Landing Page
<img src="https://github.com/seanjyi/NutriPack/assets/80228469/b4010788-b9f9-47c9-9eef-31d9fb601876" width="800">  

### Nutrition Page
Tracks the user's data so that they can make informed decisions. User would be able to easily add dining hall meals, or add outside meals as well. The user data would be the following:  

- Daily calories, protein, carbohydrates, total fats
- Past 14 day's trend of caloric intake
- Protein, carbs, total fats from most recent meals
  
<img src="https://github.com/seanjyi/NutriPack/assets/80228469/bf54f219-7738-49bd-a779-049b620007e3" width="800">  

### Sustainability Page
Through comparing the amount of meals reported by users with the amount of food produced, dining halls could be informed of the projected carbon output from food usage and food waste. Metrics that would be tracked:
- Totals meals and servings reported
- Project carbon output
- Total servings based off dining halls food category by the past 7 days
- Popular foods of the week

<img src="https://github.com/seanjyi/NutriPack/assets/80228469/986dc1a6-78c6-44c4-97a8-dac77be269e0" width="800">  

### Search Page
Search page for students to find meals within the dining halls according to their diet, allergens, and nutrients. 

<img src="https://github.com/seanjyi/NutriPack/assets/80228469/f44b8132-8cf4-45b9-a238-7dee19cf01e9" width="800">  
