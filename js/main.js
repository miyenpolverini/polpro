//limpiar
localStorage.clear();

let total = 0;
let valorJugador = 0;
var totalFinal;
let nombreEquipo;

//identifico los id
let nombreArqueroBoca = document.getElementById('mostrarArqBoca');
let nombreDefensorBoca = document.getElementById('mostrarDefBoca');
let nombreVolanteBoca = document.getElementById('mostrarVolBoca');
let nombreDelanteroBoca = document.getElementById('mostrarDelBoca');

let nombreArqueroInd = document.getElementById('mostrarArqInd');
let nombreDefensorInd = document.getElementById('mostrarDefInd');
let nombreVolanteInd = document.getElementById('mostrarVolInd');
let nombreDelanteroInd = document.getElementById('mostrarDelInd');

let nombreArqueroRac = document.getElementById('mostrarArqRac');
let nombreDefensorRac = document.getElementById('mostrarDefRac');
let nombreVolanteRac = document.getElementById('mostrarVolRac');
let nombreDelanteroRac = document.getElementById('mostrarDelRac');

let nombreArqueroRiv = document.getElementById('mostrarArqRiv');
let nombreDefensorRiv = document.getElementById('mostrarDefRiv');
let nombreVolanteRiv = document.getElementById('mostrarVolRiv');
let nombreDelanteroRiv = document.getElementById('mostrarDelRiv');

let nombreArqueroSan = document.getElementById('mostrarArqSan');
let nombreDefensorSan = document.getElementById('mostrarDefSan');
let nombreVolanteSan = document.getElementById('mostrarVolSan');
let nombreDelanteroSan = document.getElementById('mostrarDelSan');


// HOVER BOTON AGREGAR

$('.btn-add-boca').hover(function () {
    $(this).css({
        "background-color": "yellow",
        "color": "blue"
    });
}, function () {
    $(this).css({
        "background-color": "",
        "color": "white"
    });
});

$('.btn-add-ind').hover(function () {
    $(this).css({
        "background-color": "red",
        "color": "white"
    });
}, function () {
    $(this).css({
        "background-color": "",
        "color": "white"
    });
});

$('.btn-add-rac').hover(function () {
    $(this).css({
        "background-color": "blue",
        "color": "white"
    });
}, function () {
    $(this).css({
        "background-color": "",
        "color": "white"
    });
});

$('.btn-add-riv').hover(function () {
    $(this).css({
        "background-color": "white",
        "color": "red"
    });
}, function () {
    $(this).css({
        "background-color": "",
        "color": "white"
    });
});

$('.btn-add-san').hover(function () {
    $(this).css({
        "background-color": "red",
        "color": "blue"
    });
}, function () {
    $(this).css({
        "background-color": "",
        "color": "white"
    });
});

//SECCIÓN AGREGAR JUGADORES
let selecArqueroBoca = document.getElementById('selecArqueroBoca');
let selecArqueroInd = document.getElementById('selecArqueroInd');
let selecArqueroRac = document.getElementById('selecArqueroRac');
let selecArqueroRiv = document.getElementById('selecArqueroRiv');
let selecArqueroSan = document.getElementById('selecArqueroSan');

/* selecArqueroBoca.addEventListener('click', createArquero); */
selecArqueroBoca.addEventListener('click', () => { createArquero('boca') });

selecArqueroInd.addEventListener('click', () => { createArquero('ind') });

selecArqueroRac.addEventListener('click', () => { createArquero('racing') });

selecArqueroRiv.addEventListener('click', () => { createArquero('river') });

selecArqueroSan.addEventListener('click', () => { createArquero('casla') });


let hayArquero = false;
let hayAviso1 = false;
let hayAviso2 = false;
let hayAviso3 = false;
let hayAviso4 = false;
let hayAviso5 = false;


//ARQUERO
function createArquero(equipo) {

    let boxArquero = document.getElementById('boxArquero');
    let boxArqueroClub = document.getElementById('boxArqueroClub');
    let boxArqueroValor = document.getElementById('boxArqueroValor');

    if (!boxArquero) {
        alert("Debe primero elegir una táctica");
    }
    else {

        let jugadorEncontrado;

        if (equipo == 'ind') {
            jugadorEncontrado = jugadores_list.find((element) => { return element.id === nombreArqueroInd.value });
        }
        else if (equipo == 'boca') {
            jugadorEncontrado = jugadores_list.find((element) => { return element.id === nombreArqueroBoca.value });
        }
        else if (equipo == 'racing') {
            jugadorEncontrado = jugadores_list.find((element) => { return element.id === nombreArqueroRac.value });
        }
        else if (equipo == 'river') {
            jugadorEncontrado = jugadores_list.find((element) => { return element.id === nombreArqueroRiv.value });
        }
        else if (equipo == 'casla') {
            jugadorEncontrado = jugadores_list.find((element) => { return element.id === nombreArqueroSan.value });
        }

        //VALIDO SI SELECCIONO UN JUGADOR
        if (jugadorEncontrado.id == 'arq0') {
            mostrarAviso(equipo);
        }
        else {

            //creo el div
            let boxArq = document.createElement('div');
            boxArq.textContent = (jugadorEncontrado.jugador);

            let boxArqClub = document.createElement('div');
            boxArqClub.textContent = ((jugadorEncontrado.club).toUpperCase());

            let boxArqValor = document.createElement('div');
            //FORMATEO NUMERO PARA MOSTRAR POR PANTALLA
            if (jugadorEncontrado.valor.length === 6) {
                valorJugador = jugadorEncontrado.valor.slice(0, 3) + "." + jugadorEncontrado.valor.slice(3, 6);
            }
            else {
                valorJugador = jugadorEncontrado.valor.slice(0, 1) + "." + jugadorEncontrado.valor.slice(1, 4) + "." + jugadorEncontrado.valor.slice(4, 7);
            }

            boxArqValor.textContent = ("$" + valorJugador);


            if (hayArquero === false) {
                // appends <player> 
                boxArquero.appendChild(boxArq);
                boxArqueroClub.appendChild(boxArqClub);
                boxArqueroValor.appendChild(boxArqValor);

                total = 0;
                guardar_equipo(boxArq.textContent, jugadorEncontrado.valor);
                hayArquero = true;

                crearTachito(0);
            }
            else {
                alert("Debe eliminar el arquero del equipo");
                // replace <player> 
                /*  boxArquero.replaceChild(boxArq, boxArquero.firstElementChild);
                 boxArqueroClub.replaceChild(boxArqClub, boxArqueroClub.firstElementChild);
                 boxArqueroValor.replaceChild(boxArqValor, boxArqueroValor.firstElementChild);
                 localStorage.removeItem('equipoElegido');
                 total = 0;
                 guardar_equipo(boxArq.textContent, jugadorEncontrado.valor); */

            }

        }

    }

}

//DEFENSOR
let selecDefensorBoca = document.getElementById('selecDefensorBoca');
let selecDefensorInd = document.getElementById('selecDefensorInd');
let selecDefensorRac = document.getElementById('selecDefensorRac');
let selecDefensorRiv = document.getElementById('selecDefensorRiv');
let selecDefensorSan = document.getElementById('selecDefensorSan');

selecDefensorBoca.addEventListener('click', () => { createDefensor('boca') });
selecDefensorInd.addEventListener('click', () => { createDefensor('ind') });
selecDefensorRac.addEventListener('click', () => { createDefensor('racing') });
selecDefensorRiv.addEventListener('click', () => { createDefensor('river') });
selecDefensorSan.addEventListener('click', () => { createDefensor('casla') });

let hayDefensor1 = false;
let hayDefensor2 = false;
let hayDefensor3 = false;
let hayMixto1 = false;

function createDefensor(equipo) {
    //OBTENGO LOS ID DE LOS LUGARES EN LA TABLA
    let boxDefensor1 = document.getElementById('boxDefensor1');
    let boxDefensorClub1 = document.getElementById('boxDefensorClub1');
    let boxDefensorValor1 = document.getElementById('boxDefensorValor1');

    let boxDefensor2 = document.getElementById('boxDefensor2');
    let boxDefensorClub2 = document.getElementById('boxDefensorClub2');
    let boxDefensorValor2 = document.getElementById('boxDefensorValor2');

    let boxDefensor3 = document.getElementById('boxDefensor3');
    let boxDefensorClub3 = document.getElementById('boxDefensorClub3');
    let boxDefensorValor3 = document.getElementById('boxDefensorValor3');

    let boxMixto1 = document.getElementById('boxMixto1');
    let boxMixtoClub1 = document.getElementById('boxMixtoClub1');
    let boxMixtoValor1 = document.getElementById('boxMixtoValor1');

    if (!boxDefensor1) {
        alert("Debe primero elegir una táctica");
    }
    else {

        let defensorEncontrado;

        if (equipo == 'ind') {
            defensorEncontrado = jugadores_list.find((element) => { return element.id === nombreDefensorInd.value });
        }
        else if (equipo == 'boca') {
            defensorEncontrado = jugadores_list.find((element) => { return element.id === nombreDefensorBoca.value });
        }
        else if (equipo == 'racing') {
            defensorEncontrado = jugadores_list.find((element) => { return element.id === nombreDefensorRac.value });
        }
        else if (equipo == 'river') {
            defensorEncontrado = jugadores_list.find((element) => { return element.id === nombreDefensorRiv.value });
        }
        else if (equipo == 'casla') {
            defensorEncontrado = jugadores_list.find((element) => { return element.id === nombreDefensorSan.value });
        }

        //VALIDO SI SE SELECCIONO UN JUGADOR
        if (defensorEncontrado.id == 'arq0') {
            mostrarAviso(equipo);
        }
        else {

            //creo el div
            let boxDef = document.createElement('div');
            boxDef.textContent = (defensorEncontrado.jugador);

            let boxDefClub = document.createElement('div');
            boxDefClub.textContent = ((defensorEncontrado.club).toUpperCase());

            let boxDefValor = document.createElement('div');
            //FORMATEO NUMERO PARA MOSTRAR POR PANTALLA
            if (defensorEncontrado.valor.length === 6) {
                valorJugador = defensorEncontrado.valor.slice(0, 3) + "." + defensorEncontrado.valor.slice(3, 6);
            }
            else {
                valorJugador = defensorEncontrado.valor.slice(0, 1) + "." + defensorEncontrado.valor.slice(1, 4) + "." + defensorEncontrado.valor.slice(4, 7);
            }
            boxDefValor.textContent = ("$" + valorJugador);


            if (hayDefensor1 === false) {
                // appends <player> 
                boxDefensor1.appendChild(boxDef);
                boxDefensorClub1.appendChild(boxDefClub);
                boxDefensorValor1.appendChild(boxDefValor);

                total = 0;
                guardar_equipo(boxDef.textContent, defensorEncontrado.valor);
                hayDefensor1 = true;

                crearTachito(1);
            }
            else if (hayDefensor2 === false) {
                // appends <player> 
                boxDefensor2.appendChild(boxDef);
                boxDefensorClub2.appendChild(boxDefClub);
                boxDefensorValor2.appendChild(boxDefValor);

                total = 0;
                guardar_equipo(boxDef.textContent, defensorEncontrado.valor);
                hayDefensor2 = true;

                crearTachito(2);

            }
            else if (hayDefensor3 === false) {
                // appends <player> 
                boxDefensor3.appendChild(boxDef);
                boxDefensorClub3.appendChild(boxDefClub);
                boxDefensorValor3.appendChild(boxDefValor);

                total = 0;
                guardar_equipo(boxDef.textContent, defensorEncontrado.valor);
                hayDefensor3 = true;

                crearTachito(3);

            }
            else if (hayMixto1 === false) {
                // appends <player> 
                boxMixto1.appendChild(boxDef);
                boxMixtoClub1.appendChild(boxDefClub);
                boxMixtoValor1.appendChild(boxDefValor);

                total = 0;
                guardar_equipo(boxDef.textContent, defensorEncontrado.valor);
                hayMixto1 = true;

                crearTachito(4);

            }
            else {
                alert("Debe eliminar un defensor del equipo");
                // replace <player> 
                /*  boxDefensor1.replaceChild(boxDef, boxDefensor1.firstElementChild);
                 boxDefensorClub1.replaceChild(boxDefClub, boxDefensorClub1.firstElementChild);
                 boxDefensorValor1.replaceChild(boxDefValor, boxDefensorValor1.firstElementChild);
                 localStorage.removeItem('equipoElegido');
                 total = 0;
                 guardar_equipo(boxDef.textContent, defensorEncontrado.valor); */
            }
        }
    }
}

//VOLANTE
let selecVolanteBoca = document.getElementById('selecVolanteBoca');
let selecVolanteInd = document.getElementById('selecVolanteInd');
let selecVolanteRac = document.getElementById('selecVolanteRac');
let selecVolanteRiv = document.getElementById('selecVolanteRiv');
let selecVolanteSan = document.getElementById('selecVolanteSan');

selecVolanteBoca.addEventListener('click', () => { createVolante('boca') });
selecVolanteInd.addEventListener('click', () => { createVolante('ind') });
selecVolanteRac.addEventListener('click', () => { createVolante('racing') });
selecVolanteRiv.addEventListener('click', () => { createVolante('river') });
selecVolanteSan.addEventListener('click', () => { createVolante('casla') });

let hayVolante1 = false;
let hayVolante2 = false;
let hayVolante3 = false;
let hayMixto2 = false;

function createVolante(equipo) {

    let boxVolante1 = document.getElementById('boxVolante1');
    let boxVolanteClub1 = document.getElementById('boxVolanteClub1');
    let boxVolanteValor1 = document.getElementById('boxVolanteValor1');

    if (!boxVolante1) {
        alert("Debe primero elegir una táctica");
    }
    else {

        let volanteEncontrado;

        if (equipo == 'ind') {
            volanteEncontrado = jugadores_list.find((element) => { return element.id === nombreVolanteInd.value });
        }
        else if (equipo == 'boca') {
            volanteEncontrado = jugadores_list.find((element) => { return element.id === nombreVolanteBoca.value });
        }
        else if (equipo == 'racing') {
            volanteEncontrado = jugadores_list.find((element) => { return element.id === nombreVolanteRac.value });
        }
        else if (equipo == 'river') {
            volanteEncontrado = jugadores_list.find((element) => { return element.id === nombreVolanteRiv.value });
        }
        else if (equipo == 'casla') {
            volanteEncontrado = jugadores_list.find((element) => { return element.id === nombreVolanteSan.value });
        }

        //VALIDO SI SELECCIONO UN JUGADOR
        if (volanteEncontrado.id == 'arq0') {
            mostrarAviso(equipo);
        }
        else {

            //creo el div
            let boxVol = document.createElement('div');
            boxVol.textContent = (volanteEncontrado.jugador);

            let boxVolClub = document.createElement('div');
            boxVolClub.textContent = ((volanteEncontrado.club).toUpperCase());

            let boxVolValor = document.createElement('div');
            //FORMATEO NUMERO PARA MOSTRAR POR PANTALLA
            if (volanteEncontrado.valor.length === 6) {
                valorJugador = volanteEncontrado.valor.slice(0, 3) + "." + volanteEncontrado.valor.slice(3, 6);
            }
            else {
                valorJugador = volanteEncontrado.valor.slice(0, 1) + "." + volanteEncontrado.valor.slice(1, 4) + "." + volanteEncontrado.valor.slice(4, 7);
            }
            boxVolValor.textContent = ("$" + valorJugador);


            if (hayVolante1 === false) {
                // appends <player> 
                boxVolante1.appendChild(boxVol);
                boxVolanteClub1.appendChild(boxVolClub);
                boxVolanteValor1.appendChild(boxVolValor);

                total = 0;
                guardar_equipo(boxVol.textContent, volanteEncontrado.valor);
                hayVolante1 = true;
                //modificar luego
                crearTachito(5);
            }
            else if (hayVolante2 === false) {
                // appends <player> 
                boxVolante2.appendChild(boxVol);
                boxVolanteClub2.appendChild(boxVolClub);
                boxVolanteValor2.appendChild(boxVolValor);

                total = 0;
                guardar_equipo(boxVol.textContent, volanteEncontrado.valor);
                hayVolante2 = true;
                //modificar luego
                crearTachito(6);
            }
            else if (hayVolante2 === false) {
                // appends <player> 
                boxVolante2.appendChild(boxVol);
                boxVolanteClub2.appendChild(boxVolClub);
                boxVolanteValor2.appendChild(boxVolValor);

                total = 0;
                guardar_equipo(boxVol.textContent, volanteEncontrado.valor);
                hayVolante2 = true;
                //modificar luego
                crearTachito(6);
            }
            else if (hayVolante3 === false) {
                // appends <player> 
                boxVolante3.appendChild(boxVol);
                boxVolanteClub3.appendChild(boxVolClub);
                boxVolanteValor3.appendChild(boxVolValor);

                total = 0;
                guardar_equipo(boxVol.textContent, volanteEncontrado.valor);
                hayVolante3 = true;
                //modificar luego
                crearTachito(7);
            }
            else if (hayMixto2 === false) {
                // appends <player> 
                boxMixto2.appendChild(boxVol);
                boxMixtoClub2.appendChild(boxVolClub);
                boxMixtoValor2.appendChild(boxVolValor);

                total = 0;
                guardar_equipo(boxVol.textContent, volanteEncontrado.valor);
                hayMixto2 = true;
                //modificar luego
                crearTachito(8);
            }
            else {
                alert("Debe eliminar un volante del equipo");
                // replace <player> 
                /*  boxVolante1.replaceChild(boxVol, boxVolante1.firstElementChild);
                 boxVolanteClub1.replaceChild(boxVolClub, boxVolanteClub1.firstElementChild);
                 boxVolanteValor1.replaceChild(boxVolValor, boxVolanteValor1.firstElementChild);
                 localStorage.removeItem('equipoElegido');
                 total = 0;
                 guardar_equipo(boxVol.textContent, volanteEncontrado.valor); */
            }
        }
    }
}

//DELANTERO
let selecDelanteroBoca = document.getElementById('selecDelanteroBoca');
let selecDelanteroInd = document.getElementById('selecDelanteroInd');
let selecDelanteroRac = document.getElementById('selecDelanteroRac');
let selecDelanteroRiv = document.getElementById('selecDelanteroRiv');
let selecDelanteroSan = document.getElementById('selecDelanteroSan');

selecDelanteroBoca.addEventListener('click', () => { createDelantero('boca') });
selecDelanteroInd.addEventListener('click', () => { createDelantero('ind') });
selecDelanteroRac.addEventListener('click', () => { createDelantero('racing') });
selecDelanteroRiv.addEventListener('click', () => { createDelantero('river') });
selecDelanteroSan.addEventListener('click', () => { createDelantero('casla') });

let hayDelantero1 = false;
let hayDelantero2 = false;

function createDelantero(equipo) {

    let boxDelantero1 = document.getElementById('boxDelantero1');
    let boxDelanteroClub1 = document.getElementById('boxDelanteroClub1');
    let boxDelanteroValor1 = document.getElementById('boxDelanteroValor1');

    if (!boxDelantero1) {
        alert("Debe primero elegir una táctica");
    }
    else {

        let delanteroEncontrado;

        if (equipo == 'ind') {
            delanteroEncontrado = jugadores_list.find((element) => { return element.id === nombreDelanteroInd.value });
        }
        else if (equipo == 'boca') {
            delanteroEncontrado = jugadores_list.find((element) => { return element.id === nombreDelanteroBoca.value });
        }
        else if (equipo == 'racing') {
            delanteroEncontrado = jugadores_list.find((element) => { return element.id === nombreDelanteroRac.value });
        }
        else if (equipo == 'river') {
            delanteroEncontrado = jugadores_list.find((element) => { return element.id === nombreDelanteroRiv.value });
        }
        else if (equipo == 'casla') {
            delanteroEncontrado = jugadores_list.find((element) => { return element.id === nombreDelanteroSan.value });
        }

        //VALIDO SI SELECCIONO UN JUGADOR
        if (delanteroEncontrado.id == 'arq0') {
            mostrarAviso(equipo);
        }
        else {

            //creo el div
            let boxDel = document.createElement('div');
            boxDel.textContent = (delanteroEncontrado.jugador);

            let boxDelClub = document.createElement('div');
            boxDelClub.textContent = ((delanteroEncontrado.club).toUpperCase());

            let boxDelValor = document.createElement('div');
            //FORMATEO NUMERO PARA MOSTRAR POR PANTALLA
            if (delanteroEncontrado.valor.length === 6) {
                valorJugador = delanteroEncontrado.valor.slice(0, 3) + "." + delanteroEncontrado.valor.slice(3, 6);
            }
            else {
                valorJugador = delanteroEncontrado.valor.slice(0, 1) + "." + delanteroEncontrado.valor.slice(1, 4) + "." + delanteroEncontrado.valor.slice(4, 7);
            }
            boxDelValor.textContent = ("$" + valorJugador);


            if (hayDelantero1 === false) {
                // appends <player> 
                boxDelantero1.appendChild(boxDel);
                boxDelanteroClub1.appendChild(boxDelClub);
                boxDelanteroValor1.appendChild(boxDelValor);

                total = 0;
                guardar_equipo(boxDel.textContent, delanteroEncontrado.valor);
                hayDelantero1 = true;
                //modificar luego
                crearTachito(9);
            }
            else if (hayDelantero2 === false) {
                // appends <player> 
                boxDelantero2.appendChild(boxDel);
                boxDelanteroClub2.appendChild(boxDelClub);
                boxDelanteroValor2.appendChild(boxDelValor);

                total = 0;
                guardar_equipo(boxDel.textContent, delanteroEncontrado.valor);
                hayDelantero2 = true;
                //modificar luego
                crearTachito(10);
            }
            else {
                alert("Debe eliminar un delantero del equipo");
                // replace <player> 
                /*  boxDelantero1.replaceChild(boxDel, boxDelantero1.firstElementChild);
                 boxDelanteroClub1.replaceChild(boxDelClub, boxDelanteroClub1.firstElementChild);
                 boxDelanteroValor1.replaceChild(boxDelValor, boxDelanteroValor1.firstElementChild);
                 localStorage.removeItem('equipoElegido');
                 total = 0;
                 guardar_equipo(boxDel.textContent, delanteroEncontrado.valor); */
            }
        }
    }
}

//CREAR TACHITO
function crearTachito(indice) {
    //crear tachito
    let img = document.createElement('img');
    //seteo la ruta
    img.setAttribute('src', "img/tachito.svg");
    let boxBorrar = document.getElementsByClassName('borrarItem');
    boxBorrar[indice].appendChild(img);
}

//BORRAR ITEM DESDE EL TACHITO

function borrarItem(indice) {


    let itemAborrar = localStorage.getItem("equipoElegido"[1]);

    console.log(itemAborrar);

    switch (indice) {
        case 0:
            $('#boxArquero').empty();
            $('#boxArqueroClub').empty();
            $('#boxArqueroValor').empty();
            $('.borrarItem:eq(0)').empty();
            hayArquero = false;
            break;
        case 1:
            $('#boxDefensor1').empty();
            $('#boxDefensorClub1').empty();
            $('#boxDefensorValor1').empty();
            $('.borrarItem:eq(1)').empty();
            hayDefensor1 = false;
            break;
        case 2:
            $('#boxDefensor2').empty();
            $('#boxDefensorClub2').empty();
            $('#boxDefensorValor2').empty();
            $('.borrarItem:eq(2)').empty();
            hayDefensor2 = false;
            break;
        case 3:
            $('#boxDefensor3').empty();
            $('#boxDefensorClub3').empty();
            $('#boxDefensorValor3').empty();
            $('.borrarItem:eq(3)').empty();
            hayDefensor3 = false;
            break;
        case 4:
            $('#boxMixto1').empty();
            $('#boxMixtoClub1').empty();
            $('#boxMixtoValor1').empty();
            $('.borrarItem:eq(4)').empty();
            hayMixto1 = false;
            break;
        case 5:
            $('#boxVolante1').empty();
            $('#boxVolanteClub1').empty();
            $('#boxVolanteValor1').empty();
            $('.borrarItem:eq(5)').empty();
            hayVolante1 = false;
            break;
        case 6:
            $('#boxVolante2').empty();
            $('#boxVolanteClub2').empty();
            $('#boxVolanteValor2').empty();
            $('.borrarItem:eq(6)').empty();
            hayVolante2 = false;
            break;
        case 7:
            $('#boxVolante3').empty();
            $('#boxVolanteClub3').empty();
            $('#boxVolanteValor3').empty();
            $('.borrarItem:eq(7)').empty();
            hayVolante3 = false;
            break;
        case 8:
            $('#boxMixto2').empty();
            $('#boxMixtoClub2').empty();
            $('#boxMixtoValor2').empty();
            $('.borrarItem:eq(8)').empty();
            hayMixto2 = false;
            break;
        case 9:
            $('#boxDelantero1').empty();
            $('#boxDelanteroClub1').empty();
            $('#boxDelanteroValor1').empty();
            $('.borrarItem:eq(9)').empty();
            hayDelantero1 = false;
            break;
        case 10:
            $('#boxDelantero2').empty();
            $('#boxDelanteroClub2').empty();
            $('#boxDelanteroValor2').empty();
            $('.borrarItem:eq(10)').empty();
            hayDelantero2 = false;
            break;
    }

    localStorage.removeItem("equipoElegido");


    if (indice == 0) {
        mostrarTotIni();
    }

}

//SECCIÓN MOSTRAR JUGADORES DEL ARRAY

nombreArqueroBoca.addEventListener('click', mostrarJugadores('boca juniors', 'arq'));
nombreDefensorBoca.addEventListener('click', mostrarJugadores('boca juniors', 'def'));
nombreVolanteBoca.addEventListener('click', mostrarJugadores('boca juniors', 'vol'));
nombreDelanteroBoca.addEventListener('click', mostrarJugadores('boca juniors', 'del'));

nombreArqueroInd.addEventListener('click', mostrarJugadores('independiente', 'arq'));
nombreDefensorInd.addEventListener('click', mostrarJugadores('independiente', 'def'));
nombreVolanteInd.addEventListener('click', mostrarJugadores('independiente', 'vol'));
nombreDelanteroInd.addEventListener('click', mostrarJugadores('independiente', 'del'));

nombreArqueroRac.addEventListener('click', mostrarJugadores('racing club', 'arq'));
nombreDefensorRac.addEventListener('click', mostrarJugadores('racing club', 'def'));
nombreVolanteRac.addEventListener('click', mostrarJugadores('racing club', 'vol'));
nombreDelanteroRac.addEventListener('click', mostrarJugadores('racing club', 'del'));

nombreArqueroRiv.addEventListener('click', mostrarJugadores('river plate', 'arq'));
nombreDefensorRiv.addEventListener('click', mostrarJugadores('river plate', 'def'));
nombreVolanteRiv.addEventListener('click', mostrarJugadores('river plate', 'vol'));
nombreDelanteroRiv.addEventListener('click', mostrarJugadores('river plate', 'del'));

nombreArqueroSan.addEventListener('click', mostrarJugadores('san lorenzo', 'arq'));
nombreDefensorSan.addEventListener('click', mostrarJugadores('san lorenzo', 'def'));
nombreVolanteSan.addEventListener('click', mostrarJugadores('san lorenzo', 'vol'));
nombreDelanteroSan.addEventListener('click', mostrarJugadores('san lorenzo', 'del'));

function mostrarJugadores(equipo, posicion) {

    const fragment = document.createDocumentFragment();

    for (const jugador of jugadores_list) {
        const selectItem = document.createElement("option");

        if (`${jugador.club}` === equipo && `${jugador.posicion}` === posicion) {

            //ojo!
            selectItem.setAttribute("ejemplo", jugador);
            selectItem.textContent = jugador.getNombreJugador();
            selectItem.value = jugador.getIdJugador();
            fragment.appendChild(selectItem);
        }
    }

    switch (equipo) {
        case 'boca juniors':
            switch (posicion) {
                case 'arq':
                    nombreArqueroBoca.appendChild(fragment);
                    break;
                case 'def':
                    nombreDefensorBoca.appendChild(fragment);
                    break;
                case 'vol':
                    nombreVolanteBoca.appendChild(fragment);
                    break;
                case 'del':
                    nombreDelanteroBoca.appendChild(fragment);
                    break;
            }
        case 'independiente':
            switch (posicion) {
                case 'arq':
                    nombreArqueroInd.appendChild(fragment);
                    break;
                case 'def':
                    nombreDefensorInd.appendChild(fragment);
                    break;
                case 'vol':
                    nombreVolanteInd.appendChild(fragment);
                    break;
                case 'del':
                    nombreDelanteroInd.appendChild(fragment);
                    break;
            }
        case 'racing club':
            switch (posicion) {
                case 'arq':
                    nombreArqueroRac.appendChild(fragment);
                    break;
                case 'def':
                    nombreDefensorRac.appendChild(fragment);
                    break;
                case 'vol':
                    nombreVolanteRac.appendChild(fragment);
                    break;
                case 'del':
                    nombreDelanteroRac.appendChild(fragment);
                    break;
            }
        case 'river plate':
            switch (posicion) {
                case 'arq':
                    nombreArqueroRiv.appendChild(fragment);
                    break;
                case 'def':
                    nombreDefensorRiv.appendChild(fragment);
                    break;
                case 'vol':
                    nombreVolanteRiv.appendChild(fragment);
                    break;
                case 'del':
                    nombreDelanteroRiv.appendChild(fragment);
                    break;
            }
        case 'san lorenzo':
            switch (posicion) {
                case 'arq':
                    nombreArqueroSan.appendChild(fragment);
                    break;
                case 'def':
                    nombreDefensorSan.appendChild(fragment);
                    break;
                case 'vol':
                    nombreVolanteSan.appendChild(fragment);
                    break;
                case 'del':
                    nombreDelanteroSan.appendChild(fragment);
                    break;
            }
    }
}



//SECCIÓN MOSTRAR VALOR DE JUGADORES DEL ARRAY

let hayValor = false;

function agregarValor(equipo, posicion) {

    ocultarAviso(equipo);

    let boxValor;
    let puesto;

    switch (equipo) {
        case "boca":
            switch (posicion) {
                case "arq":
                    boxValor = document.getElementById('boxValorBoca1');
                    puesto = document.getElementById('mostrarArqBoca');
                    break
                case "def":
                    boxValor = document.getElementById('boxValorBoca2');
                    puesto = document.getElementById('mostrarDefBoca');
                    break;
                case "vol":
                    boxValor = document.getElementById('boxValorBoca3');
                    puesto = document.getElementById('mostrarVolBoca');
                    break;
                case "del":
                    boxValor = document.getElementById('boxValorBoca4');
                    puesto = document.getElementById('mostrarDelBoca');
                    break;
            }
            break;
        case "independiente":
            switch (posicion) {
                case "arq":
                    boxValor = document.getElementById('boxValorInd1');
                    puesto = document.getElementById('mostrarArqInd');
                    break;
                case "def":
                    boxValor = document.getElementById('boxValorInd2');
                    puesto = document.getElementById('mostrarDefInd');
                    break;
                case "vol":
                    boxValor = document.getElementById('boxValorInd3');
                    puesto = document.getElementById('mostrarVolInd');
                    break;
                case "del":
                    boxValor = document.getElementById('boxValorInd4');
                    puesto = document.getElementById('mostrarDelInd');
                    break;
            }
            break;
        case "racing":
            switch (posicion) {
                case "arq":
                    boxValor = document.getElementById('boxValorRac1');
                    puesto = document.getElementById('mostrarArqRac');
                    break;
                case "def":
                    boxValor = document.getElementById('boxValorRac2');
                    puesto = document.getElementById('mostrarDefRac');
                    break;
                case "vol":
                    boxValor = document.getElementById('boxValorRac3');
                    puesto = document.getElementById('mostrarVolRac');
                    break;
                case "del":
                    boxValor = document.getElementById('boxValorRac4');
                    puesto = document.getElementById('mostrarDelRac');
                    break;
            }
            break;
        case "river":
            switch (posicion) {
                case "arq":
                    boxValor = document.getElementById('boxValorRiv1');
                    puesto = document.getElementById('mostrarArqRiv');
                    break;
                case "def":
                    boxValor = document.getElementById('boxValorRiv2');
                    puesto = document.getElementById('mostrarDefRiv');
                    break;
                case "vol":
                    boxValor = document.getElementById('boxValorRiv3');
                    puesto = document.getElementById('mostrarVolRiv');
                    break;
                case "del":
                    boxValor = document.getElementById('boxValorRiv4');
                    puesto = document.getElementById('mostrarDelRiv');
                    break;
            }
            break;
        case "casla":
            switch (posicion) {
                case "arq":
                    boxValor = document.getElementById('boxValorSan1');
                    puesto = document.getElementById('mostrarArqSan');
                    break;
                case "def":
                    boxValor = document.getElementById('boxValorSan2');
                    puesto = document.getElementById('mostrarDefSan');
                    break;
                case "vol":
                    boxValor = document.getElementById('boxValorSan3');
                    puesto = document.getElementById('mostrarVolSan');
                    break;
                case "del":
                    boxValor = document.getElementById('boxValorSan4');
                    puesto = document.getElementById('mostrarDelSan');
                    break;
            }
            break;
    }


    jugadorEncontrado = jugadores_list.find((element) => { return element.id === puesto.value });


    //creo el div
    let boxArqValor = document.createElement('div');


    if (puesto.value == 'arq0') {
        boxArqValor.textContent = (" ");
    }
    else {

        //FORMATEO NUMERO PARA MOSTRAR POR PANTALLA
        if (jugadorEncontrado.valor.length === 6) {
            valorJugador = jugadorEncontrado.valor.slice(0, 3) + "." + jugadorEncontrado.valor.slice(3, 6);
        }
        else {
            valorJugador = jugadorEncontrado.valor.slice(0, 1) + "." + jugadorEncontrado.valor.slice(1, 4) + "." + jugadorEncontrado.valor.slice(4, 7);
        }

        boxArqValor.textContent = ("$" + valorJugador);
    }

    if (boxValor.textContent == "") {
        hayValor = false;
    }

    if (hayValor === false) {
        // appends <valor> 
        boxValor.appendChild(boxArqValor);
        hayValor = true;
    }
    else {
        // replace <valor> 
        boxValor.replaceChild(boxArqValor, boxValor.firstChild);

    }

}


//SECCIÓN MOSTRAR TACTICA

let hayTabla = false;

function generarTactica() {

    mostrarTotIni();

    hayArquero = false;
    hayDefensor1 = false;
    hayDefensor2 = false;
    hayDefensor3 = false;
    hayMixto1 = false;
    //Obtengo id de indicador de tactica
    let paramTactica = document.getElementById('tactica').value;

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
                    if (paramTactica == "ta3") {
                        var textoCelda = document.createTextNode("VOL");
                    }
                    else {
                        var textoCelda = document.createTextNode("DEF");
                    }

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
                    if (paramTactica == "ta1") {
                        var textoCelda = document.createTextNode("VOL");
                    }
                    else {
                        var textoCelda = document.createTextNode("DEL");
                    }

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

    if (!nombreEquipo){
        alert("Debe elegir el nombre del equipo");
    }
    else if (hayTabla === false) {
        // appends <table> 
        boxTactica.appendChild(tabla);
        hayTabla = true;
        btnConfirmar();
        $('.reglas').slideDown();
        $('#boxNombreEquipo').append(nombreEquipo);
    }
    else {
        boxTactica.replaceChild(tabla, boxTactica.firstChild);
        $('#boxNombreEquipo').replaceChild(nombreEquipo, $('#boxNombreEquipo').firstChild);
    }

    //SE CAMBIA DESCRIPCIÓN BOTON
    $(".agregar-tactica").text("Cambiar");

}

//GUARDAR EQUIPO

function guardar_equipo(jugador_nuevo, jugador_valor) {

    let item = localStorage.getItem("equipoElegido");

    if (item) {

        let jugador = new Jugador_elegido(jugador_nuevo, jugador_valor);

        let almacenados = JSON.parse(localStorage.getItem("equipoElegido"));
        almacenados.push(jugador);

        let almacenados_string = JSON.stringify(almacenados);
        localStorage.setItem("equipoElegido", almacenados_string);

        //CALCULAR TOTAL
        for (let i = 0; i < almacenados.length; i++) {
            let objeto_jugador = almacenados[i];
            total = total + (parseInt(objeto_jugador.valor));

            //FORMATEO NUMERO PARA MOSTRAR POR PANTALLA
            totalFinal = total.toString();
            if (totalFinal.length === 6) {
                totalFinal = totalFinal.slice(0, 3) + "." + totalFinal.slice(3, 6);
            }
            else if (totalFinal.length === 7) {
                totalFinal = totalFinal.slice(0, 1) + "." + totalFinal.slice(1, 4) + "." + totalFinal.slice(4, 7);
            }
            else {
                totalFinal = totalFinal.slice(0, 2) + "." + totalFinal.slice(2, 5) + "." + totalFinal.slice(5, 8);
            }

            $("#contenido-total").replaceWith(`<th id="contenido-total"><div>$${totalFinal}
        </div></th>`);

        }

    }
    else {

        let jugador = new Jugador_elegido(jugador_nuevo, jugador_valor);
        let almacenados = new Array();
        almacenados.push(jugador);
        let almacenados_string = JSON.stringify(almacenados);
        localStorage.setItem("equipoElegido", almacenados_string);

        console.log(jugador);


        //CALCULAR TOTAL
        for (let i = 0; i < almacenados.length; i++) {
            let objeto_jugador = almacenados[i];
            total = total + (parseInt(objeto_jugador.valor));

            //FORMATEO NUMERO PARA MOSTRAR POR PANTALLA
            totalFinal = total.toString();
            if (totalFinal.length === 6) {
                totalFinal = totalFinal.slice(0, 3) + "." + totalFinal.slice(3, 6);
            }
            else {
                totalFinal = totalFinal.slice(0, 1) + "." + totalFinal.slice(1, 4) + "." + totalFinal.slice(4, 7);
            }

            $("#contenido-total").replaceWith(`<th id="contenido-total"><div>$${totalFinal}
        </div></th>`);

        }

    }
}

//MOSTRAR AVISO
function mostrarAviso(equipo) {

    switch (equipo) {
        case "boca":
            if (hayAviso1 === false) {
                $("#retorno-aviso1").show();
                hayAviso1 = true;
                break;
            }
        case "ind":
            if (hayAviso2 === false) {
                $("#retorno-aviso2").show();
                hayAviso2 = true;
                break;
            }
        case "racing":
            if (hayAviso3 === false) {
                $("#retorno-aviso3").show();
                hayAviso3 = true;
                break;
            }
        case "river":
            if (hayAviso4 === false) {
                $("#retorno-aviso4").show();
                hayAviso4 = true;
                break;
            }
        case "casla":
            if (hayAviso5 === false) {
                $("#retorno-aviso5").show();
                hayAviso5 = true;
                break;
            }
    }
}

//OCULTAR AVISO
function ocultarAviso(equipo) {

    switch (equipo) {
        case "boca":
            if (hayAviso1 === true) {
                $("#retorno-aviso1").hide();
                hayAviso1 = false;
                break;
            }
        case "independiente":
            if (hayAviso2 === true) {
                $("#retorno-aviso2").hide();
                hayAviso2 = false;
                break;
            }
        case "racing":
            if (hayAviso3 === true) {
                $("#retorno-aviso3").hide();
                hayAviso3 = false;
                break;
            }
        case "river":
            if (hayAviso4 === true) {
                $("#retorno-aviso4").hide();
                hayAviso4 = false;
                break;
            }
        case "casla":
            if (hayAviso5 === true) {
                $("#retorno-aviso5").hide();
                hayAviso5 = false;
                break;
            }
    }

}

//MOSTRAR TOTAL

let mostrarTot = false;

function mostrarTotIni() {

    localStorage.removeItem("equipoElegido");

    if (mostrarTot === false) {
        $("#contenido-total").append(`<div>$0</div>`);
        mostrarTot = true;
    }
    else {
        $("#contenido-total").replaceWith(`<th id="contenido-total"><div>$0</div></th>`);
    }
}

//ANIMACIONES

$('#pag-titulo').on('click', () => {

    $("#pag-titulo").fadeOut("slow", function () {

        $("#logo-pelota").show(1000)
            .css({
                'position': 'relative',
                'left': '610px',
                'top': '20px',
                'cursor': 'pointer',
            })


    })
})

$('#logo-pelota').on('click', () => {

    $("#logo-pelota").fadeOut("slow", function () {

        $("#pag-titulo").fadeIn(1000);

    })
})


//AJAX
function btnConfirmar() {
    // appends 
    $('#btnConfirmar').append('<button type="submit" class="btn btn-dark" id="btn1">Confirmar</button>');

    const URLGET = "https://jsonplaceholder.typicode.com/posts"

    $("#btn1").click(() => {

        let equipoCompleto = JSON.parse(localStorage.getItem("equipoElegido"));

        if (equipoCompleto === null || equipoCompleto.length !== 11) {
            alert("Debe completar el equipo con 11 jugadores");
        }
        else {

            let confirmar = confirm("¿Desea confirmar el equipo?");

            const infoPost =  equipoCompleto;

            if (confirmar) {
                $.post(URLGET, infoPost, (respuesta, estado) => {
                    if (estado === "success") {
                        alert("Usted ya está participando. Exitos!");
                    }
                });
            }
        }
    });

}







