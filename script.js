// ================================
// Harsh's Recipe ULTIMATE - Complete Website JavaScript
// ================================

class RecipeWebsite {
    constructor() {
        this.currentScale = 1;
        this.currentStep = 0;
        this.totalSteps = 8;
        this.isCooking = false;
        this.timer = null;
        this.timeRemaining = 0;

        // Recipe database
        this.recipes = {
            'chocolate-cake': {
                title: 'Decadent Chocolate Cake',
                image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                category: 'dessert',
                dietary: ['vegetarian'],
                prepTime: 30,
                cookTime: 45,
                servings: '8-10',
                ingredients: {
                    'For the Cake': [
                        { amount: '2 cups', name: 'all-purpose flour' },
                        { amount: '¾ cup', name: 'unsweetened cocoa powder' },
                        { amount: '2 cups', name: 'granulated sugar' },
                        { amount: '2 tsp', name: 'baking powder' },
                        { amount: '1½ tsp', name: 'baking soda' },
                        { amount: '1 tsp', name: 'salt' },
                        { amount: '2 large', name: 'eggs' },
                        { amount: '1 cup', name: 'whole milk' },
                        { amount: '½ cup', name: 'vegetable oil' },
                        { amount: '2 tsp', name: 'vanilla extract' },
                        { amount: '1 cup', name: 'hot strong coffee' }
                    ],
                    'For the Frosting': [
                        { amount: '1 cup', name: 'unsalted butter, softened' },
                        { amount: '¾ cup', name: 'cocoa powder' },
                        { amount: '3 cups', name: 'powdered sugar' },
                        { amount: '⅓ cup', name: 'milk' },
                        { amount: '1 tsp', name: 'vanilla extract' }
                    ]
                },
                instructions: [
                    { title: 'Prepare Your Kitchen', description: 'Preheat oven to 350°F (175°C). Grease two 9-inch round cake pans and dust with cocoa powder.', time: 5 },
                    { title: 'Mix Dry Ingredients', description: 'In a large bowl, whisk together flour, cocoa powder, sugar, baking powder, baking soda, and salt.', time: 3 },
                    { title: 'Combine Wet Ingredients', description: 'In another bowl, beat eggs, then mix in milk, oil, and vanilla extract.', time: 3 },
                    { title: 'Make the Batter', description: 'Add wet ingredients to dry ingredients and mix. Gradually stir in hot coffee.', time: 5 },
                    { title: 'Bake the Cakes', description: 'Divide batter between pans. Bake for 30-35 minutes until toothpick comes out clean.', time: 35 },
                    { title: 'Cool the Cakes', description: 'Cool in pans for 10 minutes, then turn out onto wire racks.', time: 60 },
                    { title: 'Make the Frosting', description: 'Beat butter until fluffy. Add cocoa, then alternate powdered sugar and milk.', time: 10 },
                    { title: 'Assemble and Decorate', description: 'Layer cakes with frosting. Frost top and sides. Decorate as desired.', time: 15 }
                ],
                notes: [
                    { title: '💡 Pro Tip', content: 'The hot coffee enhances chocolate flavor and creates perfect texture.' },
                    { title: '🔄 Storage', content: 'Store covered at room temperature for up to 3 days.' },
                    { title: '❄️ Make Ahead', content: 'Cake layers can be frozen for up to 3 months.' },
                    { title: '🎨 Variations', content: 'Add espresso powder or chocolate chips for extra flavor.' }
                ],
                photos: [
                    { url: 'https://images.unsplash.com/photo-1660232780192-9a22f5ace5bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=8', caption: 'Mixing dry ingredients' },
                    { url: 'https://plus.unsplash.com/premium_photo-1695042865403-41231d43b67b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80', caption: 'Combining wet ingredients' },
                    { url: 'https://plus.unsplash.com/premium_photo-1663924748608-6b6005543d15?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80', caption: 'Baking in the oven' },
                    { url: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80', caption: 'Final decorated cake' }
                ]
            },
            'pasta-carbonara': {
                title: 'Classic Pasta Carbonara',
                image: 'https://unsplash.com/photos/pasta-on-white-ceramic-plate-dvgjof0_TP8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                category: 'main',
                dietary: [],
                prepTime: 10,
                cookTime: 15,
                servings: '4',
                ingredients: {
                    'Main Ingredients': [
                        { amount: '1 lb', name: 'spaghetti pasta' },
                        { amount: '6 oz', name: 'pancetta or bacon, diced' },
                        { amount: '4 large', name: 'egg yolks' },
                        { amount: '1 cup', name: 'Parmesan cheese, grated' },
                        { amount: '3 cloves', name: 'garlic, minced' },
                        { amount: '½ cup', name: 'white wine (optional)' },
                        { amount: 'to taste', name: 'black pepper' },
                        { amount: 'to taste', name: 'salt' }
                    ]
                },
                instructions: [
                    { title: 'Boil Pasta', description: 'Bring a large pot of salted water to boil. Cook spaghetti according to package directions.', time: 12 },
                    { title: 'Cook Pancetta', description: 'In a large skillet, cook pancetta until crispy. Add garlic and cook 1 minute.', time: 5 },
                    { title: 'Prepare Egg Mixture', description: 'In a bowl, whisk egg yolks with Parmesan cheese and black pepper.', time: 2 },
                    { title: 'Combine Everything', description: 'Drain pasta, reserving 1 cup pasta water. Toss hot pasta with pancetta and egg mixture.', time: 3 },
                    { title: 'Finish and Serve', description: 'Add pasta water as needed for creamy consistency. Serve immediately with extra cheese.', time: 2 }
                ],
                notes: [
                    { title: '🔥 Temperature Tip', content: 'Remove skillet from heat before adding eggs to prevent scrambling.' },
                    { title: '🧀 Cheese Quality', content: 'Use freshly grated Parmesan for best results.' }
                ],
                photos: []
            },
            'chicken-tikka': {
                title: 'Chicken Tikka Masala',
                image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                category: 'main',
                dietary: ['gluten-free'],
                prepTime: 20,
                cookTime: 25,
                servings: '6',
                ingredients: {
                    'For the Chicken': [
                        { amount: '2 lbs', name: 'chicken breast, cubed' },
                        { amount: '1 cup', name: 'plain yogurt' },
                        { amount: '2 tbsp', name: 'tikka masala spice blend' },
                        { amount: '3 cloves', name: 'garlic, minced' },
                        { amount: '1 tbsp', name: 'fresh ginger, grated' }
                    ],
                    'For the Sauce': [
                        { amount: '1 can', name: 'crushed tomatoes' },
                        { amount: '1 cup', name: 'heavy cream' },
                        { amount: '1 onion', name: 'yellow onion, diced' },
                        { amount: '2 tbsp', name: 'butter' },
                        { amount: '1 tsp', name: 'garam masala' }
                    ]
                },
                instructions: [
                    { title: 'Marinate Chicken', description: 'Mix chicken with yogurt, spices, garlic, and ginger. Marinate 30 minutes.', time: 30 },
                    { title: 'Cook Chicken', description: 'In a large skillet, cook marinated chicken until golden brown.', time: 8 },
                    { title: 'Make Sauce Base', description: 'In same skillet, sauté onions until soft. Add tomatoes and simmer.', time: 10 },
                    { title: 'Finish Sauce', description: 'Add cream, garam masala, and return chicken to skillet.', time: 5 },
                    { title: 'Serve', description: 'Simmer 2 minutes, garnish with cilantro. Serve with rice or naan.', time: 2 }
                ],
                notes: [
                    { title: '🌶️ Spice Level', content: 'Adjust spice level by adding more or less tikka masala blend.' },
                    { title: '🍚 Serving Suggestion', content: 'Serve over basmati rice with naan bread.' }
                ],
                photos: []
            },
            'margherita-pizza': {
                title: 'Margherita Pizza',
                image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                category: 'main',
                dietary: ['vegetarian'],
                prepTime: 60,
                cookTime: 30,
                servings: '4',
                ingredients: {
                    'For the Dough': [
                        { amount: '3 cups', name: 'bread flour' },
                        { amount: '1 cup', name: 'warm water' },
                        { amount: '1 tsp', name: 'active dry yeast' },
                        { amount: '2 tbsp', name: 'olive oil' },
                        { amount: '1 tsp', name: 'salt' },
                        { amount: '1 tsp', name: 'sugar' }
                    ],
                    'For the Toppings': [
                        { amount: '½ cup', name: 'pizza sauce' },
                        { amount: '8 oz', name: 'fresh mozzarella, sliced' },
                        { amount: '¼ cup', name: 'fresh basil leaves' },
                        { amount: '2 tbsp', name: 'olive oil' }
                    ]
                },
                instructions: [
                    { title: 'Make Dough', description: 'Mix yeast with warm water and sugar. Add to flour, oil, and salt. Knead 10 minutes.', time: 15 },
                    { title: 'Let Rise', description: 'Place dough in oiled bowl, cover, and let rise for 1 hour until doubled.', time: 60 },
                    { title: 'Prepare Pizza', description: 'Preheat oven to 475°F. Roll out dough and transfer to pizza stone or baking sheet.', time: 10 },
                    { title: 'Add Toppings', description: 'Spread sauce, add mozzarella slices, and drizzle with olive oil.', time: 3 },
                    { title: 'Bake and Finish', description: 'Bake 12-15 minutes until crust is golden. Add fresh basil and serve.', time: 15 }
                ],
                notes: [
                    { title: '🔥 High Heat', content: 'Use a pizza stone and highest oven temperature for best crust.' },
                    { title: '🌿 Fresh is Best', content: 'Add fresh basil after baking for best flavor.' }
                ],
                photos: []
            },
            'avocado-toast': {
                title: 'Perfect Avocado Toast',
                image: 'https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                category: 'breakfast',
                dietary: ['vegan', 'gluten-free'],
                prepTime: 10,
                cookTime: 5,
                servings: '2',
                ingredients: {
                    'Main Ingredients': [
                        { amount: '2 slices', name: 'gluten-free bread' },
                        { amount: '2 ripe', name: 'avocados' },
                        { amount: '1 tbsp', name: 'lemon juice' },
                        { amount: '2 tbsp', name: 'cherry tomatoes, halved' },
                        { amount: 'to taste', name: 'salt and pepper' },
                        { amount: '1 tbsp', name: 'hemp seeds (optional)' }
                    ]
                },
                instructions: [
                    { title: 'Toast Bread', description: 'Toast bread slices until golden and crispy.', time: 3 },
                    { title: 'Prepare Avocado', description: 'Mash avocados with lemon juice, salt, and pepper.', time: 3 },
                    { title: 'Assemble', description: 'Spread avocado mixture on toast, top with tomatoes and hemp seeds.', time: 2 }
                ],
                notes: [
                    { title: '🥑 Avocado Tip', content: 'Choose ripe but firm avocados for best texture.' }
                ],
                photos: []
            },
            'quinoa-buddha-bowl': {
                title: 'Rainbow Quinoa Buddha Bowl',
                image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                category: 'main',
                dietary: ['vegan', 'gluten-free'],
                prepTime: 15,
                cookTime: 20,
                servings: '4',
                ingredients: {
                    'Bowl Base': [
                        { amount: '1 cup', name: 'quinoa' },
                        { amount: '2 cups', name: 'mixed greens' },
                        { amount: '1 cup', name: 'roasted chickpeas' },
                        { amount: '1 cup', name: 'roasted sweet potato' },
                        { amount: '1/2 cup', name: 'shredded carrots' },
                        { amount: '1/2 cup', name: 'cucumber, diced' }
                    ],
                    'Tahini Dressing': [
                        { amount: '3 tbsp', name: 'tahini' },
                        { amount: '2 tbsp', name: 'lemon juice' },
                        { amount: '1 tbsp', name: 'maple syrup' },
                        { amount: '2-3 tbsp', name: 'water' }
                    ]
                },
                instructions: [
                    { title: 'Cook Quinoa', description: 'Rinse and cook quinoa according to package directions.', time: 15 },
                    { title: 'Roast Vegetables', description: 'Roast sweet potato and chickpeas at 400°F for 20 minutes.', time: 20 },
                    { title: 'Make Dressing', description: 'Whisk together tahini, lemon juice, maple syrup, and water.', time: 3 },
                    { title: 'Assemble Bowl', description: 'Layer quinoa, greens, and toppings. Drizzle with dressing.', time: 5 }
                ],
                notes: [
                    { title: '🌈 Variety', content: 'Add any colorful vegetables you have on hand.' }
                ],
                photos: []
            },
            'salmon-teriyaki': {
                title: 'Honey Teriyaki Salmon',
                image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                category: 'main',
                dietary: ['gluten-free', 'pescatarian'],
                prepTime: 10,
                cookTime: 15,
                servings: '4',
                ingredients: {
                    'Main': [
                        { amount: '4 fillets', name: 'salmon fillets' },
                        { amount: '1/4 cup', name: 'soy sauce (gluten-free)' },
                        { amount: '3 tbsp', name: 'honey' },
                        { amount: '2 tbsp', name: 'rice vinegar' },
                        { amount: '2 cloves', name: 'garlic, minced' },
                        { amount: '1 tbsp', name: 'fresh ginger, grated' },
                        { amount: '2 tbsp', name: 'sesame seeds' }
                    ]
                },
                instructions: [
                    { title: 'Make Sauce', description: 'Whisk together soy sauce, honey, vinegar, garlic, and ginger.', time: 5 },
                    { title: 'Marinate Salmon', description: 'Marinate salmon in half the sauce for 10 minutes.', time: 10 },
                    { title: 'Cook Salmon', description: 'Pan-sear salmon for 4-5 minutes per side until flaky.', time: 10 },
                    { title: 'Glaze and Serve', description: 'Brush with remaining sauce and sprinkle with sesame seeds.', time: 2 }
                ],
                notes: [
                    { title: '🐟 Fish Tip', content: 'Don\'t overcook salmon - it should be slightly pink in center.' }
                ],
                photos: []
            },
            'greek-salad': {
                title: 'Classic Greek Salad',
                image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                category: 'salad',
                dietary: ['vegetarian', 'gluten-free'],
                prepTime: 15,
                cookTime: 0,
                servings: '4',
                ingredients: {
                    'Salad': [
                        { amount: '4 large', name: 'tomatoes, chunked' },
                        { amount: '1 large', name: 'cucumber, chunked' },
                        { amount: '1 large', name: 'red onion, sliced' },
                        { amount: '1 cup', name: 'Kalamata olives' },
                        { amount: '200g', name: 'feta cheese, cubed' },
                        { amount: '1/4 cup', name: 'fresh oregano' }
                    ],
                    'Dressing': [
                        { amount: '1/3 cup', name: 'olive oil' },
                        { amount: '2 tbsp', name: 'red wine vinegar' },
                        { amount: '1 tsp', name: 'dried oregano' },
                        { amount: 'to taste', name: 'salt and pepper' }
                    ]
                },
                instructions: [
                    { title: 'Prepare Vegetables', description: 'Chop tomatoes, cucumber, and onion into large chunks.', time: 10 },
                    { title: 'Make Dressing', description: 'Whisk together olive oil, vinegar, oregano, salt, and pepper.', time: 3 },
                    { title: 'Assemble Salad', description: 'Combine vegetables, olives, and feta. Toss with dressing.', time: 2 }
                ],
                notes: [
                    { title: '🇬🇷 Authentic Tip', content: 'Let salad sit 10 minutes before serving for flavors to meld.' }
                ],
                photos: []
            },
            'mushroom-risotto': {
                title: 'Creamy Mushroom Risotto',
                image: 'https://images.unsplash.com/photo-1476124369491-e7addf5db371?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                category: 'main',
                dietary: ['vegetarian', 'gluten-free'],
                prepTime: 15,
                cookTime: 30,
                servings: '4',
                ingredients: {
                    'Main': [
                        { amount: '1 1/2 cups', name: 'Arborio rice' },
                        { amount: '6 cups', name: 'vegetable stock' },
                        { amount: '500g', name: 'mixed mushrooms' },
                        { amount: '1 large', name: 'onion, diced' },
                        { amount: '3 cloves', name: 'garlic, minced' },
                        { amount: '1/2 cup', name: 'white wine' },
                        { amount: '1/2 cup', name: 'Parmesan cheese' },
                        { amount: '3 tbsp', name: 'butter' }
                    ]
                },
                instructions: [
                    { title: 'Prepare Stock', description: 'Heat vegetable stock in a separate pot and keep warm.', time: 5 },
                    { title: 'Sauté Mushrooms', description: 'Cook mushrooms until golden, set aside.', time: 8 },
                    { title: 'Cook Base', description: 'Sauté onion and garlic, add rice and stir for 2 minutes.', time: 5 },
                    { title: 'Add Wine', description: 'Pour in wine and stir until absorbed.', time: 3 },
                    { title: 'Add Stock Gradually', description: 'Add warm stock one ladle at a time, stirring constantly.', time: 18 },
                    { title: 'Finish Risotto', description: 'Stir in mushrooms, butter, and Parmesan.', time: 2 }
                ],
                notes: [
                    { title: '🍄 Mushroom Tip', content: 'Use a mix of mushrooms for complex flavor.' }
                ],
                photos: []
            },
            'banana-smoothie': {
                title: 'Tropical Banana Smoothie',
                image: 'https://images.unsplash.com/photo-1553530666-ba11a7da3888?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                category: 'breakfast',
                dietary: ['vegan', 'gluten-free'],
                prepTime: 5,
                cookTime: 0,
                servings: '2',
                ingredients: {
                    'Smoothie': [
                        { amount: '2 large', name: 'ripe bananas' },
                        { amount: '1 cup', name: 'coconut milk' },
                        { amount: '1/2 cup', name: 'pineapple chunks' },
                        { amount: '1 tbsp', name: 'chia seeds' },
                        { amount: '1 tbsp', name: 'almond butter' },
                        { amount: '1 tsp', name: 'vanilla extract' },
                        { amount: '1 cup', name: 'ice cubes' }
                    ]
                },
                instructions: [
                    { title: 'Blend Ingredients', description: 'Add all ingredients to blender and blend until smooth.', time: 2 },
                    { title: 'Adjust Consistency', description: 'Add more coconut milk if too thick, or ice if too thin.', time: 1 },
                    { title: 'Serve', description: 'Pour into glasses and serve immediately.', time: 1 }
                ],
                notes: [
                    { title: '🍌 Banana Tip', content: 'Freeze bananas ahead for extra thick smoothie.' }
                ],
                photos: []
            },
            'beef-tacos': {
                title: 'Spicy Beef Tacos',
                image: 'https://images.unsplash.com/photo-1633243279656-0157b0b3cdd8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                category: 'main',
                dietary: ['gluten-free'],
                prepTime: 15,
                cookTime: 15,
                servings: '4',
                ingredients: {
                    'Meat Filling': [
                        { amount: '1 lb', name: 'ground beef' },
                        { amount: '1 packet', name: 'taco seasoning' },
                        { amount: '1/2 cup', name: 'water' }
                    ],
                    'Assembly': [
                        { amount: '8', name: 'corn tortillas' },
                        { amount: '1 cup', name: 'shredded lettuce' },
                        { amount: '1 cup', name: 'shredded cheese' },
                        { amount: '2 large', name: 'tomatoes, diced' },
                        { amount: '1/2 cup', name: 'sour cream' },
                        { amount: '1/4 cup', name: 'fresh cilantro' },
                        { amount: '2', name: 'limes, cut in wedges' }
                    ]
                },
                instructions: [
                    { title: 'Cook Beef', description: 'Brown ground beef in large skillet, breaking up as it cooks.', time: 8 },
                    { title: 'Season Meat', description: 'Add taco seasoning and water, simmer until thick.', time: 5 },
                    { title: 'Warm Tortillas', description: 'Heat tortillas in dry pan or microwave until warm.', time: 2 },
                    { title: 'Assemble Tacos', description: 'Fill tortillas with meat and desired toppings.', time: 5 }
                ],
                notes: [
                    { title: '🌮 Serving Tip', content: 'Set up a taco bar and let everyone build their own!' }
                ],
                photos: []
            },
            'caprese-salad': {
                title: 'Fresh Caprese Salad',
                image: 'https://images.unsplash.com/photo-1608897013039-887f21d8c804?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                category: 'appetizer',
                dietary: ['vegetarian', 'gluten-free'],
                prepTime: 10,
                cookTime: 0,
                servings: '4',
                ingredients: {
                    'Main': [
                        { amount: '4 large', name: 'ripe tomatoes' },
                        { amount: '8 oz', name: 'fresh mozzarella' },
                        { amount: '1/4 cup', name: 'fresh basil leaves' },
                        { amount: '3 tbsp', name: 'extra virgin olive oil' },
                        { amount: '2 tbsp', name: 'balsamic glaze' },
                        { amount: 'to taste', name: 'sea salt and pepper' }
                    ]
                },
                instructions: [
                    { title: 'Slice Ingredients', description: 'Cut tomatoes and mozzarella into 1/4-inch thick slices.', time: 5 },
                    { title: 'Arrange Salad', description: 'Alternate tomato and mozzarella slices on platter.', time: 3 },
                    { title: 'Add Basil', description: 'Tuck basil leaves between slices.', time: 1 },
                    { title: 'Dress and Season', description: 'Drizzle with olive oil and balsamic, season with salt and pepper.', time: 1 }
                ],
                notes: [
                    { title: '🍅 Quality Tip', content: 'Use the ripest tomatoes and highest quality mozzarella.' }
                ],
                photos: []
            },
            'thai-curry': {
                title: 'Coconut Thai Green Curry',
                image: 'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                category: 'main',
                dietary: ['vegan', 'gluten-free'],
                prepTime: 15,
                cookTime: 20,
                servings: '4',
                ingredients: {
                    'Curry': [
                        { amount: '2 tbsp', name: 'green curry paste' },
                        { amount: '1 can', name: 'coconut milk' },
                        { amount: '2 cups', name: 'mixed vegetables' },
                        { amount: '1 block', name: 'firm tofu, cubed' },
                        { amount: '2 tbsp', name: 'soy sauce' },
                        { amount: '1 tbsp', name: 'brown sugar' },
                        { amount: '2 tbsp', name: 'fresh basil' },
                        { amount: '2 cups', name: 'jasmine rice' }
                    ]
                },
                instructions: [
                    { title: 'Cook Rice', description: 'Cook jasmine rice according to package directions.', time: 15 },
                    { title: 'Sauté Curry Paste', description: 'Fry curry paste in pan for 1 minute until fragrant.', time: 2 },
                    { title: 'Add Coconut Milk', description: 'Gradually stir in coconut milk until smooth.', time: 3 },
                    { title: 'Add Vegetables', description: 'Add vegetables and tofu, simmer 10 minutes.', time: 10 },
                    { title: 'Season and Finish', description: 'Add soy sauce, sugar, and basil. Serve over rice.', time: 2 }
                ],
                notes: [
                    { title: '🌶️ Spice Level', content: 'Adjust curry paste amount to your heat preference.' }
                ],
                photos: []
            },
            'chocolate-brownies': {
                title: 'Fudgy Chocolate Brownies',
                image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                category: 'dessert',
                dietary: ['vegetarian'],
                prepTime: 15,
                cookTime: 30,
                servings: '12',
                ingredients: {
                    'Brownies': [
                        { amount: '1/2 cup', name: 'unsalted butter' },
                        { amount: '6 oz', name: 'dark chocolate, chopped' },
                        { amount: '1 cup', name: 'granulated sugar' },
                        { amount: '3 large', name: 'eggs' },
                        { amount: '1 tsp', name: 'vanilla extract' },
                        { amount: '1/2 cup', name: 'all-purpose flour' },
                        { amount: '1/4 cup', name: 'cocoa powder' },
                        { amount: '1/2 tsp', name: 'salt' },
                        { amount: '1/2 cup', name: 'chocolate chips' }
                    ]
                },
                instructions: [
                    { title: 'Preheat Oven', description: 'Preheat oven to 350°F. Line 8x8 pan with parchment.', time: 5 },
                    { title: 'Melt Chocolate', description: 'Melt butter and chocolate together until smooth.', time: 5 },
                    { title: 'Mix Wet Ingredients', description: 'Whisk in sugar, eggs, and vanilla.', time: 3 },
                    { title: 'Add Dry Ingredients', description: 'Fold in flour, cocoa, and salt until just combined.', time: 3 },
                    { title: 'Add Chips and Bake', description: 'Fold in chocolate chips, pour into pan, bake 25-30 minutes.', time: 30 }
                ],
                notes: [
                    { title: '🍫 Fudgy Secret', content: 'Don\'t overbake - brownies should be slightly underdone in center.' }
                ],
                photos: []
            }
        };

        this.allRecipes = [
            'chocolate-cake', 'pasta-carbonara', 'chicken-tikka', 'margherita-pizza',
            'avocado-toast', 'quinoa-buddha-bowl', 'salmon-teriyaki', 'greek-salad',
            'mushroom-risotto', 'banana-smoothie', 'beef-tacos', 'caprese-salad',
            'thai-curry', 'chocolate-brownies'
        ];

        this.init();
    }

    init() {
        this.setGreeting();
        this.bindEvents();
        this.populateAllRecipes();
        this.showPage('home');
    }

    setGreeting() {
        const now = new Date();
        const hour = now.getHours();
        let greeting = '';

        if (hour < 12) {
            greeting = 'Good Morning! ☀️';
        } else if (hour < 17) {
            greeting = 'Good Afternoon! 🌞';
        } else {
            greeting = 'Good Evening! 🌙';
        }

        const greetingEl = document.getElementById('greeting');
        if (greetingEl) {
            greetingEl.textContent = greeting;
        }
    }

    bindEvents() {
        // Navigation
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const page = e.target.dataset.page;
                this.showPage(page);
                this.setActiveNavLink(e.target);
            });
        });

        // Mobile menu toggle
        const mobileToggle = document.querySelector('.mobile-menu-toggle');
        if (mobileToggle) {
            mobileToggle.addEventListener('click', () => {
                const navMenu = document.querySelector('.nav-menu');
                navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
            });
        }

        // Scale recipe button
        const scaleBtn = document.getElementById('scaleRecipeBtn');
        if (scaleBtn) {
            scaleBtn.addEventListener('click', () => this.openScaleModal());
        }

        // Scale modal
        const scaleModal = document.getElementById('scaleModal');
        const closeScaleModal = document.getElementById('closeScaleModal');

        if (closeScaleModal) {
            closeScaleModal.addEventListener('click', () => this.closeScaleModal());
        }

        if (scaleModal) {
            scaleModal.addEventListener('click', (e) => {
                if (e.target === scaleModal) {
                    this.closeScaleModal();
                }
            });
        }

        // Scale options
        document.querySelectorAll('.scale-option').forEach(option => {
            option.addEventListener('click', (e) => this.scaleRecipe(e));
        });

        // Recipe filter buttons
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.addEventListener('click', (e) => this.filterRecipes(e));
        });

        // Recipe modal
        const recipeModal = document.getElementById('recipeModal');
        const closeModal = document.getElementById('closeModal');

        if (closeModal) {
            closeModal.addEventListener('click', () => this.closeRecipeModal());
        }

        if (recipeModal) {
            recipeModal.addEventListener('click', (e) => {
                if (e.target === recipeModal) {
                    this.closeRecipeModal();
                }
            });
        }

        // Recipe navigation
        document.querySelectorAll('.recipe-nav-btn').forEach(btn => {
            btn.addEventListener('click', (e) => this.switchRecipeSection(e));
        });

        // Collapse/expand buttons
        document.addEventListener('click', (e) => {
            if (e.target.closest('.collapse-btn')) {
                const btn = e.target.closest('.collapse-btn');
                const target = btn.dataset.target;
                this.toggleSection(target);
            }
        });

        // Start cooking
        const startCookingBtn = document.getElementById('startCookingBtn');
        if (startCookingBtn) {
            startCookingBtn.addEventListener('click', () => this.toggleCooking());
        }

        // Contact form
        const contactForm = document.querySelector('#contact-page form');
        if (contactForm) {
            contactForm.addEventListener('submit', (e) => this.handleContactForm(e));
        }

        // Print and Share buttons
        document.addEventListener('click', (e) => {
            if (e.target.closest('#printRecipeBtn')) {
                this.printRecipe();
            }
            if (e.target.closest('#shareRecipeBtn')) {
                this.shareRecipe();
            }
        });
    }

    showPage(pageName) {
        // Hide all pages
        document.querySelectorAll('.page').forEach(page => {
            page.classList.remove('active');
        });

        // Show target page
        const targetPage = document.getElementById(`${pageName}-page`);
        if (targetPage) {
            targetPage.classList.add('active');

            // Scroll to top of the page
            setTimeout(() => {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            }, 100);
        }
    }

    setActiveNavLink(activeLink) {
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
        });
        activeLink.classList.add('active');
    }

    populateAllRecipes() {
        const allRecipesGrid = document.getElementById('allRecipesGrid');
        if (!allRecipesGrid) return;

        allRecipesGrid.innerHTML = '';

        this.allRecipes.forEach(recipeId => {
            const recipe = this.recipes[recipeId];
            if (recipe) {
                const recipeCard = this.createRecipeCard(recipeId, recipe);
                allRecipesGrid.appendChild(recipeCard);
            }
        });
    }

    createRecipeCard(recipeId, recipe) {
        const card = document.createElement('div');
        card.className = 'recipe-card';
        card.dataset.category = recipe.category;
        card.dataset.recipeId = recipeId;
        card.onclick = () => this.showRecipe(recipeId);

        // Create dietary badges
        const dietaryBadges = recipe.dietary.map(diet => {
            const icons = {
                'vegan': '🌱',
                'vegetarian': '🥕',
                'gluten-free': '🌾',
                'pescatarian': '🐟'
            };
            return `<span class="dietary-badge">${icons[diet] || ''} ${diet}</span>`;
        }).join('');

        card.innerHTML = `
            <img src="${recipe.image}" alt="${recipe.title}">
            <div class="recipe-info">
                <h3>${recipe.title}</h3>
                <p>${this.getRecipeDescription(recipe.category)}</p>
                <div class="recipe-meta">
                    <span><i class="far fa-clock"></i> ${recipe.prepTime + recipe.cookTime} mins</span>
                    <span><i class="fas fa-users"></i> ${recipe.servings}</span>
                </div>
                ${dietaryBadges ? `<div class="dietary-badges">${dietaryBadges}</div>` : ''}
            </div>
        `;

        return card;
    }

    getRecipeDescription(category) {
        const descriptions = {
            'dessert': 'Sweet and delicious treat',
            'main': 'Hearty and satisfying main course',
            'appetizer': 'Perfect starter for any meal'
        };
        return descriptions[category] || 'Delicious recipe';
    }

    filterRecipes(e) {
        const filter = e.target.dataset.filter;

        // Update active filter button
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        e.target.classList.add('active');

        // Filter recipe cards
        document.querySelectorAll('#allRecipesGrid .recipe-card').forEach(card => {
            const recipeId = card.dataset.recipeId;
            const recipe = this.recipes[recipeId];

            let shouldShow = false;

            if (filter === 'all') {
                shouldShow = true;
            } else if (recipe) {
                // Check if it's a category filter
                if (recipe.category === filter) {
                    shouldShow = true;
                }
                // Check if it's a dietary filter
                else if (recipe.dietary && recipe.dietary.includes(filter)) {
                    shouldShow = true;
                }
            }

            card.style.display = shouldShow ? 'block' : 'none';
        });
    }

    showRecipe(recipeId) {
        const recipe = this.recipes[recipeId];
        if (!recipe) return;

        this.currentRecipe = recipeId;

        // Update modal title
        const modalTitle = document.getElementById('modalRecipeTitle');
        if (modalTitle) {
            modalTitle.textContent = recipe.title;
        }

        // Populate ingredients
        this.populateIngredients(recipe.ingredients);

        // Populate instructions
        this.populateInstructions(recipe.instructions);

        // Populate notes
        this.populateNotes(recipe.notes);

        // Populate preparation photos
        this.populatePreparationPhotos(recipe.photos);

        // Show modal
        const modal = document.getElementById('recipeModal');
        if (modal) {
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }

        // Reset to ingredients section
        this.switchRecipeSection({ target: document.querySelector('.recipe-nav-btn[data-section="ingredients"]') });
    }

    populateIngredients(ingredientsByCategory) {
        const container = document.getElementById('ingredientsList');
        if (!container) return;

        container.innerHTML = '';

        Object.keys(ingredientsByCategory).forEach(category => {
            const categoryDiv = document.createElement('div');
            categoryDiv.className = 'ingredient-category';

            const categoryTitle = document.createElement('h4');
            categoryTitle.textContent = category;
            categoryDiv.appendChild(categoryTitle);

            const ingredientsList = document.createElement('div');
            ingredientsList.className = 'ingredients-list';

            ingredientsByCategory[category].forEach((ingredient, index) => {
                const ingredientItem = document.createElement('div');
                ingredientItem.className = 'ingredient-item';

                const uniqueId = `ingredient-${category.replace(/\s+/g, '-')}-${index}`;

                ingredientItem.innerHTML = `
                    <input type="checkbox" id="${uniqueId}" class="ingredient-checkbox">
                    <label for="${uniqueId}">
                        <span class="ingredient-amount" data-original="${ingredient.amount}">${ingredient.amount}</span>
                        <span class="ingredient-name">${ingredient.name}</span>
                    </label>
                    <div class="buy-links">
                        <a href="https://blinkit.com/search?q=${encodeURIComponent(ingredient.name)}" target="_blank" class="buy-link blinkit" title="Buy on Blinkit">
                            <img src="https://play-lh.googleusercontent.com/kXJYGrvy4pvHwzw6tMgf-KPthnPDg4RvvoOTgffwSuHCUL63WVxaj3ojX3ADBS0UiD0=w480-h960-rw" alt="Blinkit">
                        </a>
                        <a href="https://www.zeptonow.com/search?q=${encodeURIComponent(ingredient.name)}" target="_blank" class="buy-link zepto" title="Buy on Zepto">
                            <img src="https://play-lh.googleusercontent.com/NYVFtcwG7Z4jhL09qXTX8-rVl5UL7FvmwKBruhHT0zDhvicJ5zrsnD_v8T5h_rUQoXI=s96-rw" alt="Zepto">
                        </a>
                        <a href="https://www.swiggy.com/instamart/search?query=${encodeURIComponent(ingredient.name)}" target="_blank" class="buy-link instamart" title="Buy on Instamart">
                            <img src="https://play-lh.googleusercontent.com/gS8vyX1kwPBjo15FvdQwK_U6NpATu0N5GpWJfXGxhhQKPiUCMtutCNn1hUGQvJAzIBQ=s96-rw" alt="Instamart">
                        </a>
                        <a href="https://www.bigbasket.com/ps/?q=${encodeURIComponent(ingredient.name)}" target="_blank" class="buy-link bigbasket" title="Buy on BigBasket">
                            <img src="https://play-lh.googleusercontent.com/EuiZnkT8aEKjXDLX74DTp1VRIwWaeRa8Dvo-LOGAxy1FPQ8GzABTIRenksiM-A7Oz48g=w480-h960-rw" alt="BigBasket">
                        </a>
                    </div>
                `;

                ingredientsList.appendChild(ingredientItem);
            });

            categoryDiv.appendChild(ingredientsList);
            container.appendChild(categoryDiv);
        });
    }

    populateInstructions(instructions) {
        const container = document.getElementById('instructionsList');
        if (!container) return;

        container.innerHTML = '';

        instructions.forEach((instruction, index) => {
            const stepDiv = document.createElement('div');
            stepDiv.className = 'instruction-step';
            stepDiv.dataset.step = index + 1;

            stepDiv.innerHTML = `
                <div class="step-number">${index + 1}</div>
                <div class="step-content">
                    <h4>${instruction.title}</h4>
                    <p>${instruction.description}</p>
                    <div class="step-timer" data-minutes="${instruction.time}">
                        <i class="far fa-clock"></i>
                        <span>${instruction.time} minutes</span>
                    </div>
                </div>
            `;

            container.appendChild(stepDiv);
        });

        this.totalSteps = instructions.length;
    }

    populateNotes(notes) {
        const container = document.getElementById('notesList');
        if (!container) return;

        container.innerHTML = '';

        notes.forEach(note => {
            const noteDiv = document.createElement('div');
            noteDiv.className = 'note-card';

            noteDiv.innerHTML = `
                <h4>${note.title}</h4>
                <p>${note.content}</p>
            `;

            container.appendChild(noteDiv);
        });
    }

    populatePreparationPhotos(photos) {
        const container = document.getElementById('preparationPhotos');
        if (!container || !photos.length) {
            if (container) container.style.display = 'none';
            return;
        }

        container.style.display = 'block';
        const photosGrid = container.querySelector('.photos-grid');
        if (!photosGrid) return;

        photosGrid.innerHTML = '';

        photos.forEach(photo => {
            const photoDiv = document.createElement('div');
            photoDiv.className = 'preparation-photo';

            photoDiv.innerHTML = `
                <img src="${photo.url}" alt="${photo.caption}">
                <div class="photo-caption">${photo.caption}</div>
            `;

            photosGrid.appendChild(photoDiv);
        });
    }

    closeRecipeModal() {
        const modal = document.getElementById('recipeModal');
        if (modal) {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        }

        // Reset cooking state
        this.stopCooking();
    }

    switchRecipeSection(e) {
        const section = e.target.dataset.section;
        if (!section) return;

        // Update nav buttons
        document.querySelectorAll('.recipe-nav-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        e.target.classList.add('active');

        // Show/hide sections
        document.querySelectorAll('.recipe-section').forEach(sec => {
            sec.classList.remove('active');
        });

        const targetSection = document.getElementById(`${section}-section`);
        if (targetSection) {
            targetSection.classList.add('active');
        }
    }

    toggleSection(targetId) {
        const content = document.getElementById(targetId);
        const btn = document.querySelector(`[data-target="${targetId}"]`);

        if (!content || !btn) return;

        const icon = btn.querySelector('i');

        if (content.classList.contains('collapsed')) {
            content.classList.remove('collapsed');
            content.style.display = 'block';
            if (icon) icon.className = 'fas fa-minus';
        } else {
            content.classList.add('collapsed');
            content.style.display = 'none';
            if (icon) icon.className = 'fas fa-plus';
        }
    }

    openScaleModal() {
        const modal = document.getElementById('scaleModal');
        if (modal) {
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    }

    closeScaleModal() {
        const modal = document.getElementById('scaleModal');
        if (modal) {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        }
    }

    scaleRecipe(e) {
        const scale = parseFloat(e.target.dataset.scale);
        if (isNaN(scale)) return;

        this.currentScale = scale;

        // Update active state
        document.querySelectorAll('.scale-option').forEach(btn => {
            btn.classList.remove('active');
        });
        e.target.classList.add('active');

        // Update ingredient amounts
        this.updateIngredientAmounts(scale);

        // Update hero stats if on home page
        this.updateHeroStats(scale);

        this.closeScaleModal();
    }

    updateIngredientAmounts(scale) {
        document.querySelectorAll('.ingredient-amount').forEach(amount => {
            const originalText = amount.dataset.original || amount.textContent;
            if (!amount.dataset.original) {
                amount.dataset.original = originalText;
            }

            const scaledText = this.scaleIngredientText(originalText, scale);
            amount.textContent = scaledText;
        });
    }

    updateHeroStats(scale) {
        const recipe = this.recipes[this.currentRecipe || 'chocolate-cake'];
        if (!recipe) return;

        const prepTimeEl = document.getElementById('prepTime');
        const cookTimeEl = document.getElementById('cookTime');
        const servingsEl = document.getElementById('servings');

        if (prepTimeEl) {
            const originalPrep = recipe.prepTime;
            const scaledPrep = Math.round(originalPrep * (scale > 1 ? 1 + (scale - 1) * 0.3 : scale));
            prepTimeEl.textContent = `${scaledPrep} mins`;
        }

        if (cookTimeEl) {
            const originalCook = recipe.cookTime;
            const scaledCook = Math.round(originalCook * (scale > 1 ? 1 + (scale - 1) * 0.2 : scale));
            cookTimeEl.textContent = `${scaledCook} mins`;
        }

        if (servingsEl) {
            const originalServings = recipe.servings;
            if (originalServings.includes('-')) {
                const [min, max] = originalServings.split('-').map(n => parseInt(n.trim()));
                const scaledMin = Math.round(min * scale);
                const scaledMax = Math.round(max * scale);
                servingsEl.textContent = `${scaledMin}-${scaledMax}`;
            } else {
                const scaledServings = Math.round(parseInt(originalServings) * scale);
                servingsEl.textContent = scaledServings.toString();
            }
        }
    }

    scaleIngredientText(text, scale) {
        // Handle fractions and mixed numbers
        const fractionRegex = /(\d+)?\s*([\/])\s*(\d+)/g;
        const numberRegex = /(\d+(?:\.\d+)?)/g;

        return text.replace(fractionRegex, (match, whole, slash, denom) => {
            let value = 0;
            if (whole) {
                value = parseInt(whole) / parseInt(denom);
            } else {
                value = 1 / parseInt(denom);
            }

            const scaled = value * scale;
            return this.formatScaledAmount(scaled);
        }).replace(numberRegex, (match) => {
            const num = parseFloat(match);
            const scaled = num * scale;
            return this.formatScaledAmount(scaled);
        });
    }

    formatScaledAmount(amount) {
        // Convert decimal to fraction if appropriate
        if (amount < 1) {
            const fractions = {
                0.125: '⅛',
                0.25: '¼',
                0.333: '⅓',
                0.375: '⅜',
                0.5: '½',
                0.625: '⅝',
                0.667: '⅔',
                0.75: '¾',
                0.875: '⅞'
            };

            const closest = Object.keys(fractions).find(key =>
                Math.abs(parseFloat(key) - amount) < 0.05
            );

            if (closest) {
                return fractions[closest];
            }
        }

        // Round to reasonable precision
        if (amount < 10) {
            return amount.toFixed(1).replace('.0', '');
        } else {
            return Math.round(amount).toString();
        }
    }

    toggleCooking() {
        const startBtn = document.getElementById('startCookingBtn');
        const progressContainer = document.getElementById('progressContainer');

        if (!this.isCooking) {
            this.startCooking();
            if (startBtn) startBtn.textContent = 'Stop Cooking';
            if (progressContainer) progressContainer.classList.remove('hidden');

            // Switch to instructions section
            const instructionsBtn = document.querySelector('.recipe-nav-btn[data-section="instructions"]');
            if (instructionsBtn) {
                this.switchRecipeSection({ target: instructionsBtn });
            }
        } else {
            this.stopCooking();
            if (startBtn) startBtn.textContent = 'Start Cooking';
            if (progressContainer) progressContainer.classList.add('hidden');
        }
    }

    startCooking() {
        this.isCooking = true;
        this.currentStep = 1;
        this.updateProgress();
        this.highlightCurrentStep();
        this.startStepTimer();
    }

    stopCooking() {
        this.isCooking = false;
        this.currentStep = 0;
        this.clearStepTimer();

        // Remove all active states
        document.querySelectorAll('.instruction-step').forEach(step => {
            step.classList.remove('active', 'completed');
        });

        const progressContainer = document.getElementById('progressContainer');
        if (progressContainer) {
            progressContainer.classList.add('hidden');
        }
    }

    updateProgress() {
        const progressFill = document.getElementById('progressFill');
        const progressText = document.getElementById('progressText');

        if (progressFill) {
            const percentage = (this.currentStep / this.totalSteps) * 100;
            progressFill.style.width = `${percentage}%`;
        }

        if (progressText) {
            progressText.textContent = `Step ${this.currentStep} of ${this.totalSteps}`;
        }
    }

    highlightCurrentStep() {
        // Remove all active states
        document.querySelectorAll('.instruction-step').forEach(step => {
            step.classList.remove('active');
        });

        // Add active state to current step
        const currentStepEl = document.querySelector(`[data-step="${this.currentStep}"]`);
        if (currentStepEl) {
            currentStepEl.classList.add('active');
            currentStepEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }

    startStepTimer() {
        this.clearStepTimer();

        const currentStepEl = document.querySelector(`[data-step="${this.currentStep}"]`);
        if (!currentStepEl) return;

        const timerEl = currentStepEl.querySelector('.step-timer[data-minutes]');
        if (!timerEl) return;

        const minutes = parseInt(timerEl.dataset.minutes) || 0;
        this.timeRemaining = minutes * 60;

        const cookingTimer = document.getElementById('cookingTimer');
        const timerText = document.getElementById('timerText');

        if (minutes > 0 && cookingTimer && timerText) {
            cookingTimer.classList.remove('hidden');

            this.timer = setInterval(() => {
                if (this.timeRemaining > 0) {
                    this.timeRemaining--;
                    timerText.textContent = this.formatTime(this.timeRemaining);
                } else {
                    this.clearStepTimer();
                    this.nextStep();
                }
            }, 1000);
        } else if (cookingTimer) {
            cookingTimer.classList.add('hidden');
        }
    }

    clearStepTimer() {
        if (this.timer) {
            clearInterval(this.timer);
            this.timer = null;
        }
    }

    formatTime(seconds) {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }

    nextStep() {
        if (this.currentStep < this.totalSteps) {
            // Mark current step as completed
            const currentStepEl = document.querySelector(`[data-step="${this.currentStep}"]`);
            if (currentStepEl) {
                currentStepEl.classList.add('completed');
                currentStepEl.classList.remove('active');
            }

            this.currentStep++;
            this.updateProgress();
            this.highlightCurrentStep();
            this.startStepTimer();
        } else {
            this.completeCooking();
        }
    }

    completeCooking() {
        this.stopCooking();

        const startBtn = document.getElementById('startCookingBtn');
        if (startBtn) {
            startBtn.textContent = '🎉 Cooking Complete!';
            startBtn.disabled = true;

            // Re-enable after 3 seconds
            setTimeout(() => {
                startBtn.textContent = 'Start Cooking';
                startBtn.disabled = false;
            }, 3000);
        }

        // Show completion message
        this.showToast('🎉 Congratulations! Your recipe is complete!');
    }

    showToast(message, duration = 3000) {
        const toast = document.createElement('div');
        toast.style.cssText = `
            position: fixed;
            bottom: 20px;
            right: 20px;
            background: var(--emerald-500);
            color: white;
            padding: 1rem 1.5rem;
            border-radius: var(--radius);
            box-shadow: var(--shadow-lg);
            z-index: 3000;
            animation: slideInRight 0.3s ease;
        `;
        toast.textContent = message;

        document.body.appendChild(toast);

        setTimeout(() => {
            toast.style.animation = 'slideOutRight 0.3s ease';
            setTimeout(() => toast.remove(), 300);
        }, duration);
    }

    printRecipe() {
        // Expand all collapsed sections before printing
        const collapsedSections = document.querySelectorAll('.section-content.collapsed');
        const originalCollapsedStates = [];

        collapsedSections.forEach((section, index) => {
            originalCollapsedStates[index] = true;
            section.classList.remove('collapsed');
            section.style.display = 'block';
        });

        // Show all recipe sections
        document.querySelectorAll('.recipe-section').forEach(section => {
            section.style.display = 'block';
        });

        // Hide modal background for printing
        const modal = document.getElementById('recipeModal');
        const originalBackground = modal.style.background;
        modal.style.background = 'white';

        // Create a print-specific style
        const printStyle = document.createElement('style');
        printStyle.id = 'print-style';
        printStyle.textContent = `
            @media print {
                /* Hide everything except recipe content */
                body * {
                    visibility: hidden;
                }

                /* Show recipe modal and all its content */
                .recipe-modal,
                .recipe-modal *,
                .modal-content,
                .modal-content *,
                .modal-header,
                .modal-header *,
                .modal-body,
                .modal-body *,
                .recipe-section,
                .recipe-section *,
                .section-content,
                .section-content *,
                .ingredient-category,
                .ingredient-category *,
                .ingredients-list,
                .ingredients-list *,
                .ingredient-item,
                .ingredient-item *,
                .instructions-list,
                .instructions-list *,
                .instruction-step,
                .instruction-step *,
                .notes-list,
                .notes-list *,
                .note-card,
                .note-card * {
                    visibility: visible !important;
                }

                /* Reset modal for printing */
                .recipe-modal {
                    position: static !important;
                    background: white !important;
                    display: block !important;
                    width: 100% !important;
                    height: auto !important;
                    max-width: none !important;
                    max-height: none !important;
                }

                .modal-content {
                    box-shadow: none !important;
                    border-radius: 0 !important;
                    max-width: none !important;
                    max-height: none !important;
                    width: 100% !important;
                    overflow: visible !important;
                }

                .modal-body {
                    padding: 0 !important;
                    overflow: visible !important;
                    max-height: none !important;
                }

                /* Hide interactive elements */
                .recipe-nav,
                .recipe-actions,
                .modal-close,
                .progress-container,
                .collapse-btn,
                .buy-links,
                .ingredient-checkbox,
                .start-cooking-btn {
                    display: none !important;
                    visibility: hidden !important;
                }

                /* Show all recipe sections */
                .recipe-section {
                    display: block !important;
                    visibility: visible !important;
                    page-break-inside: avoid;
                    margin-bottom: 1.5rem !important;
                }

                .section-content {
                    display: block !important;
                    visibility: visible !important;
                }

                /* Style headers for print */
                .modal-header h2 {
                    font-size: 2rem !important;
                    margin-bottom: 1rem !important;
                    text-align: center !important;
                    border-bottom: 2px solid #000 !important;
                    padding-bottom: 0.5rem !important;
                }

                .section-header h3 {
                    font-size: 1.5rem !important;
                    margin: 1.5rem 0 1rem 0 !important;
                    border-bottom: 1px solid #333 !important;
                    padding-bottom: 0.25rem !important;
                }

                /* Style ingredients for print */
                .ingredient-category h4 {
                    font-size: 1.2rem !important;
                    margin: 1rem 0 0.5rem 0 !important;
                    font-weight: bold !important;
                }

                .ingredient-item {
                    display: block !important;
                    margin-bottom: 0.5rem !important;
                    padding: 0.25rem 0 !important;
                    border: none !important;
                    background: none !important;
                }

                .ingredient-item label {
                    display: block !important;
                    font-size: 0.9rem !important;
                }

                .ingredient-amount {
                    font-weight: bold !important;
                    margin-right: 0.5rem !important;
                }

                /* Style instructions for print */
                .instruction-step {
                    display: block !important;
                    margin-bottom: 1rem !important;
                    padding: 0.5rem 0 !important;
                    border: none !important;
                    background: none !important;
                    page-break-inside: avoid;
                }

                .step-number {
                    display: inline-block !important;
                    width: 2rem !important;
                    height: 2rem !important;
                    background: #333 !important;
                    color: white !important;
                    text-align: center !important;
                    line-height: 2rem !important;
                    border-radius: 50% !important;
                    margin-right: 1rem !important;
                    font-weight: bold !important;
                }

                .step-content {
                    display: inline-block !important;
                    width: calc(100% - 3rem) !important;
                    vertical-align: top !important;
                }

                .step-content h4 {
                    font-size: 1.1rem !important;
                    margin-bottom: 0.5rem !important;
                    font-weight: bold !important;
                }

                .step-content p {
                    font-size: 0.9rem !important;
                    line-height: 1.4 !important;
                    margin-bottom: 0.25rem !important;
                }

                .step-timer {
                    font-size: 0.8rem !important;
                    font-style: italic !important;
                    color: #666 !important;
                }

                /* Style notes for print */
                .note-card {
                    margin-bottom: 1rem !important;
                    padding: 0.5rem !important;
                    border-left: 3px solid #333 !important;
                    background: none !important;
                    page-break-inside: avoid;
                }

                .note-card h4 {
                    font-size: 1rem !important;
                    margin-bottom: 0.5rem !important;
                    font-weight: bold !important;
                }

                .note-card p {
                    font-size: 0.9rem !important;
                    line-height: 1.4 !important;
                }

                /* Page settings */
                @page {
                    margin: 1in;
                    size: A4;
                }

                body {
                    font-size: 12pt !important;
                    line-height: 1.4 !important;
                    color: black !important;
                }
            }
        `;
        document.head.appendChild(printStyle);

        // Print
        window.print();

        // Cleanup after printing
        setTimeout(() => {
            modal.style.background = originalBackground;
            const printStyleEl = document.getElementById('print-style');
            if (printStyleEl) {
                printStyleEl.remove();
            }

            // Restore collapsed states
            const collapsedSectionsAfter = document.querySelectorAll('.section-content');
            collapsedSectionsAfter.forEach((section, index) => {
                if (originalCollapsedStates[index]) {
                    section.classList.add('collapsed');
                    section.style.display = 'none';
                }
            });
        }, 1000);

        this.showToast('Recipe ready for printing! 🖨️');
    }

    shareRecipe() {
        const recipe = this.recipes[this.currentRecipe];
        if (!recipe) return;

        const shareData = {
            title: recipe.title,
            text: `Check out this amazing ${recipe.title} recipe from Harsh's Ultimate Recipe Guide!`,
            url: window.location.href
        };

        // Check if Web Share API is supported
        if (navigator.share && navigator.canShare && navigator.canShare(shareData)) {
            navigator.share(shareData)
                .then(() => this.showToast('Recipe shared successfully! 📤'))
                .catch((error) => {
                    console.log('Error sharing:', error);
                    this.fallbackShare(shareData);
                });
        } else {
            this.fallbackShare(shareData);
        }
    }

    fallbackShare(shareData) {
        // Fallback: Copy to clipboard
        const textToCopy = `${shareData.title}\n\n${shareData.text}\n\n${shareData.url}`;

        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(textToCopy)
                .then(() => this.showToast('Recipe link copied to clipboard! 📋'))
                .catch(() => this.legacyFallbackShare(textToCopy));
        } else {
            this.legacyFallbackShare(textToCopy);
        }
    }

    legacyFallbackShare(text) {
        // Legacy fallback: Create a temporary textarea
        const textArea = document.createElement('textarea');
        textArea.value = text;
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        textArea.style.top = '-999999px';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();

        try {
            document.execCommand('copy');
            this.showToast('Recipe link copied to clipboard! 📋');
        } catch (err) {
            this.showToast('Unable to share. Please copy the URL manually.');
        }

        document.body.removeChild(textArea);
    }

    handleContactForm(e) {
        e.preventDefault();

        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);

        // Here you would normally send the data to a server
        console.log('Contact form submitted:', data);

        this.showToast('Thank you for your message! I\'ll get back to you soon.');
        e.target.reset();
    }
}

// Global functions for onclick handlers
window.showRecipe = function(recipeId) {
    if (window.recipeWebsite) {
        window.recipeWebsite.showRecipe(recipeId);
    }
};

// Initialize website when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.recipeWebsite = new RecipeWebsite();

    // Add CSS animations for toast
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideInRight {
            from {
                transform: translateX(100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }

        @keyframes slideOutRight {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(100%);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
});
