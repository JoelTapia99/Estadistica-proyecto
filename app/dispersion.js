function calcularDesviacionEstandar(datos, media){
    let sumatoria = 0;
    for (let i = 0; i < datos.length; i++){
        sumatoria += Math.pow(datos[i] - media, 2);
    }
    return Math.round(Math.sqrt(sumatoria/datos.length)*1000)/1000;
}

function calcularVarianza(datos, media){
    let sumatoria = 0;
    for (let i = 0; i < datos.length; i++){
        sumatoria += Math.pow(datos[i] - media, 2);
    }
    return Math.round(sumatoria/datos.length*1000)/1000;
}