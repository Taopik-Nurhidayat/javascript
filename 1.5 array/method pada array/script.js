//lenght = menampilkan jumlah isi dari array
const arr = [3, 4, 5, 6, 8];
console.log(arr.length);

//join = menggabungkan isi array menjadi sebuah string

const oke = ["t", "a", "o", "p", "i", "k"];
const oke2 = ["ayo", "makan", "siang"];

console.log(oke.join(""));
console.log(oke2.join(" "));

//push = menambahkan element array di bagian akhir
arr.push(99);
console.log(arr);

oke2.push("berangkat");
console.log(oke2);

console.log(oke2.join(" "));

//pop = menghapus element terakhir pada array
arr.pop();
console.log(arr);

//unshif = menambahkan element di awal array
arr.unshift(1);
console.log(arr);

//shift = menghapus element pertama pada array
oke.shift();
console.log(oke);

// ===================================================

const binatang = ["ikan", "gajah", "sapi", "entog", "careh"];
const skor = [23, 19, 22, 67, 44, 90];

console.log(binatang.length);
console.log(skor.join("-"));

binatang.push("monkey");
console.log(binatang);

//slice(indexawal, indexakhir) mengambil untuk membuat array baru/array baru

const siswa = ["Maulana", "Naoufal", "faisal", "taopik", "rian"];
//slice akan menghasilkan array baru
const siswa2 = siswa.slice(2, 5);
console.log(siswa2);

//splice = menambahkan alement baru
//splice(indexawal, maudihapus berapa, elementbaru1,elementbaru2,...)
siswa.splice(2, 0, "yudha");
console.log(siswa);

//forEach = sama kaya perulangan for
const nilai = [70, 75, 82, 65, 58];

nilai.forEach(function (e, i) {
  console.log("Index ke-" + i + " = " + e);
});

//sort = mengurutkan array, default nya untuk mengurutkan dari yang terkecil sampai yang terbesar
console.log(nilai.sort());

//map = memetakan nilai nilai yang ada di dalam array
const dikalidua = nilai.map(function (e) {
  return e * 2;
});
console.log(dikalidua);

//filter (menghasilkan array baru) dan find
const bilanganBulat = [2, 4, 6, 8, 10, 3, 5, 7];

const bilbul = bilanganBulat.filter(function (e) {
  return e > 6;
});

//find

const bilbul2 = bilanganBulat.find(function (e) {
  return e > 6;
});


console.log(bilbul);
console.log(bilbul2);
