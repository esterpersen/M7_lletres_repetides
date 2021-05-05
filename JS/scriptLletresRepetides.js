//NIVELL 1

//Exercici 1

const name = ["e", "s", "t", "e", "r"];
//recorrer l'array del nom i imprimir cada lletra a la console
for (let i = 0; i < name.length; i++) {
	console.log(name[i]);
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
// .map + .reduce

//crear un objecte amb 2 valors a partir del .map()
function crearObjLletra(valor) {
	let lletra = {
		valor: valor,
		count: 1
	};
	return lletra;
}
var lletresCount1 = name.map(crearObjLletra);

//fer la suma/acumulatori dels comptadors per a cada lletra
const lletresContades = lletresCount1.reduce((acumulador, current) => {
	//agafar la el valor de cada lletra 
	let comptadorIndividual = current.valor;

	// si ja ha trobat el mateix valor abans, volem q agafi el valor i l'actualitzi(li sumi 1 amb el "++")
	if (acumulador[comptadorIndividual]) {
		acumulador[comptadorIndividual]++;
	} else {
		//si no ha trobat el valor abans, comptem que apareix 1 cop
		acumulador[comptadorIndividual] = 1;
	}
	return acumulador;
}, {});

console.log(lletresContades);

//Exercici 4
const elMeuCognom1 = ["p", "e", "r", "e", "l", "l", "o"];
const elMeuCognom2 = ["s", "e", "n", "t", "i", "s"];

const fullName = [...name, ..." ", ...elMeuCognom1, ..." ", ...elMeuCognom2];

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
	const name1 = document.getElementById("n1ex1").value;
	//recorrer l'array del nom i imprimir cada lletra a la console
	for (let i = 0; i < name1.length; i++) {
		console.log(name1[i]);
	}
}

//Exercici 2
function n1ex2Funcio() {
	const name2 = document.getElementById("n1ex2").value;
	console.log("Partim del nom " + name2);
	let missatge = "Els noms de persones no contenen el número: ";
	let missatgeNumeros = [];

	for (let i = 0; i < name2.length; i++) {
		//si son vocals
		if (name2[i] === "a" || name2[i] === "e" || name2[i] === "i" || name2[i] === "o" || name2[i] === "u") {
			console.log("He trobat la VOCAL: " + name2[i]);
		}
		//si son numeros
		else if (name2[i] == 0 || name2[i] === "1" || name2[i] === "2" || name2[i] === "3" || name2[i] === "4" || name2[i] === "5" || name2[i] === "6" || name2[i] === "7" || name2[i] === "8" || name2[i] === "9") {
			missatgeNumeros.push(missatge + name2[i]);
			document.getElementById("n1ex2Mostrar").innerHTML = missatgeNumeros.join('. </br>');

		} //si son consonants
		else {
			console.log("He trobat la CONSONANT: " + name2[i]);
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
		//crear un objecte amb 2 valors a partir del .map()
		let lletresCountOne = nomN1Ex1Array.map(crearObjLletra2);

		function crearObjLletra2(valor) {
			let lletra = {
				valor: valor,
				count: 1
			};
			return lletra;
		}

		//fer la suma/acumulatori dels comptadors per a cada lletra
		const lletresContades2 = lletresCountOne.reduce((acumulador, current) => {
			//esborrar el missatge de l'else
			document.getElementById("n1ex3Mostrar").innerHTML = "";

			//agafar la el valor de cada lletra 
			let comptadorIndividual = current.valor;

			// si ja ha trobat el mateix valor abans, volem q agafi el valor i l'actualitzi(li sumi 1 amb el "++")
			if (acumulador[comptadorIndividual]) {
				acumulador[comptadorIndividual]++;
			} else {
				//si no ha trobat el valor abans, comptem que apareix 1 cop
				acumulador[comptadorIndividual] = 1;
			}
			return acumulador;
		}, {});
		console.log(lletresContades2);
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
