function getQueryFromURL() {
  wls = window.location.search;
  usp = new URLSearchParams(wls);
  return usp.get('s');
}

function getDivisiFrom(s) {
  for (const o in s) {
    if (Object.hasOwnProperty.call(s, o)) { const
      f = s[o], a = f['Kompetensi Keahlian'], e = f['Divisi'];
      if (e === "Office") {office.push(a)}
      if (e === "Website") {website.push(a)}
      if (e === "Jaringan") {jaringan.push(a)}
      if (e === "Animasi") {animasi.push(a)}
      if (e === "Pemrograman Java") {java.push(a)}
      if (e === "Desain Grafis") {grafis.push(a)}
    }
  }
}

function countingPeopleFrom(s, o) {
  let f = {}; s.sort();
  for (let i = 0; i < s.length; i++) {
    if (f[s[i]]) {
      f[s[i]] += 1
    } else {
      f[s[i]] = 1
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