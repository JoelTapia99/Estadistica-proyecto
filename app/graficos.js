function graficarDiagramaLineas(datos_agrupados) {

    let datos = [];
    let frecuencia = [];

    for (let i = 0; i < datos_agrupados.length; i++) {
        datos.push(datos_agrupados[i].dato);
        frecuencia.push(datos_agrupados[i].frecuencia);
    }

    var ctx = document.getElementById('grafico-puntos').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: datos,
            datasets: [{
                label: 'Gráfico de puntos',
                backgroundColor: 'red',
                borderColor: 'red',
                data: frecuencia,
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
            elements: {
                point: {
                    pointStyle: 'circle'
                }
            }
        }
    });
}
