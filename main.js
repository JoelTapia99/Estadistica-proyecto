var datos;

function extraerDatos() {
    let datos_input = [];
    datos = [];
    datos_input = document.querySelector('input').value.split(',');
    
    for (let i = 0; i < datos_input.length; i++) {
        if (isNaN(Number(datos_input[i]))) {
            document.getElementById('alert').innerHTML = `<div class="alert alert-warning" role="alert">
                                                        Datos no válidos.</div>`;
            return 0;
        } else {
            datos.push(Number(datos_input[i]));
        }
    }

    selectionSort(datos);

    document.getElementById('datos').innerText = `DATOS ORDENADOS: [${datos}]`;
    document.getElementById('mediana').innerText = `Mediana: ${calcularMediana(datos)}`;
    document.getElementById('media').innerText = `Media: ${calcularMedia(datos)}`;
    document.getElementById('moda').innerText = `Moda: ${calcularModa(datos)}`;
    document.getElementById('alert').innerHTML = '';

    mostrarDatosTabla(datos);
}

