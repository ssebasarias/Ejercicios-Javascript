var express = require('express'); //require es una funcion que busca las librerias del pc para poder guardarlas en una variable
var app = express();

app.get("/", inicio);
app.get("/cursos", cursos);

function inicio(peticion, resultado) 
{
resultado.send("Este es el <strong> home </strong>");
}

function cursos(peticion, resultado)
{
    resultado.send("Estos son los curos");
}

// Esta es una manera mas corta de hacerlo pero es lo mismo
// app.get('/', function(req, res) {
//     res.send('Hello world')
// })

app.listen(8989);