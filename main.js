var datos;

function extraerDatos() {
    let datos_input = [];
    datos = [];
    datos_input = document.querySelector('input').value.split(',');
    
    for (let i = 0; i < datos_input.length; i++) {
        if (Number(datos_input[i]) >= 0) {
            datos.push(Number(datos_input[i]));
        } else {
            document.getElementById('alert').innerHTML = `<div class="alert alert-warning" role="alert">
                                                        Datos no válidos.</div>`;
            return 0;
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

