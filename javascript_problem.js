$(document).ready(function(){
  console.log("this is working");
  $.getJSON("example.json", function( data ) {
      var plans = [];
      plans.push(fetchKeys(data[0]));
      $.each(data, function( key, val ){       
        console.log(makeRow(val));
        // var row = "<tr>";
        // plans.push("<td>'" + val["carrierName"] + "'</td>");
      });

      $("<ul/>", {
        "class": "my-new-list",
        html: plans.join("")
      }).appendTo("body");
  });
})

var fetchKeys = function(jsonObject){
  var headers = "<tr>";
    for(var key in jsonObject){
      headers += "<th>'" + key + "'</th>";
    }
  headers += "</tr>";
  return headers;
}

var makeRow = function(jsonObject){
  var row = "<tr>";
  for(var key in jsonObject){
    row += "<td>'" + jsonObject[key] + "'</td>";
  }
  row += "</tr>"
  return row;
}