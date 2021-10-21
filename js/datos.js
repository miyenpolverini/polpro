class Jugadores {
    constructor(id, jugador, posicion, club, valor) {
      this.id = id;
      this.jugador = jugador;
      this.posicion = posicion;
      this.club = club;
      this.valor = valor;
    }
    getIdJugador(){
      return this.id;
    }
    getNombreJugador(){
      return this.jugador;
    }
    getPosJugador(){
      return this.posicion;
    }
    getClubJugador(){
      return this.club;
    }
    getInfoValor(){
      return this.valor;
    }
}

let jugador0 = new Jugadores("arq0", "", "", ""); 
//INDEPENDIENTE
let arquero1 = new Jugadores("arq1", "Sebastián Sosa", "arq", "independiente", "7000000"); 
let arquero2 = new Jugadores("arq2", "Milton Alvarez", "arq", "independiente", "1500000");
let arquero3 = new Jugadores("arq3", "Renzo Bachia", "arq", "independiente", "300000");
let defensor1 = new Jugadores("def1", "Fabricio Bustos", "def", "independiente", "6500000"); 
let defensor2 = new Jugadores("def2", "Sergio Barreto", "def", "independiente", "4000000");
let defensor3 = new Jugadores("def3", "Juan Manuel Insaurralde", "def", "independiente", "5000000");
let defensor4 = new Jugadores("def4", "Thomas Ortega", "def", "independiente", "800000");
let volante1 = new Jugadores("vol1", "Lucas Romero", "vol", "independiente", "5000000"); 
let volante2 = new Jugadores("vol2", "Domingo Blanco", "vol", "independiente", "4500000"); 
let volante3 = new Jugadores("vol3", "Lucas Gonzalez", "vol", "independiente", "4000000"); 
let volante4 = new Jugadores("vol4", "Alan Soñora", "vol", "independiente", "3000000"); 
let volante5 = new Jugadores("vol5", "Andres Roa", "vol", "independiente", "4000000"); 
let delantero1 = new Jugadores("del1", "Alan Velasco", "del", "independiente", "5000000"); 
let delantero2 = new Jugadores("del2", "Silvio Romero", "del", "independiente", "6000000");
let delantero3 = new Jugadores("del3", "Jonathan Herrera", "del", "independiente", "3000000");
let delantero4 = new Jugadores("del4", "Rodrigo Marquez", "del", "independiente", "500000");

//BOCA JUNIORS
let arquero4 = new Jugadores("arq4", "Agustín Rossi", "arq", "boca juniors", "6000000"); 
let arquero5 = new Jugadores("arq5", "Javier Garcia", "arq", "boca juniors", "1500000");
let arquero6 = new Jugadores("arq6", "Agustín Lastra", "arq", "boca juniors", "300000");
let defensor9 = new Jugadores("def9", "Luis Advincula", "def", "boca juniors", "5000000"); 
let defensor10 = new Jugadores("def10", "Carlos Izquierdoz", "def", "boca juniors", "7000000");
let defensor11 = new Jugadores("def11", "Marcos Rojo", "def", "boca juniors", "7500000");
let defensor12 = new Jugadores("def12", "Frank Fabra", "def", "boca juniors", "5000000");
let volante6 = new Jugadores("vol6", "Jorman Campuzano", "vol", "boca juniors", "4000000"); 
let volante7 = new Jugadores("vol7", "Juan Ramirez", "vol", "boca juniors", "5000000"); 
let volante8 = new Jugadores("vol8", "Agustin Almendra", "vol", "boca juniors", "4000000"); 
let volante9 = new Jugadores("vol9", "Alan Varela", "vol", "boca juniors", "3000000"); 
let volante10 = new Jugadores("vol10", "Edwin Cardona", "vol", "boca juniors", "6000000"); 
let delantero5 = new Jugadores("del5", "Cristian Pavon", "del", "boca juniors", "5000000"); 
let delantero6 = new Jugadores("del6", "Nicolas Orsini", "del", "boca juniors", "4000000");
let delantero7 = new Jugadores("del7", "Norberto Briasco", "del", "boca juniors", "4000000");
let delantero8 = new Jugadores("del8", "Luis Vazquez", "del", "boca juniors", "1000000");

//RACING CLUB
let arquero7 = new Jugadores("arq7", "Gabriel Arias", "arq", "racing club", "7000000"); 
let arquero8 = new Jugadores("arq8", "Gastón Gomez", "arq",  "racing club", "1000000");
let arquero9 = new Jugadores("arq9", "Matías Tagliamonte", "arq", "racing club", "300000");
let defensor17 = new Jugadores("def17", "Juan Caceres", "def", "racing club", "2000000"); 
let defensor18 = new Jugadores("def18", "Leonardo Sigali", "def", "racing club", "6000000");
let defensor19 = new Jugadores("def19", "Joaquin Novillo", "def", "racing club", "1500000");
let defensor20 = new Jugadores("def20", "Eugenio Mena", "def", "racing club", "4000000");
let volante11 = new Jugadores("vol11", "Leonel Miranda", "vol", "racing club", "4000000"); 
let volante12 = new Jugadores("vol12", "Nery Dominguez", "vol", "racing club", "4000000"); 
let volante13 = new Jugadores("vol13", "Ignacio Piatti", "vol", "racing club", "4000000"); 
let volante14 = new Jugadores("vol14", "Anibal Moreno", "vol", "racing club", "3000000"); 
let volante15 = new Jugadores("vol15", "Matias Rojas", "vol", "racing club", "3500000"); 
let delantero9 = new Jugadores("del9", "Lisandro Lopez", "del", "racing club", "5000000"); 
let delantero10 = new Jugadores("del10", "Dario Cvitanich", "del", "racing club", "4000000");
let delantero11 = new Jugadores("del11", "Enzo Copetti", "del", "racing club", "3000000");
let delantero12 = new Jugadores("del12", "Tomas Chancalay", "del", "racing club", "4000000");

//RIVER PLATE
let arquero10 = new Jugadores("arq10", "Franco Armani", "arq", "river plate", "7000000"); 
let arquero11 = new Jugadores("arq11", "Enrique Bologna", "arq", "river plate", "1500000");
let arquero12 = new Jugadores("arq12", "Germán Lux", "arq", "river plate", "500000");
let defensor25 = new Jugadores("def25", "Milton Casco", "def", "river plate", "5000000"); 
let defensor26 = new Jugadores("def26", "Paulo Diaz", "def", "river plate", "4500000");
let defensor27 = new Jugadores("def27", "Hector Martinez", "def", "river plate", "3500000");
let defensor28 = new Jugadores("def28", "Fabricio Angileri", "def", "river plate", "5000000");
let volante16 = new Jugadores("vol16", "Enzo Perez", "vol", "river plate", "7000000"); 
let volante17 = new Jugadores("vol17", "Nicolas De La Cruz", "vol", "river plate", "6500000"); 
let volante18 = new Jugadores("vol18", "Bruno Zuculuni", "vol", "river plate", "4500000"); 
let volante19 = new Jugadores("vol19", "Jorge Carrascal", "vol", "river plate", "4000000"); 
let volante20 = new Jugadores("vol20", "Agustin Palavecino", "vol", "river plate", "3500000"); 
let delantero13 = new Jugadores("del13", "Julian Alvarez", "del", "river plate", "5500000"); 
let delantero14 = new Jugadores("del14", "Matias Suarez", "del", "river plate", "7000000");
let delantero15 = new Jugadores("del15", "Brian Romero", "del", "river plate", "5000000");
let delantero16 = new Jugadores("del16", "Benjamín Rollheiser", "del", "river plate", "2000000");

//SAN LORENZO
let arquero13 = new Jugadores("arq13", "Sebastián Torrico", "arq", "san lorenzo", "4000000"); 
let arquero14 = new Jugadores("arq14", "Augusto Batalla", "arq", "san lorenzo", "1500000");
let arquero15 = new Jugadores("arq15", "Lautaro Lopez", "arq", "san lorenzo", "300000");
let defensor33 = new Jugadores("def33", "Gino Peruzzi", "def", "san lorenzo", "4000000"); 
let defensor34 = new Jugadores("def34", "Alejandro Donatti", "def", "san lorenzo", "4000000");
let defensor35 = new Jugadores("def35", "Federico Gattoni", "def", "san lorenzo", "1000000");
let defensor36 = new Jugadores("def36", "Bruno Pitton", "def", "san lorenzo", "4000000");
let volante21 = new Jugadores("vol21", "Nestor Ortigoza", "vol", "san lorenzo", "5000000"); 
let volante22 = new Jugadores("vol22", "Alexis Sabella", "vol", "san lorenzo", "2000000"); 
let volante23 = new Jugadores("vol23", "Jalil Elias", "vol", "san lorenzo", "3000000"); 
let volante24 = new Jugadores("vol24", "Yeison Gordillo", "vol", "san lorenzo", "3500000"); 
let volante25 = new Jugadores("vol25", "Julian Palacios", "vol", "san lorenzo", "2000000"); 
let delantero17 = new Jugadores("del17", "Franco Di Santo", "del", "san lorenzo", "5500000"); 
let delantero18 = new Jugadores("del18", "Ezequiel Cerutti", "del", "san lorenzo", "3500000");
let delantero19 = new Jugadores("del19", "Nicolas Fernandez", "del", "san lorenzo", "4000000");
let delantero20 = new Jugadores("del20", "Alexander Diaz", "del", "san lorenzo", "500000");


let jugadores_list = [jugador0, arquero1, arquero2, arquero3, arquero4, arquero5, arquero6, arquero7, arquero8, arquero9, arquero10, arquero11, arquero12, arquero13, arquero14, arquero15, defensor1, defensor2, defensor3, defensor4, defensor9, defensor10, defensor11, defensor12, defensor17, defensor18, defensor19, defensor20, defensor25, defensor26, defensor27, defensor28, defensor33, defensor34, defensor35, defensor36, volante1, volante2, volante3, volante4, volante5, volante6, volante7, volante8, volante9, volante10, volante11, volante12, volante13, volante14, volante15, volante16, volante17, volante18, volante19, volante20, volante21, volante22, volante23, volante24, volante25, delantero1, delantero2, delantero3, delantero4, delantero5, delantero6, delantero7, delantero8, delantero9, delantero10, delantero11, delantero12, delantero13, delantero14, delantero15, delantero16, delantero17, delantero18, delantero19, delantero20];

let arreglo = new Array();
arreglo.push(arquero1);


class Jugador_elegido {
  constructor(id, jugador, valor){
    this.id = id;
    this.jugador = jugador;
    this.valor = valor;
  }

}
