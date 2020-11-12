let number = parseInt(prompt("Hey ! Welcome in Mario's Pyramid ! How many stage do you want ?"));

function createStage(num) {
  for (let i = 1; i <= num; i++) {
    console.log(" ".repeat(num-i) + "#".repeat(i));
  }
}

createStage(number);