var input = prompt("Enter a sentence");
var newArr = []

for (var i = 0; i < input.length; i++)
if (input[i] === "a" || input[i] === "e" || input[i] === "i" || input[i] === "o" || input[i] === "u"){
 newArr.push("-");
} else {
	newArr.push(input[i]);
}
var final = newArr.join("");
alert(final);
