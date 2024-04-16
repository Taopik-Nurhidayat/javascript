

const jumlahanakayam = prompt("Masukan anak ayam");
console.log("anak ayam ada " + jumlahanakayam);
for (let i = jumlahanakayam; i >= 1; i--) {
  if (i === 1) {
    console.log("anak ayam turun " + i + " mati satu tinggal induknya ");
  } else {
    console.log("anak ayam turun " + i + " mati satu tinggal " + (i - 1));
  }
}