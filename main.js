const product_detail_list = JSON.parse(
  localStorage.getItem("product_detail_list")
);


if (!product_detail_list) {
  localStorage.setItem(
    "product_detail_list",
    JSON.stringify([
      {
        
        'category':'4n6IYaZobQ',
        // "category_description":category_description,
        // "description":description,
        name: "English green tea ",
        quantities: {
          tall: {
            name: "tall",
            quantity: 750,
            unit: "ml",
            calories: 320,
            calories_unit: "kcal",
          },
          medium: {
            name: "medium",
            quantity: 500,
            unit: "ml",
            calories: 270,
            calories_unit: "kcal",
          },
          short: {
            name: "short",
            quantity: 250,
            unit: "ml",
            calories: 155,
            calories_unit: "kcal",
          },
        },
        image: {
          src: "../../assets/image/englishtea.jpg "
          
        },

        description: "A breakfast-style black tea of malty boldness & bright flavour, invigorating any time of the day.  ",
        description1: "A breakfast-style black tea of malty boldness & bright flavor....  ",
        price_1: {
          tall: 340,
          medium: 260,
          short: 170,
        },
        currency: "Rs.",
        product_id: uuidv4(),
      },
       { 
      'category':'4n6IYaZobQ',
      // "category_description":category_description,
      // "description":description,
      name: "Iced Shaken Hibiscus  Tea ",
      quantities: {
        tall: {
          name: "tall",
          quantity: 750,
          unit: "ml",
          calories: 320,
          calories_unit: "kcal",
        },
        medium: {
          name: "medium",
          quantity: 500,
          unit: "ml",
          calories: 270,
          calories_unit: "kcal",
        },
        short: {
          name: "short",
          quantity: 250,
          unit: "ml",
          calories: 155,
          calories_unit: "kcal",
        },
      },
      image: {
        src: "../../assets/image/hibiscus.jpg "
        
      },

      description: "A tangy-sweet concoction featuring hibiscus flavour and pomegranate-juice pearls.",
      description1: "A tangy-sweet concoction featuring hibiscus flavour and pome... ",
      price_1: {
        tall: 340,
        medium: 260,
        short: 170,
      },
      currency: "Rs.",
      product_id: uuidv4(),
    },
    { 
      'category':'4n6IYaZobQ',
      // "category_description":category_description,
      // "description":description,
      name: "Matcha and Espresso Fusion ",
      quantities: {
        tall: {
          name: "tall",
          quantity: 750,
          unit: "ml",
          calories: 320,
          calories_unit: "kcal",
        },
        medium: {
          name: "medium",
          quantity: 500,
          unit: "ml",
          calories: 270,
          calories_unit: "kcal",
        },
        short: {
          name: "short",
          quantity: 250,
          unit: "ml",
          calories: 155,
          calories_unit: "kcal",
        },
      },
      image: {
        src: "../../assets/image/1.jpg "
        
      },

      description: "Beautiful layers of matcha green tea, our bold espresso and milk create a smooth, richly textured beverage",
      description1: "Beautiful layers of matcha green tea, our bold espresso and ... ",
      price_1: {
        tall: 340,
        medium: 260,
        short: 170,
      },
      currency: "Rs.",
      product_id: uuidv4(),
    },
    { 
      'category':'4n6IYaZobQ',
      // "category_description":category_description,
      // "description":description,
      name: " Chai Tea Latte ",
      quantities: {
        tall: {
          name: "tall",
          quantity: 750,
          unit: "ml",
          calories: 320,
          calories_unit: "kcal",
        },
        medium: {
          name: "medium",
          quantity: 500,
          unit: "ml",
          calories: 270,
          calories_unit: "kcal",
        },
        short: {
          name: "short",
          quantity: 250,
          unit: "ml",
          calories: 155,
          calories_unit: "kcal",
        },
      },
      image: {
        src: "../../assets/image/chai.webp"
        
      },

      description: "Black tea infused with cinnamon, clove, and other warming spices are combined with milk for the perfect balance of sweet and spicy.",
      description1: "Black tea infused with cinnamon, clove, and other warming sp... ",
      price_1: {
        tall: 340,
        medium: 260,
        short: 170,
      },
      currency: "Rs.",
      product_id: uuidv4(),
    },
    ///////////////
    { 
      'category':'4n6IYaZobQ',
      // "category_description":category_description,
      // "description":description,
      name: " Iced Shaken Green Tea ",
      quantities: {
        tall: {
          name: "tall",
          quantity: 750,
          unit: "ml",
          calories: 320,
          calories_unit: "kcal",
        },
        medium: {
          name: "medium",
          quantity: 500,
          unit: "ml",
          calories: 270,
          calories_unit: "kcal",
        },
        short: {
          name: "short",
          quantity: 250,
          unit: "ml",
          calories: 155,
          calories_unit: "kcal",
        },
      },
      image: {
        src: "../../assets/image/23.jpg "
        
      },

      description: "Premium green tea is lightly sweetened, then shaken with ice or refreshing lemonade.",
      description1: "Premium green tea is lightly sweetened, then shaken with ice...",
      price_1: {
        tall: 340,
        medium: 260,
        short: 170,
      },
      currency: "Rs.",
      product_id: uuidv4(),
    },
    { 
      'category':'4n6IYaZobQ',
      // "category_description":category_description,
      // "description":description,
      name: "Green Tea Latte",
      quantities: {
        tall: {
          name: "tall",
          quantity: 750,
          unit: "ml",
          calories: 320,
          calories_unit: "kcal",
        },
        medium: {
          name: "medium",
          quantity: 500,
          unit: "ml",
          calories: 270,
          calories_unit: "kcal",
        },
        short: {
          name: "short",
          quantity: 250,
          unit: "ml",
          calories: 155,
          calories_unit: "kcal",
        },
      },
      image: {
        src: "../../assets/image/greentea.jpg "
        
      },

      description: "Smooth and creamy matcha is lightly sweetened and served with steamed milk.",
      description1: "Smooth and creamy matcha is lightly sweetened and served wit...",
      price_1: {
        tall: 340,
        medium: 260,
        short: 170,
      },
      currency: "Rs.",
      product_id: uuidv4(),
    },
    

      ///////////////////
      {

        'category':'8n6iYaZobQ',
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
          src: "../../assets/image/javachip.jpg"
         
        },
        description:'We blend mocha sauce and Frappuccino® chips with Frappuccino® roast coffee and milk and ice, then top with whipped cream and mocha drizzle to bring you endless java joy',
        description1: "We blend mocha sauce Frappuccino® roast coffee and milk and ice ...",
        price_1: {
          tall: 310,
          medium: 220,
          short: 170
        },
        currency: "Rs.",
        product_id: uuidv4(),
      },
      {

        'category':'4n6iYaZobQ',
        // "category_description":category_description,
        // "description":description,
        name: "Cappuccino",
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
          src: "../../assets/image/javachip.jpg"
         
        },
        description:"Dark, Rich in flavour espresso lies in wait under a smoothed and stretched layer of thick foam. It's truly the height of our baristas craft.",
        description1: "Dark, Rich in flavour espresso lies in wait under a smoothed...",
        price_1: {
          tall: 310,
          medium: 220,
          short: 170
        },
        currency: "Rs.",
        product_id: uuidv4(),
      },
    
      {

        'category':'4n6iYaZobQ',
        // "category_description":category_description,
        // "description":description,
        name: "Hazelnut Cortado",
        quantities: {
          tall: {
            name: "tall",
            quantity: 500,
            unit: "ml",
            calories: 255,
            calories_unit: "kcal",
          },
          medium: {
            name: "medium",
            quantity: 350,
            unit: "ml",
            calories: 195,
            calories_unit: "kcal",
          },
          short: {
            name: "short",
            quantity: 255,
            unit: "ml",
            calories: 75,
            calories_unit: "kcal",
          },
        },
        image: {
          src: "../../assets/image/hazel.jpg"
         
        },
        description:"A perfect espresso shot and hazelnut syrup, topped with steamed milk",
        description1: "A perfect espresso shot and hazelnut syrup, topped with stea...",
        price_1: {
          tall: 310,
          medium: 220,
          short: 170
        },
        currency: "Rs.",
        product_id: uuidv4(),
      },
      {

        'category':'4n6iYaZobQ',
        // "category_description":category_description,
        // "description":description,
        name: "Doppio Espresso",
        quantities: {
          tall: {
            name: "tall",
            quantity: 500,
            unit: "ml",
            calories: 255,
            calories_unit: "kcal",
          },
          medium: {
            name: "medium",
            quantity: 350,
            unit: "ml",
            calories: 195,
            calories_unit: "kcal",
          },
          short: {
            name: "short",
            quantity: 255,
            unit: "ml",
            calories: 75,
            calories_unit: "kcal",
          },
        },
        image: {
          src: "../../assets/image/doppio.jpg"
         
        },
        description:"Our smooth signature Espresso Roast and its caramelly sweetness is at the very heart of everything we do.",
        description1: "Our smooth signature Espresso Roast and its caramelly sweetn...",
        price_1: {
          tall: 310,
          medium: 220,
          short: 170
        },
        currency: "Rs.",
        product_id: uuidv4(),
      },
      {
       
        'category':'4n6iYaZobQ',
        // "category_description":category_description,
        // "description":description,
        name: "Iced Caffè Mocha",
        quantities: {
          tall: {
            name: "tall",
            quantity: 500,
            unit: "ml",
            calories: 255,
            calories_unit: "kcal",
          },
          medium: {
            name: "medium",
            quantity: 350,
            unit: "ml",
            calories: 195,
            calories_unit: "kcal",
          },
          short: {
            name: "short",
            quantity: 255,
            unit: "ml",
            calories: 75,
            calories_unit: "kcal",
          },
        },
        image: {
          src: "../../assets/image/iced.jpg"
        
        },
        description:"Espresso combined with bittersweet mocha sauce and milk and served over ice. Topped with sweetened whipped cream.",
        description1: "Signature Italian style Cappuccino with espresso shot, mocha...",
        price_1: {
          tall: 310,
          medium: 220,
          short: 170
        },
        currency: "Rs.",
        product_id: uuidv4(),
      },
      {
       
        'category':'4n6iYaZobQ',
        // "category_description":category_description,
        // "description":description,
        name: "Caffe Latte",
        quantities: {
          tall: {
            name: "tall",
            quantity: 500,
            unit: "ml",
            calories: 255,
            calories_unit: "kcal",
          },
          medium: {
            name: "medium",
            quantity: 350,
            unit: "ml",
            calories: 195,
            calories_unit: "kcal",
          },
          short: {
            name: "short",
            quantity: 255,
            unit: "ml",
            calories: 75,
            calories_unit: "kcal",
          },
        },
        image: {
          src: "../../assets/image/Ca100377.webp"
        
        },
        description:"Our dark, Rich in flavour espresso balanced with steamed milk and a light layer of foam. A perfect coffee warm up.",
        description1: "Our dark, Rich in flavour espresso balanced with steamed mil...",
        price_1: {
          tall: 310,
          medium: 220,
          short: 170
        },
        currency: "Rs.",
        product_id: uuidv4(),
      },
      {
       
        'category':'4n6iYaZobQ',
        // "category_description":category_description,
        // "description":description,
        name: "Belgium Chocolate Latte",
        quantities: {
          tall: {
            name: "tall",
            quantity: 500,
            unit: "ml",
            calories: 255,
            calories_unit: "kcal",
          },
          medium: {
            name: "medium",
            quantity: 350,
            unit: "ml",
            calories: 195,
            calories_unit: "kcal",
          },
          short: {
            name: "short",
            quantity: 255,
            unit: "ml",
            calories: 75,
            calories_unit: "kcal",
          },
        },
        image: {
          src: "../../assets/image/bel.jpg"
        
        },
        description:"Espresso with richly flavoured Belgium chocolate sauce, mocha sauce and steamed milk. Topped with chocolate whipped cream and dark chocolate chips.",
        description1: "Espresso with richly flavoured Belgium chocolate sauce, moch...",
        price_1: {
          tall: 310,
          medium: 220,
          short: 170
        },
        currency: "Rs.",
        product_id: uuidv4(),
      },
      {
       
        'category':'4n6iYaZobQ',
        // "category_description":category_description,
        // "description":description,
        name: "Solo Espresso",
        quantities: {
          tall: {
            name: "tall",
            quantity: 500,
            unit: "ml",
            calories: 255,
            calories_unit: "kcal",
          },
          medium: {
            name: "medium",
            quantity: 350,
            unit: "ml",
            calories: 195,
            calories_unit: "kcal",
          },
          short: {
            name: "short",
            quantity: 255,
            unit: "ml",
            calories: 75,
            calories_unit: "kcal",
          },
        },
        image: {
          src: "../../assets/image/solo.jpg"
        
        },
        description:"Our smooth signature Espresso Roast and its caramelly sweetness is at the very heart of everything we do.",
        description1: "Our smooth signature Espresso Roast and its caramelly sweetn...",
        price_1: {
          tall: 310,
          medium: 220,
          short: 170
        },
        currency: "Rs.",
        product_id: uuidv4(),
      },
      {
       
        'category':'4n6iYaZobQ',
        // "category_description":category_description,
        // "description":description,
        name: "Caffe Mocha",
        quantities: {
          tall: {
            name: "tall",
            quantity: 500,
            unit: "ml",
            calories: 255,
            calories_unit: "kcal",
          },
          medium: {
            name: "medium",
            quantity: 350,
            unit: "ml",
            calories: 195,
            calories_unit: "kcal",
          },
          short: {
            name: "short",
            quantity: 255,
            unit: "ml",
            calories: 75,
            calories_unit: "kcal",
          },
        },
        image: {
          src: "../../assets/image/caffemo.jpg"
        
        },
        description:"We combine our Rich in flavour, full-bodied espresso with bittersweet mocha sauce and steamed milk, then top it off with sweetened whipped cream. The classic coffee drink to satisfy your sweet tooth.",
        description1: "We combine our Rich in flavour, full-bodied espresso with bi...",
        price_1: {
          tall: 310,
          medium: 220,
          short: 170
        },
        currency: "Rs.",
        product_id: uuidv4(),
      },
      /////
      {
       
        'category':'8n6iYaZobQ',
        // "category_description":category_description,
        // "description":description,
        name: "Mango On The Beach Frappuccino",
        quantities: {
          tall: {
            name: "tall",
            quantity: 500,
            unit: "ml",
            calories: 255,
            calories_unit: "kcal",
          },
          medium: {
            name: "medium",
            quantity: 350,
            unit: "ml",
            calories: 195,
            calories_unit: "kcal",
          },
          short: {
            name: "short",
            quantity: 255,
            unit: "ml",
            calories: 75,
            calories_unit: "kcal",
          },
        },
        image: {
          src: "../../assets/image/ma.jpg"
        
        },
        description:"Alphonso mango flavoured cream blended with mango jelly. The beverage is topped with sandy textured graham crumbs. ",
        description1: "Alphonso mango flavoured cream blended with mango jelly. The...",
        price_1: {
          tall: 310,
          medium: 220,
          short: 170
        },
        currency: "Rs.",
        product_id: uuidv4(),
      },
      {
       
        'category':'8n6iYaZobQ',
        // "category_description":category_description,
        // "description":description,
        name:"Coffee Frappucino",
        quantities: {
          tall: {
            name: "tall",
            quantity: 500,
            unit: "ml",
            calories: 255,
            calories_unit: "kcal",
          },
          medium: {
            name: "medium",
            quantity: 350,
            unit: "ml",
            calories: 195,
            calories_unit: "kcal",
          },
          short: {
            name: "short",
            quantity: 255,
            unit: "ml",
            calories: 75,
            calories_unit: "kcal",
          },
        },
        image: {
          src: "../../assets/image/cof.jpg"
        
        },
        description:"Coffee meets milk and ice in a blender and together they create one of our original Frappuccino® beverages. ",
        description1: "Coffee meets milk and ice in a blender and together they cre...",
        price_1: {
          tall: 310,
          medium: 220,
          short: 170
        },
        currency: "Rs.",
        product_id: uuidv4(),
      },
      {
       
        'category':'8n6iYaZobQ',
        // "category_description":category_description,
        // "description":description,
        name: "Cold Coffee",
        quantities: {
          tall: {
            name: "tall",
            quantity: 500,
            unit: "ml",
            calories: 255,
            calories_unit: "kcal",
          },
          medium: {
            name: "medium",
            quantity: 350,
            unit: "ml",
            calories: 195,
            calories_unit: "kcal",
          },
          short: {
            name: "short",
            quantity: 255,
            unit: "ml",
            calories: 75,
            calories_unit: "kcal",
          },
        },
        image: {
          src: "../../assets/image/cc.jpg"
        
        },
        description:" Our signature rich in flavour espresso blended with delicate vanilla flavour and milk to create a perfect cold coffee delight.",
        description1: "Our signature rich in flavour espresso blended with delicate...",
        price_1: {
          tall: 310,
          medium: 220,
          short: 170
        },
        currency: "Rs.",
        product_id: uuidv4(),
      },
      {
       
        'category':'8n6iYaZobQ',
        // "category_description":category_description,
        // "description":description,
        name: "Caramel frappucino",
        quantities: {
          tall: {
            name: "tall",
            quantity: 500,
            unit: "ml",
            calories: 255,
            calories_unit: "kcal",
          },
          medium: {
            name: "medium",
            quantity: 350,
            unit: "ml",
            calories: 195,
            calories_unit: "kcal",
          },
          short: {
            name: "short",
            quantity: 255,
            unit: "ml",
            calories: 75,
            calories_unit: "kcal",
          },
        },
        image: {
          src: "../../assets/image/carameljava.jpg"
        
        },
        description:"A blend of coffee, sweet caramel syrup, milk and ice topped with whipped cream and a swirl of caramel drizzle.",
        description1: "A blend of coffee, sweet caramel syrup, milk and ice topped .",
        price_1: {
          tall: 310,
          medium: 220,
          short: 170
        },
        currency: "Rs.",
        product_id: uuidv4(),
      },



      ////////////////
      {
        
      'category':'4n9iYaZobQ',

        // "category_description":category_description,
        // "description":description,
        name: "",
        quantities: {
          tall: {
            name: "tall",
            quantity: 500,
            unit: "ml",
            calories: 255,
            calories_unit: "kcal",
          },
          medium: {
            name: "medium",
            quantity: 350,
            unit: "ml",
            calories: 195,
            calories_unit: "kcal",
          },
          short: {
            name: "short",
            quantity: 255,
            unit: "ml",
            calories: 75,
            calories_unit: "kcal",
          },
        },
        
        image: {
          src: "../../assets/image/eth.jpg "
         
        },
        price_1: {
          tall: 310,
          medium: 220,
          short: 170
        },
        description: " Pour-over is a beautifully simple and accessible way to brew a single cup of coffee with clean, fully developed flavor and body. Brewed with Ethiopia Roast.",
        description1: "Pour-over is a beautifully simple and accessible way to brew...",

        currency: "Rs.",
        product_id: uuidv4()
      },
      {
        
        'category':'4n9iYaZobQ',
  
          // "category_description":category_description,
          // "description":description,
          name: "Pour Over India Estates Blend",
          quantities: {
            tall: {
              name: "tall",
              quantity: 500,
              unit: "ml",
              calories: 255,
              calories_unit: "kcal",
            },
            medium: {
              name: "medium",
              quantity: 350,
              unit: "ml",
              calories: 195,
              calories_unit: "kcal",
            },
            short: {
              name: "short",
              quantity: 255,
              unit: "ml",
              calories: 75,
              calories_unit: "kcal",
            },
          },
          
          image: {
            src: "../../assets/image/eth.jpg"
          },
          price_1: {
            tall:310,
            medium: 220,
            short: 170
          },
          description: " Pour-over is a beautifully simple and accessible way to brew a single cup of coffee with clean, fully developed flavor and body. Brewed with India Estates Blend.",
          description1: "Pour-over is a beautifully simple and accessible way to brew...",
  
          currency: "Rs.",
          product_id: uuidv4()
        },
      //////////////////////////////
      {
      
        // "category_description":category_description,
      'category':'4n6IYaZoBQ',
      // "description":description,

        name: " Vanilla Sweet Cream Cold Brew",
        quantities: {
          tall: {
            name: "tall",
            quantity: 500,
            unit: "ml",
            calories: 255,
            calories_unit: "kcal",
          },
          medium: {
            name: "medium",
            quantity: 350,
            unit: "ml",
            calories: 195,
            calories_unit: "kcal",
          },
          short: {
            name: "short",
            quantity: 255,
            unit: "ml",
            calories: 75,
            calories_unit: "kcal",
          },
        },
        image: {
          src: "../../assets/image/vanillacold.jpg "
        
        },

        description: "Cold Brew with Vanilla Sweet Cream is made with Starbucks® Cold Brew over ice and topped with a hand crafted vanilla sweet cream, which floats on top of the beverage before slowly cascading down. ",
        description1: "Cold Brew with Vanilla Sweet Cream is made with... ",
        price_1: {
          tall:310,
          medium: 220,
          short: 170
        },
        currency: "Rs.",
        product_id: uuidv4()
      },      {
      
        // "category_description":category_description,
      'category':'4n6IYaZoBQ',
      // "description":description,

        name: "White Mocha Caramel Cold Brew",
        quantities: {
          tall: {
            name: "tall",
            quantity: 500,
            unit: "ml",
            calories: 255,
            calories_unit: "kcal",
          },
          medium: {
            name: "medium",
            quantity: 350,
            unit: "ml",
            calories: 195,
            calories_unit: "kcal",
          },
          short: {
            name: "short",
            quantity: 255,
            unit: "ml",
            calories: 75,
            calories_unit: "kcal",
          },
        },
        image: {
          src: "../../assets/image/whitecold.jpg "
        
        },

        description: "Our slow steeped Cold brew shaken with milk and white chocolate to strike the perfect balance of coffee and sweetness.",
        description1: "Our slow steeped Cold brew shaken with milk and white chocol...",
        price_1: {
          tall:310,
          medium: 220,
          short: 170
        },
        currency: "Rs.",
        product_id: uuidv4()
      }

    ])
  );
}
 


const category_detail_list = JSON.parse(
  localStorage.getItem("category")
);
if (!category_detail_list) {
  localStorage.setItem("category",JSON.stringify(
    [
    {
      'category':'ESPRESSO',
      'category_id':'4n6iYaZobQ',
      'category_status':true
    },
    {
      'category':'FRAPPUCINO',
      'category_id':'8n6iYaZobQ',
      'category_status':true
    },
    {
      'category':'TEA',
      'category_id':'4n6IYaZobQ',
      'category_status':true
    },
    {
      'category':'COLD BREW',
      'category_id':'4n6IYaZoBQ',
      'category_status':true
    },
    {
      'category':'BREWED COFFEE',
      'category_id':'4n9iYaZobQ',
      'category_status':true
    },
    ]
  ))}









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