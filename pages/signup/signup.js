let form = document.getElementById("form");
form.addEventListener("submit", function (event) {
  event.preventDefault();
 
  let user_name = document.getElementById("name").value;
  let user_email = document.getElementById("email").value;
  let user_password = document.getElementById("password").value;
  let user_confirm_password=document.getElementById("confirm_password").value;
  let user_mobile = document.getElementById("mobilenumber").value;
  
  let array=[];
  let userInfo ={};
  userInfo ["user_name"]=user_name;
  userInfo ["user_email"]=user_email;
  userInfo ["user_password"]=user_password;
  userInfo ["user_confirm_password"]=user_confirm_password;
  userInfo ["user_mobile"]=user_mobile;
 array.push(userInfo);

  if ( user_password!= user_confirm_password){
    alert("Password Doesn't Match");
  }


 if (window.localStorage.getItem("user") === null) {
      window.localStorage.setItem("user", JSON.stringify(array));
      console.log(window.localStorage.getItem("user"));
    } 
    else {
        
  let valid = JSON.parse(window.localStorage.getItem("user"));

  let coincidence = false;

  for (let i = 0; i < valid.length; i++) {
    if (user_email === valid[i].user_email) {
       coincidence = true;
      break;
    }
  }
        if(coincidence === true){
            alert("Email is already in use");
            document.querySelector('form').reset();
        }else{
    // let pre_stored_data = window.localStorage.getItem("user");
    // let parse_data = JSON.parse(pre_stored_data);
    valid.push(userInfo);
    window.localStorage.setItem("user", JSON.stringify(valid));
    
    document.querySelector('form').reset();
    }
 
  }
});


////////////////////login/////////////////////
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
