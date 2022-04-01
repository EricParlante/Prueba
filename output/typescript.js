"use strict";
// PROGRAMACION ORIENTADA A OBJETOS EN TYPESCRIPT
/*  Typescript es un lenguaje de programacion de codigo abierdo creado
por el equipo de Microsoft como una solucion al desarrollo de aplicaciones
de gran escala con Javascript dado que este último carece de clases
abstractas, insterfaces, genéricos, etc. y demas herramientas que permiten
los lenguajes de programacion tipados, Son ejemplos la compatibilidad con el
intellisense, la comprobacion de tiempo de compilacion, entre otras.*/
/*A typescript se lo conoce ademas como SUPERSET, "Los supersets compilan
en el lenguaje estandar, por lo que el desarrollador programa en aquel lenguaje
expandido, pero luego su código es transpilado para transformarlo en el lenguaje
estandar, capaz de ser entendido en todas las plataformas"*/
/* ---VARIABLES---

Una variable es un espacio de memoria que se utiliza para almacenar un
valor durante un tiempo(scope) en la ejecución del programa. La misma tiene
asociado un tipo de datos y un identificador*/
/*VAR: Es el tipo de declaración más común utilizada*/
var medida = 10;
var medida = 35;
/*LET: es un tipo de variable más nuevo, el mismo reduce algunos problemas
que presentaba la sentencia var en las versiones anteriores de JavaScript.*/
let precio;
precio = 10;
/*CONST: Es un tipo constante ya que, al asumir un valor no puede modificarse*/
const ivaProducto = 0.10;
/*NOTA:las variables LET se pueden realizar sin inicializacion, mientras
que las declaraciones CONST siempre se incializan con un valor */
/*---INFERENCIA DE TIPO EN TYPESCRIPT---

Typescript permite asociar tipos con variables de manera explicita o implicita
como veremos a continuación:

Sintaxis de la inferencia explicita:

<variable>:<tipo de datos>

ejemplo de inferencia explicita:*/
let edad = 42;
/*Implícita*/
let años = 15;
/*Ejemplos más claros de la inferencia explicita*/
let a; //Inferencia explicita
let b; //Inferencia exlicita
let c = 101; //inferencia implicita
//Si intentamos asignarle a "c" un nuevo valor distinto nos dara error.
/*   c="one";   */
//Nos retorna: Type 'string' is not assignable to type number.
//Analicemos otro ejemplo, dada la siguiente declaracion:
let recursos = ['memoria', 'disco', 'procesador'];
/*En el caso de un arreglo, debemos especificar que tipo de valor contiene
nuestro arreglo, en caso de que no queramos otro tipo de dato en el
array.*/
// INSTALAR TYPESCRIPT....
/* Para instalar TSC en vsc tenemos que tener instalado node.js
para la instalacion se realiza via comando npm como sigue:

isntalar: npm install -g typescript

para checkear la version: tsc -v  */
// CREAR Y COMPILAR UN ARCHIVO TYPESCRIPT EN VSCode
/*
1-Creamos un nuevo documento con la extension .ts
2-Escribimos el siguiente codigo */
let message = 'Hello World';
console.log(message);
/*
3-Finalmente usamos la terminal y ejecutamos el comando:
tsc app/documento.ts .Este comando compila y si no hay ningun error,
crea un nuevo archivo js.
*/
/* ---COMANDOS Y OPCIONES DEL COMPILADOR CLI DE TSC ---
"Las opciones del compilador permiten controlar como se genera el codigo
JavaScript a partir del codigo Typescript de origen. Puedes establecer
las opciones en el simbolo del sistema, como haria en el caso de muchas
interfaces de la linea de comandos, o en un archivo JSON denominado
tsconfig.json"

Para modificar el comportamiento predefinido del tsc en vsc:
1.Abrir terminal
2.Ejecutar el comando: tsc --init. A continuación, se creará el archivo
tsconfig.json
3.Editar las configuraciones según se requiera

Por ejemplo, podemos crear una carpeta  que contenga todos los archivos
.js generados por el compilador TSC (el output dir/file).
Para ellos, descomentar la entrada "outFile" y a continuación ejecutar
como sigue:

"outFile":"./output/documento.js"

y comentamos la entrada "module":

//"module":"commonjs",

Finalmente ejecutamos en la terminal el comando:
"tsc"
A continuacion de creará la carpeta output coneniendo el archivo
"documento.js"

*/
/*Asi es como finalmente creamos un archivo .ts y lo transpilamos
a un archivo .js usando el compilador de TSC y para poder ejecutarlo
y observar los resultados en la consola podemos crear un archivo html
que incluya el script o configurar un servidor de prueba para el entorno
de desarrollo*/
/*Como crear un servidor de pruebas en VSCode
Para ello, seguir los siguientes pasos:
1-Ejecutar el siguiente comando "npm install http-server". A continuacion
se creara la carpeta node_modules
2-Ejecutar el comando "npm init". A continuacion, se creará un aschivo
package.json

*NOTA: el archivo package.json es un archivo que contiene todos los
metadatos acerca del proyeco. Son ejemplos: descripcion, licencia, autor,
dependencias, scripts, entre otros

3-Configurar la entrada "script" como sigue:
"scripts": {
    "start":"http-server -p 8436"
}
4-Finalmente ejecutamos el comando "npm start"

*/
//TIPOS DE DATOS Y SUBTIPOS!!!
/*Todos los tipos en typescript son subtipos de un unico tipo principal denominado ANY,
representa cualquier valor de Javascript sin restricciones

ANY: Puede ser de cualquier tipo y su uso está justificado cuando no
tenemos informancion a priori de que tipo de dato se trata. Este tipo de
definicion es propia de Typescript, sintaxis:*/
let cantidad = 4;
let desc = [1, true, "verde"];
//TIPOS DE DATOS PRIMITIVOS!!!
/*los tipos primitivos son: boolean, number, string, void, null, undefined
y enum.*/
//String: Representa valores de cadena de caracteres(letras);
let saludo = "Hola, Mundo";
/*Tambien se puede usar plantillas de cadenas con las que podemos intercalar
texto con otras variables*/
let nombre = "Mateo";
let mensaje = `Mi nombre es ${nombre}. Soy nuevo en Typescript.`;
console.log(mensaje);
//Number: Representa valores numéricos, como enteros(int) o decimales(float)
let codigoProducto = 6;
/*Boolean: Es un tipo de variable que puede tener solo dos valores,
Verdadero(true) o False(false).*/
let estadoProducto = false;
/*Void: El tipo existe únicamente para indicar la ausencia de un valor
como por ejemplo en una función que no devuelve ningún valor.*/
function mensajeUsuario() {
    console.log("Este es un mensaje para el usuario");
}
/*Enum: Las enumeraciones ofrecen una manera sencilla de trabajar con
conjuntos de constantes relacionadas. Un elemento enum es un nombre
simbólico para un conjunto de valores. Las enumeraciones se tratan
como tipo de datos y se pueden usar a fin de crear conjuntos de constantes
para su uso con variables y propiedades.

Siempre que un procedimiento acepte un conjunto limitado de variables,
considere la posibilidad de usar una enumeración. Las enumeraciones hacen
que el codigo sea más claro y legible, especialmente cuando se usan nombres
significativos.*/
//Crear la enumeración
var Color;
(function (Color) {
    Color[Color["Blanco"] = 0] = "Blanco";
    Color[Color["Rojo"] = 1] = "Rojo";
    Color[Color["verde"] = 2] = "verde";
})(Color || (Color = {}));
//Declarar la variable y asignar un valor de la enumeración 
let colorAuto = Color.Blanco;
console.log(colorAuto); //RETURN 0
//-----TIPO DE OBJETOS------
/*Los tipos de objeto son todos los tipos de clase de clase de interfaz,
de arreglos y literales

nota: Los tipos de clase e interfaz se abordarán más adelante en este
mismo módulo

Array: Es un tipo de colección o grupos de datos(vectores, matrices). El
agrupamiento lleva como antecesor el tipo de datos que contendrpa el
arreglo.*/
let list = ['pimiento', 'papas', 'tomates'];
let rocosos = [true, false, false, true];
let perdidos = [9, true, 'asteroide'];
let diametro = ['Saturno', 116460];
//Generic: También puedes definir tipos genéricos como sigue
function identity1(arg) {
    return arg;
}
/*Los genéricos son como una especie de plantillas mediante los cuales
podemos aplicar un tipo de datos determinado a varios puntos de nuestro
código. Sirven para aprovechar código, sin tener que duplicarlo por causa
de cambios de tipo evitando la necesidad de usar el tipo "any".

Los mismos se indican entre "mayores y menores" y pueden ser de cualquier
tipo incluso clases e interfaces.*/
//Si tenemos la siguiente función:
function identity2(arg) {
    return arg;
}
//Pero necesitamos que la misma sea válida para otros tipos de datos
//entonces podriamos cambiar el tipo number por any.
function identity3(arg) {
    return arg;
}
/*Sin embargo, el tipo any permite cualquier tipo de valor por lo que la
función podría recibir un tipo number y devolver otro. Entonces, estamos
perdiendo informacion sobre el tipo que debe devolver la función. Para
solucionarlo, y obligar al compilador que respete el mismo tipo (parámetros
de entrada y salida) podemos utilizar genéricos.*/
function identity4(arg) {
    return arg;
}
/*Observa que cambiamos any por la letra T
T nos permite capturar el tipo de datos por lo que el tipo utilizado para
el argumento es el msimo que el tipo de retorno.*/
//----OBJECT: Es un tipo de dato que engloba a la mayoría de los tipos 
// no primitivos
let persona = { nombre: "Ana", edad: 45 };
//DESESTRUCTURACIÓN: Permite acceder a los valores de un array o un objeto
//Ejemplo desestructuracion de un objeto
var obj = { a: 1, b: 2, c: 3 };
console.log(obj.c);
//Ejemplo desestructuracion de un array
var array = [1, 2, 3];
console.log(array[2]);
//Ejemplo desestructuracion con estructuración
/* var array=[1,2,3,5];
   var [x,y, ...rest]=array;
   console.log(rest);   */
/*La sintaxis ...rest nos permite agregar más parámetros. En este caso
el resultado en consola será:[3,5]*/
/*ESTRUCTURACIÓN: Como se pudo observar en el apartado anterior, la
estructuracion facilita que una variable del tipo array reciba una gran
cantidad de parametros.

Ejemplo en funciones:*/
function rest(first, second, ...allOthers) {
    console.log(allOthers);
}
//Luego llamamos la funcion con los siguientes parametros
rest('1', '2', '3', '4', '5'); //RETORNA 3,4,5
/*TIPOS NULL Y UNDEFINED
"Los tipos null y undefined son subtipos de todos los demas tipos. No
es posible hacer referencia explicita a los tipos null y undefined. Solo
se puede hacer referencia a los valores de esos tipos mediante los literales
null y undefined"*/
//ASERCIÓN DE TIPOS (AS)
/*Una aserción de tipos le indica al compilador "confia en mi, sé lo que
estoy haciendo". Se parece al casting en otros lenguajes de programacion
pero no tiene impacto en tiempo de ejecucion sino que le dice al compilador
el tipo de datos en cuestion a fin de acceder a los métodos, propiedades, etc.
del tipo de datos en tiempo de desarrollo.

Sintaxis(dos posibles)*/
//Primera posibilidad
nombre.toUpperCase();
//Segunda posibilidad
nombre.toUpperCase();
// ------FUNCIONES...-----
/*Una funcion es un conjunto de instrucciones o sentecias que se agrupan
para realizar una tarea concreta y que se pueden reutilizar fácilmente
y se caracterizan porque:

    --Deben ser invocadas por su nombre
    --Permiten simplificar el cófigo haciendo más legible y reutilizable

La declaración de una función consiste en:

    --Un nombre
    --Una lista de parámetros o argumentos encerrados entre paréntesis
    --Conjunto de sentencias o instrucciones encerradas entre llaves.

Sintaxis: */
function nombre_1(parametro1, parametro2) {
    //**Instrucciones a ejecutar */
}
/* Ejemplo

function calcularIva (productos:Producto[]):[number,number]{
    let total= 0;
    productos.forEach(({precio}))=>{
        total+=precio;
    });
    return [total, total*0,15];
}


Clase de Producto

class Producto {
    precio:number;
}

*/ 
