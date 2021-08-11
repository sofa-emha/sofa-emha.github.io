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
						let 
							Nama = database[nisn].Nama,
							Tingkat = database[nisn].Tingkat,
							Username = database[nisn].Username,
							Password = database[nisn].Password,
							v = parseInt(Tingkat) - 9, a = [];

						for (let i = 0; i < v; i++) {
							a.push(`<i class="material-icons">star</i>`)
						}

						Swal.fire({
							padding: '20px',
							width: '600px',
							showClass: {
								popup: 'cover'
							},
							showConfirmButton: false,
							html:
								`<div class="kartu">

									<h2 class="nisn">${nisn}</h2>

									<img class="logo" src="assets/img/logo.png">

									<div class="data-siswa nm">
										<span>Nama Siswa</span>
										<div class="ket nm-text">${Nama.toLowerCase()}</div>
									</div>

									<div class="data-siswa usrnm">
										<span>Username</span>
										<div class="ket usrnm-text">${Username}</div>
									</div>

									<div class="grup-tag">

										<div class="data-siswa psswrd">
											<span>Password</span>
											<div class="ket psswrd-text">${Password}</div>
										</div>

										<div class="data-siswa tngkt">
											<span>Tingkat</span>
											<div class="ket tngkt-text">${Tingkat}</div>
											<div class="ket star-text">
												${a.join("\n")}
											</div>
										</div>

									</div>

								</div>`
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