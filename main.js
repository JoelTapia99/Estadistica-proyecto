var datos;
var datos_agrupados;
var bdd = window.localStorage;

window.onload = function (){
    if(bdd.getItem('datos')){
        document.querySelector('textarea').value = bdd.getItem('datos');
        extraerDatos();
    }
}

function extraerDatos() {
    let datos_input = document.querySelector('textarea').value.split(',');
    bdd.setItem('datos', datos_input);
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
    graficarHistograma(datos_agrupados);
    graficarDiagramaCaja(datos, datos.length);
    mainTallosHojas(datos);
}

function agruparDatos(){
    datos_agrupados = [];
    if (datos.length >= 20){
        let rango = datos[datos.length-1] - datos[0];
        let numero_intervalos = Math.round(Math.sqrt(datos.length));
        let amplitud = rango/numero_intervalos;
        let intervalo = datos[0];

        if((rango - (numero_intervalos * amplitud)) >= 0){
            intervalo -= (rango - (numero_intervalos * amplitud));
        }

        for (let i = 0; i < numero_intervalos; i++){
            datos_agrupados.push({
                dato: `[${Math.round(intervalo*100)/100} - ${Math.round((intervalo + amplitud)*100)/100}]`,
                frecuencia: datos.filter(num => (num >= intervalo && num <= intervalo + amplitud)).length
            });
            intervalo = intervalo + amplitud;
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

function limpiar(){
    document.querySelector('textarea').value = '';
    datos = [];
    datos_agrupados = [];
    bdd.removeItem('datos');
}