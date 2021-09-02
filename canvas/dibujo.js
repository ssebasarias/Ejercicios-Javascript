// getElementById (sirve para traer algo con id de html a js)
var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("botoncito");

// addEventListener (como su nombre lo dice es un escuchador, es decir, solo reacciona cuando ocurre un cambio en el evento)
boton.addEventListener("click", dubujoPorClick);


var d = document.getElementById("dibujo");
var ancho = d.width;
var lienzo = d.getContext("2d");

// funtion (sirve para declarar una funcion)
    /* una funcion es un bloque de codigo el cual sirve para que todo lo que tenga en su interior se ejecute cuando se llame a la funcion,
        es como una variable pero con mas cosas en su interior */

    /* la funcion tiene la siguiente estructura: la palabra funcion para especificar que sera, el nombre de la funcion y dentro de 
        sus parentesis van los parametros que necesitara la funcion para funcionar*/

function dubujarLinea(color, xinicial, yinicial, xfinal, yfinal) 
{
    lienzo.beginPath(); // Inicializa la linea
    lienzo.strokeStyle = color; // Escoge el color de la linea
    lienzo.moveTo(xinicial, yinicial); // Especifica el punto de inicio en el canvas (posicion inicial)
    lienzo.lineTo(xfinal, yfinal); // ESpecifica que cree una linea hasta el punto especificado (posicion final)
    lienzo.stroke(); // Cierra la linea
    lienzo.closePath(); // Termina el dibujo
}

function dubujoPorClick()
{
    var lineas = parseInt(texto.value);
    var l;
    var xinicial, yinicial, xfinal, yfinal;
    var espacio = ancho / lineas;

    // for (es un ciclo que se usa para repetir una accion tantas veces sea indicado por sus parametros establecidos en el parentecis)
    for (l = 0; l < lineas; l++)
    {
        yinicial = espacio * l;
        xfinal = espacio * (l + 1);
        dubujarLinea("lightblue", 0, yinicial, xfinal, 300);
    }

    for (l = 0; l < lineas; l++)
    {
        xinicial = espacio * l;
        yfinal = espacio * (l + 1);
        dubujarLinea("lightblue", xinicial, 0, 300, yfinal);
    }

    // dubujarLinea (las funciones se llaman en otro lado solamente escribiendo su nombre y colocando sus parametros)
    dubujarLinea("lightblue", 300, 1, 1, 1);
    dubujarLinea("lightblue", 299, 299, 299, 1);
    dubujarLinea("lightblue", 1, 1, 1, 300);
    dubujarLinea("lightblue", 1, 299, 299, 299);
}