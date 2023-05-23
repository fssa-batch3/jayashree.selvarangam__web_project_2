const root = window.location.origin;

const header_before_login = `<header class="header">
<input type="checkbox" name="" id="toggler">
<label for="toggler" class="fas fa-bars"></label>
<a href="../coffeeshop/index.html" class="logo"> <img class="logo-img" src="../../assets/image/logo-transparent-png.png" alt=""> </a>

<nav class="navbar">
    <a href="${root}/index.html">Home</a>
    <!-- <a href="${root}/pages/order/order-bestseller.html">Order</a> -->
        <div class="dropdown">
                            <a href="" class="nav">  <span>Order</span>  </a>
                            <div class="dropdown-content">
                            
                            </div>
                          </div>
    <!--<a href="${root}/pages/blogs/blog.html">Blogs</a>--> 
</nav>

<button class="btn"><a href="${root}/pages/login/login.html">Login</a></button>
</header>`;

const header_after_login = `
<header class="header">
<input type="checkbox" name="" id="toggler">
<label for="toggler" class="fas fa-bars"></label>
<a href="${root}/index.html" class="logo"> <img class="logo-img" src="../../assets/image/logo-transparent-png.png" alt=""> </a>
<nav class="navbar">
    <a href="${root}/index.html">Home</a>
    <!-- <a href="${root}/pages/order/order-bestseller.html">Order</a> -->
    
    <!--<a href="${root}/pages/payment/payment.html">Pay</a>-->
    <div class="dropdown">
    <a href="" class="nav">  <span>Order</span>  </a>
    <div class="dropdown-content">
   
    </div>
  </div>
    <a href="${root}/pages/My orders/myorders.html">My orders</a>
  
    <!--<a href="${root}/pages/blogs/blog.html">Blogs</a>--> 
</nav>
<div class="icons">
<a href="${root}/pages/add to cart/addtocart.html" class="fas fa-shopping-cart"></a>
<div class="dropdown1">
<a href="#" class="fas fa-user"></a>
<div class="dropdown-content1">
   <a href="${root}/pages/profile/profile.html">profile</a>
   <a href="${root}/address/address.html">Address profile</a>
   <a href="${root}/address/address_form.html">Add address</a>
    </div>
</div>
</div>
</header>`;

const header_admin_header = `
<header class="header">
<input type="checkbox" name="" id="toggler">
<label for="toggler" class="fas fa-bars"></label>
<a href="${root}/pages/admin/admin-profile.html" class="logo"> <img class="logo-img" src="../../assets/image/logo-transparent-png.png" alt=""> </a>
<nav class="navbar">
    <a href="${root}/crud/addproduct.html">Add product</a>
    <div class="dropdown2">
    <a href="" class="nav2">  <span>View product</span>  </a>
    <div class="dropdown-content2">
   
    </div>
  </div>

    <a href="${root}/crud/addcategory.html">Add category</a>
    <!--<a href="${root}/pages/blogs/blog.html">Blogs</a>--> 
</nav>
<div class="icons">

<a href="${root}/pages/profile/profile.html" class="fas fa-user"></a>
</div>
</header>`;


// const user_login_id = JSON.parse(localStorage.getItem("unique_id"));
// const admin1_id = 'admin123@gmail.com'
// console.log(user_login_id);
// if (user_login_id) {
//   document.body.insertAdjacentHTML("afterbegin", header_after_login);
//   const logoutBtn = document.querySelector("#logout");
//   logoutBtn?.addEventListener("click", () => {
//     localStorage.removeItem("unique_id");
//     document.body.innerHTML = header_before_login;
//   });
// } else {
//   document.body.insertAdjacentHTML("afterbegin", header_before_login);

//   const logoutBtn = document.querySelector("#logout");
//   logoutBtn?.removeEventListener(
//     "click",
//     () => (document.body.innerHTML = header_after_login)
//   );
//   localStorage.removeItem("user_login_id");
// }
const user_id1 = JSON.parse(localStorage.getItem("unique_id"));
// console.log(user_id)
const admin_id = "admin123@gmail.com";
if (user_id1 !== admin_id && user_id1 !== null) {
    document.body.insertAdjacentHTML("afterbegin", header_after_login);
    //  logout
    const logoutBtn = document.querySelector("#logout");
    logoutBtn?.addEventListener("click", () => {
  if (confirm("Are you sure to logout this account ?")) {
            localStorage.removeItem("unique_id");
            document.body.innerHTML = header_before_login;
        }
    })
}


else if (user_id1 === admin_id) {
    document.body.insertAdjacentHTML("afterbegin", header_admin_header);

    // logout
    const logoutBtn = document.querySelector("#logout");
    logoutBtn?.addEventListener("click", () => {
        if (confirm("Are you sure to logout this account ?")) {
            localStorage.removeItem("unique_id");
            document.body.innerHTML = header_before_login;
        }
    })
}
else if (user_id1 == null) {

    document.body.insertAdjacentHTML("afterbegin", header_before_login);

    // //  logout button
    // const logoutBtn = document.querySelector("#logout");
    // logoutBtn?.removeEventListener("click", () => document.body.innerHTML = after_login);
    // localStorage.removeItem("user_id")

    const logoutBtn = document.querySelector("#logout");
    logoutBtn?.removeEventListener(
      "click",
      () => (document.body.innerHTML = header_after_login)
    );
    localStorage.removeItem("user_id");

}

// category have to show in dropdown
const categoryTypeUser = JSON.parse(localStorage.getItem("category")) || [];
const categoryTypeUser1 = JSON.parse(localStorage.getItem("category")) || [];
// console.log(categoryTypeUser)
// console.log(findBrands)
if(user_id1 !== admin_id){
    for(let i=0; i<categoryTypeUser.length; i++) {
        if(categoryTypeUser[i].category_status === true){
         const dropdownContent = document.createElement("a");
         dropdownContent.setAttribute("href", `${root}/pages/order/order-drinks.html?category_id=${categoryTypeUser[i].category_id}`);
     
         dropdownContent.innerHTML = categoryTypeUser[i].category;
         document.querySelector(".dropdown-content").append(dropdownContent)
        
        }
}


}else{


for(let i=0; i<categoryTypeUser1.length; i++) {
    if(categoryTypeUser1[i].category_status === true){
     
     //////////
     const dropdownContent2 = document.createElement("a");
     dropdownContent2.setAttribute("href", `${root}/crud/viewproduct.html?category_id=${categoryTypeUser1[i].category_id}`);
     dropdownContent2.innerHTML = categoryTypeUser1[i].category
     document.querySelector(".dropdown-content2").append(dropdownContent2)
    }
 }
}