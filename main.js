var datos;
var datos_agrupados;

function extraerDatos() {
    let datos_input = document.querySelector('textarea').value.split(',');
    datos = [];
    
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
    document.getElementById('desviacion').innerText = `Desviación Estandar: ${calcularDesviacionEstandar(datos, calcularMedia(datos))}`;
    document.getElementById('varianza').innerText = `Varianza: ${calcularVarianza(datos, calcularMedia(datos))}`;
    document.getElementById('alert').innerHTML = '';

    agruparDatos();
    mostrarDatosTabla(datos_agrupados, datos.length);
    graficarDiagramaLineas(datos_agrupados);
}

function agruparDatos(){
    datos_agrupados = [];
    if (datos.length >= 20){
        let rango = datos[datos.length-1] - datos[0];
        let numero_intervalos = Math.round(Math.sqrt(datos.length));
        let amplitud = Math.round(rango/numero_intervalos);
        let intervalo = datos[0] - Math.abs(rango - (numero_intervalos * amplitud));

        for (let i = 0; i < numero_intervalos; i++){
            datos_agrupados.push({
                dato: `[${intervalo} - ${intervalo + amplitud}]`,
                frecuencia: datos.filter(num => (num >= intervalo && num <= intervalo + amplitud)).length
            });
            intervalo = intervalo + 1 + amplitud;
        }
    } else {
        for (let i = 0; i < datos.length; i++){
            if(!datos_agrupados.find(num => num.dato == datos[i])){
                datos_agrupados.push({
                    dato: datos.find(num => num == datos[i]),
                    frecuencia: datos.filter(num => num == datos[i]).length
                });   
            }
        }
    } 
}
