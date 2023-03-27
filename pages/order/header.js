const root = window.location.origin;


const  header_before_login =`<header class="header">
<input type="checkbox" name="" id="toggler">
<label for="toggler" class="fas fa-bars"></label>
<a href="../coffeeshop/index.html" class="logo"> Espresso cafe <i class="fas fa-mug-hot"></i> </a>

<nav class="navbar">
    <a href="${root}/index.html">Home</a>
    <!--<a href="${root}/pages/order/order-bestseller.html">Order</a>-->
    <!--<a href="${root}/pages/blogs/blog.html">Blogs</a>--> 
</nav>

<button class="btn"><a href="${root}/pages/login/login.html">Login</a></button>


</header>`



const header_after_login =`<header class="header">
<input type="checkbox" name="" id="toggler">
<label for="toggler" class="fas fa-bars"></label>
<a href="${root}/index.html" class="logo"> Espresso cafe <i class="fas fa-mug-hot"></i> </a>

<nav class="navbar">
    <a href="${root}/index.html">Home</a>
    <a href="${root}/pages/order/order-bestseller.html">Order</a>
    <!--<a href="${root}/pages/payment/payment.html">Pay</a>-->
    <a href="${root}/pages/My orders/myorders.html">My orders</a>
    <!--<a href="${root}/pages/blogs/blog.html">Blogs</a>--> 
</nav>
 <div class="icons">
 <a href="${root}/pages/add to cart/addtocart.html" class="fas fa-shopping-cart"></a>
 <a href="${root}/pages/profile/profile.html" class="fas fa-user"></a>
</div>
</header>`

let user_login_id = JSON.parse(localStorage.getItem('unique_id'));
console.log( user_login_id);

if( user_login_id ){
    document.body.insertAdjacentHTML("afterbegin",header_after_login);
    
    const logoutBtn = document.querySelector("#logout");
    logoutBtn?.addEventListener("click", () => {
        localStorage.removeItem("unique_id");
        document.body.innerHTML = header_before_login;
    })

}else{
    document.body.insertAdjacentHTML("afterbegin",header_before_login);

    const logoutBtn = document.querySelector("#logout");
    logoutBtn?.removeEventListener("click", () => 
    document.body.innerHTML = header_after_login);
    localStorage.removeItem("user_login_id");
    
};