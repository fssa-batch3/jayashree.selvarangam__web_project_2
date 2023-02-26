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
     

//         showData();
//     localStorage.setItem(" peoplelist",JSON.stringify(peoplelist));
 
//     document.getElementById("name").value="";
//     document.getElementById("age").value=""
//     document.getElementById("address").value="";
//     document.getElementById("email").value="";
// }
//    }

let id="";

selectData();
function manageData(){
    
    document.getElementById('msg').innerHTML= "";
   let first_name = document.getElementById('first_name').value;
   if( first_name == ""){
    document.getElementById('msg').innerHTML = 'plese enter your name';
   }else{
    console.log(id);
    if(id==''){
        let arr=  getCrudData();
       if(arr==null){
        let data=[first_name];
         localStorage.setItem('crud',JSON.stringify(data));
         
       }else{
        arr.push(first_name);
        localStorage.setItem('crud',JSON.stringify(arr));
       }

       document.getElementById('msg').innerHTML = 'data added';
    }else{
       let arr=getCrudData();
       arr[id]=first_name;
       setCrudData(arr);
       document.getElementById('msg').innerHTML = 'data updated';

    }
    document.getElementById('first_name').value="";
    selectData();
   }
   
  
}




function selectData(){
    let arr=  getCrudData();
    if(arr!=null){
        let html="";
        let sno=1;
        for(let k in arr){
            html =html+`<tr><td>${k}</td><td>${arr[k]}</td><td><a href="javascript:void(0)" onclick="deleteData(${k})">delete</a></td><td><a href="javascript:void(0)" onclick="editData(${k})">edit</a></td></tr>`;
            // sno++;
        }
        document.getElementById('root').innerHTML = html;
        console.log(html);


    }


}
function editData(rid){
    id=rid;
    let arr=getCrudData();
    document.getElementById('first_name').value=arr[rid];
}

function deleteData(rid){
    let arr=  getCrudData();
    arr.splice(rid,1);
    setCrudData(arr);
    selectData();
}
function getCrudData(){
    let arr=  JSON.parse(localStorage.getItem('crud'));
    return arr;
}
function setCrudData(arr){
    localStorage.setItem('crud',JSON.stringify(arr));
    return arr;
}