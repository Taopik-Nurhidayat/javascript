const mahasiswa = {
  // key and value
  nama: "Taopik nurhidayat",
  nim: "202401",
  umur: 19,
};

console.log(mahasiswa);
//memanggil nilai dengan titik .
console.log("Nama: " + mahasiswa.nama);
console.log(typeof mahasiswa);

//menambahkan property pada object
mahasiswa["alamat"] = "Rawa lele";
mahasiswa["no_telpon"] = "00000000";
mahasiswa["sapa"] = function () {
  console.log("Halo nama saya Taopik");
};
console.log(mahasiswa.alamat);
// memanggil property function di dalam onject
console.log(mahasiswa.sapa());

//menghapus property
delete mahasiswa["umur"];
console.log(mahasiswa);

//object array
const siswaBLK = [
  {
    nama: "Taopik Nurhidayat",
    alamat: "telagasari",
    umur: 15,
  },

  {
    nama: "Faisal",
    alamat: "majalaya",
    umur: 45,
  },

  {
    nama: "Naufal",
    alamat: "kosambi",
    umur: 38,
  },
];

console.log(siswaBLK);

console.log(
  "Hallo nama saya " +
    siswaBLK[1].nama +
    "\n" +
    " alamat di " +
    siswaBLK[1].alamat +
    "\n" +
    " umur saya " +
    siswaBLK[1].umur
);

//this = mereferensikan bahwa kita ada di object apa, khusus function

const buah = {
  nama: "mangga",
  harga: "10k/kg",
  stok: 10,
};

console.log("harga " + buah.nama + " sekarang adalah: " + buah.harga);
