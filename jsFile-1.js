function displayDate(){
var date=new Date();
var time= date.toLocaleTimeString();
 document.getElementById("clock").innerHTML=time;
}

setInterval(function(){
displayDate()
},1000);

function checkValue(){
  var id=document.getElementById("id").value;
  var password=document.getElementById("password").value;
  if(id==""||password==""){
    alert("Enter Credentials");
  }
  else if(id=="knoldus" && password=="knoldus"){
    window.location="js-assignment-second.html";
  }
  else {
    alert("Wrong Credential");
  }
}
