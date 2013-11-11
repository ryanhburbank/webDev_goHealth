  $(document).ready(function(){
    $(".copay, .premium, .annualLimit").prepend('$');
  });

  $.getJSON("example.json", function(data) {
      var healthPlans = [];
      healthPlans.push(makeHeader(data[0]));
      sortedData = orderByCopay(data);
      $.each(sortedData, function( index, object ){  
        if (index % 2 == true){  
          healthPlans.push(makeRow("even",object));       
        }
        else {
          healthPlans.push(makeRow("odd",object));
        }
      });
      makeTable(healthPlans);
  });

  var orderByCopay = function(jsonObject){
    var values = [];
    for(var i in jsonObject){
      values.push(jsonObject[i]);
    }
    values.sort(function(a,b){ 
      return (a["copay"] - b["copay"]);
    });
    return values;
  }
  
  var makeTable = function(array){
    $("<table/>", {
      "class": "insurance-plans",
      html: array.join("")
    }).appendTo("body");
  }

  var makeHeader = function(jsonObject){
    var header = "<tr class='header'>";
      for(var key in jsonObject){
        header += "<th>" + key + "</th>";
      }
    header += "</tr>";
    return header;
  }

  var makeRow = function(parity, jsonObject){
    if (parity == "even"){
      var row = "<tr class='even'>";  
    }
    else {
      var row = "<tr class='odd'>";
    }
    for(var key in jsonObject){
      row += "<td class=" + key +">" + jsonObject[key] + "</td>";
    }
    row += "</tr>"
    return row;
  }

