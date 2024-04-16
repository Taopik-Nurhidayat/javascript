const N = prompt("Masukan Nilai N: ");

let jumlah = 0;
for (let i = 1; i <= N; i++) {
  jumlah += i;
}
console.log("jumlah nilai deret antara 1 sampai " + N + " adalah = " + jumlah);

// const N = prompt("Masukan nilai N");

// let jumlah = 0;
// let i = 0;
// while (i <= N) {
//   jumlah += i;
//   i++;
// }
//   console.log(
//     "Hasil penjumlahan deret 1 sampai dengan " + N + " adalah " + jumlah
//   );
