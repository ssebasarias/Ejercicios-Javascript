// Imprimir los numeros del 1 al 100
// si es multiplo de 3 escribir Fizz
// si es multiplo de 5 escribir Buzz

function divisible(a, b) 
{
    if (a % b == 0) return true;
    else return false;
}

var inicial = 1;
var final = 100;

for (inicial; inicial <= final; inicial++) 
{
    if (divisible(inicial, 3))
    {
        document.write("Fizz");
    }

    if (divisible(inicial, 5))
    {
        document.write("Buzz");
    }
    
    if (!divisible(inicial,3) && !divisible(inicial,5))
    {
        document.write(inicial);
    }
    document.write("<br />");
}