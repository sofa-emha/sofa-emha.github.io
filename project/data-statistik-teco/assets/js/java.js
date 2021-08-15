var chart = new Chart(ctx, {
  type: 'bar',
  data: java,
  options: {
    plugins: {
        legend: {
            display: false
        },
        title: {
            display: true,
            text: 'Divisi Office',
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