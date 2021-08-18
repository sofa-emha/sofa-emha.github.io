/**
 * Script ori dari template
 * ntar maw dipindah ke function.js
 */

(function () {
  'use strict'
  feather.replace({ 'aria-hidden': 'true' })
  var ctx = document.getElementById('myChart')
  var Data = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
      ],
      datasets: [{
        data: [
          15339,
          21345,
          18483,
          24003,
          23489,
          24092,
          12034
        ],
        backgroundColor: '#007bff',
        borderColor: '#007bff',
        borderWidth: 4,
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      },
      legend: {
        display: false
      }
    }
  })
})()
