//Kalkulator ku
function PersegiPanjang(a, b) {
  return a * b;
}

function lingkaran(a, b) {
  return a * b * (22/7);
}

function segitiga(a, b) {
  return  (1/2) * a * b;
}


let lanjut;
do {
  console.log("--APLIKASI KALKULATOR KANG TAOPIK NURHIDAYAT--");
  console.log("=================================");
  console.log("--Silahkan pilih menu di bawah: ");
  console.log("--1. Persegi panjang");
  console.log("--2. Lingkaran");
  console.log("--3. Segitiga");
  console.log("=================================");

  const menu = prompt("Pilih Menu: ");
  let a, b;

  switch (menu) {
    case "1":
      a = parseInt(prompt("Masukan Nilai Panjang :"));
      b = parseInt(prompt("Masukan Nilai Lebar :"));
      console.log(PersegiPanjang(a, b));
      break;

    case "2":
      a = prompt("Masukan Nilai Jari-jari 1 :");
      b = prompt("Masukan Nilai Jari-jari 2 :");
      console.log(parseFloat(lingkaran(a, b)));
      break;

    case "3":
      a = prompt("Masukan Nilai Alas :");
      b = prompt("Masukan Nilai Tinggi :");
      console.log(parseFloat(segitiga(a, b)));
      break;

    default:
      alert("Menu yang anda pilih tidak tersedia!");
      break;
  }
  lanjut = prompt("Mau pilih menu yang lain? (Y/T)");
} while (lanjut === "Y" || lanjut === "y");

console.log("--PROGRAM SELESAI--");
