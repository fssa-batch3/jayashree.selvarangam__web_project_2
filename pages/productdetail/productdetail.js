// //  <div class="inc-dec-button">
// // <button class="inc-dec" >
// //     <span class="minus"> <i class="fa-solid fa-minus"></i></span><span>0</span><span class="plus"><i class="fa-solid fa-plus"></i></span>
// //     </button>
// // </div>
// // <div class="add-item-cart">
// // <a href="../../pages/add to cart/addtocart.html"><button class="btn-button" id="btn-4">Add to the cart</button></a>
// </div> 
let row_card;
let image_card;
let image_main_card;
let content_card;
let h3_card;
let p_card;
let p1_card;
let p2_card;
let button_card;
let size_card;
let btn1_card;
let btn2_card;
let btn3_card;
let inc_dec_button_card;
let inc_dec_card;
let minus_card;

// const product_detail_list =
//     [
//         {
//             "image": {
//                 "source": "../../assets/image/vanila.jpg ",
//                 "alt": " "
//             },
//             "name": " Vanilla Caffe Latte ",
//             "description": " Our dark, rich espresso balanced with vanilla flavored syrup, steamed milk and a light layer of foam. ",
//             "price": 244,
//             "currency": " Rs. ",
//             "quantities": {
//                 "name": " SHORT ",
//                 "quantity": " 237 ",
//                 "unit": " ML ",
//                 "calories": " .125 ",
//                 "calories_unit": " Kcal "
//             },
//             "sizes": [

//                 {
//                     "name": "tall",
//                     "quantity": 2
//                 },
//                 {
//                     "name": "medium",
//                     "quantity": 2
//                 },
//                 {
//                     "name": "small",
//                     "quantity": 2
//                 },
//             ]
//         },
//         {
//             "image": {
//                 "source": "./../assets/image/redhatmocha.jpg",
//                 "alt": " "
//             },
//             "name": " CRUNCHY RED HAT MOCHA ",
//             "description": " A decadent mix of cocoa, topped with a playfully crafted Hat made with velvety whipped cream, strawberry drizzle and a dollop of chocolate whipped cream completes the “Hat”, topped with graham cracker topping for that awesome crunch. ",
//             "price": 404,
//             "currency": " Rs. ",
//             "quantities": {
//                 "name": " SHORT ",
//                 "quantity": " 237 ",
//                 "unit": " ML ",
//                 "calories": " .412 ",
//                 "calories_unit": " Kcal "
//             },
//             "sizes": [

//                 {
//                     "name": "tall",
//                     "quantity": 2
//                 },
//                 {
//                     "name": "medium",
//                     "quantity": 2
//                 },
//                 {
//                     "name": "small",
//                     "quantity": 2
//                 },
//             ]
//         },
//         {
//             "image": {
//                 "source": "../../assets/image/cappacino.jpg",
//                 "alt": " "
//             },
//             "name": " CAPPUCCINO ",
//             "description": " Dark, Rich in flavour espresso lies in wait under a smoothed and stretched layer of thick foam. It's truly the height of our baristas' craft. ",
//             "price": 244,
//             "currency": " Rs. ",
//             "quantities": {
//                 "name": " SHORT ",
//                 "quantity": " 237 ",
//                 "unit": " ML ",
//                 "calories": " .125 ",
//                 "calories_unit": " Kcal "
//             },
//             "sizes": [

//                 {
//                     "name": "tall",
//                     "quantity": 2
//                 },
//                 {
//                     "name": "medium",
//                     "quantity": 2
//                 },
//                 {
//                     "name": "small",
//                     "quantity": 2
//                 },
//             ]
//         },
//         {
//             "image": {
//                 "source": "../../assets/image/pumpkin.jpg ",
//                 "alt": " "
//             },
//             "name": " PUMPKIN SPICE LATTE ",
//             "description": "Our signature espresso and steamed milk with the celebrated flavor combination of pumpkin, cinnamon, nutmeg and clove. Topped with whipped cream and Pumpkin Spice topping.  ",
//             "price": 484,
//             "currency": " Rs. ",
//             "quantities": {
//                 "name": " SHORT ",
//                 "quantity": " 237 ",
//                 "unit": " ML ",
//                 "calories": " .216",
//                 "calories_unit": " Kcal "
//             },
//             "sizes": [

//                 {
//                     "name": "tall",
//                     "quantity": 2
//                 },
//                 {
//                     "name": "medium",
//                     "quantity": 2
//                 },
//                 {
//                     "name": "small",
//                     "quantity": 2
//                 },
//             ]
//         },
//         {
//             "image": {
//                 "source": "../../assets/image/iced.jpg ",
//                 "alt": " "
//             },
//             "name": "Iced Hazelnut  Latte ",
//             "description": " Our signature espresso and steamed milk with the celebrated flavor combination of pumpkin, cinnamon, nutmeg and clove. Topped with whipped cream and Pumpkin Spice topping. ",
//             "price": 524,
//             "currency": " Rs. ",
//             "quantities": {
//                 "name": "TALL ",
//                 "quantity": 354,
//                 "unit": " ML ",
//                 "calories": .407,
//                 "calories_unit": " Kcal "
//             },
//             "sizes": [

//                 {
//                     "name": "tall",
//                     "quantity": 2
//                 },
//                 {

//                     "name": "medium",
//                     "quantity": 2
//                 },
//                 {
//                     "name": "small",
//                     "quantity": 2
//                 },
//             ]
//         },
//         /////////////////////////////
//         // {
//         //     "image": {
//         //         "source": "../../assets/image/vanila.jpg ",
//         //         "alt": " "
//         //     },
//         //     "name": " Vanilla Caffe Latte ",
//         //     "description": " Our dark, rich espresso balanced with vanilla flavored syrup, steamed milk and a light layer of foam. ",
//         //     "price": 244,
//         //     "currency": " Rs. ",
//         //     "quantities": {
//         //         "name": " SHORT ",
//         //         "quantity": " 237 ",
//         //         "unit": " ML ",
//         //         "calories": " .125 ",
//         //         "calories_unit": " Kcal "
//         //     },
//         //     "sizes": [

//         //         {
//         //             name: "tall",
//         //             quantity: 2
//         //         },
//         //         {
//         //             name: "medium",
//         //             quantity: 2
//         //         },
//         //         {
//         //             name: "small",
//         //             quantity: 2
//         //         },
//         //     ]
//         // },
//         {
//             "image": {
//                 "source": "../../assets/image/doppio.jpg ",
//                 "alt": " "
//             },
//             "name": " DOPPIO ESPRESSO",
//             "description": " Our smooth signature Espresso Roast and its caramelly sweetness is at the very heart of everything we do.",
//             "price": 484,
//             "currency": " Rs. ",
//             "quantities": {
//                 "name": " PER SERVE ",
//                 "quantity": 45,
//                 "unit": " ML ",
//                 "calories": 0,
//                 "calories_unit": " Kcal "
//             },
//             "sizes": [

//                 {
//                     name: "tall",
//                     quantity: 2
//                 },
//                 {
//                     name: "medium",
//                     quantity: 2
//                 },
//                 {
//                     name: "small",
//                     quantity: 2
//                 },
//             ]
//         },
//         {
//             "image": {
//                 "source": "../../assets/image/hazelnutmochacheese.jpg ",
//                 "alt": " "
//             },
//             "name": "HAZELNUT MOCHA FRAPPUCCINO",
//             "description": " Our signature espresso and steamed milk with the celebrated flavor combination of pumpkin, cinnamon, nutmeg and clove. Topped with whipped cream and Pumpkin Spice topping.",
//             "price": 474,
//             "currency": " Rs. ",
//             "quantities": {
//                 "name": " TALL",
//                 "quantity": 354,
//                 "unit": " ML ",
//                 "calories": .491,
//                 "calories_unit": " Kcal "
//             },
//             "sizes": [

//                 {
//                     name: "tall",
//                     quantity: 2
//                 },
//                 {
//                     name: "medium",
//                     quantity: 2
//                 },
//                 {
//                     name: "small",
//                     quantity: 2
//                 },
//             ]
//         },
//         {
//             "image": {
//                 "source": "../../assets/image/carameljava.jpg ",
//                 "alt": " "
//             },


//             "name": "CARAMEL FRAPPUCCINO",
//             "description": " Rich Coffee blended with milk, chocolaty chip, caramel syrup and Ice. Topped with sweetened whipped cream and chocolate drizzle",
//             "price": 414,
//             "currency": " Rs. ",
//             "quantities": {
//                 "name": " TALL",
//                 "quantity": 354,
//                 "unit": " ML ",
//                 "calories": .398,
//                 "calories_unit": " Kcal "
//             },
//             "sizes": [

//                 {
//                     name: "tall",
//                     quantity: 50
//                 },
//                 {
//                     name: "medium",
//                     quantity: 30
//                 },
//                 {
//                     name: "small",
//                     quantity: 20
//                 }
//             ]


//         },
//         {
//             "image": {
//                 "source": " ../../assets/image/javachip.jpg",
//                 "alt": " "
//             },


//             "name": "JAVACHIP FRAPPUCCINO",
//             "description": " We blend mocha sauce and Frappuccino® chips with Frappuccino® roast coffee and milk and ice, then top with whipped cream and mocha drizzle to bring you endless java joy.",

//             "price": 351,
//             "currency": " Rs. ",

//             "quantities": {
//                 "name": " TALL",
//                 "quantity": 354,
//                 "unit": " ML ",
//                 "calories": .392,
//                 "calories_unit": " Kcal "
//             },
//             "sizes": [

//                 {
//                     name: "tall",
//                     quantity: 50
//                 },
//                 {
//                     name: "medium",
//                     quantity: 30
//                 },
//                 {
//                     name: "small",
//                     quantity: 20
//                 },
//             ]
//         },
//         // {
//         //     "image":{
//         //        "source":" ../../assets/image/javachip.jpg" ,
//         //        "alt":" "
//         //     },


//         //     "name":"JAVACHIP FRAPPUCCINO",
//         //     "description":" We blend mocha sauce and Frappuccino® chips with Frappuccino® roast coffee and milk and ice, then top with whipped cream and mocha drizzle to bring you endless java joy.",


//         //     "currency":" Rs. ",

//         //     "quantities":{
//         //         "name": " TALL",
//         //         "quantity": 354,
//         //         "unit": " ML ",
//         //         "calories": .392 ,
//         //         "calories_unit":" Kcal "
//         //         },
//         //     "sizes":[

//         //     {name : "tall",
//         //     quantity : 50
//         //     },
//         //     {name : "medium",
//         //     quantity : 30
//         //        },
//         //     {
//         //     name : "small",
//         //     quantity : 20
//         //     },
//         // ]
//         // }
//         {
//             "image": {
//                 "source": " ../../assets/image/gingerfrap.jpg",
//                 "alt": " "
//             },


//             "name": "GINGERBREAD FRAPPUCCINO",
//             "description": " Feel the gingerbread love in this blended holiday drink of Gingerbread syrup, Frappuccino® Roast coffee, milk and ice, topped with even more love – gingerbread whipped cream and brown sugar drizzle.",
//             "price": 474,
//             "currency": " Rs. ",

//             "quantities": {
//                 "name": " TALL",
//                 "quantity": 354,
//                 "unit": " ML ",
//                 "calories": .329,
//                 "calories_unit": " Kcal "
//             },
//             "sizes": [

//                 {
//                     name: "tall",
//                     quantity: 50
//                 },
//                 {
//                     name: "medium",
//                     quantity: 30
//                 },
//                 {
//                     name: "small",
//                     quantity: 20
//                 },
//             ]
//         },

//         {
//             "image": {
//                 "source": " ../../assets/image/toffee.jpg",
//                 "alt": " "
//             },


//             "name": "TOFFEE NUT CRUNCH FRAPPUCCINO",
//             "description": " A perfect blend of coffee and heartwarming flavors of buttery toffee nut balanced by subtle notes of toasted nuts. The crescendo is a whipped cream peak sprinkled in a crunchy toffee nut topping",
//             "currency": " Rs. ",

//             "quantities": {
//                 "name": " TALL",
//                 "quantity": 354,
//                 "unit": " ML ",
//                 "calories": .352,
//                 "calories_unit": " Kcal "
//             },
//             "sizes": [

//                 {
//                     name: "tall",
//                     quantity: 50
//                 },
//                 {
//                     name: "medium",
//                     quantity: 30
//                 },
//                 {
//                     name: "small",
//                     quantity: 20
//                 },
//             ]
//         },
//         {
//             "image": {
//                 "source": "../../assets/image/pourover.jpg",
//                 "alt": " "
//             },
//             "name": "POUR OVER – CHRISTMAS BLEND",
//             "description": "Pour-over is a beautifully simple and accessible way to brew a single cup of coffee with clean, fully developed flavor and body. Brewed with Christmas Blend.",
//             "price": 494,
//             "currency": " Rs. ",

//             "quantities": {
//                 "name": " SHORT",
//                 "quantity": 237,
//                 "unit": " ML ",
//                 "calories": .0,
//                 "calories_unit": " Kcal "
//             },
//             "sizes": [

//                 {
//                     name: "tall",
//                     quantity: 50
//                 },
//                 {
//                     name: "medium",
//                     quantity: 30
//                 },
//                 {
//                     name: "small",
//                     quantity: 20
//                 },
//             ]
//         },
//         {
//             "image": {
//                 "source": " ../../assets/image/pourover.jpg",
//                 "alt": " "
//             },


//             "name": "POUR OVER - ITALIAN BLEND",
//             "description": " Pour-over is a beautifully simple and accessible way to brew a single cup of coffee with clean, fully developed flavor and body. Brewed with Italian Roast",


//             "price": 324,
//             "currency": " Rs. ",

//             "quantities": {
//                 "name": " SHORT",
//                 "quantity": 237,
//                 "unit": " ML ",
//                 "calories": .0,
//                 "calories_unit": " Kcal "
//             },
//             "sizes": [

//                 {
//                     name: "tall",
//                     quantity: 50
//                 },
//                 {
//                     name: "medium",
//                     quantity: 30
//                 },
//                 {
//                     name: "small",
//                     quantity: 20
//                 },
//             ]
//         },
//         {
//             "image": {
//                 "source": "../../assets/image/brew.jpg",
//                 "alt": " "
//             },


//             "name": "FRENCH PRESS - KENYA",
//             "description": " Brewing with a French press retains the precious natural oils that paper filters absorb, and extracts the coffee’s full flavour while giving it a consistency that’s thick and rich. Brewed with Kenya Blend",
//             "price": 674,
//             "currency": " Rs. ",

//             "quantities": {
//                 "name": " PER SERVE",
//                 "quantity": 273,
//                 "unit": " ML ",
//                 "calories": .0,
//                 "calories_unit": " Kcal "
//             },
//             "sizes": [

//                 {
//                     "name": "tall",
//                     "quantity": 50
//                 },
//                 {
//                     "name": "medium",
//                     "quantity": 30
//                 },
//                 {
//                     "name": "small",
//                     "quantity": 20
//                 },
//             ]
//         },
//         {
//             "image": {
//                 "source": " ../../assets/image/estates.jpg",
//                 "alt": " "
//             },


//             "name": "FRENCH PRESS - INDIA ESTATES BLEND",
//             "description": " Brewing with a coffee press retains the precious natural oils that paper filters absorb, and extracts the coffee’s full flavor while giving it a consistency that’s thick and Rich in flavour. Brewed with India Estates Blend.",
//             "price": 476,
//             "currency": " Rs. ",

//             "quantities": {
//                 "name": " PER SERVE",
//                 "quantity": 473,
//                 "unit": " ML ",
//                 "calories": .0,
//                 "calories_unit": " Kcal "
//             },
//             "sizes": [

//                 {
//                     name: "tall",
//                     quantity: 50
//                 },
//                 {
//                     name: "medium",
//                     quantity: 30
//                 },
//                 {
//                     name: "small",
//                     quantity: 20
//                 },
//             ]
//         },
//         {
//             "image": {
//                 "source": " ../../assets/image/pourover.jpg",
//                 "alt": " "
//             },


//             "name": "POUR OVER - KENYA BLEND",
//             "description": " Pour-over is a beautifully simple and accessible way to brew a single cup of coffee with clean, fully developed flavor and body. Brewed with Kenya Roast.",
//             "price": 234,
//             "currency": " Rs. ",

//             "quantities": {
//                 "name": " SHORT",
//                 "quantity": 237,
//                 "unit": " ML ",
//                 "calories": .0,
//                 "calories_unit": " Kcal "
//             },
//             "sizes": [

//                 {
//                     "name": "tall",
//                     "quantity": 50
//                 },
//                 {
//                     "name": "medium",
//                     "quantity": 30
//                 },
//                 {
//                     "name": "small",
//                     "quantity": 20
//                 },
//             ]
//         },
//         {
//             "image": {
//                 "source": " ../../assets/image/pourover.jpg",
//                 "alt": " "
//             },


//             "name": "POUR OVER - SUMATRA BLEND",
//             "description": " Pour-over is a beautifully simple and accessible way to brew a single cup of coffee with clean, fully developed flavor and body. Brewed with Sumatra Roast.",
//             "price": 304,
//             "currency": " Rs. ",

//             "quantities": {
//                 "name": " SHORT",
//                 "quantity": 237,
//                 "unit": " ML ",
//                 "calories": .0,
//                 "calories_unit": " Kcal "
//             },
//             "sizes": [

//                 {
//                     "name": "tall",
//                     "quantity": 50
//                 },
//                 {
//                     "name": "medium",
//                     "quantity": 30
//                 },
//                 {
//                     "name": "small",
//                     "quantity": 20
//                 },
//             ]
//         },
//         {
//             "image": {
//                 "source": "../../assets/image/chaitea.jpg",
//                 "alt": " "
//             },


//             "name": "CHAI TEA LATTE",
//             "description": " Black tea infused with cinnamon, clove, and other warming spices are combined with milk for the perfect balance of sweet and spicy.",
//             "price": 273,
//             "currency": " Rs. ",

//             "quantities": {
//                 "name": " SHORT",
//                 "quantity": 237,
//                 "unit": " ML ",
//                 "calories": .170,
//                 "calories_unit": " Kcal "
//             },
//             "sizes": [

//                 {
//                     name: "tall",
//                     quantity: 50
//                 },
//                 {
//                     name: "medium",
//                     quantity: 30
//                 },
//                 {
//                     name: "small",
//                     quantity: 20
//                 },
//             ]
//         },
//         {
//             "image": {
//                 "source": " ../../assets/image/emperortea.jpg",
//                 "alt": " "
//             },


//             "name": "EMPEROR'S MIST GREEN TEA",
//             "description": " Receiving plenty of rain during the early spring harvest, this is a curly, silver-speckled, leaf-and-bud green tea combination with a lightly floral beginning, a toasty middle body and a softly sweet finish",
//             "price": 299,
//             "currency": " Rs. ",

//             "quantities": {
//                 "name": " SHORT",
//                 "quantity": 237,
//                 "unit": " ML ",
//                 "calories": .0,
//                 "calories_unit": " Kcal "
//             },
//             "sizes": [

//                 {
//                     name: "tall",
//                     quantity: 50
//                 },
//                 {
//                     name: "medium",
//                     quantity: 30
//                 },
//                 {
//                     name: "small",
//                     quantity: 20
//                 },
//             ]
//         },
//         {
//             "image": {
//                 "source": " ../../assets/image/englishtea.jpg",
//                 "alt": " "
//             },


//             "name": "ENGLISH BREAKFAST BLACK TEA ",
//             "description": "A breakfast-style black tea of malty boldness and bright flavour, invigorating any time of the day.",
//             "price": 474,
//             "currency": " Rs. ",

//             "quantities": {
//                 "name": " SHORT",
//                 "quantity": 237,
//                 "unit": " ML ",
//                 "calories": .0,
//                 "calories_unit": " Kcal "
//             },
//             "sizes": [

//                 {
//                     name: "tall",
//                     quantity: 50
//                 },
//                 {
//                     name: "medium",
//                     quantity: 30
//                 },
//                 {
//                     name: "small",
//                     quantity: 20
//                 },
//             ]
//         },
//         {
//             "image": {
//                 "source": "../../assets/image/haitea.jpg ",
//                 "alt": " "
//             },


//             "name": "HATHIKULI TEA",
//             "description": "An organic estate- specific Assam black tea with malty sweetness and a nutty finish. ",
//             "price": 406,
//             "currency": " Rs. ",

//             "quantities": {
//                 "name": "Hathikuli Tea",
//                 "quantity": 437,
//                 "unit": " ML ",
//                 "calories": .0,
//                 "calories_unit": " Kcal "
//             },
//             "sizes": [

//                 {
//                     name: "tall",
//                     quantity: 50
//                 },
//                 {
//                     name: "medium",
//                     quantity: 30
//                 },
//                 {
//                     name: "small",
//                     quantity: 20
//                 },
//             ]
//         },

//         {
//             "image": {
//                 "source": "../../assets/image/icedgreen.jpg ",
//                 "alt": " "
//             },


//             "name": "ICED GREEN TEA LATTE",
//             "description": "Beautiful layers of green tea, our bold espresso and milk create a smooth, richly textured beverage ",
//             "price": 309,
//             "currency": " Rs. ",

//             "quantities": {
//                 "name": "SHORT",
//                 "quantity": 237,
//                 "unit": " ML ",
//                 "calories": .412,
//                 "calories_unit": " Kcal "
//             },
//             "sizes": [
//                 {
//                     name: "tall",
//                     quantity: 50
//                 },
//                 {
//                     name: "medium",
//                     quantity: 30
//                 },
//                 {
//                     name: "small",
//                     quantity: 20
//                 },
//             ]
//         },
//         {
//             "image": {
//                 "source": "../../assets/image/greentea.jpg ",
//                 "alt": " "
//             },


//             "name": "GREEN TEA LATTE",
//             "description": "Smooth and creamy matcha is lightly sweetened and served with steamed milk",
//             "price": 404,
//             "currency": " Rs. ",

//             "quantities": {
//                 "name": "SHORT",
//                 "quantity": 237,
//                 "unit": " ML ",
//                 "calories": .171,
//                 "calories_unit": " Kcal "
//             },
//             "sizes": [

//                 {
//                     name: "tall",
//                     quantity: 50
//                 },
//                 {
//                     name: "medium",
//                     quantity: 30
//                 },
//                 {
//                     name: "small",
//                     quantity: 20
//                 },
//             ]
//         },
//         {
//             "image": {
//                 "source": "../../assets/image/coldcold.jpg ",
//                 "alt": " "
//             },


//             "name": "COLD BREW BLACK",
//             "description": "Starbucks® Kenya coffee is freshly ground and then steeped for 48 hours. This artisanal process results in deliciously iced coffee that is served over ice, unsweetened.",
//             "price": 299,
//             "currency": " Rs. ",

//             "quantities": {
//                 "name": "SHORT",
//                 "quantity": 221,
//                 "unit": " ML ",
//                 "calories": .171,
//                 "calories_unit": " Kcal "
//             },
//             "sizes": [

//                 {
//                     name: "tall",
//                     quantity: 50
//                 },
//                 {
//                     name: "medium,
//                     quantity: 30
//                 },
//                 {
//                     name: "small",
//                     quantity: 20
//                 },
//             ]
//         },
//         {
//             "image": {
//                 "source": "../../assets/image/toffeecold.jpg ",
//                 "alt": " "
//             },


//             "name": "TOFFEE NUT CRUNCH COLD BREW",
//             "description": "Starbucks signature Cold Brew, balanced by subtle notes of toasted nuts toffee Nut flavored foam and crunchy toffee nut topping",
//             "price": 404,
//             "currency": " Rs. ",

//             "quantities": {
//                 "name": "TALL",
//                 "quantity": 354,
//                 "unit": " ML ",
//                 "calories": .193,
//                 "calories_unit": " Kcal "
//             },
//             "sizes": [

//                 {
//                     name: "tall",
//                     quantity: 50
//                 },
//                 {
//                     name: "medium",
//                     quantity: 30
//                 },
//                 {
//                     name: "small",
//                     quantity: 20
//                 },
//             ]
//         },
//         {
//             "image": {
//                 "source": "../../assets/image/pumpkincold.jpg",
//                 "alt": " "
//             },


//             "name": "PUMPKIN SPICE CREAM COLD BREW",
//             "description": "Our Cold Brew sweetened with vanilla syrup, topped with a pumpkin spice cold foam topping.",
//             "price": 584,
//             "currency": " Rs. ",
//             "quantities": {
//                 "name": "TALL",
//                 "quantity": 354,
//                 "unit": " ML ",
//                 "calories": .261,
//                 "calories_unit": " Kcal "
//             },
//             "sizes": [

//                 {
//                     name: "tall",
//                     quantity: 50
//                 },
//                 {
//                     name: "medium",
//                     quantity: 30
//                 },
//                 {
//                     name: "small",
//                     quantity: 20
//                 },
//             ]
//         },
//         {
//             "image": {
//                 "source": "../../assets/image/vanillacold.jpg ",
//                 "alt": " "
//             },


//             "name": "VANILLA SWEET CREAM COLD BREW",
//             "description": "Cold Brew with Vanilla Sweet Cream is made with Starbucks® Cold Brew over ice and topped with a hand crafted vanilla sweet cream, which floats on top of the beverage before slowly cascading down.",
//             "price": 494,
//             "currency": " Rs. ",

//             "quantities": {
//                 "name": "TALL",
//                 "quantity": 354,
//                 "unit": " ML ",
//                 "calories": .63,
//                 "calories_unit": " Kcal "
//             },
//             "sizes": [

//                 {
//                     name: "tall",
//                     quantity: 50
//                 },
//                 {
//                     name: "medium",
//                     quantity: 30
//                 },
//                 {
//                     name: "small",
//                     quantity: 20
//                 },
//             ]
//         },
//         {
//             "image": {
//                 "source": "../../assets/image/toffeenutcold.jpg ",
//                 "alt": " "
//             },


//             "name": "TOFFEE NUT CRUNCH NITRO COLD BREW",
//             "description": "Starbucks signature Nitro Cold Brew, balanced by subtle notes of toasted nuts toffee Nut flavored foam and crunchy toffee nut topping.",
//             "price": 439,
//             "currency": " Rs. ",

//             "quantities": {
//                 "name": "SHORT",
//                 "quantity": 237,
//                 "unit": " ML ",
//                 "calories": .163,
//                 "calories_unit": " Kcal "
//             },
//             "sizes": [
//                 {
//                     name: "tall",
//                     quantity: 50
//                 },
//                 {
//                     name: "medium",
//                     quantity: 30
//                 },
//                 {
//                     name: "small",
//                     quantity: 20
//                 },
//             ]
//         },
//         {
//             "image": {
//                 "source": "../../assets/image/whitecold.jpg",
//                 "alt": " "
//             },


//             "name": "WHITE MOCHA CARAMEL COLD BREW",
//             "description": "Our slow steeped Cold brew shaken with milk and white chocolate to strike the perfect balance of coffee and sweetness.",
//             "price": 404,
//             "currency": " Rs. ",

//             "quantities": {
//                 "name": "TALL",
//                 "quantity": 354,
//                 "unit": " ML ",
//                 "calories": .194,
//                 "calories_unit": " Kcal "
//             },
//             "sizes": [

//                 {
//                     "name": "tall",
//                     "quantity": 50
//                 },
//                 {
//                     "name": "medium",
//                     "quantity": 30
//                 },
//                 {
//                     "name": "small",
//                     "quantity": 20
//                 },
//             ]
//         }
//     ]



// console.log(window.location)
// let url_1 = window.location.search;

// const product = new URLSearchParams(url_1);
// console.log(product);

const queryString = window.location.search;
// console.log(queryString);

const urlParams = new URLSearchParams(queryString);
console.log(urlParams);
const product = urlParams.get('product_id');
// console.log(product);


const master_list = JSON.parse(localStorage.getItem("product_detail_list"));
// console.log(master_list)

function findProduct(e){
 return  e.product_id === product;
}
 
let  productData = master_list.find(findProduct);
// console.log(productData);











// const newUser = urlParams.get('newuser');
// // console.log(newUser);
// // product
// const color = urlParams.get('color')
// // console.log(color);
// // black
// const newUser = urlParams.get('newuser')
// // console.log(newUser);
// // empty string
// const size = urlParams.get('size');
// // console.log(size);
// s

// // console.log(url_1);



let add_to_cart = JSON.parse(localStorage.getItem('add_products_cart'));
 console.log(add_to_cart);

row_card = document.createElement("div");
row_card.setAttribute("class", "row");
// console.log(row_card);

image_card = document.createElement("div");
image_card.setAttribute("class", "image");
row_card.append(image_card);

image_main_card = document.createElement("img");
image_main_card.setAttribute("src", productData["image"]["source"]);
image_card.append(image_main_card)

content_card = document.createElement("div");
content_card.setAttribute("class", "content");
row_card.append(content_card);

h3_card = document.createElement("h3");
h3_card.setAttribute("class", "heading");
h3_card.innerText = productData["name"];
content_card.append(h3_card);

p_card = document.createElement("p");
p_card.setAttribute("class", "calorie");
p_card.innerText =  productData["quantities"]["medium"]["name"] +
productData["quantities"]["medium"]["quantity"] +
productData["quantities"]["medium"]["unit"] +
productData["quantities"]["medium"]["calories"] +
productData["quantities"]["medium"]["calories_unit"];
;
content_card.append(p_card);


p1_card = document.createElement("p");
p1_card.setAttribute("class", "detail");
p1_card.innerText = productData["description"];
content_card.append(p1_card);

p2_card = document.createElement("p");
p2_card.setAttribute("class", "cost");
p2_card.innerText = "Rs." + productData["price_1"]['medium'];
// .replace("Rs.","");
content_card.append(p2_card);

button_card = document.createElement("div");
button_card.setAttribute("class", "buttons");
content_card.append(button_card);

size_card = document.createElement("div");
size_card.setAttribute("class", "size");
button_card.append(size_card);

btn1_card = document.createElement("button");
btn1_card.setAttribute("class", "btn-button");
btn1_card.setAttribute("id", "btn-1");
btn1_card.innerText ="tall";
size_card.append(btn1_card);



btn2_card = document.createElement("button");
btn2_card.setAttribute("class", "btn-button");
btn2_card.setAttribute("id", "btn-2");
btn2_card.innerText ="medium";
size_card.append(btn2_card);

btn3_card = document.createElement("button");
btn3_card.setAttribute("class", "btn-button");
btn3_card.setAttribute("id", "btn-3");
btn3_card.innerText = "small";
size_card.append(btn3_card);

inc_dec_button_card = document.createElement("div");
inc_dec_button_card.setAttribute("class", "inc-dec-button");
button_card.append(inc_dec_button_card);

inc_dec_card = document.createElement("button");
inc_dec_card.setAttribute("class", "inc_dec");
inc_dec_button_card.append(inc_dec_card);

minus_card = document.createElement("span");
minus_card.setAttribute("class", "minus");
inc_dec_card.append(minus_card);

i1_card = document.createElement("i");
i1_card.setAttribute("class", "fa-solid fa-minus");
minus_card.append(i1_card);

volume_card = document.createElement("span");
volume_card.setAttribute("class", "volume");
volume_card.innerText = "0";
inc_dec_card.append(volume_card);

plus_card = document.createElement("span");
plus_card.setAttribute("class", "plus");
inc_dec_card.append(plus_card);

i2_card = document.createElement("i");
i2_card.setAttribute("class", "fa-solid fa-plus");
plus_card.append(i2_card);


add_item_card = document.createElement("div");
add_item_card.setAttribute('data-id',productData["product_id"]);

add_item_card.setAttribute("class", "add-item-cart");
button_card.append(add_item_card);

// a_card = document.createElement("a");
// a_card.setAttribute("href", "../../pages/add to cart/addtocart.html");
// add_item_card.append(a_card);

btn4_card = document.createElement("button");
btn4_card.setAttribute("class", "btn-button");
btn4_card.setAttribute("id", "btn-4");
btn4_card.innerText = "Add to the cart"
add_item_card.append(btn4_card);

document.querySelector(".about-product").append(row_card);

let tall = document.getElementById('btn-1');
tall.addEventListener('click',function(){
 
    p2_card.innerText = 'Rs.' + productData["price_1"]['tall'];
    let sum = p2_card.innerText.replace("Rs.", "") ;
    p_card.innerText = productData["quantities"]["tall"]["name"] +
    productData["quantities"]["tall"]["quantity"] +
    productData["quantities"]["tall"]["unit"] +
    productData["quantities"]["tall"]["calories"] +
    productData["quantities"]["tall"]["calories_unit"];
;
});

let short = document.getElementById('btn-3');
short.addEventListener('click',function(){
 
    p2_card.innerText ='Rs.' + productData["price_1"]['short'];
    console.log(p2_card);

    let sum = p2_card.innerText.replace("Rs.", "") 
    console.log(sum);


    p_card.innerText = productData["quantities"]["short"]["name"] +
    productData["quantities"]["short"]["quantity"] +
    productData["quantities"]["short"]["unit"] +
    productData["quantities"]["short"]["calories"] +
    productData["quantities"]["short"]["calories_unit"];
});



let medium = document.getElementById('btn-2');
medium.addEventListener('click',function(){
 
    p2_card.innerText = 'Rs.' + productData["price_1"]['medium'];
    let sum = p2_card.innerText.replace("Rs.", "");

    p_card.innerText = productData["quantities"]["medium"]["name"] +
    productData["quantities"]["medium"]["quantity"] +
    productData["quantities"]["medium"]["unit"] +
    productData["quantities"]["medium"]["calories"] +
    productData["quantities"]["medium"]["calories_unit"];
    
});
let add_item =document.querySelector(".add-item-cart");
//////////////////////////////////////////////////////////
// add_item.addEventListener('click',function(e){
   
//     let items=[]
//     let unique_id = this.dataset.id;
//     // console.log(unique_id);

//     if((JSON.parse(localStorage.getItem('items'))==null)){
       
        

//         items.push({unique_id});
//         localStorage.setItem('items',JSON.stringify(items));
//         window.location.reload();
//     }else{
//         let localItems = JSON.parse(localStorage.getItem('items'));
//        if(unique_id==localItems["unique_id"]){
//         // // console.log(unique_id);
//         localItems.push({unique_id});
//         localStorage.setItem('items',JSON.stringify(items));
//        }else{
//         alert('product already exists')
//        }}
//     });


////////////////////////////////////////////////////////////////////////|

add_item.addEventListener('click',function(e){
    
    let unique_id111 = this.dataset.id;
    localStorage.setItem("unique_id111", JSON.stringify(unique_id111));

    // let cart_id = this.dataset.cart_id;
    // localStorage.setItem("cart_id",JSON.stringify(cart_id));
    
    // finding the product json
    let product_detail_list = JSON.parse(localStorage.getItem('product_detail_list'));
    function findProduct(e) {
        return e.product_id == unique_id111;
     }

     productData = product_detail_list.find(findProduct);
     // console.log(productData);
    // getting unique id
    let unique= JSON.parse(localStorage.getItem("unique_id111"));
    // getting price
    let price= p2_card.innerText;

    let quantity_calories = p_card.innerText;
    //declaring empty string to perform the add to the cart 
    let id = '';

    // console.log(id);

    if(id==''){
        // introducing an array of objects to get  value , whether the array is already declared or not
        // let arr=  JSON.parse(localStorage.getItem('crud'));
        let add_to_cart = JSON.parse(localStorage.getItem('add_products_cart'));
        let user_id = JSON.parse(localStorage.getItem('unique_id'));
        // checking the  array if is null push newly or push it as a new one or push it into already existed array 
    if(add_to_cart==null){

        // let data=[{unique:unique,quantity_ordered:1,price:p2_card.innerText}];
        let add_to_cart =[ {
            "category": productData['category'],
            // "category_description":category_description,
            // "description":description,
            "name": productData["name"],
            "quantities":quantity_calories,
            "user_id":user_id,
            "image": {
               "source": productData["image"]["source"],
               "alt": ""
            },

            "description": productData["description"],
             "price":price,
            "currency": "Rs.",
            'add_to_cart_id':  uuidv4(),
            "product_id": unique,
            'quantity_ordered':1
        }];
        // localStorage.setItem('crud',JSON.stringify(data));
        localStorage.setItem('add_products_cart',JSON.stringify(add_to_cart));
        
    }
    else{
        // let arr = JSON.parse(localStorage.getItem('crud'));
        // let found= false;
        let add_to_cart = JSON.parse(localStorage.getItem('add_products_cart'));
        let logic = false;
        // for loop for checking whether the product already exists or not 
        // for(let i=0;i<arr.length;i++){
        //     if(  unique ===  arr[i]['unique'] &&  price === arr[i]['price']){
        //     found = true;
        //    };
        // };
      
        for(let i=0;i<add_to_cart.length;i++){
            if(  unique ===  add_to_cart[i]['product_id'] &&  price === add_to_cart[i]['price']){
            logic = true;
            };
        };      
        // if(!found){
        //     arr.push({unique:unique,quantity_ordered:1,price:p2_card.innerText} );
        //     localStorage.setItem('crud',JSON.stringify(arr));
        // }
        if(!logic){
            add_to_cart.push({
                "category": productData['category'],
                // "category_description":category_description,
                // "description":description,
                "name": productData["name"],
                "quantities":quantity_calories,
                "user_id":user_id,
                "image": {
    
                   "source": productData["image"]["source"],
                   "alt": ""
                },
               
                "description": productData["description"],
                 "price":price,
                "currency": "Rs.",
                "product_id": unique,
                'add_to_cart_id':  uuidv4(),
                'quantity_ordered':1
            });
            localStorage.setItem('add_products_cart',JSON.stringify(add_to_cart));
        }
}
};
window.location.href="../../pages/add to cart/addtocart.html";
});


let object1 = JSON.parse(localStorage.getItem('product_detail_list'));





for(i=0;i<object1.length;i++){
    if(product!==object1[i]['product_id']){
    coffee_items_card = document.createElement("div");
    coffee_items_card.setAttribute("class","coffee-items");
    console.log(coffee_items_card);
    
    coffee_description_card= document.createElement("div");
    coffee_description_card.setAttribute("class","coffee-description");
    coffee_items_card.append(coffee_description_card);
    
    coffee_image_card= document.createElement("div");
    coffee_image_card.setAttribute("class","coffee-image");
    coffee_description_card.append(coffee_image_card);
    
    image=document.createElement("img");
    image.setAttribute("src",object1[i]["image"]["source"]);
    image.setAttribute("width","80px");
    image.setAttribute("height","80px");
    coffee_image_card.append(image);
    
    coffee_content_card = document.createElement("div");
    coffee_content_card.setAttribute("class","coffee-content");
    coffee_description_card.append(coffee_content_card);
    
    coffee_title_card = document.createElement("div");
    coffee_title_card.setAttribute("class","coffee-title");
    coffee_title_card.innerText=object1[i]["name"];
    coffee_content_card.append(coffee_title_card);
    
    coffee_message_card = document.createElement("div");
    coffee_message_card.setAttribute("class","coffee-message");
    coffee_message_card.innerText= object1[i]["quantities"]["medium"]["name"] +
    object1[i]["quantities"]["medium"]["quantity"] +
    object1[i]["quantities"]["medium"]["unit"] +
    object1[i]["quantities"]["medium"]["calories"] +
    object1[i]["quantities"]["medium"]["calories_unit"];
    coffee_content_card.append(coffee_message_card);
    
    coffee_cost_details_card= document.createElement("div");
    coffee_cost_details_card.setAttribute("class","coffee-cost-details");
    coffee_items_card.append(coffee_cost_details_card);
    
    cost= document.createElement("div");
    cost.setAttribute("class","cost");
    cost.innerText="Rs."+ object1[i]["price_1"]["medium"];
    coffee_cost_details_card.append(cost);
    
    add_items= document.createElement("div");
    add_items.setAttribute("class","add-item");
    add_items.setAttribute('data-id',object1[i]["product_id"]);
    console.log(object1[i]["product_id"]);

    coffee_cost_details_card.append(add_items);
    
    a_card= document.createElement("a");
    // a_card.setAttribute("href","../../pages/productdetail/product-cappu.html?product_id="+object1[i]["product_id"]);
    add_items.append(a_card);
    
    button_card= document.createElement("button");
    button_card.innerText="add item";
    a_card.append(button_card);
    
    document.querySelector(".coffee-products").append(coffee_items_card);
    }
    };
// let root = window.location.origin
let btn_add_item = document.querySelectorAll(".add-item");
let user_login_id1 = JSON.parse(localStorage.getItem('user_data'));
       
        btn_add_item.forEach(findId =>{
        findId.addEventListener('click',function(e){
            if(user_login_id1==null){
                alert('login')
            }else{
        let unique_id = findId.dataset.id;

        console.log(unique_id);

        window.location.href=`../../pages/productdetail/product-cappu.html?product_id=${unique_id}`
        
    }
    });


});


// add_item.addEventListener('click',function(e) {
//     let unique_id = this.dataset.id;
//     // console.log(unique_id);
//    let crud = JSON.parse(localStorage.getItem('crud')) || [];
//    let exist = crud.length &&
//       JSON.parse(localStorage.getItem('crud')).some(data =>
//          data.unique_id.toLowerCase() == unique_id.toLowerCase()
//          );
//    if (!exist) {
//       let unique = {
//          "unique_id":unique_id,
         
         
//       }
//       crud.push(unique);
//       localStorage.setItem("crud", JSON.stringify(crud));
//       location.reload();
//    }else{
//       alert("product already exists");
//    }
// })
