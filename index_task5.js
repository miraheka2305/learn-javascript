var id = ["1234567890", "1234567891", "1234567892", "1234567893"];
var nameID = [
  "Dian Dwi Arini",
  "Matias Alvin S",
  "N.G.A. Mirah",
  "Rachmi Azanisa"
];
var classID = ["if-38-01", "if-38-02", "if-38-03", "if-38-04"];

console.log(classID);
console.log(nameID);
console.log(id);

var node = document.createElement("tbody");
for (var i = 0; i < id.length; i++) {
  var row = document.createElement("tr");
  var cell = document.createElement("td");
  var cellTextID = document.createTextNode(id[i]);
  cell.appendChild(cellTextID);
  row.appendChild(cell);
  var cell = document.createElement("td");
  var cellTextNameID = document.createTextNode(nameID[i]);
  cell.appendChild(cellTextNameID);
  row.appendChild(cell);
  var cell = document.createElement("td");
  var cellTextClassID = document.createTextNode(classID[i]);
  cell.appendChild(cellTextClassID);
  row.appendChild(cell);
  console.log(row);
  console.log("sudahsemuua");
  node.appendChild(row);
}

document.getElementById("friend-class").appendChild(node);
