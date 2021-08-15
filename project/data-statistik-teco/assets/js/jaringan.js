var chart = new Chart(ctx, {
  type: 'bar',
  data: jaringan,
  options: {
    plugins: {
        legend: {
            display: false
        },
        title: {
            display: true,
            text: 'Divisi Jaringan',
            font: {
              size: 50
            }
        }
    },
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});