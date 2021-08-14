window.onload = function () {
	// Bagian: Variabel
	const
		validate = v => v.map(Number),
		cari_data = document.querySelector('.cari-data'),
		tutorial = document.querySelector('.tutorial'),
		tentang = document.querySelector('.tentang'),
		header = document.querySelector('.header'),
		input = document.querySelector('#nisn'),
		nav = document.querySelector('.nav'),
		attr = document.querySelector('.attr'),
		send = document.querySelector('.send'),
		clear = document.querySelector('.clear'),
		icon = document.querySelector('.icon'),
		cari = document.querySelector('.cari'),
		Swal_CariData = Swal.mixin({
			timer: 2000,
			showConfirmButton: false,
			width: 200,
			padding: '0 0 2.5em 0',
			text: 'Mencari Data',
			allowOutsideClick: false,
			allowEscapeKey: false,
			didOpen: () => { Swal.showLoading() }
		}),
		Swal_warning = Swal.mixin({
			icon: 'warning',
			confirmButtonColor: '#297eff'
		}),
		Swal_error = Swal.mixin({
			icon: 'error',
			confirmButtonColor: '#297eff'
		}),
		Swal_TutorialSteps = Swal.mixin({
			allowOutsideClick: false,
			allowEscapeKey: false,
			progressSteps: ['1', '2', '3', '4', '5'],
			confirmButtonColor: '#297eff',
			showDenyButton: true,
			reverseButtons: true,
			confirmButtonText: 'Selanjutnya',
			denyButtonText: 'Tutup'
		});

	// Bagian: Fungsi
	tentang.onclick = function () {
		window.open('https://sofa.my.id/', '_blank');
	}
	cari_data.onclick = function () {
		document.location.href = "/";
	}
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
	tutorial.onclick = function () {
		Swal_TutorialSteps.fire({
			currentProgressStep: 0,
			title: 'Tahap 1',
			html: `<div class="justify">Kunjungi situs Google Mail, atau <a href="https://mail.google.com" target="_blank" style="text-decoration:none">tekan disini</a>.</div>`
		}).then((v) => {
			if (v.isDenied || v.isDismissed) { Swal.close() } else {
				Swal_TutorialSteps.fire({
					currentProgressStep: 1,
					title: 'Tahap 2',
					html: `<div class="justify">Masuk menggunakan e-mail dengan format <code>username@smk.belajar.id</code>. Anda bisa mendapatkan <code>username</code> dengan mengetik NISN disitus ini pada laman Cari Data, atau <a href="/" style="text-decoration:none">tekan disini</a>. Sebagai contoh, username saya <code>sofahaeta82@smk.belajar.id</code><br><br><img src="assets/img/tahap2.jpg" class="swal-img-tutorial"></div>`
				}).then((v) => {
					if (v.isDenied || v.isDismissed) { Swal.close() } else {
						Swal_TutorialSteps.fire({
							currentProgressStep: 2,
							title: 'Tahap 3',
							html: `<div class="justify">Ketik password yang sudah diberikan sebelumnya. Anda bisa mendapatkan <code>password</code> dengan mengetik NISN disitus ini pada laman Cari Data, atau <a href="/" style="text-decoration:none">tekan disini</a>. Sebagai contoh, password saya <code>$PWD.RHS</code><br><br><img src="assets/img/tahap3.jpg" class="swal-img-tutorial"></div>`
						}).then((v) => {
							if (v.isDenied || v.isDismissed) { Swal.close() } else {
								Swal_TutorialSteps.fire({
									currentProgressStep: 3,
									title: 'Tahap 4',
									html: `<div class="justify">Tekan tombol <code>Accept</code>, untuk menyetujui semua Terms of Service dan Privacy Policy milik Google<br><br><img src="assets/img/tahap4.jpg" class="swal-img-tutorial"></div>`
								}).then((v) => {
									if (v.isDenied || v.isDismissed) { Swal.close() } else {
										Swal_TutorialSteps.fire({
											currentProgressStep: 4,
											confirmButtonText: 'Selesai',
											showDenyButton: false,
											title: 'Tahap 5',
											html: `<div class="justify">Buat password baru sesuai keinginan anda, agar mengurangi resiko penyalahgunaan hak akun. Syarat dan ketentuan password baru :<br><br>

											<table class="tahap5">
												<tr>
													<td>1.</td>
													<td>Minimal 8 karakter</td>
												</tr>
												<tr>
													<td>2.</td>
													<td>Menggunakan kombinasi huruf, angka, dan simbol</td>
												</tr>
												<tr>
													<td>3.</td>
													<td>Membuat kalimat yang sangat kompleks</td>
												</tr>
											</table>
											<br><br><img src="assets/img/tahap5.jpg" class="swal-img-tutorial"></div>`
										})
									}
								})
							}
						})
					}
				})
			}
		})
	}
	send.onclick = function () {
		if (input.value != '') {
			val = input.value; validasi = validate(val.split(''));
			nan = validasi.includes(NaN); nisn = validasi.join('');

			if (nan) {
				Swal_warning.fire({
					text: 'NISN hanya berupa angka!',
				});
			}
			else {
				if (nisn.length != 10) {
					if (nisn.length < 10) {
						v = 10 - nisn.length;
						Swal_warning.fire({
							text: 'NISN anda kurang ' + v + ' angka!',
						});
					}
					if (nisn.length > 10) {
						v = nisn.length - 10;
						Swal_warning.fire({
							text: 'NISN anda terlalu panjang ' + v + ' angka!',
						});
					}
				}
				else {
					if (nisn in database) {

						var db_collection_akun = db.collection("akun"),
								db_collection_akun_doc_siswa = db_collection_akun.doc("siswa");

						db_collection_akun_doc_siswa.get().then((doc) => {
							if (doc.exists) {

								// console.log("Document data:", doc.data());
								let data = doc.data()
								console.log(data);
								alert(data.coba)

							} else {
								console.log("No such document!");
							}
						}).catch((error) => {
							console.log("Error getting document: ", error);
						});

						// let
						// 	Nama = database[nisn].Nama,
						// 	Tingkat = database[nisn].Tingkat,
						// 	Username = database[nisn].Username,
						// 	Password = database[nisn].Password,
						// 	v = parseInt(Tingkat) - 9, a = [];

						// for (let i = 0; i < v; i++) {
						// 	a.push(`<i class="material-icons">star</i>`)
						// }
						// Swal_CariData.fire().then(() => {
						// 	Swal.fire({
						// 		padding: '20px',
						// 		width: '600px',
						// 		showClass: {
						// 			popup: 'cover'
						// 		},
						// 		showConfirmButton: false,
						// 		html:
						// 			`<div class="kartu">
	
						// 				<h2 class="nisn">${nisn}</h2>
	
						// 				<img class="logo" src="assets/img/logo.png">
	
						// 				<div class="data-siswa nm">
						// 					<span>Nama Siswa</span>
						// 					<div class="ket nm-text">${Nama.toLowerCase()}</div>
						// 				</div>
	
						// 				<div class="data-siswa usrnm">
						// 					<span>Username</span>
						// 					<div class="ket usrnm-text">${Username}</div>
						// 				</div>
	
						// 				<div class="grup-tag">
	
						// 					<div class="data-siswa psswrd">
						// 						<span>Password</span>
						// 						<div class="ket psswrd-text">${Password}</div>
						// 					</div>
	
						// 					<div class="data-siswa tngkt">
						// 						<span>Tingkat</span>
						// 						<div class="ket tngkt-text">${Tingkat}</div>
						// 						<div class="ket star-text">
						// 							${a.join("\n")}
						// 						</div>
						// 					</div>
	
						// 				</div>
	
						// 			</div>`
						// 	});
						// })
					} else {
						Swal_CariData.fire().then(() => {
							Swal_error.fire({
								text: 'NISN tidak ditemukan!',
							});
						})
					}
				}
			}
		} else {
			Swal_warning.fire({
				text: 'Anda belum menulis NISN!',
			});
		}
	};
};