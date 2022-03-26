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
var precio;
precio = 10;
/*CONST: Es un tipo constante ya que, al asumir un valor no puede modificarse*/
var ivaProducto = 0.10;
/*NOTA:las variables LET se pueden realizar sin inicializacion, mientras
que las declaraciones CONST siempre se incializan con un valor */
/*---INFERENCIA DE TIPO EN TYPESCRIPT---

Typescript permite asociar tipos con variables de manera explicita o implicita
como veremos a continuación:

Sintaxis de la inferencia explicita:

<variable>:<tipo de datos>

ejemplo de inferencia explicita:*/
var edad = 42;
/*Implícita*/
var años = 15;
/*Ejemplos más claros de la inferencia explicita*/
var a; //Inferencia explicita
var b; //Inferencia exlicita
var c = 101; //inferencia implicita
//Si intentamos asignarle a "c" un nuevo valor distinto nos dara error.
/*   c="one";   */
//Nos retorna: Type 'string' is not assignable to type number.
//Analicemos otro ejemplo, dada la siguiente declaracion:
var recursos = ['memoria', 'disco', 'procesador'];
/*En el caso de un arreglo, debemos especificar que tipo de valor contiene
nuestro arreglo, en caso de que no queramos otro tipo de dato en el
array.*/
