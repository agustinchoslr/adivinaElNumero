var cantVictorias = parseInt(prompt("ingrese cantidad de partidos ganados"));
var cantEmpates = parseInt(prompt("ingrese cantidad de partidos empatados"));
var totalPuntos = cantEmpates + (cantVictorias * 3);


document.write("<br><b>Su equipo obtuvo entonces</b> " + totalPuntos + " Puntos en total");

if (totalPuntos == 28) {
    document.write("<br>Su equipo está <i>igual que el año pasado en puntos 😐</i>")
};

if (totalPuntos < 28) {
    document.write("<br>su equipo está peor 😔 que el año pasado en cuanto a puntos")
};

if (totalPuntos > 28) {
    document.write("Bien! Su equipo viene mejor que el año pasado💪")
};

