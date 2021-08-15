/**
 * Variable
 */
var ctx = document.getElementById('chart').getContext('2d');
let
  warna_java = [], warna_website = [], warna_office = [],
  warna_jaringan = [], warna_grafis = [], warna_animasi = [],

  border_java = [], border_website = [], border_office = [],
  border_jaringan = [], border_grafis = [], border_animasi = [],

  label_java = [], label_website = [], label_office = [],
  label_jaringan = [], label_grafis = [], label_animasi = [],

  data_java = [], data_website = [], data_office = [],
  data_jaringan = [], data_grafis = [], data_animasi = []
  
  office = {
    labels: label_office,
    datasets: [{
      data: data_office,
      backgroundColor: warna_office,
      borderColor: border_office,
      borderWidth: 1
    }]
  },
  
  website = {
    labels: label_website,
    datasets: [{
      data: data_website,
      backgroundColor: warna_website,
      borderColor: border_website,
      borderWidth: 1
    }]
  },
  
  jaringan = {
    labels: label_jaringan,
    datasets: [{
      data: data_jaringan,
      backgroundColor: warna_jaringan,
      borderColor: border_jaringan,
      borderWidth: 1
    }]
  },
  
  java = {
    labels: label_java,
    datasets: [{
      data: data_java,
      backgroundColor: warna_java,
      borderColor: border_java,
      borderWidth: 1
    }]
  },
  
  animasi = {
    labels: label_animasi,
    datasets: [{
      data: data_animasi,
      backgroundColor: warna_animasi,
      borderColor: border_animasi,
      borderWidth: 1
    }]
  },
  
  grafis = {
    labels: label_grafis,
    datasets: [{
      data: data_grafis,
      backgroundColor: warna_grafis,
      borderColor: border_grafis,
      borderWidth: 1
    }]
  };

/**
 * Function
 */
function filterJurusan(array) {
  let java = [], website = [], office = [],
    jaringan = [], grafis = [], animasi = [];

  for (const key in array) {
    if (Object.hasOwnProperty.call(array, key)) {
      const element = array[key];
      if (element['Divisi'] === "Office") {
        office.push(element['Kompetensi Keahlian'])
      }
      if (element['Divisi'] === "Website") {
        website.push(element['Kompetensi Keahlian'])
      }
      if (element['Divisi'] === "Jaringan") {
        jaringan.push(element['Kompetensi Keahlian'])
      }
      if (element['Divisi'] === "Animasi") {
        animasi.push(element['Kompetensi Keahlian'])
      }
      if (element['Divisi'] === "Pemrograman Java") {
        java.push(element['Kompetensi Keahlian'])
      }
      if (element['Divisi'] === "Desain Grafis") {
        grafis.push(element['Kompetensi Keahlian'])
      }
    }
  }
  countDivisi(office, "Office");
  countDivisi(website, "Website");
  countDivisi(jaringan, "Jaringan");
  countDivisi(animasi, "Animasi");
  countDivisi(java, "Java");
  countDivisi(grafis, "Grafis");
}

function countDivisi(array, val) {
  let counts = {}; array.sort();
  for (let i = 0; i < array.length; i++) {
    if (counts[array[i]]) {
      counts[array[i]] += 1
    } else {
      counts[array[i]] = 1
    }
  }
  
  for (let key in counts) {
    otherMisc(counts, val, key);
  }
}

function otherMisc(array, divisi, kunci) {
  if (divisi === "Office") {
    if (kunci === "Akuntansi dan Keuangan Lembaga") {
      label_office.push("AKL")
      warna_office.push("rgba(255, 99, 132, 0.2)");
      border_office.push("rgba(255, 99, 132, 1)");
      data_office.push(array[kunci]);
    }
    if (kunci === "Bisnis Daring dan Pemasaran") {
      label_office.push("BDP")
      warna_office.push("rgba(75, 192, 192, 0.2)");
      border_office.push("rgba(75, 192, 192, 1)");
      data_office.push(array[kunci]);
    }
    if (kunci === "Otomatisasi dan Tata Kelola Perkantoran") {
      label_office.push("OTKP")
      warna_office.push("rgba(54, 162, 235, 0.2)");
      border_office.push("rgba(54, 162, 235, 1)");
      data_office.push(array[kunci]);
    }
    if (kunci === "Teknik dan Bisnis Sepeda Motor") {
      label_office.push("TBSM")
      warna_office.push("rgba(191, 191, 191, 0.2)");
      border_office.push("rgba(191, 191, 191, 1)");
      data_office.push(array[kunci]);
    }
    if (kunci === "Teknik Kendaraan Ringan Otomotif") {
      label_office.push("TKRO")
      warna_office.push("rgba(255, 206, 86, 0.2)");
      border_office.push("rgba(255, 206, 86, 1)");
      data_office.push(array[kunci]);
    }
    if (kunci === "Teknik Komputer dan Jaringan") {
      label_office.push("TKJ")
      warna_office.push("rgba(255, 159, 64, 0.2)");
      border_office.push("rgba(255, 159, 64, 1)");
      data_office.push(array[kunci]);
    }
  }
  if (divisi === "Website") {
    if (kunci === "Akuntansi dan Keuangan Lembaga") {
      label_website.push("AKL")
      warna_website.push("rgba(255, 99, 132, 0.2)");
      border_website.push("rgba(255, 99, 132, 1)");
      data_website.push(array[kunci]);
    }
    if (kunci === "Bisnis Daring dan Pemasaran") {
      label_website.push("BDP")
      warna_website.push("rgba(75, 192, 192, 0.2)");
      border_website.push("rgba(75, 192, 192, 1)");
      data_website.push(array[kunci]);
    }
    if (kunci === "Otomatisasi dan Tata Kelola Perkantoran") {
      label_website.push("OTKP")
      warna_website.push("rgba(54, 162, 235, 0.2)");
      border_website.push("rgba(54, 162, 235, 1)");
      data_website.push(array[kunci]);
    }
    if (kunci === "Teknik dan Bisnis Sepeda Motor") {
      label_website.push("TBSM")
      warna_website.push("rgba(191, 191, 191, 0.2)");
      border_website.push("rgba(191, 191, 191, 1)");
      data_website.push(array[kunci]);
    }
    if (kunci === "Teknik Kendaraan Ringan Otomotif") {
      label_website.push("TKRO")
      warna_website.push("rgba(255, 206, 86, 0.2)");
      border_website.push("rgba(255, 206, 86, 1)");
      data_website.push(array[kunci]);
    }
    if (kunci === "Teknik Komputer dan Jaringan") {
      label_website.push("TKJ")
      warna_website.push("rgba(255, 159, 64, 0.2)");
      border_website.push("rgba(255, 159, 64, 1)");
      data_website.push(array[kunci]);
    }
  }
  if (divisi === "Jaringan") {
    if (kunci === "Akuntansi dan Keuangan Lembaga") {
      label_jaringan.push("AKL")
      warna_jaringan.push("rgba(255, 99, 132, 0.2)");
      border_jaringan.push("rgba(255, 99, 132, 1)");
      data_jaringan.push(array[kunci]);
    }
    if (kunci === "Bisnis Daring dan Pemasaran") {
      label_jaringan.push("BDP")
      warna_jaringan.push("rgba(75, 192, 192, 0.2)");
      border_jaringan.push("rgba(75, 192, 192, 1)");
      data_jaringan.push(array[kunci]);
    }
    if (kunci === "Otomatisasi dan Tata Kelola Perkantoran") {
      label_jaringan.push("OTKP")
      warna_jaringan.push("rgba(54, 162, 235, 0.2)");
      border_jaringan.push("rgba(54, 162, 235, 1)");
      data_jaringan.push(array[kunci]);
    }
    if (kunci === "Teknik dan Bisnis Sepeda Motor") {
      label_jaringan.push("TBSM")
      warna_jaringan.push("rgba(191, 191, 191, 0.2)");
      border_jaringan.push("rgba(191, 191, 191, 1)");
      data_jaringan.push(array[kunci]);
    }
    if (kunci === "Teknik Kendaraan Ringan Otomotif") {
      label_jaringan.push("TKRO")
      warna_jaringan.push("rgba(255, 206, 86, 0.2)");
      border_jaringan.push("rgba(255, 206, 86, 1)");
      data_jaringan.push(array[kunci]);
    }
    if (kunci === "Teknik Komputer dan Jaringan") {
      label_jaringan.push("TKJ")
      warna_jaringan.push("rgba(255, 159, 64, 0.2)");
      border_jaringan.push("rgba(255, 159, 64, 1)");
      data_jaringan.push(array[kunci]);
    }
  }
  if (divisi === "Animasi") {
    if (kunci === "Akuntansi dan Keuangan Lembaga") {
      label_animasi.push("AKL")
      warna_animasi.push("rgba(255, 99, 132, 0.2)");
      border_animasi.push("rgba(255, 99, 132, 1)");
      data_animasi.push(array[kunci]);
    }
    if (kunci === "Bisnis Daring dan Pemasaran") {
      label_animasi.push("BDP")
      warna_animasi.push("rgba(75, 192, 192, 0.2)");
      border_animasi.push("rgba(75, 192, 192, 1)");
      data_animasi.push(array[kunci]);
    }
    if (kunci === "Otomatisasi dan Tata Kelola Perkantoran") {
      label_animasi.push("OTKP")
      warna_animasi.push("rgba(54, 162, 235, 0.2)");
      border_animasi.push("rgba(54, 162, 235, 1)");
      data_animasi.push(array[kunci]);
    }
    if (kunci === "Teknik dan Bisnis Sepeda Motor") {
      label_animasi.push("TBSM")
      warna_animasi.push("rgba(191, 191, 191, 0.2)");
      border_animasi.push("rgba(191, 191, 191, 1)");
      data_animasi.push(array[kunci]);
    }
    if (kunci === "Teknik Kendaraan Ringan Otomotif") {
      label_animasi.push("TKRO")
      warna_animasi.push("rgba(255, 206, 86, 0.2)");
      border_animasi.push("rgba(255, 206, 86, 1)");
      data_animasi.push(array[kunci]);
    }
    if (kunci === "Teknik Komputer dan Jaringan") {
      label_animasi.push("TKJ")
      warna_animasi.push("rgba(255, 159, 64, 0.2)");
      border_animasi.push("rgba(255, 159, 64, 1)");
      data_animasi.push(array[kunci]);
    }
  }
  if (divisi === "Java") {
    if (kunci === "Akuntansi dan Keuangan Lembaga") {
      label_java.push("AKL")
      warna_java.push("rgba(255, 99, 132, 0.2)");
      border_java.push("rgba(255, 99, 132, 1)");
      data_java.push(array[kunci]);
    }
    if (kunci === "Bisnis Daring dan Pemasaran") {
      label_java.push("BDP")
      warna_java.push("rgba(75, 192, 192, 0.2)");
      border_java.push("rgba(75, 192, 192, 1)");
      data_java.push(array[kunci]);
    }
    if (kunci === "Otomatisasi dan Tata Kelola Perkantoran") {
      label_java.push("OTKP")
      warna_java.push("rgba(54, 162, 235, 0.2)");
      border_java.push("rgba(54, 162, 235, 1)");
      data_java.push(array[kunci]);
    }
    if (kunci === "Teknik dan Bisnis Sepeda Motor") {
      label_java.push("TBSM")
      warna_java.push("rgba(191, 191, 191, 0.2)");
      border_java.push("rgba(191, 191, 191, 1)");
      data_java.push(array[kunci]);
    }
    if (kunci === "Teknik Kendaraan Ringan Otomotif") {
      label_java.push("TKRO")
      warna_java.push("rgba(255, 206, 86, 0.2)");
      border_java.push("rgba(255, 206, 86, 1)");
      data_java.push(array[kunci]);
    }
    if (kunci === "Teknik Komputer dan Jaringan") {
      label_java.push("TKJ")
      warna_java.push("rgba(255, 159, 64, 0.2)");
      border_java.push("rgba(255, 159, 64, 1)");
      data_java.push(array[kunci]);
    }
  }
  if (divisi === "Grafis") {
    if (kunci === "Akuntansi dan Keuangan Lembaga") {
      label_grafis.push("AKL")
      warna_grafis.push("rgba(255, 99, 132, 0.2)");
      border_grafis.push("rgba(255, 99, 132, 1)");
      data_grafis.push(array[kunci]);
    }
    if (kunci === "Bisnis Daring dan Pemasaran") {
      label_grafis.push("BDP")
      warna_grafis.push("rgba(75, 192, 192, 0.2)");
      border_grafis.push("rgba(75, 192, 192, 1)");
      data_grafis.push(array[kunci]);
    }
    if (kunci === "Otomatisasi dan Tata Kelola Perkantoran") {
      label_grafis.push("OTKP")
      warna_grafis.push("rgba(54, 162, 235, 0.2)");
      border_grafis.push("rgba(54, 162, 235, 1)");
      data_grafis.push(array[kunci]);
    }
    if (kunci === "Teknik dan Bisnis Sepeda Motor") {
      label_grafis.push("TBSM")
      warna_grafis.push("rgba(191, 191, 191, 0.2)");
      border_grafis.push("rgba(191, 191, 191, 1)");
      data_grafis.push(array[kunci]);
    }
    if (kunci === "Teknik Kendaraan Ringan Otomotif") {
      label_grafis.push("TKRO")
      warna_grafis.push("rgba(255, 206, 86, 0.2)");
      border_grafis.push("rgba(255, 206, 86, 1)");
      data_grafis.push(array[kunci]);
    }
    if (kunci === "Teknik Komputer dan Jaringan") {
      label_grafis.push("TKJ")
      warna_grafis.push("rgba(255, 159, 64, 0.2)");
      border_grafis.push("rgba(255, 159, 64, 1)");
      data_grafis.push(array[kunci]);
    }
  }
}

filterJurusan(database);