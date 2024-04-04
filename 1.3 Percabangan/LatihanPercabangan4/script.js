// let nama = prompt("Siapa Nama Kamu?");
// let gol = prompt("Golongan Apa?");
// let totker = prompt("Jumlah Jam Kerja");

// switch (gol) {
//   case "A":
//   case "a":
//     gaji_perjam = 6000;
//     break;
//   case "B":
//   case "b":
//     gaji_perjam = 7000;
//     break;
//   case "C":
//   case "c":
//     gaji_perjam = 8000;
//     break;
//   case "D":
//   case "d":
//     gaji_perjam = 10000;
// }

// const gaji = totker * gaji_perjam;

// if (totker - 48 > 0) {
//   total_gaji = gaji + (totker - 48) * 5000;
// } else {
//   total_gaji = gaji;
// }

// console.log("Nama : " + nama);
// console.log("Golongan : " + gol);
// console.log("Jumlah Jam Kerja :" + totker);

// console.log(nama + " menerima gaji " + total_gaji + " per minggu");

const nama = prompt("Masukan nama karyawan!: ");
const gol = prompt("Masukan golongan kerja: ");
const jam_kerja = prompt("Masukan jam kerja (permingu): ");

let gaji_jam;

switch (gol) {
  case "A":
    gaji_jam = 6000;
    break;
  case "B":
    gaji_jam = 7000;
    break;
  case "C":
    gaji_jam = 8000;
    break;
  case "D":
    gaji_jam = 10000;
    break;
  default:
    console.log("golongan tidak tersedia");
    break;
}

let total_gaji_perminggu = jam_kerja * gaji_jam;

let uang_lembur;
if (jam_kerja - 48) {
  uang_lembur = (jam_kerja - 48) * 5000;
}

let total_gaji = total_gaji_perminggu + uang_lembur;

console.log(
  "Nama: " + nama + "\n Golongan: " + gol + "\n Jam kerja: " + jam_kerja
);

console.log(
  nama + "menerima gaji sebesar" + " " + total_gaji + " " + "per minggu."
);
