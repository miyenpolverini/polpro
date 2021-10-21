//SECCIÓN MOSTRAR TACTICA

let hayTabla = false;

function generarTactica() {

    mostrarTotIni();

    hayArquero = false;
    hayDefensor1 = false;
    hayDefensor2 = false;
    hayDefensor3 = false;
    hayMixto1 = false;

    // Crea un elemento <table> y un elemento <tbody>
    var tabla = document.createElement("table");
    var tblBody = document.createElement("tbody");

    // Crea las celdas
    for (var i = 0; i < 12; i++) {
        // CREA LAS FILAS DE LA TABLA
        var hilera = document.createElement("tr");

        if (i == 0) {


            var titulo = document.createElement("th");
            var tituloCelda = document.createTextNode("Pos");
            titulo.classList.add("tabla-tit-pos");
            titulo.classList.add("table-dark");
            titulo.appendChild(tituloCelda);
            hilera.appendChild(titulo);

            var titulo = document.createElement("th");
            var tituloCelda = document.createTextNode("Jugadores");
            titulo.classList.add("tabla-tit-jug");
            titulo.classList.add("table-dark");
            titulo.appendChild(tituloCelda);
            hilera.appendChild(titulo);

            var titulo = document.createElement("th");
            var tituloCelda = document.createTextNode("Club");
            titulo.classList.add("tabla-tit-club");
            titulo.classList.add("table-dark");
            titulo.appendChild(tituloCelda);
            hilera.appendChild(titulo);

            var titulo = document.createElement("th");
            var tituloCelda = document.createTextNode("Valor");
            titulo.classList.add("tabla-tit-valor");
            titulo.classList.add("table-dark");
            titulo.appendChild(tituloCelda);
            hilera.appendChild(titulo);


        }
        else if (i == 1) {

            for (var j = 0; j < 5; j++) {

                // CREA LA FILA 1 COLUMNA 1 DE LA TABLA
                if (j == 0) {
                    var celda = document.createElement("td");
                    var textoCelda = document.createTextNode("ARQ");
                    celda.appendChild(textoCelda);
                    hilera.appendChild(celda);

                }
                // CREA LA FILA 1 COLUMNA 2 DE LA TABLA
                else if (j == 1) {
                    var celda = document.createElement("td");
                    celda.id = ("boxArquero");
                    var textoCelda = document.createTextNode(" ");
                    celda.appendChild(textoCelda);
                    hilera.appendChild(celda);
                }
                else if (j == 2) {
                    var celda = document.createElement("td");
                    celda.id = ("boxArqueroClub");
                    var textoCelda = document.createTextNode(" ");
                    celda.appendChild(textoCelda);
                    hilera.appendChild(celda);
                }
                else if (j == 3) {
                    var celda = document.createElement("td");
                    celda.id = ("boxArqueroValor");
                    var textoCelda = document.createTextNode(" ");
                    celda.appendChild(textoCelda);
                    hilera.appendChild(celda);

                }

                else {
                    var celda = document.createElement("div");
                    celda.className = ("borrarItem");
                    celda.setAttribute('onclick', 'borrarItem(0)');
                    var textoCelda = document.createTextNode("");
                    celda.appendChild(textoCelda);
                    hilera.appendChild(celda);

                }
            }
        }

        else if (i == 2) {
            for (var j = 0; j < 5; j++) {

                if (j == 0) {
                    var celda = document.createElement("td");
                    var textoCelda = document.createTextNode("DEF");
                    celda.appendChild(textoCelda);
                    hilera.appendChild(celda);

                }
                else if (j == 1) {

                    var celda = document.createElement("td");
                    celda.id = ("boxDefensor1");
                    var textoCelda = document.createTextNode(" ");
                    celda.appendChild(textoCelda);
                    hilera.appendChild(celda);

                }
                else if (j == 2) {

                    var celda = document.createElement("td");
                    celda.id = ("boxDefensorClub1");
                    var textoCelda = document.createTextNode(" ");
                    celda.appendChild(textoCelda);
                    hilera.appendChild(celda);
                }
                else if (j == 3) {

                    var celda = document.createElement("td");
                    celda.id = ("boxDefensorValor1");
                    var textoCelda = document.createTextNode(" ");
                    celda.appendChild(textoCelda);
                    hilera.appendChild(celda);
                }
                else {
                    var celda = document.createElement("div");
                    celda.className = ("borrarItem");
                    celda.setAttribute('onclick', 'borrarItem(1)');
                    var textoCelda = document.createTextNode("");
                    celda.appendChild(textoCelda);
                    hilera.appendChild(celda);
                }
            }


        }
        else if (i == 3) {
            for (var j = 0; j < 5; j++) {

                if (j == 0) {
                    var celda = document.createElement("td");
                    var textoCelda = document.createTextNode("DEF");
                    celda.appendChild(textoCelda);
                    hilera.appendChild(celda);

                }
                else if (j == 1) {

                    var celda = document.createElement("td");
                    celda.id = ("boxDefensor2");
                    var textoCelda = document.createTextNode(" ");
                    celda.appendChild(textoCelda);
                    hilera.appendChild(celda);

                }
                else if (j == 2) {

                    var celda = document.createElement("td");
                    celda.id = ("boxDefensorClub2");
                    var textoCelda = document.createTextNode(" ");
                    celda.appendChild(textoCelda);
                    hilera.appendChild(celda);
                }
                else if (j == 3) {

                    var celda = document.createElement("td");
                    celda.id = ("boxDefensorValor2");
                    var textoCelda = document.createTextNode(" ");
                    celda.appendChild(textoCelda);
                    hilera.appendChild(celda);
                }
                else {
                    var celda = document.createElement("div");
                    celda.className = ("borrarItem");
                    celda.setAttribute('onclick', 'borrarItem(2)');
                    var textoCelda = document.createTextNode("");
                    celda.appendChild(textoCelda);
                    hilera.appendChild(celda);
                }
            }

        }
        else if (i == 4) {
            for (var j = 0; j < 5; j++) {

                if (j == 0) {
                    var celda = document.createElement("td");
                    var textoCelda = document.createTextNode("DEF");
                    celda.appendChild(textoCelda);
                    hilera.appendChild(celda);

                }
                else if (j == 1) {
                    var celda = document.createElement("td");
                    celda.id = ("boxDefensor3");
                    var textoCelda = document.createTextNode(" ");
                    celda.appendChild(textoCelda);
                    hilera.appendChild(celda);
                }
                else if (j == 2) {
                    var celda = document.createElement("td");
                    celda.id = ("boxDefensorClub3");
                    var textoCelda = document.createTextNode(" ");
                    celda.appendChild(textoCelda);
                    hilera.appendChild(celda);
                }
                else if (j == 3) {
                    var celda = document.createElement("td");
                    celda.id = ("boxDefensorValor3");
                    var textoCelda = document.createTextNode(" ");
                    celda.appendChild(textoCelda);
                    hilera.appendChild(celda);
                }
                else {
                    var celda = document.createElement("div");
                    celda.className = ("borrarItem");
                    celda.setAttribute('onclick', 'borrarItem(3)');
                    var textoCelda = document.createTextNode("");
                    celda.appendChild(textoCelda);
                    hilera.appendChild(celda);
                }
            }


        }
        else if (i == 5) {
            for (var j = 0; j < 5; j++) {

                if (j == 0) {
                    var celda = document.createElement("td");
                    var textoCelda = document.createTextNode("DEF");
                    celda.appendChild(textoCelda);
                    hilera.appendChild(celda);

                }
                else if (j == 1) {
                    var celda = document.createElement("td");
                    celda.id = ("boxMixto1");
                    var textoCelda = document.createTextNode(" ");
                    celda.appendChild(textoCelda);
                    hilera.appendChild(celda);
                }
                else if (j == 2) {
                    var celda = document.createElement("td");
                    celda.id = ("boxMixtoClub1");
                    var textoCelda = document.createTextNode(" ");
                    celda.appendChild(textoCelda);
                    hilera.appendChild(celda);
                }
                else if (j == 3) {
                    var celda = document.createElement("td");
                    celda.id = ("boxMixtoValor1");
                    var textoCelda = document.createTextNode(" ");
                    celda.appendChild(textoCelda);
                    hilera.appendChild(celda);
                }
                else {
                    var celda = document.createElement("div");
                    celda.className = ("borrarItem");
                    celda.setAttribute('onclick', 'borrarItem(4)');
                    var textoCelda = document.createTextNode("");
                    celda.appendChild(textoCelda);
                    hilera.appendChild(celda);
                }
            }
        }
        else if (i == 6) {
            for (var j = 0; j < 5; j++) {

                if (j == 0) {
                    var celda = document.createElement("td");
                    var textoCelda = document.createTextNode("VOL");
                    celda.appendChild(textoCelda);
                    hilera.appendChild(celda);

                }
                else if (j == 1) {
                    var celda = document.createElement("td");
                    celda.id = ("boxVolante1");
                    var textoCelda = document.createTextNode(" ");
                    celda.appendChild(textoCelda);
                    hilera.appendChild(celda);
                }
                else if (j == 2) {
                    var celda = document.createElement("td");
                    celda.id = ("boxVolanteClub1");
                    var textoCelda = document.createTextNode(" ");
                    celda.appendChild(textoCelda);
                    hilera.appendChild(celda);

                }
                else if (j == 3) {
                    var celda = document.createElement("td");
                    celda.id = ("boxVolanteValor1");
                    var textoCelda = document.createTextNode(" ");
                    celda.appendChild(textoCelda);
                    hilera.appendChild(celda);
                }
                else {
                    var celda = document.createElement("div");
                    celda.className = ("borrarItem");
                    celda.setAttribute('onclick', 'borrarItem(5)');
                    var textoCelda = document.createTextNode("");
                    celda.appendChild(textoCelda);
                    hilera.appendChild(celda);
                }
            }
        }
        else if (i == 7) {
            for (var j = 0; j < 5; j++) {

                if (j == 0) {
                    var celda = document.createElement("td");
                    var textoCelda = document.createTextNode("VOL");
                    celda.appendChild(textoCelda);
                    hilera.appendChild(celda);

                }
                else if (j == 1) {
                    var celda = document.createElement("td");
                    celda.id = ("boxVolante2");
                    var textoCelda = document.createTextNode(" ");
                    celda.appendChild(textoCelda);
                    hilera.appendChild(celda);
                }
                else if (j == 2) {
                    var celda = document.createElement("td");
                    celda.id = ("boxVolanteClub2");
                    var textoCelda = document.createTextNode(" ");
                    celda.appendChild(textoCelda);
                    hilera.appendChild(celda);

                }
                else if (j == 3) {
                    var celda = document.createElement("td");
                    celda.id = ("boxVolanteValor2");
                    var textoCelda = document.createTextNode(" ");
                    celda.appendChild(textoCelda);
                    hilera.appendChild(celda);
                }
                else {
                    var celda = document.createElement("div");
                    celda.className = ("borrarItem");
                    celda.setAttribute('onclick', 'borrarItem(6)');
                    var textoCelda = document.createTextNode("");
                    celda.appendChild(textoCelda);
                    hilera.appendChild(celda);
                }
            }


        }
        else if (i == 8) {
            for (var j = 0; j < 5; j++) {

                if (j == 0) {
                    var celda = document.createElement("td");
                    var textoCelda = document.createTextNode("VOL");
                    celda.appendChild(textoCelda);
                    hilera.appendChild(celda);

                }
                else if (j == 1) {
                    var celda = document.createElement("td");
                    celda.id = ("boxVolante3");
                    var textoCelda = document.createTextNode(" ");
                    celda.appendChild(textoCelda);
                    hilera.appendChild(celda);
                }
                else if (j == 2) {
                    var celda = document.createElement("td");
                    celda.id = ("boxVolanteClub3");
                    var textoCelda = document.createTextNode(" ");
                    celda.appendChild(textoCelda);
                    hilera.appendChild(celda);

                }
                else if (j == 3) {
                    var celda = document.createElement("td");
                    celda.id = ("boxVolanteValor3");
                    var textoCelda = document.createTextNode(" ");
                    celda.appendChild(textoCelda);
                    hilera.appendChild(celda);
                }
                else {
                    var celda = document.createElement("div");
                    celda.className = ("borrarItem");
                    celda.setAttribute('onclick', 'borrarItem(7)');
                    var textoCelda = document.createTextNode("");
                    celda.appendChild(textoCelda);
                    hilera.appendChild(celda);
                }
            }


        }
        else if (i == 9) {
            for (var j = 0; j < 5; j++) {

                if (j == 0) {
                    var celda = document.createElement("td");
                    var textoCelda = document.createTextNode("VOL");
                    celda.appendChild(textoCelda);
                    hilera.appendChild(celda);

                }
                else if (j == 1) {
                    var celda = document.createElement("td");
                    celda.id = ("boxMixto2");
                    var textoCelda = document.createTextNode(" ");
                    celda.appendChild(textoCelda);
                    hilera.appendChild(celda);
                }
                else if (j == 2) {
                    var celda = document.createElement("td");
                    celda.id = ("boxMixtoClub2");
                    var textoCelda = document.createTextNode(" ");
                    celda.appendChild(textoCelda);
                    hilera.appendChild(celda);

                }
                else if (j == 3) {
                    var celda = document.createElement("td");
                    celda.id = ("boxMixtoValor2");
                    var textoCelda = document.createTextNode(" ");
                    celda.appendChild(textoCelda);
                    hilera.appendChild(celda);
                }
                else {
                    var celda = document.createElement("div");
                    celda.className = ("borrarItem");
                    celda.setAttribute('onclick', 'borrarItem(8)');
                    var textoCelda = document.createTextNode("");
                    celda.appendChild(textoCelda);
                    hilera.appendChild(celda);
                }
            }


        }
        else if (i == 10) {
            for (var j = 0; j < 5; j++) {

                if (j == 0) {
                    var celda = document.createElement("td");
                    var textoCelda = document.createTextNode("DEL");
                    celda.appendChild(textoCelda);
                    hilera.appendChild(celda);

                }
                else if (j == 1) {
                    var celda = document.createElement("td");
                    celda.id = ("boxDelantero1");
                    var textoCelda = document.createTextNode(" ");
                    celda.appendChild(textoCelda);
                    hilera.appendChild(celda);
                }
                else if (j == 2) {
                    var celda = document.createElement("td");
                    celda.id = ("boxDelanteroClub1");
                    var textoCelda = document.createTextNode(" ");
                    celda.appendChild(textoCelda);
                    hilera.appendChild(celda);
                }
                else if (j == 3) {
                    var celda = document.createElement("td");
                    celda.id = ("boxDelanteroValor1");
                    var textoCelda = document.createTextNode(" ");
                    celda.appendChild(textoCelda);
                    hilera.appendChild(celda);
                }
                else {
                    var celda = document.createElement("div");
                    celda.className = ("borrarItem");
                    celda.setAttribute('onclick', 'borrarItem(9)');
                    var textoCelda = document.createTextNode("");
                    celda.appendChild(textoCelda);
                    hilera.appendChild(celda);
                }
            }
        }
        else if (i == 11) {
            for (var j = 0; j < 5; j++) {

                if (j == 0) {
                    var celda = document.createElement("td");
                    var textoCelda = document.createTextNode("DEL");
                    celda.appendChild(textoCelda);
                    hilera.appendChild(celda);

                }
                else if (j == 1) {
                    var celda = document.createElement("td");
                    celda.id = ("boxDelantero2");
                    var textoCelda = document.createTextNode(" ");
                    celda.appendChild(textoCelda);
                    hilera.appendChild(celda);
                }
                else if (j == 2) {
                    var celda = document.createElement("td");
                    celda.id = ("boxDelanteroClub2");
                    var textoCelda = document.createTextNode(" ");
                    celda.appendChild(textoCelda);
                    hilera.appendChild(celda);
                }
                else if (j == 3) {
                    var celda = document.createElement("td");
                    celda.id = ("boxDelanteroValor2");
                    var textoCelda = document.createTextNode(" ");
                    celda.appendChild(textoCelda);
                    hilera.appendChild(celda);
                }
                else {
                    var celda = document.createElement("div");
                    celda.className = ("borrarItem");
                    celda.setAttribute('onclick', 'borrarItem(10)');
                    var textoCelda = document.createTextNode("");
                    celda.appendChild(textoCelda);
                    hilera.appendChild(celda);
                }
            }


        }


        // agrega la hilera al final de la tabla (al final del elemento tblbody)
        tblBody.appendChild(hilera);
    }

    // posiciona el <tbody> debajo del elemento <table>
    tabla.appendChild(tblBody);

    // agrego estilo a la tabla
    tabla.classList.add("table");
    tabla.classList.add("table-hover");
    tabla.classList.add("table-jugadores");

    nombreEquipo = document.getElementById('inputName').value.toUpperCase();

    // Obtener la referencia de la ubicación de la tabla
    var boxTactica = document.getElementById('boxTactica');

    if (!nombreEquipo) {
        mostrarModal(2);
    }
    else if (hayTabla === false) {
        $(".spinner:eq(0)").fadeIn();
        setTimeout(cambiarDescSpin, 1500);
        setTimeout(mostrarPagina, 3000);
        // appends <table> 
        boxTactica.appendChild(tabla);
        hayTabla = true;
        btnConfirmar();
        $('.reglas').slideDown();
        $('#boxNombreEquipo').append(nombreEquipo);

        //SE CAMBIA DESCRIPCIÓN BOTON
        $(".agregar-tactica").text("Cambiar");
    }
    else {
        boxTactica.replaceChild(tabla, boxTactica.firstChild);
        $('#boxNombreEquipo').replaceWith(`<div id="boxNombreEquipo">${nombreEquipo}</div>`);
    }

}
function cambiarDescSpin() {
      $("#descSpin1").hide();
      $("#descSpin2").show(); 
  }


function mostrarPagina() {
    $(".spinner:eq(0)").hide();
    $("#img-portada").hide();
    $(".seleccionBox").show();
  }