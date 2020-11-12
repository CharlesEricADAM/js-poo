let number = parseInt(prompt("What number do you want to calculate the factorial ?"));
function factorial(num) {
  if (num === 0) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
}

function run(num) {
  if (num >= 0) {
    res = factorial(num);
    console.log(`The result for your number ${num} is : ${res}`);
  } else {
    console.log("Only positive number accepted !");
  }
}

run(number);




