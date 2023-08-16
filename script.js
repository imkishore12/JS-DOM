//question 1
var a=document.getElementById("text");
//document.getElementById("text").innerHTML="helloworld";

//question 2
var b=document.getElementsByTagName("h1");
// question 3
var c=document.getElementsByClassName("Hello");
c[0].innerHTML="Hello World";
var f=document.getElementsByClassName("replace");

function Replace(){
    f[0].innerHTML="Welcome to Elevation academy";

}
var head=document.getElementById("heading");
head.style.color="red";


// question 9
function getTime(){
const d = new Date();
let text = d.toLocaleTimeString();
document.getElementById("time").innerHTML = text;
setInterval("getTime()",1000)
}
getTime()

function changeflex(){
    var flex=document.getElementsByClassName("parent");
    flex[0].style.flexDirection="column";
}

