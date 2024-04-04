let total_beli = prompt("Masukan jumlah yang harus di bayarjan");
let bayar = " ";
console.log("Total belanja: " + total_beli);
if (total_beli >= 100000 && total_beli < 500000) {
  bayar = (10 / 100) * total_beli;
  console.log("Selamat Anda mendapatkan Diskon 10%!");
} else if (total_beli >= 500000 && total_beli < 10000000) {
  bayar = (20 / 100) * total_beli;
  console.log("Selamat Anda mendapatkan diskon 20%!");
} else if (total_beli >= 1000000) {
  bayar = (30 / 100) * total_beli;
  console.log("Selamat Anda mendapatkan diskon 30%!");
} else {
  bayar = total_beli;
  console.log("Maaf! Anda tidak dapat diskon.");
}

console.log("Total bayar =" + bayar);
