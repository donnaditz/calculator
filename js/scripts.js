var bMI = function(weight, height) {
  return weight/(height/100*height/100);
};

var weight= prompt("please enter your weight.")
var height= prompt("please enter your height.")

alert(bMI(weight, height));
