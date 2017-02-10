function displayDate(){
var date=new Date();
var time= date.toLocaleTimeString();
 document.getElementById("clock").innerHTML=time;
}

setInterval(function(){
displayDate()
},1000);

var manipulation={
  array:[]
}


function addElement() {
  var element=document.getElementById("addElement").value;
  if(element=="") {
    alert("Please Enter a value");
  }
  else {
    if(element.length>1){
      var arrayOfString=element.split(",");
      for(check=0;check<arrayOfString.length;check++){
    manipulation.array.push(arrayOfString[check]);
  }
  document.getElementById("result").innerHTML="Success Element Added to array";
  }
  else{
    manipulation.array.push(element);
    document.getElementById("result").innerHTML="Success Element Added to array";
  }
}
}


function getElement() {
  var element=document.getElementById("getElement").value;
  if(element=="") {
    alert("Please Enter a value");
  }
  else {
    var intElement=parseInt(element)-1;
    if(intElement<=manipulation.array.length){
    var elementByIndex=manipulation.array[intElement];
  document.getElementById("result").innerHTML=elementByIndex;
  }
  else{
    document.getElementById("result").innerHTML="No such IndexS"
  }
}
}

function getAll() {
  var length=manipulation.array.length;
  if(length==0){
    document.getElementById("result").innerHTML="No Elements in Array"
  }
  else {
    document.getElementById("result").innerHTML=manipulation.array;
  }
}

function clearAll() {
  var result=document.getElementById("result").value;
  var addText=document.getElementById("addElement").value;
  var getText=document.getElementById("getElement").value;
  if(result=="" && addText=="" && getText==""){
    alert("Nothing to Clear")
}
else {
  document.getElementById("addElement").value=""
  document.getElementById("result").innerHTML=""
  document.getElementById("getElement").value="";
}
}

function sortElements() {
  var length=manipulation.array.length;
  if(length==0){
    document.getElementById("result").innerHTML="No Elements in Array for Sorting."
}
else {
  manipulation.array.sort(sortNumber);
  document.getElementById("result").innerHTML=manipulation.array.join(",");
}
}
function sortNumber(element1,element2) {
    return element1 - element2;
}
