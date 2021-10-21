//limpiar
localStorage.clear();

let total = 0;
let valorJugador = 0;
var totalFinal;
let nombreEquipo;
let arqueroElegido;
let defensor1Elegido;
let defensor2Elegido;
let defensor3Elegido;
let mixto1Elegido;
let volante1Elegido;
let volante2Elegido;
let volante3Elegido;
let mixto2Elegido;
let delanter1Elegido;
let delantero2Elegido;



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
        mostrarModal(2);
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
            arqueroElegido = jugadorEncontrado.id;
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
                //SE VALIDA MAXIMO 3 POR EQUIPO Y MAX 50 MILL PERMITIDO
                sumar_equipo(jugadorEncontrado.club, jugadorEncontrado.valor);

                if (!noPermitido && !Superado) {
                    // appends <player> 
                    boxArquero.appendChild(boxArq);
                    boxArqueroClub.appendChild(boxArqClub);
                    boxArqueroValor.appendChild(boxArqValor);

                    guardar_equipo(jugadorEncontrado.id, jugadorEncontrado.jugador, jugadorEncontrado.valor);
                    arqueroElegido = jugadorEncontrado.id;
                    hayArquero = true;

                    crearTachito(0);
                }
            }
            else {
                mostrarModal(3);
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
        mostrarModal(2);
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
                //se valida si ya se eligio el jugador
                let jug = buscar_jugador(defensorEncontrado.id);

                if (jug === false) {
                    //SE VALIDA MAXIMO 3 POR EQUIPO Y MAX 50 MILL PERMITIDO
                    sumar_equipo(defensorEncontrado.club, defensorEncontrado.valor);

                    if (!noPermitido && !Superado) {
                        // appends <player> 
                        boxDefensor1.appendChild(boxDef);
                        boxDefensorClub1.appendChild(boxDefClub);
                        boxDefensorValor1.appendChild(boxDefValor);

                        guardar_equipo(defensorEncontrado.id, defensorEncontrado.jugador, defensorEncontrado.valor);
                        defensor1Elegido = defensorEncontrado.id;
                        hayDefensor1 = true;
                        crearTachito(1);
                    }
                }
            }
            else if (hayDefensor2 === false) {
                // se valida si ya se eligio el jugador
                let jug = buscar_jugador(defensorEncontrado.id);

                if (jug === false) {
                    //SE VALIDA MAXIMO 3 POR EQUIPO Y MAX 50 MILL PERMITIDO
                    sumar_equipo(defensorEncontrado.club, defensorEncontrado.valor);

                    if (!noPermitido && !Superado) {
                        // appends <player> 
                        boxDefensor2.appendChild(boxDef);
                        boxDefensorClub2.appendChild(boxDefClub);
                        boxDefensorValor2.appendChild(boxDefValor);

                        guardar_equipo(defensorEncontrado.id, defensorEncontrado.jugador, defensorEncontrado.valor);
                        defensor2Elegido = defensorEncontrado.id;
                        hayDefensor2 = true;
                        crearTachito(2);
                    }
                }
            }
            else if (hayDefensor3 === false) {
                // se valida si ya se eligio el jugador
                let jug = buscar_jugador(defensorEncontrado.id);

                if (jug === false) {
                    //SE VALIDA MAXIMO 3 POR EQUIPO Y MAX 50 MILL PERMITIDO
                    sumar_equipo(defensorEncontrado.club, defensorEncontrado.valor);

                    if (!noPermitido && !Superado) {
                        // appends <player> 
                        boxDefensor3.appendChild(boxDef);
                        boxDefensorClub3.appendChild(boxDefClub);
                        boxDefensorValor3.appendChild(boxDefValor);

                        guardar_equipo(defensorEncontrado.id, defensorEncontrado.jugador, defensorEncontrado.valor);
                        defensor3Elegido = defensorEncontrado.id;
                        hayDefensor3 = true;
                        crearTachito(3);
                    }
                }
            }
            else if (hayMixto1 === false) {
                // se valida si ya se eligio el jugador
                let jug = buscar_jugador(defensorEncontrado.id);

                if (jug === false) {
                    //SE VALIDA MAXIMO 3 POR EQUIPO Y MAX 50 MILL PERMITIDO
                    sumar_equipo(defensorEncontrado.club, defensorEncontrado.valor);

                    if (!noPermitido && !Superado) {
                        // appends <player> 
                        boxMixto1.appendChild(boxDef);
                        boxMixtoClub1.appendChild(boxDefClub);
                        boxMixtoValor1.appendChild(boxDefValor);

                        guardar_equipo(defensorEncontrado.id, defensorEncontrado.jugador, defensorEncontrado.valor);
                        mixto1Elegido = defensorEncontrado.id;
                        hayMixto1 = true;

                        crearTachito(4);
                    }
                }
            }
            else {
                mostrarModal(4);
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
        mostrarModal(2);
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
                // se valida si ya se eligio el jugador
                let jug = buscar_jugador(volanteEncontrado.id);

                if (jug === false) {
                    //SE VALIDA MAXIMO 3 POR EQUIPO Y MAX 50 MILL PERMITIDO
                    sumar_equipo(volanteEncontrado.club, volanteEncontrado.valor);

                    if (!noPermitido && !Superado) {
                        // appends <player> 
                        boxVolante1.appendChild(boxVol);
                        boxVolanteClub1.appendChild(boxVolClub);
                        boxVolanteValor1.appendChild(boxVolValor);

                        guardar_equipo(volanteEncontrado.id, volanteEncontrado.jugador, volanteEncontrado.valor);
                        volante1Elegido = volanteEncontrado.id;
                        hayVolante1 = true;
                        crearTachito(5);
                    }
                }
            }
            else if (hayVolante2 === false) {
                // se valida si ya se eligio el jugador
                let jug = buscar_jugador(volanteEncontrado.id);

                if (jug === false) {
                    //SE VALIDA MAXIMO 3 POR EQUIPO Y MAX 50 MILL PERMITIDO
                    sumar_equipo(volanteEncontrado.club, volanteEncontrado.valor);

                    if (!noPermitido && !Superado) {
                        // appends <player> 
                        boxVolante2.appendChild(boxVol);
                        boxVolanteClub2.appendChild(boxVolClub);
                        boxVolanteValor2.appendChild(boxVolValor);

                        guardar_equipo(volanteEncontrado.id, volanteEncontrado.jugador, volanteEncontrado.valor);
                        volante2Elegido = volanteEncontrado.id;
                        hayVolante2 = true;
                        crearTachito(6);
                    }
                }
            }
            else if (hayVolante3 === false) {
                // se valida si ya se eligio el jugador
                let jug = buscar_jugador(volanteEncontrado.id);

                if (jug === false) {
                    //SE VALIDA MAXIMO 3 POR EQUIPO Y MAX 50 MILL PERMITIDO
                    sumar_equipo(volanteEncontrado.club, volanteEncontrado.valor);

                    if (!noPermitido && !Superado) {
                        // appends <player> 
                        boxVolante3.appendChild(boxVol);
                        boxVolanteClub3.appendChild(boxVolClub);
                        boxVolanteValor3.appendChild(boxVolValor);

                        guardar_equipo(volanteEncontrado.id, volanteEncontrado.jugador, volanteEncontrado.valor);
                        volante3Elegido = volanteEncontrado.id;
                        hayVolante3 = true;
                        crearTachito(7);
                    }
                }
            }
            else if (hayMixto2 === false) {
                // se valida si ya se eligio el jugador
                let jug = buscar_jugador(volanteEncontrado.id);

                if (jug === false) {
                    //SE VALIDA MAXIMO 3 POR EQUIPO Y MAX 50 MILL PERMITIDO
                    sumar_equipo(volanteEncontrado.club, volanteEncontrado.valor);

                    if (!noPermitido && !Superado) {
                        // appends <player> 
                        boxMixto2.appendChild(boxVol);
                        boxMixtoClub2.appendChild(boxVolClub);
                        boxMixtoValor2.appendChild(boxVolValor);

                        guardar_equipo(volanteEncontrado.id, volanteEncontrado.jugador, volanteEncontrado.valor);
                        mixto2Elegido = volanteEncontrado.id;
                        hayMixto2 = true;
                        crearTachito(8);
                    }
                }
            }
            else {
                mostrarModal(5);
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
        mostrarModal(2);
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
                // se valida si ya se eligio el jugador
                let jug = buscar_jugador(delanteroEncontrado.id);

                if (jug === false) {
                    //SE VALIDA MAXIMO 3 POR EQUIPO Y MAX 50 MILL PERMITIDO
                    sumar_equipo(delanteroEncontrado.club, delanteroEncontrado.valor);

                    if (!noPermitido && !Superado) {
                        // appends <player> 
                        boxDelantero1.appendChild(boxDel);
                        boxDelanteroClub1.appendChild(boxDelClub);
                        boxDelanteroValor1.appendChild(boxDelValor);

                        guardar_equipo(delanteroEncontrado.id, delanteroEncontrado.jugador, delanteroEncontrado.valor);
                        delantero1Elegido = delanteroEncontrado.id;
                        hayDelantero1 = true;
                        //modificar luego
                        crearTachito(9);
                    }
                }
            }
            else if (hayDelantero2 === false) {
                // se valida si ya se eligio el jugador
                let jug = buscar_jugador(delanteroEncontrado.id);

                if (jug === false) {
                    //SE VALIDA MAXIMO 3 POR EQUIPO Y MAX 50 MILL PERMITIDO
                    sumar_equipo(delanteroEncontrado.club, delanteroEncontrado.valor);

                    if (!noPermitido && !Superado) {
                        // appends <player> 
                        boxDelantero2.appendChild(boxDel);
                        boxDelanteroClub2.appendChild(boxDelClub);
                        boxDelanteroValor2.appendChild(boxDelValor);

                        guardar_equipo(delanteroEncontrado.id, delanteroEncontrado.jugador, delanteroEncontrado.valor);
                        delantero2Elegido = delanteroEncontrado.id;
                        hayDelantero2 = true;
                        //modificar luego
                        crearTachito(10);
                    }
                }
            }
            else {
                mostrarModal(6);
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

    let aBorrar;
    let equipoAlmacenado = JSON.parse(localStorage.getItem("equipoElegido"));

    switch (indice) {
        case 0:
            aBorrar = document.getElementById('boxArqueroClub').textContent.toLowerCase();
            restar_equipo(aBorrar);
            $('#boxArquero').empty();
            $('#boxArqueroClub').empty();
            $('#boxArqueroValor').empty();
            $('.borrarItem:eq(0)').empty();
            equipoAlmacenado = equipoAlmacenado.filter(element => element.id != arqueroElegido);
            hayArquero = false;
            break;
        case 1:
            aBorrar = document.getElementById('boxDefensorClub1').textContent.toLowerCase();
            restar_equipo(aBorrar);
            $('#boxDefensor1').empty();
            $('#boxDefensorClub1').empty();
            $('#boxDefensorValor1').empty();
            $('.borrarItem:eq(1)').empty();
            equipoAlmacenado = equipoAlmacenado.filter(element => element.id != defensor1Elegido);
            hayDefensor1 = false;
            break;
        case 2:
            aBorrar = document.getElementById('boxDefensorClub2').textContent.toLowerCase();
            restar_equipo(aBorrar);
            $('#boxDefensor2').empty();
            $('#boxDefensorClub2').empty();
            $('#boxDefensorValor2').empty();
            $('.borrarItem:eq(2)').empty();
            equipoAlmacenado = equipoAlmacenado.filter(element => element.id != defensor2Elegido);
            hayDefensor2 = false;
            break;
        case 3:
            aBorrar = document.getElementById('boxDefensorClub3').textContent.toLowerCase();
            restar_equipo(aBorrar);
            $('#boxDefensor3').empty();
            $('#boxDefensorClub3').empty();
            $('#boxDefensorValor3').empty();
            $('.borrarItem:eq(3)').empty();
            equipoAlmacenado = equipoAlmacenado.filter(element => element.id != defensor3Elegido);
            hayDefensor3 = false;
            break;
        case 4:
            aBorrar = document.getElementById('boxMixtoClub1').textContent.toLowerCase();
            restar_equipo(aBorrar);
            $('#boxMixto1').empty();
            $('#boxMixtoClub1').empty();
            $('#boxMixtoValor1').empty();
            $('.borrarItem:eq(4)').empty();
            equipoAlmacenado = equipoAlmacenado.filter(element => element.id != mixto1Elegido);
            hayMixto1 = false;
            break;
        case 5:
            aBorrar = document.getElementById('boxVolanteClub1').textContent.toLowerCase();
            restar_equipo(aBorrar);
            $('#boxVolante1').empty();
            $('#boxVolanteClub1').empty();
            $('#boxVolanteValor1').empty();
            $('.borrarItem:eq(5)').empty();
            equipoAlmacenado = equipoAlmacenado.filter(element => element.id != volante1Elegido);
            hayVolante1 = false;
            break;
        case 6:
            aBorrar = document.getElementById('boxVolanteClub2').textContent.toLowerCase();
            restar_equipo(aBorrar);
            $('#boxVolante2').empty();
            $('#boxVolanteClub2').empty();
            $('#boxVolanteValor2').empty();
            $('.borrarItem:eq(6)').empty();
            equipoAlmacenado = equipoAlmacenado.filter(element => element.id != volante2Elegido);
            hayVolante2 = false;
            break;
        case 7:
            aBorrar = document.getElementById('boxVolanteClub3').textContent.toLowerCase();
            restar_equipo(aBorrar);
            $('#boxVolante3').empty();
            $('#boxVolanteClub3').empty();
            $('#boxVolanteValor3').empty();
            $('.borrarItem:eq(7)').empty();
            equipoAlmacenado = equipoAlmacenado.filter(element => element.id != volante3Elegido);
            hayVolante3 = false;
            break;
        case 8:
            aBorrar = document.getElementById('boxMixtoClub2').textContent.toLowerCase();
            restar_equipo(aBorrar);
            $('#boxMixto2').empty();
            $('#boxMixtoClub2').empty();
            $('#boxMixtoValor2').empty();
            $('.borrarItem:eq(8)').empty();
            equipoAlmacenado = equipoAlmacenado.filter(element => element.id != mixto2Elegido);
            hayMixto2 = false;
            break;
        case 9:
            aBorrar = document.getElementById('boxDelanteroClub1').textContent.toLowerCase();
            restar_equipo(aBorrar);
            $('#boxDelantero1').empty();
            $('#boxDelanteroClub1').empty();
            $('#boxDelanteroValor1').empty();
            $('.borrarItem:eq(9)').empty();
            equipoAlmacenado = equipoAlmacenado.filter(element => element.id != delantero1Elegido);
            hayDelantero1 = false;
            break;
        case 10:
            aBorrar = document.getElementById('boxDelanteroClub2').textContent.toLowerCase();
            restar_equipo(aBorrar);
            $('#boxDelantero2').empty();
            $('#boxDelanteroClub2').empty();
            $('#boxDelanteroValor2').empty();
            $('.borrarItem:eq(10)').empty();
            equipoAlmacenado = equipoAlmacenado.filter(element => element.id != delantero2Elegido);
            hayDelantero2 = false;
            break;
    }

    let almacenados_string = JSON.stringify(equipoAlmacenado);
    localStorage.setItem("equipoElegido", almacenados_string);

    //INHABILITO EL BOTÓN CONFIRMAR
    if (equipoAlmacenado.length !== 11) {
        document.getElementById("btn1").disabled = true;
    }

    total = 0;
    //CALCULAR TOTAL
    for (let i = 0; i < equipoAlmacenado.length; i++) {
        let objeto_jugador = equipoAlmacenado[i];
        total = total + (parseInt(objeto_jugador.valor));
    }

    if (total === 0) {
        mostrarTotIni();
    }
    else {
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


//BUSCAR JUGADOR
function buscar_jugador(id) {

    if (!localStorage.getItem("equipoElegido")) {
        return false;
    }

    let almacenados = JSON.parse(localStorage.getItem("equipoElegido"));

    let encontrado = false;
    let i = 0;
    while (!encontrado && i != almacenados.length) {

        if (almacenados[i].id == id) {

            encontrado = almacenados[i];
        }
        i++;
    }
    return encontrado;

}

let cantJugBoca = 0;
let cantJugInd = 0;
let cantJugRac = 0;
let cantJugRiv = 0;
let cantJugSan = 0;
let noPermitido;
let Superado;

//VALIDAR CANTIDAD EQUIPO
function sumar_equipo(equipo, valor) {

    Superado = false;
    noPermitido = false;

    if (total + parseInt(valor) > 50000000) {
        mostrarModal(10);
        Superado = true;
    }
    else {
        switch (equipo) {
            case "boca juniors":
                if (cantJugBoca >= 3) {
                    mostrarModal(9);
                    noPermitido = true;
                }
                else {
                    cantJugBoca++;
                }
                break;
            case "independiente":
                if (cantJugInd >= 3) {
                    mostrarModal(9);
                    noPermitido = true;
                }
                else {
                    cantJugInd++;
                }
                break;
            case "racing club":
                if (cantJugRac >= 3) {
                    mostrarModal(9);
                    noPermitido = true;
                }
                else {
                    cantJugRac++;
                }
                break;
            case "river plate":
                if (cantJugRiv >= 3) {
                    mostrarModal(9);
                    noPermitido = true;
                }
                else {
                    cantJugRiv++;
                }
                break;
            case "san lorenzo":
                if (cantJugSan >= 3) {
                    mostrarModal(9);
                    noPermitido = true;
                }
                else {
                    cantJugSan++;
                }
                break;
        }
    }

}

//RESTAR CANTIDAD EQUIPO
function restar_equipo(equipo) {

    if (equipo === "boca juniors" || equipo === " boca juniors") {
        cantJugBoca--;
    }
    else if (equipo === "independiente" || equipo === " independiente") {
        cantJugInd--;
    }
    else if (equipo === "racing club" || equipo === " racing club") {
        cantJugRac--;
    }
    else if (equipo === "river plate" || equipo === " river plate") {
        cantJugRiv--;
    }
    else if (equipo === "san lorenzo" || equipo === " san lorenzo") {
        cantJugSan--;
    }

}



//GUARDAR EQUIPO

function guardar_equipo(id_jugador, jugador_nuevo, jugador_valor) {

    let item = localStorage.getItem("equipoElegido");

    if (item) {

        let jugador = new Jugador_elegido(id_jugador, jugador_nuevo, jugador_valor);

        let almacenados = JSON.parse(localStorage.getItem("equipoElegido"));
        almacenados.push(jugador);

        //HABILITO EL BOTÓN CONFIRMAR
        if (almacenados.length === 11) {
            document.getElementById("btn1").disabled = false;
        }

        let almacenados_string = JSON.stringify(almacenados);
        localStorage.setItem("equipoElegido", almacenados_string);

        //CALCULAR TOTAL
        total = 0;
        for (let i = 0; i < almacenados.length; i++) {
            let objeto_jugador = almacenados[i];
            total = total + (parseInt(objeto_jugador.valor));
        }

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
    else {

        let jugador = new Jugador_elegido(id_jugador, jugador_nuevo, jugador_valor);
        let almacenados = new Array();
        almacenados.push(jugador);
        let almacenados_string = JSON.stringify(almacenados);
        localStorage.setItem("equipoElegido", almacenados_string);


        //CALCULAR TOTAL
        total = 0;
        for (let i = 0; i < almacenados.length; i++) {
            let objeto_jugador = almacenados[i];
            total = total + (parseInt(objeto_jugador.valor));
        }

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

//MOSTRAR TOTAL INICIAL

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

        $("#logo-pelota").fadeIn(1000)
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

//MODAL

function mostrarModal(param) {
    switch (param) {
        case 1:
            $('#descError').append(`Debe seleccionar una táctica`);
            break;
        case 2:
            $('#descError').append(`Debe elegir el nombre del equipo`);
            break;
        case 3:
            $('#descError').append(`Debe eliminar el arquero`);
            break;
        case 4:
            $('#descError').append(`Debe eliminar un defensor`);
            break;
        case 5:
            $('#descError').append(`Debe eliminar un volante`);
            break;
        case 6:
            $('#descError').append(`Debe eliminar un delantero`);
            break;
        case 7:
            $('#descError').append(`Debe completar el equipo con 11 jugadores`);
            break;
        case 8:
            $('#descError').append(`El equipo ${nombreEquipo} ya está participando. Exitos!`);
            break;
        case 9:
            $('#descError').append(`Puede elegir máximo 3 jugadores por equipo`);
            break;
        case 10:
            $('#descError').append(`Ha superado el límite de compra de $50.000.000`);
            break;
    }

    var modal = document.getElementById("myModal");
    modal.style.display = "block";

    var span = document.getElementsByClassName("close")[0];
    span.onclick = function () {
        modal.style.display = "none";
        $('#descError').replaceWith(`<p id="descError"></p>`);
    }

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
            $('#descError').replaceWith(`<p id="descError"></p>`);
        }
    }
}


//AJAX
function btnConfirmar() {
    // appends 
    $('#btnConfirmar').append(`<button type="submit" class="btn btn-dark" id="btn1" ><a href="#pag-titulo">Confirmar</a></button>`);

    //INHABILITO EL BOTÓN CONFIRMAR
    document.getElementById("btn1").disabled = true;

    const URLGET = "https://jsonplaceholder.typicode.com/posts"

    $("#btn1").click(() => {

        let equipoCompleto = JSON.parse(localStorage.getItem("equipoElegido"));

        let confirmar = confirm("¿Desea confirmar el equipo?");

        const infoPost = equipoCompleto;

        if (confirmar) {
            $(".spinner:eq(1)").fadeIn();
            setTimeout(mostrarDibujoEquipo, 3000);

            $.post(URLGET, infoPost, (respuesta, estado) => {
                if (estado === "success") {
                    mostrarModal(8);
                }
            });

        }
    });

}

function mostrarDibujoEquipo() {
    $(".spinner:eq(1)").hide();
    $(".reglas").hide();
    $(".seleccionBox").hide();
    $(".contenido-cabecera").hide();
    $("#img-portada").show();
    $("#players").show();
    $(".table-total").css({
        'position': 'absolute',
    })

    let boxPlayer1 = document.getElementById('arquero');
    let namePlayer1 = document.getElementById('boxArquero').textContent;
    let player1 = document.createElement('div');
    player1.textContent = namePlayer1;
    boxPlayer1.appendChild(player1);

    let boxPlayer2 = document.getElementById('defensor1');
    let namePlayer2 = document.getElementById('boxDefensor1').textContent;
    let player2 = document.createElement('div');
    player2.textContent = namePlayer2;
    boxPlayer2.appendChild(player2);

    let boxPlayer3 = document.getElementById('defensor2');
    let namePlayer3 = document.getElementById('boxDefensor2').textContent;
    let player3 = document.createElement('div');
    player3.textContent = namePlayer3;
    boxPlayer3.appendChild(player3);

    let boxPlayer4 = document.getElementById('defensor3');
    let namePlayer4 = document.getElementById('boxDefensor3').textContent;
    let player4 = document.createElement('div');
    player4.textContent = namePlayer4;
    boxPlayer4.appendChild(player4);

    let boxPlayer5 = document.getElementById('defensor4');
    let namePlayer5 = document.getElementById('boxMixto1').textContent;
    let player5 = document.createElement('div');
    player5.textContent = namePlayer5;
    boxPlayer5.appendChild(player5);

    let boxPlayer6 = document.getElementById('volante1');
    let namePlayer6 = document.getElementById('boxVolante1').textContent;
    let player6 = document.createElement('div');
    player6.textContent = namePlayer6;
    boxPlayer6.appendChild(player6);

    let boxPlayer7 = document.getElementById('volante2');
    let namePlayer7 = document.getElementById('boxVolante2').textContent;
    let player7 = document.createElement('div');
    player7.textContent = namePlayer7;
    boxPlayer7.appendChild(player7);

    let boxPlayer8 = document.getElementById('volante3');
    let namePlayer8 = document.getElementById('boxVolante3').textContent;
    let player8 = document.createElement('div');
    player8.textContent = namePlayer8;
    boxPlayer8.appendChild(player8);

    let boxPlayer9 = document.getElementById('volante4');
    let namePlayer9 = document.getElementById('boxMixto2').textContent;
    let player9 = document.createElement('div');
    player9.textContent = namePlayer9;
    boxPlayer9.appendChild(player9);

    let boxPlayer10 = document.getElementById('delantero1');
    let namePlayer10 = document.getElementById('boxDelantero1').textContent;
    let player10 = document.createElement('div');
    player10.textContent = namePlayer10;
    boxPlayer10.appendChild(player10);

    let boxPlayer11 = document.getElementById('delantero2');
    let namePlayer11 = document.getElementById('boxDelantero2').textContent;
    let player11 = document.createElement('div');
    player11.textContent = namePlayer11;
    boxPlayer11.appendChild(player11);


}






