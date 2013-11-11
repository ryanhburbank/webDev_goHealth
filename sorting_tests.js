test("Sorting logic", function(){
  var orderedPlans = orderByCopay(makeJsonObject());
  console.log(orderedPlans);
  deepEqual(orderedPlans[0]["copay"], 1, "The lowest copay is listed first.");
  deepEqual(orderedPlans[1]["copay"], 5, "The middle copay is listed in the middle.");
  deepEqual(orderedPlans[2]["copay"], 10, "The highest copay is listed last.");
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