var talloSinHojas = [];

var tallos = [];
var hojas = [];

function mostrarTallosHojas(datos) {

    tallos = [];
    hojas = [];
    let datosString = [];

    document.getElementById('cuerpo-tallos').innerHTML = '';

    for (let i = 0; i < datos.length; i++) {

        datosString.push(datos[i].toString());

        if (datosString[i].length < 2) {

            talloSinHojas.push(datosString[i]);

        } else if (datosString[i].length > 1) {

            numerosDecimales(datosString[i]);

        }

    }

    varidarTallosRepetidos();
    graficarTallosHojas();
    graficarTallosSinHojas();

}

function numerosDecimales(dato) {
    let auxiliarTallo = '';
    let auxiliarHoja = '';
    let esTallos = true;

    for (let i = 0; i < dato.length; i++) {

        if (isNaN(Number(dato[i]))) {
            esTallos = false;
            console.log(isNaN(dato[i]));
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

function graficarTallosSinHojas() {

    document.getElementById('datos-sin-tallos').innerHTML = '';
    selectionSort(talloSinHojas);

    let datos = talloSinHojas.join(', ');

    document.getElementById('datos-sin-tallos')
        .innerHTML += `<div class='alert alert-success role='alert'>
        <h4 class='alert-heading'>Datos sin tallos.</h4>
        <hr>
        <p> ${datos} </p>
        </div>`;
}

function graficarTallosHojas() {


    document.getElementById('cuerpo-tallos').innerHTML = '';

    for (let i = 0; i < tallos.length; i++) {

        document.getElementById('cuerpo-tallos')
            .innerHTML += `<tr><td>${tallos[i]}</td>
                                                        <td>${hojas[i]}</td></tr>`;
    }

}