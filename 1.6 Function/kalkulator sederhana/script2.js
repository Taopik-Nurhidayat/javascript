//Kalkulator sederhana
function penjumlahan(a, b) {
  return a + b;
}

function pengurangan(a, b) {
  return a - b;
}

function perkalian(a, b) {
  return a * b;
}

function pembagian(a, b) {
  return a / b;
}

let lanjut;
do {
  console.log("--APLIKASI KALKULATOR SEDERHANA--");
  console.log("=================================");
  console.log("--Silahkan pilih menu di bawah: ");
  console.log("--1. Penjumlahan");
  console.log("--2. Pengurangan");
  console.log("--3. Perkalian");
  console.log("--4. Pembagian");
  console.log("=================================");

  const menu = prompt("Pilih Menu: ");
  let a, b;

  switch (menu) {
    case "1":
      a = parseInt(prompt("Masukan nilai a :"));
      b = parseInt(prompt("Masukan nilai b :"));
      console.log(penjumlahan((a, b)));
      break;

    case "2":
      a = prompt("Masukan nilai a :");
      b = prompt("Masukan nilai b :");
      console.log(parseInt(pengurangan(a, b)));
      break;

    case "3":
      a = prompt("Masukan nilai a :");
      b = prompt("Masukan nilai b :");
      console.log(parseInt(perkalian(a, b)));
      break;

    case "4":
      a = prompt("Masukan nilai a :");
      b = prompt("Masukan nilai b :");
      console.log(parseFloat(pembagian(a, b)));

    default:
      alert("Menu yang anda pilih tidak tersedia!");
      break;
  }
  lanjut = prompt("Mau pilih menu yang lain? (Y/T)");
} while (lanjut === "Y" || lanjut === "y");

console.log("--PROGRAM SELESAI--");
