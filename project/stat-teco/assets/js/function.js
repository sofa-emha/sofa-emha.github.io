/**
 * function Nama(s,o,f,a,e,m,h,a) {
 *    var|let|const s,o,f,a,e,m,h,a;
 *    return sofaemha
 * }
 */

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
        default: false; break;
      }
    }
  }
}

function countingPeopleFrom(s, o) {
  let f = {}, a = 0; s.sort();
  for (; a < s.length; a++) {
    if (f[s[a]]) {
      f[s[a]] += 1
    } else {
      f[s[a]] = 1
    }
  }
  if (o === "Java") {java.length = 0; java.push(f);}
  if (o === "Website") {website.length = 0; website.push(f);}
  if (o === "Grafis") {grafis.length = 0; grafis.push(f);}
  if (o === "Office") {office.length = 0; office.push(f);}
  if (o === "Jaringan") {jaringan.length = 0; jaringan.push(f);}
  if (o === "Animasi") {animasi.length = 0; animasi.push(f);}
}

function splitDivisiToDataFrom(divisi) {
  
}