//variables para datos sin hojas
var talloSinHojas = [];
var exiteTalloSinHojas = false;

//variables para datos con hojas
var tallosConHojas = [];
var tallos, hojas = [];

function mainTallosHojas(datos) {

    tallos = [];
    hojas = [];
    talloSinHojas = [];
    tallosConHojas = [];
    exiteTalloSinHojas = false;

    clasificarDatos(datos);
    agruparNumerosDecimales(tallos, hojas);
    graficarTallosSinHojas();
    graficarTallosConHojas();

}

function clasificarDatos(datos) {

    let datosString = [];

    for (let i = 0; i < datos.length; i++) {

        datosString.push(datos[i].toString());

        if (datosString[i].length < 2) {

            talloSinHojas.push(datosString[i]);
            exiteTalloSinHojas = true;

        } else if (datosString[i].length > 1) {

            numerosDecimales(datosString[i]);

        }

    }

}

function numerosDecimales(dato) {
    let auxiliarTallo = [];
    let auxiliarHoja = [];
    let esTallos = true;

    for (let i = 0; i < dato.length; i++) {

        if (isNaN(Number(dato[i]))) {
            esTallos = false;
        }

        if (esTallos == true) {
            auxiliarTallo += dato[i];
        } else {

            if (!(dato[i] == '.')) {
                auxiliarHoja += dato[i];
            }

        }
    }

    tallos.push(auxiliarTallo);
    hojas.push(auxiliarHoja);

}

function agruparNumerosDecimales(tallos, hojas) {

    for (let i = 0; i < tallos.length; i++) {

        let dato = tallosConHojas.find(elem => elem.tallo == tallos[i]);

        if (dato == undefined) {
            tallosConHojas.push({
                tallo: tallos[i],
                hojas: hojas[i]
            })
        } else {
            dato.tallo = tallos[i];
            dato.hojas += ` - ${hojas[i]}`
        }

    }

}

function graficarTallosSinHojas() {

    document.getElementById('datos-sin-tallos').innerHTML = '';

    selectionSort(talloSinHojas);

    let datos = talloSinHojas.join(', ');

    if (exiteTalloSinHojas) {
        document.getElementById('datos-sin-tallos')
            .innerHTML += `<div class='alert alert-light role='alert'>
        <h4 class='alert-heading'><b>Datos sin tallos.</b></h4>
        <hr>
        <p> <b>${datos}</b> </p>
        </div>`;
    } else {

        document.getElementById('datos-sin-tallos').innerHTML = '<p></p>';

    }

}

function graficarTallosConHojas() {
    document.getElementById('cuerpo-tallos').innerHTML = '';
    document.getElementById('cabecera-tallos').innerHTML = '';

    if (tallosConHojas.length == 0) {
        return 0;
    } else {
        document.getElementById('cabecera-tallos').innerHTML = `<tr>
        <th scope="col">Tallos</th>
        <th scope="col">Hojas</th>
        </tr>`;

        for (const item of tallosConHojas) {
            document.getElementById('cuerpo-tallos')
                .innerHTML += `<tr><td>${item.tallo}</td>
                                <td>${item.hojas}</td></tr>`;
        }
    }



}