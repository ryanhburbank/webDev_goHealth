$(document).ready(function(){
  $.getJSON("example.json", function( data ) {
      var plans = [];
      plans.push(fetchKeys(data[0]));
      data = sortByCopay(data);
      $.each(data, function( key, val ){       
        plans.push(makeRow(val));       
      });

      $("<table/>", {
        "class": "insurance-plans",
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

  var sortByCopay = function(jsonObject){
    
  }