var vp = document.getElementById("villaplatzi");
var papel = vp.getContext("2d");
document.addEventListener("keydown", moverLobo);


// Variables de cada personaje para obtener la imagen
var fondo = {
    url: "tile.png",
    cargaOK: false
}
var vaca = {
    url: "vaca.png",
    cargaOK: false
}
var cerdo = {
    url: "cerdo.png",
    cargaOK: false
}
var pollo = {
    url: "pollo.png",
    cargaOK: false
}
var lobo = {
    url: "lobo.png",
    cargaOK: false
}

// Posicion para cada personaje para mantenerlos estaticos
var xLobo = 150;
var yLobo = 100;

var xVaca = new Array();
var yVaca = new Array();

var xCerdo = new Array();
var yCerdo = new Array();

var xPollo = new Array();
var yPollo = new Array();

// Objeto para la imagen de cada personaje para poder usarlos
fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

lobo.imagen = new Image();
lobo.imagen.src = lobo.url;
lobo.imagen.addEventListener("load", cargarLobo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVaca);
vaca.cantidad = aleatorio(1, 10);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdo);
cerdo.cantidad = aleatorio(1, 10);

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargarPollo);
pollo.cantidad = aleatorio(1, 10);

// Mover al lobo
function moverLobo(evento)
{
	var movimiento = 64;
	var teclas =
	{
		LEFT: 37,
		UP: 38,
		RIGHT: 39,
		DOWN: 40
	}

	switch(evento.keyCode)
	{
		case teclas.UP:
			yLobo = yLobo - movimiento;
			dibujar(xLobo, yLobo);
		break;

        case teclas.DOWN:
			yLobo = yLobo + movimiento;
			dibujar(xLobo, yLobo);
		break;

		case teclas.LEFT:
			xLobo = xLobo - movimiento;
			dibujar(xLobo, yLobo);
		break;

		case teclas.RIGHT:
			xLobo = xLobo + movimiento;
			dibujar(xLobo, yLobo);
		break;

		
	}
}

// Cargar todas las imagenes
function cargarFondo() 
{
    fondo.cargaOK = true;
    posicion();
}

function cargarLobo()
{
    lobo.cargaOK = true;
    dibujar();
}

function cargarVaca() 
{
    vaca.cargaOK = true;
    posicion();
}

function cargarCerdo() 
{
    cerdo.cargaOK = true;
    posicion();
}

function cargarPollo() 
{
    pollo.cargaOK = true;
    posicion();
}

// Pocion estatica de las imagenes
function posicion()
{
    if(vaca.cargaOK)
    {
        var x, y;
        for (var v = 0; v < vaca.cantidad; v++)
        {
            x = 60 * aleatorio(0, 7);
            y = 60 * aleatorio(0, 7);
            xVaca[v] = x;
            yVaca[v] = y;
        }
    }

    if(cerdo.cargaOK)
    {
        var x, y;
        for (var c = 0; c < cerdo.cantidad; c++)
        {
            x = 60 * aleatorio(0, 7);
            y = 60 * aleatorio(0, 7);
            xCerdo[c] = x;
            yCerdo[c] = y;
        }
    }

    if(pollo.cargaOK)
    {
        var x, y;
        for (var p = 0; p < pollo.cantidad; p++)
        {
            x = 60 * aleatorio(0, 7);
            y = 60 * aleatorio(0, 7);
            xPollo[p] = x;
            yPollo[p] = y;
        }
    }

    dibujar();
}

// Acomodar todas las imagenes en orden encima del fondo
function dibujar() 
{
    if (fondo.cargaOK)
    {
        papel.drawImage(fondo.imagen, 0, 0);
    }

    if (lobo.cargaOK)
    {
        papel.drawImage(lobo.imagen, xLobo, yLobo);
    }

    if (vaca.cargaOK)
    {
        for (var v = 0; v < vaca.cantidad; v++)
        {
            
           papel.drawImage(vaca.imagen, xVaca[v], yVaca[v]);
        }
    }

    if (cerdo.cargaOK)
    {
        for (var c = 0; c < cerdo.cantidad; c++)
        {
            papel.drawImage(cerdo.imagen, xCerdo[c], yCerdo[c]);
        }
    }

    if (pollo.cargaOK)
    {
        for (var p = 0; p < pollo.cantidad; p++)
        {
            papel.drawImage(pollo.imagen, xPollo[p], yPollo[p]);
        }
    }
}

function aleatorio (min, max) 
{
    var resultado = Math.floor(Math.random() * (max - min + 1)) + min;
    return resultado;
}