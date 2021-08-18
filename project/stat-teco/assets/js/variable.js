let
  testing = [],

  divisi = [
    'Java',
    'Website',
    'Grafis',
    'Office',
    'Jaringan',
    'Animasi'
  ],

  java = [],
  website = [],
  office = [],
  jaringan = [],
  grafis = [],
  animasi = [],

  warna_java = [],
  warna_website = [],
  warna_office = [],
  warna_jaringan = [],
  warna_grafis = [],
  warna_animasi = [],

  border_java = [],
  border_website = [],
  border_office = [],
  border_jaringan = [],
  border_grafis = [],
  border_animasi = [],

  label_java = [],
  label_website = [],
  label_office = [],
  label_jaringan = [],
  label_grafis = [],
  label_animasi = [],
  
  data_java = [],
  data_website = [],
  data_office = [],
  data_jaringan = [],
  data_grafis = [],
  data_animasi = [];

const
  Alert_Warning = Swal.mixin({
    icon: 'warning',
    title: 'Warning!',
    allowOutsideClick: false,
    allowEscapeKey: false,
    confirmButtonColor: '#007bff'
  })