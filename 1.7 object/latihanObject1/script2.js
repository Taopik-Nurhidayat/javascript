console.log(
  "======================================================================="
);
console.log("Kode_barang \t||\t\tNama_produk\t\t||\t    Harga\t\t||\tStock");
console.log(
  "======================================================================="
);

let lanjut;

do {
  let kode_barang = prompt(" MASUKAN KODE BARANG ");
  let nama_produk = prompt(" MASUKAN NAMA BARANG ");
  let harga = parseFloat(prompt(" MASUKAN HARGA BARANG "));
  let stock = prompt(" MASUKAN STOCK BARANG ");
  console.log(
    kode_barang +
      "\t\t\t\t\t" +
      nama_produk +
      " \t\t\t\t" +
      harga +
      "\t\t\t\t" +
      stock
  );
  lanjut = prompt("Mau pilih menu yang lain? (Y/T) ");
} while (lanjut === "Y" || lanjut === "y");



// //latihan do while
// let hitung;
// do {
//   let a = parseInt(prompt("masukan data pertama"));
//   let b = parseInt(prompt("masukan data kedua"));
//  let jumlah = (a + b);
//   console.log("hasil dari " + a + " + " + b + " = " + parseInt(jumlah));

//   hitung = prompt("Apakah mau lanjut (Y/T)")
// } while (hitung === "Y" || hitung === "y");
