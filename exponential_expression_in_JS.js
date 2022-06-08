
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

var count = 0;
var N = 0;
var input = [];

rl.on("line", function (x) {
	count += 1;
	if (count === 1) {
  	  N = x;
	} else {
  	  input.push(x);
	}
    
	if (count > N) {
        const number = input.map(e => Number(e))
      	const sum = number.reduce((a, b) => a+b)
        const result = Math.floor(sum/10**40*10**15).toString().slice(0, 10)
        console.log(result);
  	  rl.close();
	}
}).on("close", function () {

});
