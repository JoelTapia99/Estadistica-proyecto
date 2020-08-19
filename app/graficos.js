function graficarDiagramaLineas(datos_agrupados) {

    let datos = [];
    let frecuencias = [];

    for (let i = 0; i < datos_agrupados.length; i++) {
        datos.push(datos_agrupados[i].dato);
        frecuencias.push(datos_agrupados[i].frecuencia);
    }

    const ctx = document.getElementById('grafico-puntos').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: datos,
            datasets: [{
                label: 'Gráfico de puntos',
                backgroundColor: 'red',
                borderColor: 'red',
                data: frecuencias,
                fill: false,
                pointRadius: 10,
                pointHoverRadius: 15,
                showLine: false // no line shown
            }]
        },
        options: {
            responsive: true,
            legend: {
                display: false
            },
            title: {
                display: true,
                text: 'Gráfico de puntos'
            },
            elements: {
                point: {
                    pointStyle: 'circle'
                }
            }
        }
    });
}

function graficarHistograma(datos_agrupados) {
    let datos = [];
    let frecuencias = [];

    for (let i = 0; i < datos_agrupados.length; i++) {
        datos.push(datos_agrupados[i].dato);
        frecuencias.push(datos_agrupados[i].frecuencia);
    }

    const ctx = document.getElementById('histograma').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: datos,
            datasets: [{
                label: 'Histograma',
                backgroundColor: 'red',
                borderColor: 'red',
                data: frecuencias,
            }]
        },
        options: {
            responsive: true,
            legend: {
                display: false
            },
            title: {
                display: true,
                text: 'Histograma'
            }
        }
    });
}

function graficarDiagramaCaja(datos, tamaño) {
    const ctx = document.getElementById('diagrama-caja').getContext("2d");
    new Chart(ctx, {
        type: 'horizontalBoxplot',
        data: {
            labels: tamaño >= 20? ['Datos agrupados']: ['Datos no agrupados'],
            datasets: [{
                label: 'Diagrama de caja',
                backgroundColor: 'rgba(255,0,0,0.5)',
                borderColor: 'red',
                borderWidth: 1,
                outlierColor: '#999999',
                padding: 10,
                itemRadius: 0,
                data: [datos]
            }],
            options: {
                responsive: true,
                legend: {
                    position: 'top',
                }
            }
        }
    });
}