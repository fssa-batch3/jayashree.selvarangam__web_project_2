//       const user_name= localStorage.getItem("name");
//       const address= localStorage.getItem("address");
 
//    console.log(user_name);
//    console.log(address);
 
   
//    document.querySelector(".delivery-name").innerHTML= user_name
//    document.querySelector(".delivery-address").innerHTML= address


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
        "source": " ../../assets/image/pumpkincold.jpg",
        "alt": ""
    },
    /////////////////////////////////////////////

    "main_img": " ../../assets/image/pumpkincold.jpg",
    "main_content": "Our Cold Brew sweetened with vanilla syrup, topped with a pu... ",
    "main_names": "Pumpkin Spice Cream Cold Brew ",
    "sub_content": "TALL(354 ML) .261 kcal ",
    "link_pages": "../../pages/productdetail/product-pumpkincold.html ",
    "cost_items": " Rs.584"
    //////////////////////////////////////////
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
        "source": "../../assets/image/vanillacold.jpg ",
        "alt": ""
    },
    /////////////////////////////////////////////

    "main_img": "../../assets/image/vanillacold.jpg ",
    "main_content": "Cold Brew with Vanilla Sweet Cream is made with Starbucks® C... ",
    "main_names": "Vanilla Sweet Cream Cold Brew ",
    "sub_content": "TALL(354 ML) .63 kcal ",
    "link_pages": "../../pages/productdetail/product-vanillacold.html ",
    "cost_items": "Rs.494 "
    ///////////////////////////////////////////////
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
        "source": "../../assets/image/toffeenutcold.jpg",
        "alt": ""
    },
    /////////////////////////////////////////////

    // "main_img": " ../../assets/image/toffeenutcold.jpg",
    // "main_content": "The caffine factory signature Nitro Cold Brew, balanced by subtle note.. ",
    // "main_names": "Toffee Nut Crunch Nitro Cold Brew",
    // "sub_content": " SHORT(237 ML) .163 Kcal",
    "link_pages": " ../../pages/productdetail/product-toffeenutcold.html",
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
        "source": "../../assets/image/toffeecold.jpg",
        "alt": ""
    },
    /////////////////////////////////////////////

    // "main_img": " ../../assets/image/whitecold.jpg",
    // "main_content": " Our slow steeped Cold brew shaken with milk and white chocol...",
    // "main_names": " White Mocha Caramel Cold Brew",
    // "sub_content": "TALL(354 ML) .194 kcal ",
    "link_pages": " ../../pages/productdetail/product-whitecold.html",
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
        "source": " ../../assets/image/greentea.jpg",
        "alt": ""
    },
    /////////////////////////////////////////////

    "main_img": " ../../assets/image/greentea.jpg",
    "main_content": " Smooth and creamy matcha is lightly sweetened and served wit..",
    "main_names": " Green Tea Latte ",
    "sub_content": " SHORT(237 ML) .171 kcal",
    "link_pages": "../../pages/productdetail/product-greenlatte.html ",
    "cost_items": " Rs.309"
    //////////////////////////////////////////
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
        "source": "../../assets/image/coldcold.jpg",
        "alt": ""
    },

    //////////////////////////////////////////////
    "main_img": "../../assets/image/coldcold.jpg",
    "main_content": "Starbucks® Kenya coffee is freshly ground and then steeped f...",
    "main_names": "Cold Brew Black",
    "sub_content": "TALL() .0 kcal",
    "link_pages": "../../pages/productdetail/product-coldbrew.html",
    "cost_items": "Rs 299"
    ////////////////////////////////////////////
}

]
for(i=0;i<=5;i++){

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
    image.setAttribute("src",object[i]["image"]["source"]);
    image.setAttribute("width","80px");
    image.setAttribute("height","80px");
    coffee_image_card.append(image);
    
    coffee_content_card = document.createElement("div");
    coffee_content_card.setAttribute("class","coffee-content");
    coffee_description_card.append(coffee_content_card);
    
    coffee_title_card = document.createElement("div");
    coffee_title_card.setAttribute("class","coffee-title");
    coffee_title_card.innerText=object[i]["name"];
    coffee_content_card.append(coffee_title_card);
    
    coffee_message_card = document.createElement("div");
    coffee_message_card.setAttribute("class","coffee-message");
    coffee_message_card.innerText= object[i]["quantities"]["name"] +
    object[i]["quantities"]["quantity"] +
    object[i]["quantities"]["unit"] +
    object[i]["quantities"]["calories"] +
    object[i]["quantities"]["calories_unit"];
    coffee_content_card.append(coffee_message_card);
    
    coffee_cost_details_card= document.createElement("div");
    coffee_cost_details_card.setAttribute("class","coffee-cost-details");
    coffee_items_card.append(coffee_cost_details_card);
    
    cost= document.createElement("div");
    cost.setAttribute("class","cost");
    cost.innerText=object[i]["currency"] + object[i]["price"];
    coffee_cost_details_card.append(cost);
    
    add_items= document.createElement("div");
    add_items.setAttribute("class","add-item");
    coffee_cost_details_card.append(add_items);
    
    a_card= document.createElement("a");
    a_card.setAttribute("href",object[i]["link_pages"]);
    add_items.append(a_card);
    
    button_card= document.createElement("button");
    button_card.innerText="add item";
    a_card.append(button_card);
    
    document.querySelector(".coffee-products").append(coffee_items_card);
    }

   
//     <!-- <div class="beverage">
//     <div class="beverage-container">
//     <div class="beverage-image">
//         <img src="../../assets/image/redhatmocha.jpg" alt="">
//     </div>
//     <div class="beverage-content">
//         <div class="beverage-vegimg">
//             <img src="../../assets/image/veg.svg" alt="">
//         </div>
//             <div class="beverage-title"> Crunchy Red Hat Mocha</div>
//             <div class=" beverage-message">SHORT(237 ML) .412 Kcal</div>
          
//     </div>
//     <div class="inc-dec-button">
//         <button>
//         <span class="minus"> <i class="fa-solid fa-minus"></span></i><span class="num">1</span><span class="plus"><i class="fa-solid fa-plus"></i></span>
//         </button>

//     </div>
//     <div class="beverage-costdetail">
//         <div class="cost">Rs.404</div>
//         <div class="Goback"><a href="../../pages/productdetail/productdetail1.html">Go back</a></div>
//     </div>
// </div>
// </div> -->
let your_cart_card;
let beverage_card;
let beverage_container_card;
let beverage_image_card;
let image_1;
let beverage_content_card;
let image_2;
let beverage_title_card;
let beverage_message_card;
let inc_dec_button;
let button;
let minus;
let i_minus;
let num;
let plus;
let i_plus;
let beverage_costdetail_card;
let cost_1;
let go_back;
let a1_card;


let cart_items = JSON.parse(localStorage.getItem('crud'));
console.log(cart_items);
let product_detail_list = JSON.parse(localStorage.getItem('product_detail_list'));
console.log(product_detail_list);
let productData = product_detail_list.filter( product=>
    cart_items.some(cart_items=>cart_items.unique==product.product_id)
    );

   
  

for(i=0;i< productData.length;i++){



    let find = cart_items.find(e => e.unique == productData[i]["product_id"]);

your_cart_card=document.createElement("section");
your_cart_card.setAttribute("class","Yourcart");
console.log(your_cart_card);

beverage_card=document.createElement("div");
beverage_card.setAttribute("class","beverage");
your_cart_card.append(beverage_card);

beverage_container_card=document.createElement("div");
beverage_container_card.setAttribute("class","beverage-container");
beverage_card.append(beverage_container_card);

beverage_image_card=document.createElement("div");
beverage_image_card.setAttribute("class","beverage-image");
beverage_container_card.append(beverage_image_card);

image_1=document.createElement("img");
image_1.setAttribute("src",productData[i]['image']['source']);
beverage_image_card.append(image_1);


beverage_content_card=document.createElement("div");
beverage_content_card.setAttribute("class","beverage-content");
beverage_container_card.append(beverage_content_card);

image_2=document.createElement("img");
image_2.setAttribute("src","../../assets/image/veg.svg");
beverage_content_card.append(image_2);



beverage_title_card=document.createElement("div");
beverage_title_card.setAttribute("class","beverage-title");
beverage_title_card.innerText=productData[i]['name'];
beverage_content_card.append(beverage_title_card);


beverage_message_card=document.createElement("div");
beverage_message_card.setAttribute("class","beverage-message");
beverage_message_card.innerText=productData[i]["quantities"]["name"] +
productData[i]["quantities"]["quantity"] +
productData[i]["quantities"]["unit"] +
productData[i]["quantities"]["calories"] +
productData[i]["quantities"]["calories_unit"];
beverage_content_card.append(beverage_message_card);

near_to_remove = document.createElement("div");
near_to_remove.setAttribute('class','near_to_remove');
beverage_container_card.append(near_to_remove);

inc_dec_button=document.createElement("div");
inc_dec_button.setAttribute("class","inc-dec-button");
near_to_remove.append(inc_dec_button);

button=document.createElement("button");
button.setAttribute('class',"button");
inc_dec_button.append(button);

// minus=document.createElement("span");
// minus.setAttribute("class","minus");
// button.append(minus);

i_minus=document.createElement("img");
i_minus.setAttribute("class","minus_1");
i_minus.setAttribute('src','../../assets/image/download_minus.png')
button.append(i_minus);

num=document.createElement("span");
num.setAttribute("class","num");
num.textContent=find['quantity_ordered'];
button.append(num);

// plus=document.createElement("span");
// plus.setAttribute("class","plus");
// button.append(plus);

i_plus=document.createElement("img");
i_plus.setAttribute("class","plus_1");
i_plus.setAttribute("src","../../assets/image/download.png");
button.append(i_plus);

beverage_costdetail_card=document.createElement("div");
beverage_costdetail_card.setAttribute("class","beverage-costdetail");
near_to_remove.append(beverage_costdetail_card);


cost=document.createElement("div");
cost.setAttribute("class","cost");
cost.innerText=productData[i]["currency"] + productData[i]['price'] * find["quantity_ordered"];
beverage_costdetail_card.append(cost);

go_back=document.createElement("div");
go_back.setAttribute("class","Goback");
beverage_costdetail_card.append(go_back);

a1_card=document.createElement("button");
a1_card.setAttribute("class","Go_back");
a1_card.setAttribute("data-cart_id", productData[i]["product_id"]);

// a1_card.setAttribute("href","../../pages/fill forms/review.html");  //object[i]["link_pages"]
a1_card.innerText="remove";
go_back.append(a1_card);

document.querySelector(".whole").append(your_cart_card);
}




// const cartId = this.dataset.cart_id;

// console.log(cartId);

let removeFood = document.querySelectorAll('button.Go_back');
removeFood.forEach(function (remove_id) {
    remove_id.addEventListener("click", function () {
      
        const cartId = this.dataset.cart_id;
        console.log('cartId');
        let cart_ids = JSON.parse(localStorage.getItem("crud"));

        function find_id(e) {
            return e.unique === cartId;
        }

        let remove_food = cart_ids.find(find_id);
        let indexOfItem = cart_ids.indexOf(remove_food);
        cart_ids.splice(indexOfItem, 1);
        let count = JSON.parse(localStorage.getItem("food_count"));
        localStorage.setItem("food_count", count-1)
        localStorage.setItem("crud", JSON.stringify(cart_ids));
        location.reload()
    })
})

//plus quantity function//

let plus_1 = document.querySelectorAll(".plus_1");
    plus_1.forEach(function(find_quantity) {
        find_quantity.addEventListener("click", function() {
        let parent = this.parentNode;
        // console.log(parent);
        let num =  parent.querySelector(".num");
        console.log(num)
        let n = parseInt(num.textContent)
        if (n < 30) {
        n += 1;
        }
        num.textContent = n;
        // // getting the ID
        let parentBox = this.closest(".near_to_remove");
        console.log(parentBox);
        let idButton = parentBox.querySelector(".beverage-costdetail").querySelector(".Goback").querySelector(".Go_back").getAttribute("data-cart_id");
        console.log(idButton)
        let cart_product = JSON.parse(localStorage.getItem("crud"));
        function find_cart(e){
        return e.unique == idButton;
        }

        let cart_quantity = cart_product.find(find_cart);
       
        if (cart_quantity) {
        cart_quantity.quantity_ordered = n.toString();
        localStorage.setItem("crud", JSON.stringify(cart_product));
        location.reload();
        }
    });
});

let minus_1 = document.querySelectorAll(".minus_1");
    minus_1.forEach(function(find_quantity) {
    find_quantity.addEventListener("click", function() {
        let parent = this.parentNode;
        let num = parent.querySelector(".num");
        let n = parseInt(num.textContent);
        if (n > 1) {
        n -= 1;
        }
        num.textContent = n;

//         // getting the ID
        let parentBox = this.closest(".near_to_remove")
        let idButton = parentBox.querySelector(".beverage-costdetail").querySelector(".Goback").querySelector(".Go_back").getAttribute("data-cart_id");

        let cart_product = JSON.parse(localStorage.getItem("crud"));
        function find_cart(e){
        return e.unique == idButton;
        }

        let cart_quantity = cart_product.find(find_cart);

        if (cart_quantity) {
        cart_quantity.quantity_ordered = n.toString();
        localStorage.setItem("crud", JSON.stringify(cart_product));
        location.reload();
        }
    });
});
let total_price = productData;
let price_1 = 0;
for (let i = 0; i < total_price.length; i++) {
    price_1 += parseInt(total_price[i]["price"]*cart_items[i]["quantity_ordered"]);
}
//     location.reload();
// }
 console.log(price_1);

let item_total = document.getElementById('amount');
item_total.innerText='Rs.' + price_1;
let total_items=document.getElementById('total_items');
total_items.innerText='Rs.' + price_1;

// Function to reload only one div

// function to update cart total//
// function updateTotal() {
   
//     let foodItems = document.getElementsByClassName('sumlist')[0]
//     let cartItems = foodItems.getElementsByClassName('food_items')
//     let total =0;
//     for (let i = 0; i < cartItems.length; i++) {
//         let cart = cartItems[i]
//         let rate = cart.getElementsByClassName('rate')[0];
//         let n = parseInt(num[i].innerText);
//         let quantity = n;

//         let price = parseInt(rate.innerText.replace("Rs.", ""));
//         total+= (price*quantity)
//         console.log(total)
//     }
// }
// updateTotal()































// i_plus.addEventListener("click",()=>{
//     a++;
//     console.log("a");
//     num.innerText=a;
// }
// )
// i_minus.addEventListener("click",()=>{
//     a--;
//     if (a<0){
//         a=0
//     }
//     console.log("a")
//     num.innerText=a;
// }
// )

