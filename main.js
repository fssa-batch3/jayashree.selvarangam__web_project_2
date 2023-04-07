let product_detail_list = JSON.parse(localStorage.getItem("product_detail_list"));

if(!product_detail_list){
   let  product_detail_list =  [
    {
        "category": TEA,
        // "category_description":category_description,
        // "description":description,
        "name":  'Hibiscus tea',
        "quantities": {
           'tall':{
           "name": 'tall',
           "quantity": 550,
           "unit": "ml",
           "calories": 255,
           "calories_unit": "kcal"},
           'medium':{
           "name": 'medium',
           "quantity": 250,
           "unit": "ml",
           "calories": 155,
           "calories_unit": "kcal"
           },
           'short':{
           "name": 'short',
           "quantity": 155,
           "unit": "ml",
           "calories": 75,
           "calories_unit": "kcal"
           }
        },
        "image": {
           "source": "../../assets/image/vanillacold.jpg ",
           "alt": ""
        },

        "description": 'fresh tea',
        'price':cost,
        "price_1":{
           'tall':200,
           'medium':100,
           'short':70
        },
        "currency": "Rs.",
        "product_id": uuidv4()
     },
     {
        "category": 'TEA',
        // "category_description":category_description,
        // "description":description,
        "name":  'Hibiscus tea',
        "quantities": {
           'tall':{
           "name": 'tall',
           "quantity": 550,
           "unit": "ml",
           "calories": 255,
           "calories_unit": "kcal"},
           'medium':{
           "name": 'medium',
           "quantity": 250,
           "unit": "ml",
           "calories": 155,
           "calories_unit": "kcal"
           },
           'short':{
           "name": 'short',
           "quantity": 155,
           "unit": "ml",
           "calories": 75,
           "calories_unit": "kcal"
           }
        },
        "image": {
           "source": "../../assets/image/vanillacold.jpg ",
           "alt": ""
        },

        "description": 'fresh tea',
        'price':cost,
        "price_1":{
           'tall':200,
           'medium':100,
           'short':70
        },
        "currency": "Rs.",
        "product_id": uuidv4()
     },
     {
        "category": 'FRAPPUCINO',
        // "category_description":category_description,
        // "description":description,
        "name":  'COLD frappucino',
        "quantities": {
           'tall':{
           "name": 'tall',
           "quantity": 550,
           "unit": "ml",
           "calories": 255,
           "calories_unit": "kcal"},
           'medium':{
           "name": 'medium',
           "quantity": 250,
           "unit": "ml",
           "calories": 155,
           "calories_unit": "kcal"
           },
           'short':{
           "name": 'short',
           "quantity": 155,
           "unit": "ml",
           "calories": 75,
           "calories_unit": "kcal"
           }
        },
        "image": {
           "source": "../../assets/image/vanillacold.jpg ",
           "alt": ""
        },

        "description": 'fresh tea',
        'price':cost,
        "price_1":{
           'tall':200,
           'medium':100,
           'short':70
        },
        "currency": "Rs.",
        "product_id": uuidv4()
     },
     {
        "category": TEA,
        // "category_description":category_description,
        // "description":description,
        "name":  'Hibiscus tea',
        "quantities": {
           'tall':{
           "name": 'tall',
           "quantity": 550,
           "unit": "ml",
           "calories": 255,
           "calories_unit": "kcal"},
           'medium':{
           "name": 'medium',
           "quantity": 250,
           "unit": "ml",
           "calories": 155,
           "calories_unit": "kcal"
           },
           'short':{
           "name": 'short',
           "quantity": 155,
           "unit": "ml",
           "calories": 75,
           "calories_unit": "kcal"
           }
        },
        "image": {
           "source": "../../assets/image/vanillacold.jpg ",
           "alt": ""
        },

        "description": 'fresh tea',
        'price':cost,
        "price_1":{
           'tall':200,
           'medium':100,
           'short':70
        },
        "currency": "Rs.",
        "product_id": uuidv4()
     },
     {
        "category": 'COLD BREW',
        // "category_description":category_description,
        // "description":description,
        "name":  'coffee BREW',
        "quantities": {
           'tall':{
           "name": 'tall',
           "quantity": 550,
           "unit": "ml",
           "calories": 255,
           "calories_unit": "kcal"},
           'medium':{
           "name": 'medium',
           "quantity": 250,
           "unit": "ml",
           "calories": 155,
           "calories_unit": "kcal"
           },
           'short':{
           "name": 'short',
           "quantity": 155,
           "unit": "ml",
           "calories": 75,
           "calories_unit": "kcal"
           }
        },
        "image": {
           "source": "../../assets/image/vanillacold.jpg ",
           "alt": ""
        },

        "description": 'fresh tea',
        'price':cost,
        "price_1":{
           'tall':200,
           'medium':100,
           'short':70
        },
        "currency": "Rs.",
        "product_id": uuidv4()
     },
     {
        "category": 'ESPRESSO',
        // "category_description":category_description,
        // "description":description,
        "name":  'COLD ESPRESSO',
        "quantities": {
           'tall':{
           "name": 'tall',
           "quantity": 550,
           "unit": "ml",
           "calories": 255,
           "calories_unit": "kcal"},
           'medium':{
           "name": 'medium',
           "quantity": 250,
           "unit": "ml",
           "calories": 155,
           "calories_unit": "kcal"
           },
           'short':{
           "name": 'short',
           "quantity": 155,
           "unit": "ml",
           "calories": 75,
           "calories_unit": "kcal"
           }
        },
        "image": {
           "source": "../../assets/image/vanillacold.jpg ",
           "alt": ""
        },

        "description": 'fresh tea',
        'price':cost,
        "price_1":{
           'tall':200,
           'medium':100,
           'short':70
        },
        "currency": "Rs.",
        "product_id": uuidv4()
     }, {
        "category": 'ESPRESSO',
        // "category_description":category_description,
        // "description":description,
        "name":  'Java chip ',
        "quantities": {
           'tall':{
           "name": 'tall',
           "quantity": 550,
           "unit": "ml",
           "calories": 255,
           "calories_unit": "kcal"},
           'medium':{
           "name": 'medium',
           "quantity": 250,
           "unit": "ml",
           "calories": 155,
           "calories_unit": "kcal"
           },
           'short':{
           "name": 'short',
           "quantity": 155,
           "unit": "ml",
           "calories": 75,
           "calories_unit": "kcal"
           }
        },
        "image": {
           "source": "../../assets/image/vanillacold.jpg ",
           "alt": ""
        },

        "description": 'fresh tea',
        'price':cost,
        "price_1":{
           'tall':200,
           'medium':100,
           'short':70
        },
        "currency": "Rs.",
        "product_id": uuidv4()
     }
 ]
}

