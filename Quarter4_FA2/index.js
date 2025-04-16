function generateTable() {
  
    var start = parseInt(document.getElementById("startNum").value);
    var end = parseInt(document.getElementById("endNum").value);
  

    if (isNaN(start) || isNaN(end) || start < 2 || start > 10 || end < 2 || end > 10) {
      alert("Please enter numbers between 2 and 10");
      return;
    }
  
    var output = document.getElementById("output");
    output.innerHTML = "";
  

    var table = "<table>";
    for (var i = 1; i <= start; i++) {
      table += "<tr>";
      for (var j = 1; j <= end; j++) {
        table += "<td>" + (i * j) + "</td>";
      }
      table += "</tr>";
    }
    table += "</table>";
    
    output.innerHTML = table;
  }