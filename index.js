//  <div class="coffee-items">
// {/* <div class="coffee-description">
// <div class="coffee-image"><img class="image"src="../coffeeshop/assets/image/javachip.jpg" width="80px" height="80px" alt=""></div> 
// <div lass="coffee-content">
//    <div class="coffee-title">Java chip frappucino</div>    <div class=" coffee-message">Tall(394ml)392kcal</div>
//   </div> 
//  </div> */}
//   {/* <div class="coffee-cost-details">
//   <div class="cost">Rs.394</div>
//   <div class="add-item"><a href="../coffeeshop/pages/productdetail/product-java.html"><button>add item</button></a></div>
// </div> */}
// </div>  



let coffee_items_card;
let coffee_description_card;
let coffee_image_card;
let image;
let coffee_content_card;
let coffee_title_card;
let coffee_message_card;
let coffee_cost_details_card;
let cost;
let add_items;
let a_card;
let button_card;



const object = [
    
{

    "name": "Pumpkin Spice Cream Cold Brew ",
    "description": "Our Cold Brew sweetened with vanilla syrup, topped with a pu... ",
    "quantities":
    {
        "name": "TALL",
        "quantity": "354",
        "unit": "ML",
        "calories": .261,
        "calories_unit": "kcal",
    },
    // {
    //     "name": "",
    //     "unit": "",
    //     "quantity": "",
    //     "calories": "",
    //     "price": ""
    // },
    // {
    //     "name": "",
    //     "unit": "",
    //     "quantity": "",
    //     "calories": "",
    //     "price": ""
    // }

    "price": 584,
    "currency": "Rs",

   
    "category": "Cold Brew",
    "category_description": "Slow-steeped, complex, and full-bodied, the Cold Brew is an experience.",



    "image": {
        "source": " ./assets/image/pumpkincold.jpg",
        "alt": ""
    },


    "main_img": " ./assets/image/pumpkincold.jpg",
    "main_content": "Our Cold Brew sweetened with vanilla syrup, topped with a pu... ",
    "main_names": "Pumpkin Spice Cream Cold Brew ",
    "sub_content": "TALL(354 ML) .261 kcal ",
    "link_pages": "./pages/productdetail/product-pumpkincold.html ",
    "cost_items": " Rs.584"

},

{

    "name": "Vanilla Sweet Cream Cold Brew ",
    "description": "Cold Brew with Vanilla Sweet Cream is made with Starbucks® C...  ",
    "quantities":
    {
        "name": "TALL",
        "quantity": "354",
        "unit": "ML",
        "calories": .63,
        "calories_unit": "kcal",
    },
    // {
    //     "name": "",
    //     "unit": "",
    //     "quantity": "",
    //     "calories": "",
    //     "price": ""
    // },
    // {
    //     "name": "",
    //     "unit": "",
    //     "quantity": "",
    //     "calories": "",
    //     "price": ""
    // }

    "price": 494,
    "currency": "Rs",

   
    "category": "Cold Brew",
    "category_description": "Slow-steeped, complex, and full-bodied, the Cold Brew is an experience.",



    "image": {
        "source": "./assets/image/vanillacold.jpg ",
        "alt": ""
    },


    "main_img": "./assets/image/vanillacold.jpg ",
    "main_content": "Cold Brew with Vanilla Sweet Cream is made with Starbucks® C... ",
    "main_names": "Vanilla Sweet Cream Cold Brew ",
    "sub_content": "TALL(354 ML) .63 kcal ",
    "link_pages": "./pages/productdetail/product-vanillacold.html ",
    "cost_items": "Rs.494 "
   
},
{

    "name": "Toffee Nut Crunch Nitro Cold Brew",
    "description": "The caffine factory signature Nitro Cold Brew, balanced by subtle note.. ",
    "quantities":
    {
        "name": "SHORT",
        "quantity": "237",
        "unit": "ML",
        "calories": .163,
        "calories_unit": "kcal",
    },
    // {
    //     "name": "",
    //     "unit": "",
    //     "quantity": "",
    //     "calories": "",
    //     "price": ""
    // },
    // {
    //     "name": "",
    //     "unit": "",
    //     "quantity": "",
    //     "calories": "",
    //     "price": ""
    // }

    "price": 439,
    "currency": "Rs",

    
    "category": "Cold Brew",
    "category_description": "Slow-steeped, complex, and full-bodied, the Cold Brew is an experience.",


    "image": {
        "source": "./assets/image/toffeenutcold.jpg",
        "alt": ""
    },
   

    // "main_img": " ./assets/image/toffeenutcold.jpg",
    // "main_content": "The caffine factory signature Nitro Cold Brew, balanced by subtle note.. ",
    // "main_names": "Toffee Nut Crunch Nitro Cold Brew",
    // "sub_content": " SHORT(237 ML) .163 Kcal",
    "link_pages": " ./pages/productdetail/product-toffeenutcold.html",
    // "cost_items": " Rs.439"
},
{

    "name": "White Mocha Caramel Cold Brew",
    "description": "Our slow steeped Cold brew shaken with milk and white chocol... ",
    "quantities":
    {
        "name": "TALL ",
        "quantity": " 354",
        "unit": "ML ",
        "calories": .194,
        "calories_unit": " kcal",
    },
    // {
    //     "name": "",
    //     "unit": "",
    //     "quantity": "",
    //     "calories": "",
    //     "price": ""
    // },
    // {
    //     "name": "",
    //     "unit": "",
    //     "quantity": "",
    //     "calories": "",
    //     "price": ""
    // }

    "price": 404,
    "currency": " Rs ",

   
    "category": "Cold Brew",
    "category_description": "Slow-steeped, complex, and full-bodied, the Cold Brew is an experience.",



    "image": {
        "source": "./assets/image/toffeecold.jpg",
        "alt": ""
    },
  

    // "main_img": " ./assets/image/whitecold.jpg",
    // "main_content": " Our slow steeped Cold brew shaken with milk and white chocol...",
    // "main_names": " White Mocha Caramel Cold Brew",
    // "sub_content": "TALL(354 ML) .194 kcal ",
    "link_pages": " ./pages/productdetail/product-whitecold.html",
    // "cost_items": " Rs.404"
},
{


    "name": " Green Tea Latte",
    "description": "Smooth and creamy matcha is lightly sweetened and served wit..",
    "quantities":
    {
        "name": "SHORT",
        "quantity": "273",
        "unit": "ML",
        "calories": .171,
        "calories_unit": "kcal",
    },
    // {
    //     "name": "",
    //     "unit": "",
    //     "quantity": "",
    //     "calories": "",
    //     "price": ""
    // },
    // {
    //     "name": "",
    //     "unit": "",
    //     "quantity": "",
    //     "calories": "",
    //     "price": ""
    // }

    "price": 309,
    "currency": "Rs",

    "category": "Tea",
    "category_description": "An exclusive tea experience championed by  The Caffine factory.",



    "image": {
        "source": " ./assets/image/greentea.jpg",
        "alt": ""
    },


    "main_img": " ./assets/image/greentea.jpg",
    "main_content": " Smooth and creamy matcha is lightly sweetened and served wit..",
    "main_names": " Green Tea Latte ",
    "sub_content": " SHORT(237 ML) .171 kcal",
    "link_pages": "./pages/productdetail/product-greenlatte.html ",
    "cost_items": " Rs.309"

},
{


    "name": "Cold Brew Black",
    "description": "Starbucks® Kenya coffee is freshly ground and then steeped f...",
    "quantities":
    {
        "name": "TALL",
        "quantity": "221",
        "unit": "ML",
        "calories": .171,
        "calories_unit": "kcal",
    },
    // {
    //     "name": "",
    //     "unit": "",
    //     "quantity": "",
    //     "calories": "",
    //     "price": ""
    // },
    // {
    //     "name": "",
    //     "unit": "",
    //     "quantity": "",
    //     "calories": "",
    //     "price": ""
    // }

    "price": 299,
    "currency": "Rs",

    "category": "Cold Brew",
    "category_description": "Slow-steeped, complex, and full-bodied, the Cold Brew is an experience.",



    "image": {
        "source": "./assets/image/coldcold.jpg",
        "alt": ""
    },

    "main_img": "./assets/image/coldcold.jpg",
    "main_content": "Starbucks® Kenya coffee is freshly ground and then steeped f...",
    "main_names": "Cold Brew Black",
    "sub_content": "TALL() .0 kcal",
    "link_pages": "./pages/productdetail/product-coldbrew.html",
    "cost_items": "Rs 299"

}

]

let object1 = JSON.parse(localStorage.getItem('product_detail_list'));
for(i=0;i<object1.length;i++){

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
    cost.innerText="Rs."+ object1[i]["price"];
    coffee_cost_details_card.append(cost);
    
    add_items= document.createElement("div");
    add_items.setAttribute("class","add-item");
    add_items.setAttribute('data-id',object1[i]["product_id"])
    console.log(object1[i]["product_id"])

    coffee_cost_details_card.append(add_items);
    
    a_card= document.createElement("a");
    a_card.setAttribute("href",object1[i]["link_pages"]);
    add_items.append(a_card);
    
    button_card= document.createElement("button");
   
    button_card.innerText="add item";
    a_card.append(button_card);
    
    document.querySelector(".coffee-products").append(coffee_items_card);
    }
// let root = window.location.origin
let btn_add_item = document.querySelectorAll(".add-item");
let user_login_id1 = JSON.parse(localStorage.getItem('unique'));

        btn_add_item.forEach(findId =>{
        findId.addEventListener('click',function(e){
        if(user_login_id1 === null){
            alert('login to buy your coffee');
        }else{
        let unique_id = findId.dataset.id;

        console.log(unique_id);

        window.location.href=`${root}/pages/productdetail/product-cappu.html?product_id=${unique_id}`
        
    };
    });
});
