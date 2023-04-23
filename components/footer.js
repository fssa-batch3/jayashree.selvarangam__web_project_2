const root2 = window.location.origin;
const  footer_before_login = `
<footer>
<section class="footer">

    <div class="box-container">

        <div class="box">
            <h3>our branches</h3>
            <a href="#"> <i class="fas fa-arrow-right"></i> India </a>
            <a href="#"> <i class="fas fa-arrow-right"></i> USA </a>
            <a href="#"> <i class="fas fa-arrow-right"></i> France </a>
            <a href="#"> <i class="fas fa-arrow-right"></i> Africa </a>
            <a href="#"> <i class="fas fa-arrow-right"></i> Japan </a>
        </div>

        <div class="box">
            <h3>quick links</h3>
            <a href="${root2}/index.html"> <i class="fas fa-arrow-right"></i> home </a>
            <a href="${root2}/pages/My orders/myorders.html"> <i class="fas fa-arrow-right"></i> order </a>
          
            
            <!-- <a href="../../pages/blogs/blog.html"> <i class="fas fa-arrow-right"></i> blog </a> -->
        </div>

        
        <div class="box">
            <h3>contact info</h3>
            <a href="#"> <i class="fab fa-facebook-f"></i> facebook </a>
            <a href="#"> <i class="fab fa-twitter"></i> twitter </a>
            <!-- <a href="#"> <i class="fab fa-twitter"></i> twitter </a> -->
            <a href="#"> <i class="fab fa-instagram"></i> instagram </a>
            <a href="#"> <i class="fab fa-linkedin"></i> linkedin </a>
        </div>
    </div>
</section>
</footer>

`


const footer_after_login = `
<footer>
<section class="footer">

    <div class="box-container">

        <div class="box">
            <h3>our branches</h3>
            <a href="#"> <i class="fas fa-arrow-right"></i> India </a>
            <a href="#"> <i class="fas fa-arrow-right"></i> USA </a>
            <a href="#"> <i class="fas fa-arrow-right"></i> France </a>
            <a href="#"> <i class="fas fa-arrow-right"></i> Africa </a>
            <a href="#"> <i class="fas fa-arrow-right"></i> Japan </a>
        </div>

        <div class="box">
            <h3>quick links</h3>
            <a href="${root2}/index.html"> <i class="fas fa-arrow-right"></i> home </a>
            <a href="${root2}/pages/My orders/myorders.html"> <i class="fas fa-arrow-right"></i> order </a>
            <a href="${root2}/pages/My orders/myorders.html"> <i class="fas fa-arrow-right"></i> my orders </a>
            <!-- <a href="../../pages/blogs/blog.html"> <i class="fas fa-arrow-right"></i> blog </a> -->
        </div>

        
        <div class="box">
            <h3>contact info</h3>
            <a href="#"> <i class="fab fa-facebook-f"></i> facebook </a>
            <a href="#"> <i class="fab fa-twitter"></i> twitter </a>
            <!-- <a href="#"> <i class="fab fa-twitter"></i> twitter </a> -->
            <a href="#"> <i class="fab fa-instagram"></i> instagram </a>
            <a href="#"> <i class="fab fa-linkedin"></i> linkedin </a>
        </div>
    </div>
</section>
</footer>

`

let user_login_id2 = JSON.parse(localStorage.getItem('unique_id'));
console.log( user_login_id2);
if(user_login_id2 ){
    document.body.insertAdjacentHTML("beforeEnd",footer_after_login);
    const logoutBtn1 = document.querySelector("#logout");
    logoutBtn1?.addEventListener("click", () => {
        localStorage.removeItem("unique_id");
        document.body.innerHTML = footer_before_login;
    });
}else{
    document.body.insertAdjacentHTML("beforeEnd",footer_before_login);

    const logoutBtn1 = document.querySelector("#logout");
    logoutBtn1?.removeEventListener("click", () => 
    document.body.innerHTML = footer_after_login);
    localStorage.removeItem("user_login_id");
};