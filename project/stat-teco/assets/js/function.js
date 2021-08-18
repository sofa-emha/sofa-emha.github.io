function getQueryFromURL() {
  wls = window.location.search;
  if (checkURLQuery(wls)) {
    usp = new URLSearchParams(wls); query = usp.get('s');
    major = query.charAt(0).toUpperCase() + query.slice(1);
    if (divisi.indexOf(major) !== -1) {return query;}
    else {window.location = window.location.href.split("?")[0];}
  }
  else {return query = null;}
}

function checkURLQuery(url) {
  if(url.indexOf('?s=') != -1) {return true}
  else {return false}
}


function getDivisiFrom(data) {
  for (const key in data) {
    if (Object.hasOwnProperty.call(data, key)) { const
      object = data[key],
      jurusan = object['Kompetensi Keahlian'],
      divisi = object['Divisi'];
      switch (divisi) {
        case "Pemrograman Java": java.push(jurusan); break;
        case "Website": website.push(jurusan); break;
        case "Desain Grafis": grafis.push(jurusan); break;
        case "Office": office.push(jurusan); break;
        case "Jaringan": jaringan.push(jurusan); break;
        case "Animasi": animasi.push(jurusan); break;
        default: Alert_Warning.fire({
          text: "Divisi tidak ditemukan!"
        }); break;
      }
    }
  }
}

function countingPeopleFrom(divisi, attr) {
  let object = {}, i = 0; divisi.sort();
  for (; i < divisi.length; i++) {
    if (object[divisi[i]]) {
      object[divisi[i]] += 1
    } else {
      object[divisi[i]] = 1
    }
  }
  switch (attr) {
    case "Java": java.length = 0; java.push(object); break;
    case "Website": website.length = 0; website.push(object); break;
    case "Grafis": grafis.length = 0; grafis.push(object); break;
    case "Office": office.length = 0; office.push(object); break;
    case "Jaringan": jaringan.length = 0; jaringan.push(object); break;
    case "Animasi": animasi.length = 0; animasi.push(object); break;
    default: Alert_Warning.fire({text: "Divisi tidak ditemukan!"}); break;
  }
}

function splitLabelFrom(divisi, attr) { attr = attr.toLowerCase();
  jurusan = Object.keys(divisi[0]); label_attr = eval('label_'+attr);
  for (const key in jurusan) {
    if (Object.hasOwnProperty.call(jurusan, key)) {
      const label = jurusan[key];
      switch (label) {
        case "Akuntansi dan Keuangan Lembaga": label_attr.push("AKL"); break;
        case "Bisnis Daring dan Pemasaran": label_attr.push("BDP"); break;
        case "Otomatisasi dan Tata Kelola Perkantoran": label_attr.push("OTKP"); break;
        case "Teknik Kendaraan Ringan Otomotif": label_attr.push("TKRO"); break;
        case "Teknik Komputer dan Jaringan": label_attr.push("TKJ"); break;
        case "Teknik dan Bisnis Sepeda Motor": label_attr.push("TBSM"); break;
        default: Alert_Warning.fire({text: "Jurusan tidak ditemukan!"}); break;
      }
    }
  }
}

function splitDataFrom(divisi, attr) { attr = attr.toLowerCase();
  jurusan = Object.values(divisi[0]); data_attr = eval('data_'+attr);
  for (const key in jurusan) {
    if (Object.hasOwnProperty.call(jurusan, key)) {
      const data = jurusan[key];
      data_attr.push(data)
    }
  }
}

function createColorFrom(label, attr) { attr = attr.toLowerCase();
  warna_attr = eval('warna_'+attr); border_attr = eval('border_'+attr)
  for (let i = 0; i < label.length; i++) {
    const jurusan = label[i];
    switch (jurusan) {
      case 'AKL':
        warna_attr.push("rgba(255, 99, 132, 0.2)");
        border_attr.push("rgba(255, 99, 132, 1)")
        break;
      case 'BDP':
        warna_attr.push("rgba(75, 192, 192, 0.2)");
        border_attr.push("rgba(75, 192, 192, 1)")
        break;
      case 'OTKP':
        warna_attr.push("rgba(54, 162, 235, 0.2)");
        border_attr.push("rgba(54, 162, 235, 1)")
        break;
      case 'TKRO':
        warna_attr.push("rgba(255, 206, 86, 0.2)");
        border_attr.push("rgba(255, 206, 86, 1)")
        break;
      case 'TKJ':
        warna_attr.push("rgba(255, 159, 64, 0.2)");
        border_attr.push("rgba(255, 159, 64, 1)")
        break;
      case 'TBSM':
        warna_attr.push("rgba(191, 191, 191, 0.2)");
        border_attr.push("rgba(191, 191, 191, 1)")
        break;
      default: Alert_Warning.fire({text: "Jurusan tidak ditemukan!"}); break;
    }
  }
}

function totalDataFrom(divisi) {
  return divisi.reduce((s,o) => {return s + o}, 0);
}

function viewDivisi(query) {
  if (query === null) { label_all = divisi;
    data_all = [totalDataFrom(data_java), totalDataFrom(data_website), totalDataFrom(data_grafis), totalDataFrom(data_office), totalDataFrom(data_jaringan), totalDataFrom(data_animasi)]
    border_all = ["rgba(255, 99, 132, 1)", "rgba(255, 206, 86, 1)", "rgba(75, 192, 192, 1)", "rgba(54, 162, 235, 1)", "rgba(255, 159, 64, 1)", "rgba(191, 191, 191, 1)"];
    warna_all = ["rgba(255, 99, 132, 0.2)", "rgba(255, 206, 86, 0.2)", "rgba(75, 192, 192, 0.2)", "rgba(54, 162, 235, 0.2)", "rgba(255, 159, 64, 0.2)", "rgba(191, 191, 191, 0.2)"];
    pushToChartJS(label_all, data_all, warna_all, border_all)
  } else {
    label_divisi = eval("label_"+query); warna_divisi = eval("warna_"+query);
    border_divisi = eval("border_"+query); data_divisi = eval("data_"+query);
    pushToChartJS(label_divisi, data_divisi, warna_divisi, border_divisi)
  }
}

function pushToChartJS(label_divisi, data_divisi, warna_divisi, border_divisi) {
  'use strict'
  feather.replace({ 'aria-hidden': 'true' })
  var ctx = document.getElementById('myChart')
  var Data = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: label_divisi,
      datasets: [{
        borderWidth: 4,
        backgroundColor: warna_divisi,
        borderColor: border_divisi,
        data: data_divisi
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true,
            suggestedMax: 10
          }
        }]
      },
      legend: {
        display: false
      }
    }
  })
}