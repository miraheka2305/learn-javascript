newRequest = () => {
  if (window.XMLHttpRequest) {
    return new XMLHttpRequest();
  } else if (window.ActiveXObject) {
    return new ActiveXObject("Microsoft.XMLHTTP");
  }
};

loadDoc = () => {
  let xhttp = newRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      let myObj = JSON.parse(this.responseText);
      console.log(myObj);

      drawTable(myObj);
    }
  };
  xhttp.open("GET", "https://api.jikan.moe/anime/1/episodes/2", true);
  xhttp.send();
};

drawTable = arrObj => {
  var node = document.createElement("tbody");
  // for (var i = 0; i < arrObj.length; i++) {
  var row = document.createElement("tr");
  var cell = document.createElement("td");
  var cellTextPoster = document.createTextNode(arrObj.image_url);
  cell.appendChild(cellTextPoster);
  row.appendChild(cell);
  var cell = document.createElement("td");
  var cellTextTitle = document.createTextNode(arrObj.title_japanese);
  cell.appendChild(cellTextTitle);
  row.appendChild(cell);
  var cell = document.createElement("td");
  var cellTextSynopsis = document.createTextNode(arrObj.synopsis);
  cell.appendChild(cellTextSynopsis);
  row.appendChild(cell);
  console.log(row);
  // }

  document.getElementById("jsonTable").appendChild(node);
};

// var node = document.createElement("tbody");
// for (var i = 0; i < id.length; i++) {
//   var row = document.createElement("tr");
//   var cell = document.createElement("td");
//   var cellTextID = document.createTextNode(id[i]);
//   cell.appendChild(cellTextID);
//   row.appendChild(cell);
//   var cell = document.createElement("td");
//   var cellTextNameID = document.createTextNode(nameID[i]);
//   cell.appendChild(cellTextNameID);
//   row.appendChild(cell);
//   var cell = document.createElement("td");
//   var cellTextClassID = document.createTextNode(classID[i]);
//   cell.appendChild(cellTextClassID);
//   row.appendChild(cell);
//   node.appendChild(row);
// }

// document.getElementById("jsonTable").appendChild(node);
