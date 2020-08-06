function calcularMedia(datos) {
    let suma = 0;
    for (let i = 0; i < datos.length; i++) {
        suma += datos[i];
    }
    return suma / datos.length;
}

function calcularMediana(datos) {
    if (datos.length % 2 == 0) {
        return (datos[datos.length / 2] + datos[(datos.length / 2) - 1]) / 2;
    } else {
        return datos[(datos.length - 1) / 2];
    }
}

function calcularModa(datos) {
    let numerosFiltrados = [];
    let moda = [];
    let frecuencia = 0;

    for (let i = 0; i < datos.length; i++) {
        numerosFiltrados = datos.filter(num => num == datos[i]);
        if (numerosFiltrados.length > frecuencia) {
            frecuencia = numerosFiltrados.length;
            moda = [];
            moda.push(numerosFiltrados[0]);
        }
        if(numerosFiltrados.length == frecuencia){
            if(!moda.find(num => num == numerosFiltrados[0])){
                moda.push(numerosFiltrados[0]);
            }
        }
    }

    if (frecuencia > 1) {
       return `${moda} - (veces que se repite: ${frecuencia})`;
    } else {
        return 'No existen valores repetidos.';
    }
}