function graficarDiagramaLineas(datos_agrupados) {

    let datos = [];
    let frecuencia = [];

    for (let i = 0; i < datos_agrupados.length; i++) {
        datos.push(datos_agrupados[i].dato);
        frecuencia.push(datos_agrupados[i].frecuencia);
    }

    var ctx = document.getElementById('grafico-lineas').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: datos,
            datasets: [{
                label: 'Grafico de puntos',
                data: frecuencia,
                lineTension: 0,
                fill: false,
                showLine: false,
                borderColor: 'blue',
                backgroundColor: 'transparent',
                borderDash: [5, 5],
                pointBorderColor: 'blue',
                pointBackgroundColor: 'blue',
                pointRadius: 5,
                pointHoverRadius: 10,
                pointHitRadius: 30,
                pointBorderWidth: 2,
                pointStyle: 'rectRounded'
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
}
