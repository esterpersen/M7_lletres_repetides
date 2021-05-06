//NIVELL 1

//Exercici 1

const nom = ["e", "s", "t", "e", "r"];
//recorrer l'array del nom i imprimir cada lletra a la console
for (let i = 0; i < nom.length; i++) {
	console.log(nom[i]);
}

//Exercici 2

const elMeuNom2 = ["e", "s", "t", "3", "r", "p", "e", "r", "e", "l", "l", 0, "s", "e", "n", "t", "1", "s"];
console.log("Partim del nom " + elMeuNom2.join(''));
let resposta = "Els noms de persones no contenen el número: ";
let respostaNumeros = [];

for (let i = 0; i < elMeuNom2.length; i++) {
	//si son vocals
	if (elMeuNom2[i] === "a" || elMeuNom2[i] === "e" || elMeuNom2[i] === "i" || elMeuNom2[i] === "o" || elMeuNom2[i] === "u") {
		console.log("He trobat la VOCAL: " + elMeuNom2[i]);
	} //si son numeros
	else if (elMeuNom2[i] == 0 || elMeuNom2[i] === "1" || elMeuNom2[i] === "2" || elMeuNom2[i] === "3" || elMeuNom2[i] === "4" || elMeuNom2[i] === "5" || elMeuNom2[i] === "6" || elMeuNom2[i] === "7" || elMeuNom2[i] === "8" || elMeuNom2[i] === "9") {
		respostaNumeros.push(resposta + elMeuNom2[i]);
		document.getElementById("n1ex2Numeros").innerHTML = respostaNumeros.join('. ');
	} //si son consonants
	else {
		console.log("He trobat la CONSONANT: " + elMeuNom2[i]);
	}
}

//Exercici 3
let map = nom.reduce(function (prev, cur) { prev[cur] = (prev[cur] || 0) + 1; return prev; }, {});
console.log(map);

//Exercici 4
const elMeuCognom1 = ["p", "e", "r", "e", "l", "l", "o"];
const elMeuCognom2 = ["s", "e", "n", "t", "i", "s"];

const fullName = [...nom, ..." ", ...elMeuCognom1, ..." ", ...elMeuCognom2];

console.log(fullName);

//NIVELL 2
//Exercici 5

const str = 'Una dirección de correo electrónico es la dirección que utiliza para recibir y enviar correos electrónicos. Se muestra a los destinatarios de sus correos electrónicos para que sepan quién le envió un correo electrónico. Cada dirección de correo electrónico sólo se puede asignar una vez en todo el mundo y, por lo tanto, está disponible exclusivamente para usted. No puede cambiar las direcciones de correo electrónico, pero puede eliminarlas en cualquier momento. Una dirección de correo electrónico consiste en el signo @ (arroba), el nombre de usuario delante y el dominio detrás, por ejemplo, nombre-de-usuario@ionos.es: La parte del dominio depende del dominio bajo el cual se crea la dirección de correo electrónico: en nuestro ejemplo es ionos.es. Esta información varía de proveedor a proveedor, por lo que una parte del dominio también puede ser gmail.com o gmx.es si utiliza una dirección de correo electrónico de estos proveedores. Si ha registrado su propio dominio, por ejemplo, www.el-nombre-de-sus-sueños.es, las direcciones de correo electrónico que configura para el dominio lo tienen como parte del dominio (nombre-de-usuario@el-nombre-de-sus-sueños.es o nombre-de-usuario@el-nombre-de-sus-sueños.ES). El nombre de usuario es la parte de una dirección de correo electrónico que puede seleccionar libremente en la medida de lo posible. Puede, por ejemplo, utilizar su propio nombre o el nombre o departamento de una empresa. Si utiliza una dirección de correo electrónico con un proveedor de correo como gmail.com o gmx.es, es posible que la combinación con la parte del dominio deseada ya esté registrada. En este caso, deberá considerar alternativas para el nombre de usuario de su dirección de correo electrónico. Si utiliza su propio dominio, estas restricciones no se aplican porque sólo usted puede crear direcciones de correo electrónico que coincidan con su propio dominio. En resumen, nombre-de-usuario@ionos.es es un email'

var analisiStrings = (string => {
	//de la A-Z min&mayus, num, +,-,. 1 o mes cops // @ 1 cop // tots els caracters que no siguin un espai multiples vegades //tot el que no siguin simbols 1 o mes cops.
	const regex = /[a-zA-Z0-9+.-]+@\S*\w+/gi;
	return string.match(regex);
});

function treureDuplicats(data) {
	return data.filter((value, index) => data.indexOf(value) === index);
}

console.log(treureDuplicats(analisiStrings(str)));

//NIVELL 3

//Exercici 1
function n1ex1Funcio() {
	const nom1 = document.getElementById("n1ex1").value;
	//recorrer l'array del nom i imprimir cada lletra a la console
	for (let i = 0; i < nom1.length; i++) {
		console.log(nom1[i]);
	}
}

//Exercici 2
function n1ex2Funcio() {
	const nom2 = document.getElementById("n1ex2").value.toLowerCase();
	console.log("Partim del nom " + nom2);
	let missatge = "Els noms de persones no contenen el número: ";
	let missatgeNumeros = [];

	for (let i = 0; i < nom2.length; i++) {
		//si son vocals
		if (nom2[i] === "a" || nom2[i] === "e" || nom2[i] === "i" || nom2[i] === "o" || nom2[i] === "u") {
			console.log("He trobat la VOCAL: " + nom2[i]);
		}
		//si son numeros
		else if (nom2[i] == 0 || nom2[i] === "1" || nom2[i] === "2" || nom2[i] === "3" || nom2[i] === "4" || nom2[i] === "5" || nom2[i] === "6" || nom2[i] === "7" || nom2[i] === "8" || nom2[i] === "9") {
			missatgeNumeros.push(missatge + nom2[i]);
			document.getElementById("n1ex2Mostrar").innerHTML = missatgeNumeros.join('. </br>');

		} //si son consonants
		else if (nom2[i] === "b" || nom2[i] === "c" || nom2[i] === "d" || nom2[i] === "f" || nom2[i] === "g" || nom2[i] === "h" || nom2[i] === "j" || nom2[i] === "k" || nom2[i] === "l" || nom2[i] === "m" || nom2[i] === "n" || nom2[i] === "p" || nom2[i] === "q" || nom2[i] === "r" || nom2[i] === "s" || nom2[i] === "t" || nom2[i] === "v" || nom2[i] === "w" || nom2[i] === "x" || nom2[i] === "y" || nom2[i] === "z") {
			console.log("He trobat la CONSONANT: " + nom2[i]);
		}
		// qualsevol altre caràcter
		else {
			console.log("Això no és ni una vocal, ni una consonant, ni un número: " + nom2[i]);
		}
	}
}

//Exercici 3
function n1ex3Funcio() {
	//agafar el valor que s'ha inserit a l'exercici 1
	let nomN1Ex1 = document.getElementById("n1ex1").value;
	let nomN1Ex1Array = nomN1Ex1.split("");

	//comprovar que no s'ha deixat en blanc.
	if (nomN1Ex1) {
		let map2 = nomN1Ex1Array.reduce(function (prev, cur) { prev[cur] = (prev[cur] || 0) + 1; return prev; }, {});
		console.log(map2);
	} else {
		document.getElementById("n1ex3Mostrar").innerHTML = "Si no s'insereix un nom no funciona.";
	}
}

//Exercici 4
function n1ex4Funcio() {
	//agafar el nom que s'ha inserit a l'exercici 1
	let nomN1Ex1 = document.getElementById("n1ex1").value;
	let nomN1Ex1Array = nomN1Ex1.split("");

	//agafar i crear arrays pels cognoms
	const surname1 = document.getElementById("n1ex4cognom1").value;
	let surname1Array = surname1.split("");
	const surname2 = document.getElementById("n1ex4cognom2").value;
	let surname2Array = surname2.split("");

	//comprovar que no s'ha deixat en blanc.
	if (nomN1Ex1 && surname1 && surname2) {
		const fullName2 = [...nomN1Ex1Array, ..." ", ...surname1Array, ..." ", ...surname2Array];

		document.getElementById("n1ex4Mostrar").innerHTML = fullName2.join("");
	}
	else {
		document.getElementById("n1ex4Mostrar").innerHTML = "Si no s'omplen els 3 camps, no funciona.";
	}
}

//Exercici 5

function n1ex5Funcio() {
	var analisiStrings = (string => {
		//de la A-Z min&mayus, num, +,-,. 1 o mes cops // @ 1 cop // tots els caracters que no siguin un espai multiples vegades //tot el que no siguin simbols 1 o mes cops.
		const regex = /[a-zA-Z0-9+.-]+@\S*\w+/gi;
		return string.match(regex);
	});

	function treureDuplicats(data) {
		return data.filter((value, index) => data.indexOf(value) === index);
	}

	document.getElementById("n1ex5Mostrar").innerHTML = treureDuplicats(analisiStrings(str)).join(" </br> ");
}