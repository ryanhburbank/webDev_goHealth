test("Sorting logic", function(){
  var orderedPlans = orderByCopay(makeJsonObject());
  deepEqual(orderedPlans[0].value["copay"], 1, "The lowest copay is listed first.");
  deepEqual(orderedPlans[2].value["copay"], 10, "The highest copay is listed last.");
  deepEqual(orderedPlans[1].value["copay"], 5, "The middle copay is listed in the middle.");
});

function MockObject(number){
  this.copay = number;
}

var makeJsonObject = function(){
  var highCopay = new MockObject(10);
  var middleCopay = new MockObject(5);
  var lowCopay = new MockObject(1);
  var testArray = [highCopay,lowCopay,middleCopay];
  return testArray;
}