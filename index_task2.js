
//DOM
var x= document.getElementById("list").getElementsByTagName("li");
for (var i=0; i<x.length; i++){
	console.log(x[i].innerHTML)
}


//querySelector
var baseElement = document.querySelector("ul");
for (var i=0; i<baseElement.children.length; i++){
	console.log(baseElement.children[i].innerHTML);
}