window.onload = function(){ 
    // Bagian: Variabel
    const
        validate = v => v.map(Number),
        input = document.querySelector('#nisn'),
        send = document.querySelector('.send'),
        clear = document.querySelector('.clear'),
        icon = document.querySelector('.icon'),
        cari = document.querySelector('.cari');
    
    // Bagian: Fungsi
    icon.onclick = function(){
        cari.classList.toggle("aktif");
        send.classList.toggle("aktif");
    };
    clear.onclick = function(){
        input.value = '';
    };
    send.onclick = function(){
        if (input.value != '') {
            val = input.value; validasi = validate(val.split(''));
            nan = validasi.includes(NaN); nisn = validasi.join('');

            if (nan) {
                Swal.fire({
                    icon: 'error',
                    title: 'Terjadi Kesalahan',
                    text: 'NISN hanya menggunakan angka!'
                });
            }
            else {
                if (nisn.length != 10) {
                    if (nisn.length < 10) {
                        v = 10 - nisn.length;
                        Swal.fire({
                            icon: 'error',
                            title: 'Terjadi Kesalahan',
                            text: 'NISN anda kurang '+v+' angka!'
                        });
                    }
                    if (nisn.length > 10) {
                        v = nisn.length - 10;
                        Swal.fire({
                            icon: 'error',
                            title: 'Terjadi Kesalahan',
                            text: 'NISN anda terlalu panjang '+v+' angka!'
                        });
                    }
                }
                else {
                    if (nisn in database) {
                        Swal.fire({
                            icon: 'success',
                            title: 'Data Anda Sudah Tersimpan',
                            // text: ''
                        });
                        // database[nisn].Nama
                        // database[nisn].Tingkat
                        // database[nisn].Username
                        // database[nisn].Password
                    } else {
                        Swal.fire({
                            icon: 'error',
                            title: 'Terjadi Kesalahan',
                            text: 'NISN tidak ditemukan!'
                        });
                    }
                }
            }
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Terjadi Kesalahan',
                text: 'Anda belum menulis NISN!'
            });
        }
    };
};