// // <section class="Yourcart">
            
            
//    /// <div class="beverage">
// ////<div class="beverage-container"> 
//         {/* <div class="beverage-image">
//             <img src="../../assets/image/icedgreen.jpg" alt="">
//         </div> */}
//         {/* <div class="beverage-content">
            
//                 <div class="beverage-title">Iced Green Tea Latte</div>
//                 <div class=" beverage-message">SHORT(237 ML) .412 Kcal</div>
//                 <div class="cost">Rs.309</div>
              
//         </div> */}
//         {/* <div class="quantity">1</div> */}
//         {/* <div class="inc-dec-button">
//             <div class="ordered-date">
               
//                 <p>14-12-2022</p>
//             </div>

//         </div> */}
//         {/* <div class="beverage-costdetail">
//             <div class="delivery-status">
//             <p>Delivered</p>
//             </div>
//             <div class="Goback"><a href="../../pages/fill forms/review.html">Write your review</a></div>
//         </div> */}
//   ////</div>
   /// </div>
//</section>

let your_cart_card;
let beverage_card;
let beverage_container_card;
let beverage_image_card;
let image;
let beverage_content_card;
let beverage_title_card;
let beverage_message_card;
let cost;
let quantity_card;
let inc_dec_button;
let order_card;
let p_card;
let beverage_costdetail_card;
let delivery_card;
let p_1;
let go_back;
let a_card;

let order = JSON.parse(localStorage.getItem('orders'));

// add_to_cart_id
// : 
// "fa9f46f0-b3c3-4e1e-8031-2ad73d119711"
// category
// : 
// "COLD BREW"
// currency
// : 
// "Rs."
// date
// : 
// "2023-03-19T05:32:28.872Z"
// delivery
// : 
// {del_status: "not delivered", del_status1: "delivered"}
// description
// : 
// "fresh coffee "
// image
// : 
// {source: "http://127.0.0.1:5500/assets/image/redhatmocha.jpg", alt: ""}
// name
// : 
// "js"
// price
// : 
// "897"
// product_id
// : 
// "960297a1-0b18-4e66-97ec-0093f2cbbdfa"
// quantities
// : 
// {name: "short", quantity: "123", unit: "ml", calories: "123", calories_unit: "kcal"}
// quantity_ordered
// : 
// 1

for(i=0;i<order.length;i++){
your_cart_card=document.createElement("section");
your_cart_card.setAttribute("class","Yourcart");
// console.log(your_cart_card);

beverage_card=document.createElement("div");
beverage_card.setAttribute("class","beverage");
your_cart_card.append(beverage_card);

beverage_container_card=document.createElement("div");
beverage_container_card.setAttribute("class","beverage-container");
beverage_card.append(beverage_container_card);

beverage_image_card=document.createElement("div");
beverage_image_card.setAttribute("class","beverage-image");
beverage_container_card.append(beverage_image_card);

image=document.createElement("img");
image.setAttribute("src",order[i]['image']['source']);
beverage_image_card.append(image);

beverage_content_card=document.createElement("div");
beverage_content_card.setAttribute("class","beverage-content");
beverage_container_card.append(beverage_content_card);

beverage_title_card=document.createElement("div");
beverage_title_card.setAttribute("class","beverage-title");
beverage_title_card.innerText=order[i]['name'];
beverage_content_card.append(beverage_title_card);


beverage_message_card=document.createElement("div");
beverage_message_card.setAttribute("class","beverage-message");
beverage_message_card.innerText=  order[i]["quantities"]["name"] +
order[i]["quantities"]["quantity"] +
order[i]["quantities"]["unit"] +
order[i]["quantities"]["calories"] +
order[i]["quantities"]["calories_unit"];        
beverage_content_card.append(beverage_message_card);

cost=document.createElement("div");
cost.setAttribute("class","cost");
cost.innerText=order[i]['currency']+order[i]['price'];
beverage_content_card.append(cost);

quantity_card=document.createElement("div");
quantity_card.setAttribute("class","quantity");
quantity_card.innerText=order[i]["quantity_ordered"];
beverage_container_card.append(quantity_card);

inc_dec_button=document.createElement("div");
inc_dec_button.setAttribute("class","inc-dec-button");
beverage_container_card.append(inc_dec_button);

order_card=document.createElement("div");
order_card.setAttribute("class"," ordered-date");
inc_dec_button.append(order_card);



 p_card=document.createElement("p");
 p_card.innerText=order[i]['date']; 
 order_card.append(p_card);

 beverage_costdetail_card=document.createElement("div");
 beverage_costdetail_card.setAttribute("class","beverage-costdetail");
beverage_container_card.append(beverage_costdetail_card);

delivery_card=document.createElement("div");
delivery_card.setAttribute("class","delivery-status");
beverage_costdetail_card.append(delivery_card);

p_1=document.createElement("p");
p_1.innerText="Delivered";
delivery_card.append(p_1);

go_back=document.createElement("div");
go_back.setAttribute("class","Goback");
beverage_costdetail_card.append(go_back);

a_card=document.createElement("a");
a_card.setAttribute("href","../../pages/fill forms/review.html");
a_card.innerText="Write your review";

go_back.append(a_card);

remove=document.createElement("div");
remove.setAttribute("class","remove_1");
beverage_costdetail_card.append(remove);

a1_card=document.createElement("a");
 a1_card.setAttribute("data-id",order[i]['add_to_cart_id']);
 a1_card.setAttribute("class","remove");
 a1_card.setAttribute("href","");
a1_card.innerText=" remove";

remove.append(a1_card);


re_order=document.createElement("div");
re_order.setAttribute("class","reorder");
beverage_costdetail_card.append(re_order);

a2_card=document.createElement("a");
 a2_card.setAttribute("data-cart_id",order[i]['add_to_cart_id']);
 a2_card.setAttribute("class","re_order");
 a2_card.setAttribute("href","");
a2_card.innerText=" reorder";

re_order.append(a2_card);

document.querySelector(".whole").append(your_cart_card);
}

let removeOrder = document.querySelectorAll('.remove');
removeOrder.forEach(function (remove_id) {
    remove_id.addEventListener("click", function () {
      
        const cartId = this.dataset.id;

        // console.log('cartId');
        // let cart_ids = JSON.parse(localStorage.getItem("crud"));
        let  product_order= JSON.parse(localStorage.getItem('orders'));

        function find_id(e) {
            return e.add_to_cart_id === cartId ;
        };

        let remove_food = product_order.find(find_id);
        let indexOfItem = product_order.indexOf(remove_food);
        product_order.splice(indexOfItem, 1);
      
 
        localStorage.setItem("orders", JSON.stringify(product_order));
        location.reload();
    });
});

// if( JSON.parse(localStorage.getItem('orders')) == null){
//    let p_alert =document.querySelector('.alert')
//    p_alert.innerText = 'no products in my orders';
// }

let re_order1 = document.querySelectorAll('.re_order');
re_order1.forEach(function (add_products) {
    add_products.addEventListener("click", function () {
        
        let cartId = this.dataset.cart_id;
        localStorage.setItem("cart_id", JSON.stringify(cartId));
        console.log(cartId);
        let  product_order= JSON.parse(localStorage.getItem('orders'));
  
  
       const newArr = product_order.map(({date,delivery, ...rest}) => {
       return rest;
       });
        console.log(newArr);
        let  new_array_prod = localStorage.setItem('newArr',JSON.stringify(newArr));
        console.log(product_order);
        let get_array_prod = JSON.parse(localStorage.getItem('newArr'));
        
        function find_id(e) {
            return e.add_to_cart_id === cartId ;
        };

        let add_food = get_array_prod.find(find_id);
        console.log(add_food);
        let cartId1= JSON.parse(localStorage.getItem("cart_id"));
        let check = '';
        if(check==''){
            let cart_products = JSON.parse(localStorage.getItem('add_products_cart'));

            if(cart_products == null){
                cart_products.push(add_food);
                localStorage.setItem('add_products_cart',JSON.stringify(cart_products));
            }else{
                let add_to_cart = JSON.parse(localStorage.getItem('add_products_cart'));
                let logic = false;
                console.log(logic);
                for(let i=0;i<add_to_cart.length;i++){
                    if( cartId1  ===  add_to_cart[i]['add_to_cart_id']){
                    logic = true;
                    };
                };

                if(!logic){
                    add_to_cart.push(add_food);
                    localStorage.setItem('add_products_cart',JSON.stringify(add_to_cart));
                }
                
            }
        }

        


        
        
      
        
        
})
});

