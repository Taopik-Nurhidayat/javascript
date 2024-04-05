// let lagu = prompt("Masukan jumlah anak ayam: ");
// console.log("Anak ayam turun " + lagu);

// for (let y = lagu; y >= 1; y--)
//   if (y === 1) {
//     console.log("anak ayam turun " + y + ", mati satu tinggal induknya");
//   } else {
//     console.log("Anak ayam turun " + y + ", mati tinggal tinggax " + (y -= 1));
//   }y


const jumlahanakayam = prompt("Masukan anak ayam");
console.log("anak ayam ada " + jumlahanakayam);
for (let i = jumlahanakayam; i >= 1; i--) {
  if (i === 1) {
    console.log("anak ayam turun " + i + " mati satu tinggal induknya ");
  } else {
    console.log("anak ayam turun " + i + " mati satu tinggal " + (i - 1));
  }
}