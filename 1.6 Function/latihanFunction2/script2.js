//jumlah
function hitungJml(arr) {
  jumlah = 0;
  for (let i = 0; i < arr.length; i++) {
    jumlah = jumlah + arr[i];
  }
  return jumlah;
}

//hitung rata-rata
function hitungRata(arr) {
  if (arr.length === 0) return;
  return hitungJml(arr) / arr.length;
}

//inputan user dan membuat array
function buatArray() {
  const jumlahElm = parseInt(prompt("Masukan jumlah element pada array: "));

  let arr = []; 
  for (let i = 0; i < jumlahElm; i++) {
    arr.push(parseInt(prompt("Masukkan angka ke-" + (i + 1) + ":")));
  }
  return arr;
}

const inputArray = buatArray();

//masukan nilai jumlah dan rata-rata

const jml = hitungJml(inputArray);
const rta = hitungRata(inputArray);

//menampilkan
console.log("Array yang dimasukkan:", inputArray);
console.log("Jumlah dari elemen-elemen dalam array:", jml);
console.log("Rata-rata dari elemen-elemen dalam array:", rta);
