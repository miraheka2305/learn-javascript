//
// var clapList = document.getElementsByTagName("b");

// //ini mapnya apa yg salah ya mat ._.
// // clapList.map( clapItem => {
// // 	return (clapItem.setAttribute("style", "color: red;"))
// // })
// for (var i = 0; i < clapList.length; i++) {
//   clapList[i].setAttribute("style", "color: red;");
// }
let bold = document.getElementsByTagName("b");

Array.from(bold).map(item => item.setAttribute("style", "color: red;"));
