const product_detail_list = JSON.parse(
  localStorage.getItem("product_detail_list")
);


if (!product_detail_list) {
  localStorage.setItem(
    "product_detail_list",
    JSON.stringify([
      {
        category: "TEA",
        // "category_description":category_description,
        // "description":description,
        name: "English green tea ",
        quantities: {
          tall: {
            name: "tall",
            quantity: 550,
            unit: "ml",
            calories: 255,
            calories_unit: "kcal",
          },
          medium: {
            name: "medium",
            quantity: 250,
            unit: "ml",
            calories: 155,
            calories_unit: "kcal",
          },
          short: {
            name: "short",
            quantity: 155,
            unit: "ml",
            calories: 75,
            calories_unit: "kcal",
          },
        },
        image: {
          source: "../../assets/image/vanillacold.jpg ",
          alt: "",
        },

        description: "fresh tea",

        price_1: {
          tall: 200,
          medium: 100,
          short: 70,
        },
        currency: "Rs.",
        product_id: uuidv4(),
      },
      {
        category: "ESPRESSO",
        // "category_description":category_description,
        // "description":description,
        name: "Java chip frappucino",
        quantities: {
          tall: {
            name: "tall",
            quantity: 550,
            unit: "ml",
            calories: 255,
            calories_unit: "kcal",
          },
          medium: {
            name: "medium",
            quantity: 250,
            unit: "ml",
            calories: 155,
            calories_unit: "kcal",
          },
          short: {
            name: "short",
            quantity: 155,
            unit: "ml",
            calories: 75,
            calories_unit: "kcal",
          },
        },
        image: {
          source: "../../assets/image/vanillacold.jpg ",
          alt: "",
        },

        description: "fresh coffee",
        price_1: {
          tall: 200,
          medium: 100,
          short: 70,
        },
        currency: "Rs.",
        product_id: uuidv4(),
      },
      {
        category: "FRAPPUCINO",
        // "category_description":category_description,
        // "description":description,
        name: "Caramel frappucino",
        quantities: {
          tall: {
            name: "tall",
            quantity: 550,
            unit: "ml",
            calories: 255,
            calories_unit: "kcal",
          },
          medium: {
            name: "medium",
            quantity: 250,
            unit: "ml",
            calories: 155,
            calories_unit: "kcal",
          },
          short: {
            name: "short",
            quantity: 155,
            unit: "ml",
            calories: 75,
            calories_unit: "kcal",
          },
        },
        image: {
          source: "../../assets/image/vanillacold.jpg ",
          alt: "",
        },

        description: "fresh coffee",

        price_1: {
          tall: 200,
          medium: 100,
          short: 70,
        },
        currency: "Rs.",
        product_id: uuidv4(),
      },
      {
        category: "COLD BREW",
        // "category_description":category_description,
        // "description":description,
        name: "Brewed coffee",
        quantities: {
          tall: {
            name: "tall",
            quantity: 550,
            unit: "ml",
            calories: 255,
            calories_unit: "kcal",
          },
          medium: {
            name: "medium",
            quantity: 250,
            unit: "ml",
            calories: 155,
            calories_unit: "kcal",
          },
          short: {
            name: "short",
            quantity: 155,
            unit: "ml",
            calories: 75,
            calories_unit: "kcal",
          },
        },
        image: {
          source: "../../assets/image/vanillacold.jpg ",
          alt: "",
        },

        description: "fresh ",

        price_1: {
          tall: 200,
          medium: 100,
          short: 70,
        },
        currency: "Rs.",
        product_id: uuidv4()
      },
      {
        category: "COLD BREW",
        // "category_description":category_description,
        // "description":description,
        name: "Pour-kenya",
        quantities: {
          tall: {
            name: "tall",
            quantity: 550,
            unit: "ml",
            calories: 255,
            calories_unit: "kcal",
          },
          medium: {
            name: "medium",
            quantity: 250,
            unit: "ml",
            calories: 155,
            calories_unit: "kcal",
          },
          short: {
            name: "short",
            quantity: 155,
            unit: "ml",
            calories: 75,
            calories_unit: "kcal",
          },
        },
        image: {
          source: "../../assets/image/vanillacold.jpg ",
          alt: "",
        },

        description: "fresh tea",

        price_1: {
          tall: 200,
          medium: 100,
          short: 70,
        },
        currency: "Rs.",
        product_id: uuidv4()
      },
      //   {
      //      "category": 'ESPRESSO',
      //      // "category_description":category_description,
      //      // "description":description,
      //      "name":  'COLD ESPRESSO',
      //      "quantities": {
      //         'tall':{
      //         "name": 'tall',
      //         "quantity": 550,
      //         "unit": "ml",
      //         "calories": 255,
      //         "calories_unit": "kcal"},
      //         'medium':{
      //         "name": 'medium',
      //         "quantity": 250,
      //         "unit": "ml",
      //         "calories": 155,
      //         "calories_unit": "kcal"
      //         },
      //         'short':{
      //         "name": 'short',
      //         "quantity": 155,
      //         "unit": "ml",
      //         "calories": 75,
      //         "calories_unit": "kcal"
      //         }
      //      },
      //      "image": {
      //         "source": "../../assets/image/vanillacold.jpg ",
      //         "alt": ""
      //      },

      //      "description": 'fresh tea',
      //      'price':10,
      //      "price_1":{
      //         'tall':200,
      //         'medium':100,
      //         'short':70
      //      },
      //      "currency": "Rs.",
      //      "product_id": 1
      //   },
      //   {
      //      "category": 'ESPRESSO',
      //      // "category_description":category_description,
      //      // "description":description,
      //      "name":  'Java chip ',
      //      "quantities": {
      //         'tall':{
      //         "name": 'tall',
      //         "quantity": 550,
      //         "unit": "ml",
      //         "calories": 255,
      //         "calories_unit": "kcal"},
      //         'medium':{
      //         "name": 'medium',
      //         "quantity": 250,
      //         "unit": "ml",
      //         "calories": 155,
      //         "calories_unit": "kcal"
      //         },
      //         'short':{
      //         "name": 'short',
      //         "quantity": 155,
      //         "unit": "ml",
      //         "calories": 75,
      //         "calories_unit": "kcal"
      //         }
      //      },
      //      "image": {
      //         "source": "../../assets/image/vanillacold.jpg ",
      //         "alt": ""
      //      },

      //      "description": 'fresh tea',
      //      'price':10,
      //      "price_1":{
      //         'tall':200,
      //         'medium':100,
      //         'short':70
      //      },
      //      "currency": "Rs.",
      //      "product_id": uuidv4()
      //   }
    ])
  );
}

const user_list = JSON.parse(
  localStorage.getItem("user_list")
);
if(!user_list){
  localStorage.setItem("user_list",
    JSON.stringify([
      {
        unique_id: uuidv4(),
        user_address: "378, BSR Mall, Rajiv Gandhi Salai, Jothi Nagar, Thoraipakkam, Tamil Nadu 600097",
        user_confirm_password: "123asdA!",
        user_email: "admin123@gmail.com",
        user_mobile: "9887867851",
        user_name: "admin",
        user_password: "123asdA!"
}]
))
}