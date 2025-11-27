var recipesList = [
    {
        image_alt: "gourmet spaghetti carbonara pasta dish, professional food photography, appetizing",
        image: "https://images.unsplash.com/photo-1612874742237-6526221588e3?q=80&w=800&auto=format&fit=crop",
        prepTime: 15,
        cookTime: 20,
        servings: "4 people",
        ratingsAvg: 4.8,
        ratingsQuantity: 234,
        difficulty: "Easy",
        category: "Italian",
        name: "Creamy Spaghetti Carbonara",
        description: "A classic Italian pasta dish with eggs, cheese, and pancetta",
        ingredients: ["400g spaghetti pasta", "200g pancetta or guanciale, diced", "4 large eggs", "100g Pecorino Romano cheese, grated", "50g Parmesan cheese, grated", "Freshly ground black pepper", "Salt for pasta water"],
        instructions: ["Bring a large pot of salted water to boil. Cook spaghetti according to package directions until al dente.", "While pasta cooks, heat a large skillet over medium heat. Add diced pancetta and cook until crispy, about 5-7 minutes.", "In a bowl, whisk together eggs, grated Pecorino Romano, and Parmesan cheese. Add plenty of freshly ground black pepper.", "Reserve 1 cup of pasta cooking water before draining. Drain pasta and immediately add to the skillet with pancetta.", "Remove skillet from heat. Quickly pour in egg mixture while tossing pasta vigorously. Add reserved pasta water as needed to create a creamy sauce.", "Serve immediately with extra cheese and black pepper on top. Enjoy your authentic carbonara!"],
        nutrition: {
            calories: "520 kcal",
            protein: "28g",
            carbs: "62g",
            fat: "18g",
            fiber: "3g",
            sodium: "680mg"
        },
        tips: [
            "Use room temperature eggs for a smoother sauce consistency",
            "Work quickly when mixing eggs with hot pasta to avoid scrambling",
            "Reserve extra pasta water - it's the secret to perfect creaminess",
            "Freshly grated cheese makes all the difference in flavor",
            "Never add cream - authentic carbonara is made with eggs only",
            "Use high-quality pancetta or guanciale for better flavor"
        ]
    },

    {
        name: "Chicken Tikka Masala",
        category: "Indian",
        image_alt: "fresh chicken tikka masala served with rice, flavorful Indian curry",
        image: "https://sizzlingpots.com/wp-content/uploads/2020/08/Chicken-Tikka-Masala-scaled.jpg",
        prepTime: 20,
        cookTime: 35,
        servings: "4 people",
        ratingsAvg: 4.7,
        ratingsQuantity: 180,
        difficulty: "Medium",
        description: "Tender chicken pieces cooked in a creamy spiced tomato sauce",
        ingredients: ["500g chicken breast, diced", "150g yogurt", "2 tbsp tikka masala spice mix", "1 onion, chopped", "3 garlic cloves, minced", "1 inch ginger, grated", "400g canned tomatoes", "200ml cream", "Salt and pepper", "Fresh coriander for garnish"],
        instructions: ["Marinate chicken in yogurt and tikka masala spice mix for at least 30 minutes.", "Heat oil in a skillet and sauté onion, garlic, and ginger until fragrant.", "Add marinated chicken and cook until slightly browned.", "Pour in canned tomatoes and simmer for 15-20 minutes.", "Stir in cream and cook for another 5 minutes until sauce thickens.", "Garnish with fresh coriander and serve with rice or naan."],
        nutrition: { calories: "450 kcal", protein: "35g", carbs: "20g", fat: "25g", fiber: "3g", sodium: "700mg" },
        tips: [
            "Marinate chicken overnight for deeper flavor",
            "Use fresh spices for the best aroma",
            "Adjust cream for desired sauce richness",
            "Roast spices lightly before using to enhance flavor",
            "Use chicken thighs instead of breasts for juicier texture"
        ]
    },

    {
        name: "Vegetable Tofu Stir Fry",
        category: "Chinese",
        image_alt: "colorful vegetable stir fry with tofu served on white plate",
        image: "https://jessicainthekitchen.com/wp-content/uploads/2022/07/Vegan-Stir-Fry01030.jpg",
        prepTime: 10,
        cookTime: 15,
        servings: "2 people",
        ratingsAvg: 4.5,
        ratingsQuantity: 95,
        difficulty: "Easy",
        description: "Quick and healthy stir-fried vegetables with tofu in a savory sauce",
        ingredients: ["200g firm tofu, cubed", "1 bell pepper, sliced", "1 carrot, julienned", "100g broccoli florets", "2 tbsp soy sauce", "1 tbsp sesame oil", "2 garlic cloves, minced", "1 tsp ginger, grated", "1 tsp cornstarch mixed with 2 tbsp water"],
        instructions: ["Heat sesame oil in a wok over medium-high heat.", "Add garlic and ginger, sauté until fragrant.", "Add tofu cubes and cook until golden brown.", "Add vegetables and stir fry for 5-7 minutes until tender-crisp.", "Pour in soy sauce and cornstarch mixture, cook until sauce thickens.", "Serve hot with steamed rice or noodles."],
        nutrition: { calories: "300 kcal", protein: "18g", carbs: "25g", fat: "12g", fiber: "5g", sodium: "550mg" },
        tips: [
            "Press tofu to remove excess water for better texture",
            "Keep vegetables crisp by stir-frying on high heat",
            "Adjust soy sauce to taste",
            "Use a very hot wok for authentic stir-fry flavor",
            "Add chili flakes for extra spice"
        ]
    },

    {
        name: "Classic Cheeseburger",
        category: "American",
        image_alt: "classic beef burger with cheese, lettuce and tomato",
        image: "https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=800&auto=format&fit=crop",
        prepTime: 15,
        cookTime: 10,
        servings: "2 people",
        ratingsAvg: 4.6,
        ratingsQuantity: 210,
        difficulty: "Easy",
        description: "Juicy beef burger with melted cheese, lettuce, and tomato",
        ingredients: ["2 burger buns", "250g ground beef", "2 slices cheddar cheese", "Lettuce leaves", "Tomato slices", "Salt and pepper", "1 tbsp oil"],
        instructions: ["Shape beef into patties, season with salt and pepper.", "Heat oil in a skillet over medium-high heat.", "Cook patties 4-5 minutes each side.", "Place cheese slices on top of patties to melt.", "Assemble burgers with buns, lettuce, tomato, and cooked patties."],
        nutrition: { calories: "600 kcal", protein: "30g", carbs: "40g", fat: "35g", fiber: "3g", sodium: "750mg" },
        tips: [
            "Use freshly ground beef for juicier patties",
            "Toast buns lightly for extra crunch",
            "Do not press the patty while cooking to avoid losing juices",
            "Let patties rest for 2 minutes before assembling",
            "Use caramelized onions for richer flavor"
        ]
    },

    {
        name: "Baked Lemon Herb Salmon",
        category: "Norwegian",
        image_alt: "fresh salmon fillet with lemon and herbs on plate",
        image: "https://www.nourish-and-fete.com/wp-content/uploads/2022/09/lemon-herb-salmon-2-1024x1536.webp",
        prepTime: 10,
        cookTime: 20,
        servings: "2 people",
        ratingsAvg: 4.9,
        ratingsQuantity: 130,
        difficulty: "Easy",
        description: "Tender salmon fillet baked with lemon and fresh herbs",
        ingredients: ["2 salmon fillets", "1 lemon, sliced", "2 tsp olive oil", "Salt and pepper", "Fresh dill or parsley"],
        instructions: ["Preheat oven to 200°C (400°F).", "Place salmon on baking sheet, drizzle with olive oil, season with salt, pepper and herbs.", "Top with lemon slices.", "Bake for 15-20 minutes until cooked through.", "Serve immediately with side vegetables."],
        nutrition: { calories: "350 kcal", protein: "32g", carbs: "0g", fat: "22g", fiber: "0g", sodium: "400mg" },
        tips: [
            "Do not overcook salmon for tender texture",
            "Fresh herbs enhance flavor",
            "Use parchment paper to avoid sticking",
            "Add garlic for extra aroma",
            "Allow salmon to rest 2 minutes before serving"
        ]
    },

    {
        name: "Mushroom Risotto",
        category: "Italian",
        image_alt: "creamy mushroom risotto served in bowl",
        image: "https://cdn77-s3.lazycatkitchen.com/wp-content/uploads/2019/11/vegan-mushroom-risotto-close-800x1200.jpg",
        prepTime: 20,
        cookTime: 25,
        servings: "3 people",
        ratingsAvg: 4.7,
        ratingsQuantity: 110,
        difficulty: "Medium",
        description: "Creamy risotto with sautéed mushrooms and Parmesan",
        ingredients: ["200g Arborio rice", "250g mushrooms, sliced", "1 onion, chopped", "2 garlic cloves, minced", "750ml vegetable stock", "50g Parmesan cheese, grated", "2 tbsp butter", "Salt and pepper"],
        instructions: ["Heat butter in a pan, sauté onion and garlic.", "Add mushrooms and cook until soft.", "Add rice and toast for 1-2 minutes.", "Gradually add stock, stirring frequently until rice is creamy and cooked.", "Stir in Parmesan, season, and serve."],
        nutrition: { calories: "420 kcal", protein: "12g", carbs: "60g", fat: "15g", fiber: "4g", sodium: "600mg" },
        tips: [
            "Stir constantly for creamy texture",
            "Use fresh Parmesan for best flavor",
            "Warm the stock before adding for best absorption",
            "Do not rush — risotto needs slow cooking",
            "Add a splash of white wine for depth"
        ]
    },

    {
        name: "Greek Salad",
        category: "Greek",
        image_alt: "fresh greek salad with feta, olives, cucumber, and tomatoes",
        image: "https://cdn.loveandlemons.com/wp-content/uploads/2019/07/greek-salad-2-786x1024.jpg",
        prepTime: 20,
        cookTime: 0,
        servings: "2 people",
        ratingsAvg: 4.5,
        ratingsQuantity: 80,
        difficulty: "Easy",
        description: "Fresh and healthy salad with feta cheese, olives, and vegetables",
        ingredients: ["1 cucumber, diced", "2 tomatoes, chopped", "50g feta cheese, crumbled", "10 black olives", "1/2 red onion, thinly sliced", "2 tbsp olive oil", "1 tsp oregano", "Salt and pepper"],
        instructions: ["Combine cucumber, tomatoes, olives, and onion in a bowl.", "Add crumbled feta.", "Drizzle with olive oil, sprinkle oregano, season with salt and pepper.", "Toss gently and serve."],
        nutrition: { calories: "220 kcal", protein: "6g", carbs: "10g", fat: "18g", fiber: "3g", sodium: "450mg" },
        tips: [
            "Use fresh vegetables for best flavor",
            "Serve chilled",
            "Add a squeeze of lemon for brightness",
            "Use high-quality olive oil for richer taste",
            "Do not overmix to avoid breaking the feta"
        ]
    },

    {
        name: "BBQ Baked Chicken Wings",
        category: "American",
        image_alt: "crispy baked chicken wings with BBQ sauce on plate",
        image: "https://dinnerthendessert.com/wp-content/uploads/2019/11/BBQ-Chicken-Wings-4x3-1.jpg",
        prepTime: 10,
        cookTime: 25,
        servings: "3 people",
        ratingsAvg: 4.8,
        ratingsQuantity: 150,
        difficulty: "Easy",
        description: "Crispy chicken wings baked with tangy BBQ sauce",
        ingredients: ["500g chicken wings", "3 tbsp BBQ sauce", "1 tsp paprika", "1 tsp garlic powder", "Salt and pepper"],
        instructions: ["Preheat oven to 200°C (400°F).", "Season wings with paprika, garlic powder, salt and pepper.", "Place on baking sheet and bake for 20 minutes.", "Brush with BBQ sauce and bake another 5 minutes.", "Serve hot."],
        nutrition: { calories: "400 kcal", protein: "28g", carbs: "8g", fat: "28g", fiber: "1g", sodium: "700mg" },
        tips: [
            "Pat wings dry for extra crispiness",
            "Use homemade BBQ sauce for richer flavor",
            "Bake on a wire rack for even crispiness",
            "Flip wings halfway through for even cooking",
            "Broil for 2 minutes at the end for extra caramelization"
        ]
    },

    {
        name: "Classic Pancakes",
        category: "American",
        image_alt: "classic pancakes stacked with syrup and berries",
        image: "https://www.pamperedchef.com/iceberg/com/recipe/1307769-lg.jpg",
        prepTime: 10,
        cookTime: 15,
        servings: "2 people",
        ratingsAvg: 4.6,
        ratingsQuantity: 140,
        difficulty: "Easy",
        description: "Fluffy pancakes served with maple syrup and fresh berries",
        ingredients: ["100g flour", "1 egg", "150ml milk", "1 tsp baking powder", "1 tbsp sugar", "Pinch of salt", "Butter for cooking", "Maple syrup and berries for serving"],
        instructions: ["Mix flour, baking powder, sugar, and salt.", "Whisk in egg and milk until smooth batter forms.", "Heat butter in a pan over medium heat.", "Pour batter to form pancakes, cook until bubbles form, then flip.", "Serve with maple syrup and fresh berries."],
        nutrition: { calories: "350 kcal", protein: "8g", carbs: "55g", fat: "10g", fiber: "2g", sodium: "250mg" },
        tips: [
            "Do not overmix batter for fluffy pancakes",
            "Cook on medium heat to avoid burning",
            "Let batter rest 5 minutes before cooking",
            "Use a non-stick pan for best results",
            "Flip only once for perfect texture"
        ]
    },

    {
        name: "Chocolate Lava Cake",
        category: "French",
        image_alt: "chocolate lava cake with molten center on plate",
        image: "https://www.melskitchencafe.com/wp-content/uploads/2023/01/updated-lava-cakes8-1059x1536.webp",
        prepTime: 15,
        cookTime: 12,
        servings: "2 people",
        ratingsAvg: 4.9,
        ratingsQuantity: 90,
        difficulty: "Medium",
        description: "Rich chocolate cake with a molten center",
        ingredients: ["100g dark chocolate", "50g butter", "1 egg", "25g sugar", "20g flour", "Butter for greasing", "Cocoa powder for dusting"],
        instructions: ["Preheat oven to 200°C (400°F).", "Melt chocolate and butter together.", "Whisk egg and sugar until fluffy.", "Fold chocolate mixture into eggs, then add flour.", "Grease ramekins, dust with cocoa powder, pour batter.", "Bake 10-12 minutes until edges set and center is soft.", "Serve immediately."],
        nutrition: { calories: "450 kcal", protein: "6g", carbs: "45g", fat: "28g", fiber: "4g", sodium: "150mg" },
        tips: [
            "Serve immediately for molten center",
            "Use high-quality chocolate for best taste",
            "Do not overbake or the center will set",
            "Dust with powdered sugar for presentation",
            "Chill the batter before baking for better contrast"
        ]
    }
];





function getRandomRecipe() {
    var randomNumber = Math.floor(Math.random() * recipesList.length);
    document.getElementById("recipe-image").src = recipesList[randomNumber].image;
    document.getElementById("recipe-image").alt = recipesList[randomNumber].image_alt;
    document.getElementById("ratings-avg").innerHTML = recipesList[randomNumber].ratingsAvg;
    document.getElementById("ratings-quantity").innerHTML = `( ${recipesList[randomNumber].ratingsQuantity} reviews )`;
    document.getElementById("prep-time-number").innerHTML = `${recipesList[randomNumber].prepTime} min`;
    document.getElementById("cook-time-number").innerHTML = `${recipesList[randomNumber].cookTime} min`;
    document.getElementById("servings-number").innerHTML = recipesList[randomNumber].servings;
    /*right side*/
    document.getElementById("recipe-name").innerHTML = recipesList[randomNumber].name;
    document.getElementById("recipe-description").innerHTML = recipesList[randomNumber].description;
    document.getElementById("difficulty-level").innerHTML = recipesList[randomNumber].difficulty;
    document.getElementById("category").innerHTML = recipesList[randomNumber].category;
    if (recipesList[randomNumber].cookTime + recipesList[randomNumber].prepTime >= 45) {
        document.getElementById('time-warning').classList.add('d-block')
        document.getElementById('time-warning').classList.remove('d-none');
    }
    else {
        document.getElementById('time-warning').classList.add('d-none')
        document.getElementById('time-warning').classList.remove('d-block');
    }

    addIngredients(randomNumber);
    addInstructions(randomNumber);
    addTips(randomNumber);
    addNutrition(randomNumber);
}


function addIngredients(recipeIndex) {
    ingredientsList = document.getElementById('ingredients-list');
    var box = ``;
    for (var i = 0; i < recipesList[recipeIndex].ingredients.length; i++) {
        box += `
        
        <li class="d-flex justify-content-start">
                                                <div
                                                    class="icon-container rounded-circle d-flex justify-content-center align-items-center">
                                                    ${i + 1}</div>
                                                <span>${recipesList[recipeIndex].ingredients[i]}</span>
                                            </li>
        `;
    }
    ingredientsList.innerHTML = box;

}


function addInstructions(recipeIndex) {
    instructionsList = document.getElementById('instructions-list');
    var box = ``;
    for (var i = 0; i < recipesList[recipeIndex].instructions.length; i++) {
        box += `
        
        <li class="d-flex justify-content-start align-items-center mb-4">
                                                <div
                                                    class="icon-container d-flex justify-content-center align-items-center me-3">
                                                    ${i + 1}
                                                </div>
                                                <p>${recipesList[recipeIndex].instructions[i]}</p>
                                            </li>
        `;
    }
    instructionsList.innerHTML = box;

}

function addNutrition(recipeIndex) {
    document.getElementById('calories-number').innerText = recipesList[recipeIndex].nutrition.calories;
    document.getElementById('protein-number').innerText = recipesList[recipeIndex].nutrition.protein;
    document.getElementById('carbohydrates-number').innerText = recipesList[recipeIndex].nutrition.carbs;
    document.getElementById('fat-number').innerText = recipesList[recipeIndex].nutrition.fat;
    document.getElementById('fiber-number').innerText = recipesList[recipeIndex].nutrition.fiber;
    document.getElementById('sodium-number').innerText = recipesList[recipeIndex].nutrition.sodium;
}

function addTips(recipeIndex) {
    tipsList = document.getElementById('tips-list');
    var box = ``;
    for (var i = 0; i < recipesList[recipeIndex].tips.length; i++) {
        box += `
        <div class="d-flex justify-content-start align-items-center p-3">
                                                <i class="fa fa-circle-check"></i>
                                                <p>${recipesList[recipeIndex].tips[i]}</p>
                                            </div>
        `;
    }
    tipsList.innerHTML = box;

}
getRandomRecipe();