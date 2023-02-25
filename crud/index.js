// function validateForm(){
//     let name1 =document.getElementById("name").value
//     let age =document.getElementById("age").value
//     let address =document.getElementById("address").value
//     let email =document.getElementById("email").value

// if (name1 ==""){
//     alert("Name is required ");
//     return false;

// }
// if( age == ""){
 
//     alert("Age is required ");
//     return false;
// }
// else if(age<1){
//     alert("age must not be in 0 or negative");
//     return false;
// }
// if(address==""){
//     alert("address is required ");
//     return false;
// }

// if(email==""){
//     alert("email is required ");
//     return false;
// }
// else if(!email.includes("@")){
//    alert("invalid email address")
//    return false;
// }
// return true;

// }
// function showData(){
//     let peoplelist;
//     if(localStorage.getItem("peoplelist")==null){
//         peoplelist=[];
//     }
//     else{
//         peoplelist=JSON.parse(localStorage.getItem("peoplelist"));
       
// };
  
// let html="";
// peoplelist.forEach(function(items,index){
// html +="<tr>"
// html += "<td>"+items[name]+"<td>";
// html += "<td>"+items[age]+"<td>" ;
// html += "<td>"+items[address]+"<td>";
// html += "<td>"+items[email]+"<td>";

// html += '<td><button onclick="deleteData('+index+')"class="btn btn-danger">Delete</button><button onclick="updateData('+index+')"class="btn btn-warning m-2">Edit</button><</td>';
// html +="</tr>";
// console.log(html);
// });
// document.querySelector("#crudTable tbody").innerHTML = html ;
// }

// // Loads all datawhen document or page loaded
// document.onload = showData();

// // function to add data
//  function AddData(){
//     //if form validation is true
//     if(validateForm()==true){
//         let name1 =document.getElementById("name").value;
//     let age =document.getElementById("age").value;
//     let address =document.getElementById("address").value;
//     let email =document.getElementById("email").value;

//     let peoplelist;
    
    
//     if(localStorage.getItem("peoplelist")==null){
//         peoplelist=[];
//     }
//     else{
//         peoplelist=JSON.parse(localStorage.getItem("peoplelist"));
//     }
   
//     peoplelist.push({  name:name1,
//         age:age,address:address,email:email})
     


//     localStorage.setItem(" peoplelist",JSON.stringify(peoplelist));
//     showData();
//     document.getElementById("name").value="";
//     document.getElementById("age").value=""
//     document.getElementById("address").value="";
//     document.getElementById("email").value="";
// }
//    }



const form = document.getElementById("form");
form.addEventListener("submit",submit1);


function   addData(category,name,size_name,quantity_value,calories_value,description, cost) {

    let crudTable = document.getElementById("crudTable");

    let productDetails = document.createElement("tr");

    let category_td = document.createElement("td");
    let name_td = document.createElement("td");
    let size_name_td = document.createElement("td");
    let  quantity_value_td= document.createElement("td");
    let calories_value_td = document.createElement("td");
    let description_td = document.createElement("td");
    let cost_td= document.createElement("td");
    let events_td = document.createElement("td");

 

    category_td.innerText = category;
    name_td.innerText =name ;
    size_name_td.innerText =size_name ;
    quantity_value_td.innerText = quantity_value;
    calories_value_td.innerText = calories_value;
    description_td.innerText = description;
    cost_td.innerText = cost;
    
    let edit_button = document.createElement("button");
    edit_button.setAttribute("class", "edit_button");
    edit_button.innerText = "edit";
    events_td.append(edit_button);


    let delete_button = document.createElement("button");
    delete_button.setAttribute("class", "del_button");
    delete_button.innerText = "delete";
    events_td.append(delete_button);

    productDetails.append(category_td,name_td,size_name_td,quantity_value_td,calories_value_td,description_td,cost_td, events_td)
    crudTable.append(productDetails);

    
};
product_detail_list.forEach(addData);


// let product_detail_list=JSON.parse(localStorage.getItem('product_detail_list'));









function submit1(e){
    e.preventDefault();
    let category = document.getElementById("category").value;
    // let category_description = document.getElementById("category_description").value;
    let name = document.getElementById("name").value;
    let  size_name = document.getElementById("size_name").value;
    let quantity_value = document.getElementById("quantity_value").value;
    // let quantity_unit = document.getElementById("quantity_unit").value;
    let calories_value = document.getElementById("calories_value").value;
    // let calories_unit = document.getElementById("calories_unit").value;
    let  image_url= document.getElementById("image_url").value;
    let description = document.getElementById("description").value;
    let  cost= document.getElementById("cost").value;
    // let currency = document.getElementById("currency").value;
    // let offers = document.getElementById("offers").value;



    addData(category,name,size_name,quantity_value,calories_value,description, cost);


    let product_detail_list= JSON.parse(localStorage.getItem('product_detail_list'))||[];


    
         let product_detail = {
            "category":category,
            // "category_description":category_description,
            // "description":description,
            "name":name,
            "quantities":{
                "name":size_name,
            "quantity":quantity_value,
            "unit":"ml",
            "calories":calories_value,
            "calories_unit":"kcal",
            },
            "image":{
   
                "source":image_url,
                "alt":""
            },
           
            "description":description,
           
            "price":cost,
            "currency":"Rs."
         }

       
         

          product_detail_list.push(product_detail);
          
          localStorage.setItem("product_detail_list",JSON.stringify(product_detail_list));
       

  
}




        
     



   
