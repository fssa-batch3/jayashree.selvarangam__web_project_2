const form = document.getElementById("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const user_name = document.getElementById("name").value;
  const user_email = document.getElementById("email").value;
  const user_password = document.getElementById("password").value;
  const user_confirm_password =
    document.getElementById("confirm_password").value;
  const user_mobile = document.getElementById("mobilenumber").value;

  const array = [];
  const userInfo = {};
  userInfo.user_name = user_name;
  userInfo.user_email = user_email;
  userInfo.user_password = user_password;
  userInfo.user_confirm_password = user_confirm_password;
  userInfo.user_mobile = user_mobile;
  array.push(userInfo);

  if (user_password != user_confirm_password) {
    alert("Password Doesn't Match");
  }

  if (window.localStorage.getItem("user") === null) {
    window.localStorage.setItem("user", JSON.stringify(array));
    console.log(window.localStorage.getItem("user"));
  } else {
    const valid = JSON.parse(window.localStorage.getItem("user"));

    let coincidence = false;

    for (let i = 0; i < valid.length; i++) {
      if (user_email === valid[i].user_email) {
        coincidence = true;
        break;
      }
    }
    if (coincidence === true) {
      alert("Email is already in use");
      document.querySelector("form").reset();
    } else {
      // let pre_stored_data = window.localStorage.getItem("user");
      // let parse_data = JSON.parse(pre_stored_data);
      valid.push(userInfo);
      window.localStorage.setItem("user", JSON.stringify(valid));

      document.querySelector("form").reset();
    }
  }
});

/// /////////////////login/////////////////////
// let logIn=document.getElementById("form");

// logIn.addEventListener("submit", function (event){

//   let log=[];
//   let User_data=JSON.parse(localStorage.getItem("user"));
//   let user_email = document.getElementById('user_email').value;
//   let user_password = document.getElementById('user_password').value;

//   let verify=false;

//   for(i=0;i<User_data.length;i++){
//     if(user_email==User_data[i].user_email&&user_password==User_data[i].user_password){
//       verify=true;
//       break;
//       log.push(User_data[i]);
//       window.localStorage.setItem("user_details",JSON.stringify(log));
//   }else{
//     verify=false
//   }

//   }
//   if (isthis === true) {
//     alert("you are loged in");

//     window.location.href = "/index.html";
//   } else {
//     alert("login failed");
//     window.location.href = "";
//   }
// });
/// ////////////////////////////
const full_name = document.getElementById("full_name");
const email = document.getElementById("email");
const mobile_number = document.getElementById("mobile_number");
const password = document.getElementById("password");
const re_enter_password = document.getElementById("re_enter_password");

function signUp(e) {
  e.preventDefault();

  const full_namevalue = full_name.value.trim();
  const emailvalue = email.value.trim();
  const mobile_numbervalue = mobile_number.value.trim();
  const passwordvalue = password.value;
  const re_enter_passwordvalue = re_enter_password.value;

  /// extra details collecting from user
  // let gender = "";
  // let dob = "";
  // let address = "";
  // let hintname = "";

  full_namespace = /\s/;
  fullnamepattern = /^[a-zA-Z]+$/;
  emailpattern =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  mobilenumberpattern = /^[1-9]\d{9}$/;

  if (full_namevalue == "") {
    setErrorFor(full_name, "Enter your Fullname");
  }
  if (full_namespace.test(full_namevalue)) {
    setErrorFor(full_name, "name must not contain spaces");
  }
  if (fullnamepattern.test(full_namevalue)) {
    setSuccessFor(full_name);
  }

  const user_list = JSON.parse(localStorage.getItem("user_list")) || [];
  console.log(user_list);

  const exist =
    user_list.length &&
    JSON.parse(localStorage.getItem("user_list")).some(
      (data) =>
        data.email.toLowerCase() == emailvalue.toLowerCase() &&
        data.password.toLowerCase() == passwordvalue.toLowerCase()
    );

  console.log(exist);

  if (emailvalue == "") {
    setErrorFor(email, "enter your email address");
  } else if (!emailpattern.test(emailvalue)) {
    setErrorFor(email, "Please enter a valid email address");
  } else if (exist) {
    setErrorFor(
      email,
      "Sorry the User already Exist!! \n Try with different Email'"
    );
  } else {
    setSuccessFor(email);
  }

  if (mobile_numbervalue == "") {
    setErrorFor(mobile_number, "Enter your mobile number");
  } else if (!mobilenumberpattern.test(mobile_numbervalue)) {
    setErrorFor(mobile_number, "Please enter a valid mobilenumber");
  } else {
    setSuccessFor(mobile_number);
  }

  if (passwordvalue == "") {
    setErrorFor(password, "Enter the password");
  } else if (passwordvalue.length < 6) {
    setErrorFor(password, "password must contain at least 6 characters");
  } else {
    setSuccessFor(password);
  }

  if (re_enter_passwordvalue == "") {
    setErrorFor(re_enter_password, "Enter the password");
  }
  if (re_enter_passwordvalue !== passwordvalue) {
    setErrorFor(re_enter_password, "password must be the same");
  }
  if (re_enter_passwordvalue == passwordvalue) {
    setSuccessFor(re_enter_password);
  }

  function setErrorFor(input, message) {
    const formcontrol = input.parentElement;
    console.log(formcontrol);
    const small_msg = formcontrol.querySelector("small");
    console.log(small_msg);

    small_msg.innerHTML = `<i class="fa-solid fa-circle-info"></i> ${message}`;

    formcontrol.className = "form-control error";
  }

  function setSuccessFor(input, message) {
    const formcontrol = input.parentElement;
    const small_msg = formcontrol.querySelector("small");
    console.log(small_msg);
    // formcontrol.addEventListener("keyup",function(){
    small_msg.innerHTML = "";
    formcontrol.className = "form-control success";
    // })
  }
}

//   <!DOCTYPE html>
// <html lang="en">

// <head>
//     <meta charset="UTF-8">
//     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">

//     <link rel="stylesheet" href="../../assets/css/signup.css">
//     <link rel="preconnect" href="https://fonts.googleapis.com">
//     <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
//     <link
//         href="https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
//         rel="stylesheet">

//     <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
//         integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w=="
//         crossorigin="anonymous" referrerpolicy="no-referrer" />

//     <title>signup</title>
// </head>

// <body>
//     <div class="container">
//         <img src="../../assets/images/homepage-images/logo.png" alt="" />

//         <div class="container-form">

//             <div class="x-mark">
//                 <a href="../../index.html">
//                     <i class="fa-solid fa-xmark"></i>
//                 </a>
//             </div>

//             <h2>create account</h2>

//             <form role="form" onsubmit="signUp(event)" id="signup">
//                 <div class="form-control">
//                     <label class="label_field">full name</label><br />
//                     <input class="input_field" id="full_name" type="text" placeholder="Eg.Marion ame"/>
//                    <small></small>
//                 </div>

//                 <div class="form-control">
//                     <label class="label_field">Email address</label><br/>
//                     <input class="input_field" id="email" type="email" placeholder="Eg.helloMarion@gmail.com" />
//                     <small></small>
//                 </div>

//                 <div class="form-control ">
//                     <label class="label_field">Mobile number</label><br/>
//                     <input class="input_field" id="mobile_number" type="tel" placeholder="Mobile number"  />
//                    <small></small>
//                 </div>

//                 <div class="form-control">
//                     <label class="label_field">Password</label><br />
//                     <input class="input_field" type="password" id="password" placeholder="password" maxlength="6"
//                         title="Must contain 6 characters only" />
//                     <small></small>
//                 </div>

//                 <div class="form-control">
//                     <label class="label_field">Re-enter password</label><br/>
//                     <input class="input_field" type="password" id="re_enter_password"  placeholder="Re-enter password" maxlength="6" />
//                     <small></small>

//                 </div>

//                 <div class="buttons">
//                     <div>
//                         <button type="submit">Create Your MFS Account
//                         </button>
//                     </div>

//                     <div>
//                         <span>already have an account?</span><a href="../../pages/homepage/login.html">log in</a>
//                     </div>
//                 </div>

//             </form>

//         </div>

//     </div>

//     <script src="/js/storage.js"></script>
// </body>

// </html>
