$(document).ready(function(){
  $.getJSON("example.json", function( data ) {
      var plans = [];
      plans.push(fetchKeys(data[0]));
      data = orderByCopay(data);
      $.each(data, function( key, val ){       
        plans.push(makeRow(val["value"]));       
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

  var orderByCopay = function(jsonObject){
    var values = [];
    for(var i in jsonObject){
      values.push({key: i, value: jsonObject[i]});
    }
    values.sort(function(a,b){ 
      return (a.value["copay"] - b.value["copay"]);
    });
    return values;
  }

