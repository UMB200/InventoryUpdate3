function updateInventory44(arr1, arr2) {
  //iterate through both inventory records
  for(var i = 0; i < arr2.length; i++){
  //check if inventory name exists 
  var flag = arr1.every((el) => {
     return arr2[i][1] != el[1];
   });
  //if it exists add to curInve name and quantity
  if(flag){
    arr1.push(arr2[i]);
  }
  //otherwise update quantity only
  else
    {
      var flagIndex = arr1.findIndex((el) => {
        return el[1] === arr2[i][1];
      });
      
      arr1[flagIndex][0] += arr2[i][0];
    }
  }
  //sort resul in alphabetical order
  return arr1.sort((a, b) => a[1] < b[1] ? -1 : 1);
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

updateInventory(curInv, newInv);
