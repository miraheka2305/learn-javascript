var x = document.getElementsByClassName("women");
// var y;

for (var i = 0; i<x.length; i++) {
	var y = x[i].children;
	for (var j=0; j<y.length; j++){
		console.log(y[j].innerText);
	}
}



// var y = x[0].children;
// var z = y[0].innerText;
// console.log(z);

// console.log(y);