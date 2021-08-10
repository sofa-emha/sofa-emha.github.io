window.onload = function () {
	// Bagian: Variabel
	const
	validate = v => v.map(Number),
	header = document.querySelector('.header'),
	input = document.querySelector('#nisn'),
	nav = document.querySelector('.nav'),
	attr = document.querySelector('.attr'),
	send = document.querySelector('.send'),
	clear = document.querySelector('.clear'),
	icon = document.querySelector('.icon'),
	cari = document.querySelector('.cari');
	
	// Bagian: Fungsi
	icon.onclick = function () {
		cari.classList.toggle("aktif");
		nav.classList.toggle("aktif");
		header.classList.toggle("aktif")
		send.classList.toggle("aktif");
		attr.classList.toggle("aktif");
	};
	clear.onclick = function () {
		input.value = '';
	};
	send.onclick = function () {
		if (input.value != '') {
			val = input.value; validasi = validate(val.split(''));
			nan = validasi.includes(NaN); nisn = validasi.join('');
			
			if (nan) {
				Swal.fire({
					icon: 'warning',
					text: 'NISN hanya berupa angka!',
					confirmButtonColor: '#297eff'
				});
			}
			else {
				if (nisn.length != 10) {
					if (nisn.length < 10) {
						v = 10 - nisn.length;
						Swal.fire({
							icon: 'warning',
							text: 'NISN anda kurang ' + v + ' angka!',
							confirmButtonColor: '#297eff'
						});
					}
					if (nisn.length > 10) {
						v = nisn.length - 10;
						Swal.fire({
							icon: 'warning',
							text: 'NISN anda terlalu panjang ' + v + ' angka!',
							confirmButtonColor: '#297eff'
						});
					}
				}
				else {
					if (nisn in database) {
						Swal.fire({
							showConfirmButton: false,
							html:
								'<ul>'+
									'<li>'+database[nisn].Nama+'</li>'+
									'<li>'+database[nisn].Tingkat+'</li>'+
									'<li>'+database[nisn].Username+'</li>'+
									'<li>'+database[nisn].Password+'</li>'+
								'</ul>'
						});
					} else {
						Swal.fire({
							icon: 'error',
							text: 'NISN tidak ditemukan!',
							confirmButtonColor: '#297eff'
						});
					}
				}
			}
		} else {
			Swal.fire({
				icon: 'warning',
				text: 'Anda belum menulis NISN!',
				confirmButtonColor: '#297eff'
			});
		}
	};
};