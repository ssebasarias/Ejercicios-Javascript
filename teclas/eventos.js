var teclas = {
    UP: 38, // Los numeros son el codigo con el que se identifica la tecla internamente
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39
}

console.log(teclas);

document.addEventListener("keyup", dibujarTeclado);

var cuadrito = document.getElementById("area_de_dibujo");
var papel = cuadrito.getContext("2d");
var x = 150;
var y = 150;

dubujarLinea("green", 149, 149, 151, 151, papel);

function dubujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo) 
{
    lienzo.beginPath(); // Inicializa la linea
    lienzo.strokeStyle = color; // Escoge el color de la linea
    lienzo.moveTo(xinicial, yinicial); // Especifica el punto de inicio en el canvas (posicion inicial)
    lienzo.lineTo(xfinal, yfinal); // ESpecifica que cree una linea hasta el punto especificado (posicion final)
    lienzo.stroke(); // Cierra la linea
    lienzo.closePath(); // Termina el dibujo
}

function dibujarTeclado (evento) 
{
    var color = "green";
    var movimiento = 10;

    switch (evento.keyCode)
    {
        case teclas.UP: 
            dubujarLinea(color, x, y, x, y - movimiento, papel);
            y = y - movimiento; 
        break;

        case teclas.DOWN: 
            dubujarLinea(color, x, y, x, y + movimiento, papel);
            y = y + movimiento; 
        break;

        case teclas.LEFT:   
            dubujarLinea(color, x, y, x - movimiento, y, papel);
            x = x - movimiento; 
        break;
        
        case teclas.RIGHT: 
            dubujarLinea(color, x, y, x + movimiento, y, papel);
            x = x + movimiento; 
        break;

        default: 
            alert("tecla ilegal");
        break;
    }
}