function getQueryFromURL() {
  wls = window.location.search;
  usp = new URLSearchParams(wls);
  return usp.get('s');
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
          text: "Data tidak ditemukan!"
        }); break;
      }
    }
  }
}

function countingPeopleFrom(divisi, label) {
  let object = {}, i = 0; divisi.sort();
  for (; i < divisi.length; i++) {
    if (object[divisi[i]]) {
      object[divisi[i]] += 1
    } else {
      object[divisi[i]] = 1
    }
  }
  switch (label) {
    case "Java": java.length = 0; java.push(object); break;
    case "Website": website.length = 0; website.push(object); break;
    case "Grafis": grafis.length = 0; grafis.push(object); break;
    case "Office": office.length = 0; office.push(object); break;
    case "Jaringan": jaringan.length = 0; jaringan.push(object); break;
    case "Animasi": animasi.length = 0; animasi.push(object); break;
    default: Alert_Warning.fire({
      text: "Data tidak ditemukan!"
    }); break;
  }
}

function splitDivisiToDataFrom(divisi) {
  
}