var frecuencia_acumulada;

function calcularFrecuenciaAcumulada(frecuencia){
    return frecuencia_acumulada+=frecuencia;
}

function calcularFrecuenciaRelativa(frecuencia, total){
    return frecuencia/total;
}

function calcularFrecuenciaPorcentual(frecuencia){
    return frecuencia * 100;
}

function mostrarDatosTabla(datos, total){
    frecuencia_acumulada = 0;

    document.getElementById('table-body').innerHTML = '';
    for (let i = 0; i < datos.length; i++){
        document.getElementById('table-body')
            .innerHTML += `<tr><td>${datos[i].dato}</td>
                            <td>${datos[i].frecuencia}</td>
                            <td>${calcularFrecuenciaAcumulada(datos[i].frecuencia)}</td>
                            <td>${ Math.round(calcularFrecuenciaRelativa(datos[i].frecuencia, total)*1000)/1000}</td>
                            <td>${Math.round(calcularFrecuenciaPorcentual(calcularFrecuenciaRelativa(datos[i].frecuencia, total))*100)/100} %</td></tr>`;   
    }
}