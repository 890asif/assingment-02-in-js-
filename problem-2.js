function isElevatorSafe(weights) {
if(!Array.isArray(weights)){
    return "Invalid";
}
  let arraySum = 0;
  for(let i = 0; i < weights.length; i++){
    arraySum += weights[i];
  }
  if(arraySum <= 400){
        return true
    }
   else{
    return false
   }
}
console.log(isElevatorSafe([60, 75, 50]))
console.log(isElevatorSafe([95, 95, 120, 100]))
console.log(isElevatorSafe("[400]"))
console.log(isElevatorSafe([60, 75, 50]))
