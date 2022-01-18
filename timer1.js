//timer function
function timer() {
  //pass the arguments in to the node 
  let arguments = process.argv.slice(2);
  console.log(arguments);
  let multiTime = 1000;
//for loop to array given by input
  for (let i = 0; i < arguments.length; i++) {
    if (isNaN(arguments[i]) || Number(arguments[i] < 0 || arguments.length === 0)) {
      // print out enter number!
      console.log("enter number higher than 0");
    } else {
      setTimeout(() => {
        //write down to new line code
        process.stdout.write("\x07");
      }, arguments[i] * multiTime);
    }
  }
}
//call timer function
timer();