//if statment

// const total_belanja = 80000;

// if (total_belanja > 100000) {
//     console.log("selamat anda mendapatkan hadiah")
// }
// console.log("terima kasih anda sudah berbelanja");

// ==================================
// const total_belanja = prompt("Masukan total belanja: ");
// if (total_belanja > 100.000){
//     console.log("selamat anda mendapatkan janda pirang");
// } else{
//     console.log("mohon maaf anda belum beruntung");
// }
// console.log("Terimakasih sudah mau berbelanja");

// studi kasus/Login

// const password = "legendofaang";
// if (password === "legendofaang") {
//     console.log("Silahkan masuk, ang!");
// } else {
//     console.log("Password salah, silahkan coba lagi!");
// }

//if...else  if...else statment

// const nilai = prompt("Masukan nilai Anda: ");

// if (nilai >= 80) {
//   console.log("Nilai Anda berprdikat BAIK");
// } else if (nilai >= 65) {
//   console.log("Nilai anda berpredikat CUKUP");
// } else if (nilai >= 50) {
//   console.log("Nilai anda berpredikat BURUK");
// } else {
//   console.log("Nilai anda berpredikat SANGAT BURUK");
// }

// Switch statment

const warna = "biru";
let pesan = " ";

switch (warna) {
  case "merah":
    pesan = "Anda memilih warna merah";
    break;
  case "biru":
    pesan = "Anda memilih warna biru";
    break;
  case "orange":
    pesan = "Anda memilih warna orange";
    break;
  default:
    pesan = "Warna yang anda pilih tidak ada!";
    break;
}
console.log(pesan);

const tahun = prompt("Masukan Tahun Lahir Anda");
let generasi = " ";
if (tahun >= 1945 && tahun <= 1960) {
  generasi = "Generasi Pejuang";
} else if (tahun >= 1961 && tahun <= 1980) {
  generasi = "Generasi Orde baru";
} else if (tahun >= 1981 && tahun <= 2024) {
  generasi = "Generasi Reformasi";
} else {
  generasi = "Melebihi Tahun Yang Ada";
}
console.log("Anda Hidup di masa: " + generasi);
