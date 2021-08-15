var chart = new Chart(ctx, {
  type: 'bar',
  data: website,
  options: {
    plugins: {
        legend: {
            display: false
        },
        title: {
            display: true,
            text: 'Divisi Website',
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