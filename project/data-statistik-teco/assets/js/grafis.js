var chart = new Chart(ctx, {
  type: 'bar',
  data: grafis,
  options: {
    plugins: {
        legend: {
            display: false
        },
        title: {
            display: true,
            text: 'Divisi Grafis',
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