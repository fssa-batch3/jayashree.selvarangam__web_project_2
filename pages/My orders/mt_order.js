// // <section class="Yourcart">

// const moment = require("../../Library/moment");



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




let order1 = JSON.parse(localStorage.getItem('orders'));

let user_id = JSON.parse(localStorage.getItem('unique_id'));
let groupedOrders = order1.filter(function separate(type) {
    return type.user_id === user_id;
});


const orders = groupedOrders.reduce((acc, curr) => {
    const existingUuid = acc.findIndex(order => order[0].ordered_object_at_a_time
        === curr.ordered_object_at_a_time
    );
    if (existingUuid !== -1) {
        acc[existingUuid].push(curr);
    } else {
        acc.push([curr]);
    };
    return acc;
}, []);
console.log(orders);
localStorage.setItem('groupedOrders',JSON.stringify(orders));
// console.log(order);
for (i = 0; i < orders.length; i++){
    const group = orders[i];

    //    let beverage_container_card1 = document.createElement("div");
    //     beverage_container_card1.setAttribute("class", "beverage-container");
    //     beverage_container_card1.innerText= orders[0][0]['ordered_object_at_a_time']
    //    document.querySelector(".whole").append(beverage_container_card1);

    //    let beverage_container_card1 = document.createElement("div");
    //     beverage_container_card1.setAttribute("class", "beverage-container");
    //     beverage_container_card1.innerText= orders[0][0]['ordered_object_at_a_time']
    //    document.querySelector(".whole").append(beverage_container_card1);

    for (let j = 0; j < group.length; j++) {
        const order = group[j];

        your_cart_card = document.createElement("section");
        your_cart_card.setAttribute("class", "Yourcart");
        // console.log(your_cart_card);

        beverage_card = document.createElement("div");
        beverage_card.setAttribute("class", "beverage");
        your_cart_card.append(beverage_card);

    //    let beverage_container_card1 = document.createElement("div");
    //     beverage_container_card1.setAttribute("class", "beverage-container");
    //     beverage_container_card1.innerText=order['ordered_object_at_a_time']

    //     beverage_card.append(beverage_container_card1);


        beverage_container_card = document.createElement("div");
        beverage_container_card.setAttribute("class", "beverage-container");
        beverage_card.append(beverage_container_card);

        beverage_image_card = document.createElement("div");
        beverage_image_card.setAttribute("class", "beverage-image");
        beverage_container_card.append(beverage_image_card);

        image = document.createElement("img");
        image.setAttribute("src", order['image']['source']);
        beverage_image_card.append(image);

        beverage_content_card = document.createElement("div");
        beverage_content_card.setAttribute("class", "beverage-content");
        beverage_container_card.append(beverage_content_card);

        beverage_title_card = document.createElement("div");
        beverage_title_card.setAttribute("class", "beverage-title");
        beverage_title_card.innerText = order['name'];
        beverage_content_card.append(beverage_title_card);

        beverage_message_card = document.createElement("div");
        beverage_message_card.setAttribute("class", "beverage-message");
        beverage_message_card.innerText = order["quantities"];
        beverage_content_card.append(beverage_message_card);

        cost = document.createElement("div");
        cost.setAttribute("class", "cost");
        cost.innerText = order['price'];
        beverage_content_card.append(cost);

        quantity_card = document.createElement("div");
        quantity_card.setAttribute("class", "quantity");
        quantity_card.innerText = order["quantity_ordered"];
        beverage_container_card.append(quantity_card);

        let mode_of_delivery_card = document.createElement("div");
        mode_of_delivery_card.setAttribute("class", "mode_of_delivery");
        mode_of_delivery_card.innerText = order["mode_of_delivery"];
        beverage_container_card.append(mode_of_delivery_card);

        inc_dec_button = document.createElement("div");
        inc_dec_button.setAttribute("class", "inc-dec-button");
        beverage_container_card.append(inc_dec_button);

        order_card = document.createElement("div");
        order_card.setAttribute("class", " ordered-date");
        inc_dec_button.append(order_card);

        p_card = document.createElement("p");
        p_card.innerText = order['date'];
        order_card.append(p_card);
        // {/* <div class="beverage-costdetail1">
        // <div class="delivery-status1">
        // <div class ="cancel" ><button id="cancel_1">cancel</button></div>
        // <div class ="reorder" ><button id="reorder_1" >reorder</button></div>
        // </div>
        // </div> */}



        beverage_costdetail_card = document.createElement("div");
        beverage_costdetail_card.setAttribute("class", "beverage-costdetail");
        beverage_container_card.append(beverage_costdetail_card);

        delivery_card = document.createElement("div");
        delivery_card.setAttribute("class", "delivery-status");
        beverage_costdetail_card.append(delivery_card);

        p_1 = document.createElement("p");

        // p_1.innerText=order[i]['delivery'];

        // delivery status pending
        // console.log(order[i]['time_check']);
        if (order["delivery"] == "delivered") {
            p_1.innerText = order["delivery"];
            // p_1.setAttribute("style", "color:red");
        }
        else if (order["delivery"] == "cancelled") {
            p_1.innerText = order["delivery"];
            // p_1.setAttribute("style", "color:grey");
        }
        if (order["delivery"] == "not delivered") {
            p_1.innerText = order["delivery"];
            // p_1.setAttribute("style", "color:green");
        }
        delivery_card.append(p_1);
        go_back = document.createElement("div");
        go_back.setAttribute("class", "Goback");
        beverage_costdetail_card.append(go_back);

        a_card = document.createElement("a");
        a_card.setAttribute("href", "../../pages/fill forms/review.html"+'?'+'order_id='+order['ordered_object_at_a_time']+'&&'+'product_id='+order['product_id']);
        a_card.innerText = "Write your review";

        go_back.append(a_card);

        let beverage_costdetail_card1 = document.createElement("div");
        beverage_costdetail_card1.setAttribute("class", "beverage-costdetail1");
        beverage_container_card.append(beverage_costdetail_card1);

        let delivery_card1 = document.createElement("div");
        delivery_card1.setAttribute("class", "delivery-status1");
        beverage_costdetail_card1.append(delivery_card1);
        if (order["delivery"] == "cancelled" || order["delivery"] == "delivered") {
            let cancel = document.createElement("div");
            cancel.setAttribute("class", "cancel");
            delivery_card1.append(cancel);

            let cancel_1 = document.createElement("button");
            cancel_1.setAttribute("id", "cancel_1");
            cancel_1.setAttribute("data-id", order['order_id']);
            cancel_1.setAttribute("style", "display:none")
            cancel_1.innerText = 'cancel'
            cancel.append(cancel_1);
        }
        else {
            let cancel = document.createElement("div");
            cancel.setAttribute("class", "cancel");
            delivery_card1.append(cancel);

            let cancel_1 = document.createElement("button");
            cancel_1.setAttribute("id", "cancel_1");
            cancel_1.setAttribute("data-id", order['order_id']);
            cancel_1.setAttribute("data-order_id", order['ordered_object_at_a_time']);
            cancel_1.innerText = 'cancel'
            cancel.append(cancel_1);
        }

        let reorder = document.createElement("div");
        reorder.setAttribute("class", "reorder");
        delivery_card1.append(reorder);

        let reorder_1 = document.createElement("button");
        reorder_1.setAttribute("id", "reorder_1");
        reorder_1.setAttribute("data-cart_id", order['add_to_cart_id']);
        reorder_1.innerText = 'reorder'
        reorder.append(reorder_1);

        // if(order[i]["delivery"] == "cancelled" || order[i]["delivery"] == "delivered") {
        // remove=document.createElement("div");
        // remove.setAttribute("class","remove_1");
        // beverage_costdetail_card.append(remove);

        // a1_card=document.createElement("a");
        // a1_card.setAttribute("data-id",order[i]['order_id']);
        // a1_card.setAttribute("class","remove");
        // a1_card.setAttribute("style", "display:none")
        // a1_card.setAttribute("href","");
        // a1_card.innerText=" remove";

        // remove.append(a1_card);
        // }
        // else{
        // remove=document.createElement("div");
        // remove.setAttribute("class","remove_1");
        // beverage_costdetail_card.append(remove);
        // a1_card=document.createElement("a");
        // a1_card.setAttribute("data-id",order[i]['order_id']);
        // a1_card.setAttribute("class","remove");
        // a1_card.setAttribute("href","");
        // a1_card.innerText=" remove";
        // remove.append(a1_card);
        // }
        // re_order=document.createElement("div");
        // re_order.setAttribute("class","reorder");
        // beverage_costdetail_card.append(re_order);

        // a2_card=document.createElement("a");
        // a2_card.setAttribute("data-cart_id",order[i]['add_to_cart_id']);
        // a2_card.setAttribute("class","re_order");
        // a2_card.setAttribute("href","");
        // a2_card.innerText=" reorder";

        // re_order.append(a2_card);
        document.querySelector(".whole").append(your_cart_card);
        if (j === orders[i].length - 1) {
            let new_card= document.createElement('div');
            new_card.setAttribute('class','hello');
            new_card.style.borderBottom='1px  solid black';
           console.log(new_card)
           beverage_card.append(new_card);
           }
        }
        // let beverage_container_card2 = document.createElement("div");
        // beverage_container_card2.setAttribute("class", "beverage-container");
        // beverage_container_card2.innerText= orders[0][0]['ordered_object_at_a_time']
        // document.querySelector(".whole").append(beverage_container_card2);
   }
    

 



let removeOrder = document.querySelectorAll('#cancel_1');
removeOrder.forEach(function (remove_id) {
    remove_id.addEventListener("click", function () {

        const cartId = this.dataset.order_id;
        // console.log('cartId');
        // let cart_ids = JSON.parse(localStorage.getItem("crud"));
        let product_order = JSON.parse(localStorage.getItem('orders'));
        
        let remove_food = product_order.filter(function separate(type) {
          return type.ordered_object_at_a_time === cartId ;
        });
        console.log(remove_food);
        remove_food.forEach(object => {
            object['delivery'] = 'cancelled';
        });
        // product_order.push(remove_food);
        // let indexOfItem = product_order.indexOf(remove_food);
        // product_order.splice(indexOfItem, 1);
        localStorage.setItem("orders", JSON.stringify(product_order));
        location.reload();
    });
});

// if( JSON.parse(localStorage.getItem('orders')) == null){
//    let p_alert =document.querySelector('.alert')
//    p_alert.innerText = 'no products in my orders';
// }

let re_order1 = document.querySelectorAll('#reorder_1');
re_order1.forEach(function (add_products) {
    add_products.addEventListener("click", function () {

        let cartId = this.dataset.cart_id;
        localStorage.setItem("cart_id", JSON.stringify(cartId));
        console.log(cartId);
        let product_order = JSON.parse(localStorage.getItem('orders'));
        const newArr = product_order.map(({ date, delivery, order_id, mode_of_delivery, delivery_address, time_check, before_30_minutes,ordered_object_at_a_time, ...rest }) => {
            return rest;
        });
        console.log(newArr);
        let new_array_prod = localStorage.setItem('newArr', JSON.stringify(newArr));
        console.log(product_order);
        let get_array_prod = JSON.parse(localStorage.getItem('newArr'));

        function find_id(e) {
            return e.add_to_cart_id === cartId;
        };

        let add_food = get_array_prod.find(find_id);
        console.log(add_food);
        let cartId1 = JSON.parse(localStorage.getItem("cart_id"));
        let check = '';
        if (check == '') {
            let cart_products = JSON.parse(localStorage.getItem('add_products_cart'));
            if (cart_products == null) {
                cart_products.push(add_food);
                localStorage.setItem('add_products_cart', JSON.stringify(cart_products));
            } else {
                let add_to_cart = JSON.parse(localStorage.getItem('add_products_cart'));
                let logic = false;
                console.log(logic);
                for (let i = 0; i < add_to_cart.length; i++) {
                    if (cartId1 === add_to_cart[i]['add_to_cart_id']) {
                        logic = true;
                    };
                };

                if (!logic) {
                    add_to_cart.push(add_food);
                    localStorage.setItem('add_products_cart', JSON.stringify(add_to_cart));
                };

            };
        };
        window.location.href = "../../pages/add to cart/addtocart.html";
    });

});

// let before_30_minutes = moment().add({minutes:2}).format('YYYY-MM-DD hh:mm:ssA');
// // console.log(before_30_minutes);
// console.log(order[i]["before_30_minutes"] );
// // let m = moment().toString();
// let m = moment().format("YYYY-MM-DD hh:mm:ssA").toString();
// console.log(m)
// if(m >= order[i]["before_30_minutes"]){
//     // p_1.innerText=order[i]['delivery']['del_status1'];
//     p_1.innerText = order[i]['delivery']['del_status1'] ;
//     order[i]['delivery']['del_status'] = 'delivered'

//     // console.log(order[i]['time_check']);

// }else{
//     p_1.innerText=order[i]['delivery']['del_status']
//     console.log("rajini");
// };

// let  order1 = JSON.parse(localStorage.getItem('orders'));

let m = moment().format("YYYY-MM-DD hh:mm:ssA").toString();
console.log(m);
let find_notDelivered_data = groupedOrders.filter(data =>
    data.delivery == "not delivered");
console.log(find_notDelivered_data);
for (i = 0; i < find_notDelivered_data.length; i++) {
    if (find_notDelivered_data[i]["before_30_minutes"] <= m) {
        find_notDelivered_data[i]["delivery"] = "delivered"
        localStorage.setItem("orders", JSON.stringify(groupedOrders));
    };
};

//  <section class="Yourcart">
//  <div class="beverage">
//     <div class="id_status">
//         <div class="order_id">
//             <p class="order_id1">order-id</p>
//             <p  class="order_id2">#1</p>
//         </div>
//         <div class="delivery_status">
//             <p class="delivery_status1">delivery_status</p>
//             <p class="deliver_status2">Delivered</p>
//         </div>
//     </div>
// <div class="beverage-container">
//             <div class="beverage-image">
//             <img src="../../assets/image/redhatmocha.jpg" alt="">
//             </div>
//     <div class="beverage-content">
//             <div class="beverage-title">Crunchy Red Hat Mocha</div>
//             <div class=" beverage-message">SHORT(237 ML) .412 Kcal</div>
//             <div class="cost">Rs.404</div>
//     </div>
//     <div class="quantity">1</div>
//     <div class ="reorder" ><button id="reorder_1">reorder</button></div>
    
//     <div>
//     </div>
// </div>
// <div class="date_mode_cancel_review">
//     <div class="mode_of_delivery">
//         <p class="mode_of_delivery1">mode of delivery: </p> 
//        <p class="mode_of_delivery2">dine in</p> 
//     </div>
//         <div class="ordered-date">
//         <p class="ordered-date1">ordered-date: </p>
//         <p class="ordered-date2">15-12-2022</p>
//         </div>
//        <div class ="cancel">
//         <button id="cancel_1">cancel</button>
//        </div>
    
//        <div class="Goback">
//         <a href="../../pages/fill forms/review.html"> <button>review</button>
//             </a>
//     </div>

// </div>
//  </div>
// </section> 

// let your_cart_card = document.createElement('div');
// your_cart_card.setAttribute('class','Yourcart')
// console.log(your_cart_card);

// let beverage_card =  document.createElement('div');
// beverage_card.setAttribute('class','beverage');
// your_cart_card.append(beverage_card);

// let id_status_card = document.createElement('div')
// id_status_card.setAttribute('class','id_status')
// beverage_card.append(id_status_card)


// let order_id_card = document.createElement('div')
// order_id_card.setAttribute('class','order_id')
// id_status_card.append(order_id_card);

// let order_id1_card = document.createElement('p')
// order_id1_card.setAttribute('class','order_id1')
// order_id1_card.innerText='order_id';
// order_id_card.append('order_id1_card');

// let order_id2_card = document.createElement('p')
// order_id2_card.setAttribute('class','order_id2')
// order_id2_card.innerText='#1';
// order_id_card.append('order_id2_card');

// let delivery_status_card = document.createElement('div')
// delivery_status_card.setAttribute('class','delivery_status')
// id_status_card.append(delivery_status_card);

// let delivery_status1_card = document.createElement('p')
// delivery_status_card.setAttribute('class','delivery_status1')
// delivery_status_card.innerText='delivery_status';
// delivery_status_card.append('delivery_status1_card');

// let  delivery_status2_card= document.createElement('p');
// delivery_status2_card.setAttribute('class','delivery_status2');
// delivery_status2_card.innerText='dine in';
// delivery_status_card.append('delivery_status2_card');


// let beverage_container_card =  document.createElement('div');
// beverage_container_card.setAttribute('class','beverage-container');
// beverage_card.append(beverage_container_card);


// let beverage_image_card =  document.createElement('div');
// beverage_image_card.setAttribute('class','beverage-image');
// beverage_container_card.append(beverage_image_card);

// let image1_card =  document.createElement('img');
// image1_card.setAttribute('src','../../assets/image/redhatmocha.jpg');
// beverage_image_card.append(image1_card);

// let beverage_content_card = document.createElement('div');
// beverage_content_card.setAttribute('class','beverage-content');
// beverage_container_card.append(beverage_content_card);

// let beverage_title_card = document.createElement('div');
// beverage_title_card.setAttribute('class','beverage-title');
// beverage_title_card.innerText = "Crunchy Red Hat Mocha";
// beverage_content_card.append(beverage_title_card);

// let beverage_message_card = document.createElement('div')
// beverage_message_card.setAttribute('class','beverage-message');
// beverage_message_card.innerText="SHORT(237 ML) .412 Kcal";
// beverage_content_card.append(beverage_message_card);

// let cost_cart = document.createElement('div')
// cost_card.setAttribute('class','cost');
// cost_card.innerText="Rs.404";
// cost_card.append(beverage_message_card);

// let quantity_card = document.createElement('div');
// quantity_card.setAttribute('class','quantity');
// quantity_card.innerText = 'quantity';
// beverage_container_card.append(quantity_card);

// let reorder_1 = document.createElement('div');
// reorder_1.setAttribute('class','reorder');
// beverage_container_card.append(reorder_1);

// let button_1 =  document.createElement('button');
// button_1.setAttribute('id','reorder_1');
// button_1.innerText = "reorder";
// beverage_container_card.append(button_1);

// let date_mode_cancel_review_card = document.createElement('div');
// date_mode_cancel_review_card.setAttribute('class','date_mode_cancel_review');
// beverage_container_card.append(date_mode_cancel_review_card);


















