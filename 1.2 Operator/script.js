// let a = 3;
// let b = 2;

// const c = a + b;

// console.log(c);

// =========================

// let a2 = 6;
// let b2 = 3;

// let cc = a2 + b2;

// console.log(cc);

// ==============
// 1. Penjumlahan
let kalku1 = 15;
let kalku2 = 6;

const gab = kalku1 + kalku2;
console.log(gab);

// 2. Pengurangan
kalku1 = 90;
kalku2 = 70;

const kur = kalku1 - kalku2;
console.log(kur);

// 3. Pembagian
kalku1 = 80;
kalku2 = 4;

const bag = kalku1 / kalku2;
console.log(bag);

// 4. pembagian
kalku1 = 15;
kalku2 = 4;

const kal = kalku1 * kalku2;
console.log(kal);

// operator augmented assegment
let x = 20;
let y = 5;

//operator unary
let k = 5;
console.log(k++);
console.log(k++);
console.log(k++);

console.log(k--);
console.log(k--);
console.log(k--);

//operator perbandingan
let angka1 = 10;
if (angka1 % 2 == 0) {
  console.log("ini bilangan bulat");
} else {
  console.log("ini bilangan ganjil");
}

//operator logika
console.log(10 % 2 === 0 && 10 / 5 === 0);

//operator string

let str = "hello";
let bb = "udin";
console.log(str + " " + "kamu" + " " + bb);

//operator typeof

//operator ternary
let ganjilGenap =
  angka1 % 2 === 0 ? "ini bilangan genap" : "ini bilangan ganjil";
console.log(ganjilGenap);

let angka2 = 15;
ganjilGenap = angka2 % 2 === 0 ? "ini bilangan genap" : "ini bilangan ganjil";
console.log(ganjilGenap);

angka3 = 65;
ganjilGenap =
  angka3 % 2 === 0 ? "ini bilangan genap ke 3" : "ini bilangan ganjil ke 3";
console.log(ganjilGenap);

angka3 = 30;
lanjut = angka3 % 2 === 0 ? "Kamu ganteng" : "kamu jelek";
console.log(lanjut);

// ================================
const nilai = "85";
let grade = " ";
if (nilai >= 80) {
  grade = "A";
} else if (nilai >= 80) {
  grade = "B";
} else if (nilai >= 60) {
  grade = "C";
} else {
  grade = "D";
}
console.log("Nilai anda :" + nilai + ",Grade anda :" + grade);

//built in function = promt, alert, dialog
// 1. prompt

//hitung segi tiga
let alas = prompt("masukan alas: ");
console.log("alas segitiga" + alas);

let tinggi = prompt("Masukan tinggi: ");
console.log("Tinggi segitiga: " + tinggi);

let segitiga = (alas * tinggi) / 2;
console.log("Luas Segitiga: " + segitiga);
