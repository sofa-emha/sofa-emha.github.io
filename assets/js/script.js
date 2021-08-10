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
                console.log('MENGANDUNG NAN');
            }
            else {
                if (nisn.length != 10) {
                    if (nisn.length < 10) {
                        console.log('KURANG DARI 10 ANGKA');
                    }
                    if (nisn.length > 10) {
                        console.log('LEBIH DARI 10 ANGKA');
                    }
                }
                else {
                    alert('BERHASIL')
                }
            }
        } else {
            console.log('JANGAN BIARKAN KOSONG');
        }
    };
};