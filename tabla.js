var datos_agrupados;
var frecuencia_acumulada;

function agruparDatos(datos){
    for (let i = 0; i < datos.length; i++){
        if(!datos_agrupados.find(num => num.dato == datos[i] )){
            datos_agrupados.push({
                dato: datos.find(num => num == datos[i]),
                frecuencia: datos.filter(num => num == datos[i]).length
            });   
        }
    }
}

function calcularFrecuenciaAcumulada(frecuencia){
    return frecuencia_acumulada+=frecuencia;
}

function calcularFrecuenciaRelativa(frecuencia, datos){
    return frecuencia/datos.length;
}

function calcularFrecuenciaPorcentual(frecuencia){
    return frecuencia * 100;
}

function mostrarDatosTabla(datos){
    datos_agrupados = [];
    frecuencia_acumulada = 0;

    agruparDatos(datos);

    document.getElementById('table-body').innerHTML = '';
    for (let i = 0; i < datos_agrupados.length; i++){
        document.getElementById('table-body')
            .innerHTML += `<tr><td>${datos_agrupados[i].dato}</td>
                            <td>${datos_agrupados[i].frecuencia}</td>
                            <td>${calcularFrecuenciaAcumulada(datos_agrupados[i].frecuencia)}</td>
                            <td>${calcularFrecuenciaRelativa(datos_agrupados[i].frecuencia, datos)}</td>
                            <td>${calcularFrecuenciaPorcentual(calcularFrecuenciaRelativa(datos_agrupados[i].frecuencia, datos))}%</td></tr>`;   
    }
}