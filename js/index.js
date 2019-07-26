var number1 = parseInt(prompt("Digite o primeiro numero"));
var operation = prompt("Digite o simbolo matematico");
var number2 = parseInt(prompt("Digite o segundo numero"));

var result="";

if(operation === "+"){
	result = number1 + number2;
}else if(operation === "-"){
	result = number1 - number2;
}else if(operation === "/"){
	result = number1 / number2;
}else if(operation === "*"){
	result = number1 * number2;
}
if(result === ""){
document.body.append("Operacao invalida");
}else if(result === Infinity){
	document.body.append("nao é possivel dividir por zero")
}else if(result.toString() === "NaN"){
	document.body.append("Operacao Invalida")
}else
document.body.append("Seu resultado é "+result)