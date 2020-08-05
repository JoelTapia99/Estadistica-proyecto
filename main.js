var datos = [];

function calcularMedia() {
    let suma = 0;
    for (let i = 0; i < datos.length; i++) {
        suma += datos[i];
    }
    return suma / datos.length;
}

function calcularMediana() {
    if (datos.length % 2 == 0) {
        return (datos[datos.length / 2] + datos[(datos.length / 2) - 1]) / 2;
    } else {
        return datos[(datos.length - 1) / 2];
    }
}

function calcularModa() {
    let numerosFiltrados = [];
    let moda = [];
    let frecuencia = 0;
    console.log('entre');

    for (let i = 0; i < datos.length; i++) {
        numerosFiltrados = datos.filter(num => num == datos[i]);

        if (numerosFiltrados.length >= frecuencia) {
            frecuencia = numerosFiltrados.length;
            moda.push(numerosFiltrados[0]);
        }
    }

    console.log(moda);

    if (frecuencia > 1) {
        if ( moda.length > 1 ) {
            let modaTotal='';
            for (let i = 0; i < moda.length; i+=frecuencia) {
                modaTotal+= `${moda[i]}, `;
            }
            return `${modaTotal} Frecuencia: ${frecuencia}`;
        }else{
            return `${moda[0]}, Frecuencia: ${frecuencia}`;
        }
        
    } else {
        return `No existen valores repetidos.`
    }
}

var swap = function (array, firstIndex, secondIndex) {
    var temp = array[firstIndex];
    array[firstIndex] = array[secondIndex];
    array[secondIndex] = temp;
};

var indexOfMinimum = function (array, startIndex) {

    var minValue = array[startIndex];
    var minIndex = startIndex;

    for (var i = minIndex + 1; i < array.length; i++) {
        if (array[i] < minValue) {
            minIndex = i;
            minValue = array[i];
        }
    }
    return minIndex;
};

var selectionSort = function (array) {
    var min;
    for (var i = 0; i < array.length; i++) {
        min = indexOfMinimum(array, i);
        swap(array, min, i);
    }
};

function extraerDatos() {
    var datos_locales = []
    datos = [];
    let datos_input = document.querySelector('input');
    datos_locales = datos_input.value.split(',');
    
    
    for (let i = 0; i < datos_locales.length; i++) {
        if (Number(datos_locales[i]) >= 0) {
            datos.push(Number(datos_locales[i]));
            selectionSort(datos);
            
            document.getElementById('datos').innerText = `DATOS: [${datos}]`;
            document.getElementById('mediana').innerText = `Mediana: ${calcularMediana()}`;
            document.getElementById('media').innerText = `Media: ${calcularMedia()}`;
            document.getElementById('moda').innerText = `Moda: ${calcularModa()}`;

            document.getElementById('alert').innerText = ``;

        } else {
            document.getElementById('alert').innerHTML = `<div class='alert alert-warning' role='alert'>
            Datos no válidos.
            </div>`;
            break;
        }

    }

    mostrarDatosTabla();

}

