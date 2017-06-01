

var x = document.getElementById('number1')
var y = document.getElementById('number2')

console.log(x, y)
console.log(document.getElementById('1'));

document.getElementById('plus').addEventListener('click', function() {
	document.write(+x.value + +y.value);
})
document.getElementById('minus').addEventListener('click', function() {
	document.write(x.value - y.value);
})

document.getElementById('proiz').addEventListener('click', function() {
	document.write(x.value * y.value);
})
document.getElementById('del').addEventListener('click', function() {
	document.write(x.value / y.value);
})
