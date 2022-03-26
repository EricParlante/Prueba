"use strict";
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
*/ 
