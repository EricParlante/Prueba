// PROGRAMACION ORIENTADA A OBJETOS EN TYPESCRIPT

/*Es un conjunto de reglas y principios de programacion (osea, un paradigma
    de programación) que busca representar las entidades u objetos del dominio
    (o enunciado) del problema dentro de un programa, de la forma más natural 
    posible

La estrategia es descomponer un problema en subproblemas

La programación estructurada se basa en descomponer procesos en subprocesos
y programando cada uno como rutina, función, o procedimiento(todas formas
    de referirse al mismo concepto). Sin embargo, esta forma de trabajar
    resulta dificil al momento de desarrollar sistemas realmente grandes
    o de mucha complejidad.

    La POO significa una nueva visión en la forma de programar, buscando
    aportar claridad y naturalidad en la manera en que se plantea un problema.
    Ahora el objetivo primario no es identificar procesos sino identificar 
    actores: Las entidades u objetos que aparecen en el escenario o dominio
    del problema.

    Ventajas de la POO
        -Es una forma más natural de modelar
        -Permite manejar mejor la complejidad
        -Facilita el mantenimiento y extension de los sistemas
        -Es más adecuado para la construcción de entornos GUI-
    Fomenta la reutilización, con gran impacto sobre la productividad y
    confiabilidad
    */

    //  ---OBJETOS---

/* Un OBJETO es una entidad (tangible o intangible) que posee características
propias (atributos) y acciones o comportamientos(métodos) que realiza por si 
solo o interactuando con otros objetos */

/*En base a lo expuesto anteriormente podemos expresar las características
generales de los objetos en POO:
    --Se identifican por un nombre o identificador único que lo diferencia
    de los demás.

    --Poseen estados.
    --Poseen un conjunto de atributos.
    --Soportan el encapsulamiento(nos deja ver sólo lo necesario).
    --Tienen un tiempo de vida.
    --Son instancias de una clase (es de un tipo).

Para hacer eso, los lenguajes de programación orientados a objetos (como
    typescript) usan descriptores (plantillas) de entidades conocidas como
    clases. */

// ----   CLASES   -----

/*Una clase es la descripcion de una entidad u objeto de forma tal que pueda 
usarse como plantilla para crear muchos objetos que respondan a dicha
descripcion.

Características generales de las clases en POO:
    --Poseen un alto nivel de abstraccion
    --Se relacionan entre si mediante jerarquías.
    --Los nombres de las cclases deben estar en singular.*/

// -----CLASES EN TYPESCRIPT----

/* Una clase en Typescript no es más que una secuencia de simbolos (o
    caracteres) de un alfabeto básico. Esta secuencia de simbolos forma 
    lo que se denomina el código fuente de la clase. Hay dos aspectos que
    determinan si una secuencia de simbolos es correcta en Typescript: la 
    sintaxis y la semántica.

Sintaxis para la definicion de clases en Typescript: */

class <nombre de la clase>{
    //Atributos
    //Métodos
}

//Dentro de las clases podemos encontrar: 

class Persona {
    readonly nombre:string;
    readonly apellido:string;        //Atributos
    private añoNac:number;
    constructor (nombre:string, apellido:string){
        this.nombre=nombre;                //Constructor
        this.apellido=apellido;
    }
    public toString():string{
        return this.nombre+this.apellido;
    }                                       //Métodos
    public edad(añoActual:number):number {
        return (añoActual -this.añoNac);
    }
}

/* Atributos: Son variables que se declaran dentro de la clase, y sirven 
para indicar la forma o caracteristicas de cada objeto representado por esa
clase. Los atributos, de alguna manera, muestra lo que casa objeto es,
o tambien, lo que cada objeto tiene.*/

class Personal {
    //Atributos de la clase de Persona
    nombre:string;
    apellido:string;
    añoNac:number;
}

/*Métodos: Son funciones, procedimientos o rutinas declaradas dentro de la 
clase, usados para describir el comportamiento o las acciones de los objetos
descriptos por esa clase. Los métodos, de alguna manera, muestran lo que
cada objeto hace.

Sintaxis: 
<nombre_método>(<parámetros>):<tipo_de_datos_devuelto>,
{
    //Instrucciones
}
*/

EdadAproximada(añoActual:number):number
{
    return añoActual - this.añoNac;
}

/*Constructores: Es un método especial que permite instanciar un objeto.
Su nombre está definido por la palabra constructor, y no tiene ningún tipo 
de retorno. Puede recibir 0 a n parámetros.

Sintaxis:
    constructor(<parametros){
        //Instrucciones
    }
*/
constructor(nombre:string, apellido:string){
    this.nombre=nombre;
    this.apellido=apellido;
}
