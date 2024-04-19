const nilaiMahasiswa = [
  36, 66, 82, 53, 76, 17, 50, 38, 93, 29, 78, 57, 22, 53, 78, 38, 20, 46, 80,
  79,
];

function cariIndex(nilai) {
    let indexArr = [];
  if (nilai > 80) {
    indexArr.push("A");
  } else if (nilai >= 70 && nilai <= 80) {
    indexArr.push("B");
  } else if (nilai >= 55 && nilai < 70) {
    indexArr.push("C");
  } else if (nilai >= 45 && nilai < 55) {
    indexArr.push("D");
  } else {
    indexArr.push("E");
  }
  return indexArr;
}

function liatIndex(nilaiArray) {
  console.log("============================================");
  console.log("No\t\t\tNilai Ujian\t\t\tIndex Nilai");
  console.log("============================================");
  for (let i = 0; i < nilaiArray.length; i++) {
    const nilai = nilaiArray[i];
    const indexNilai = cariIndex(nilai);
    console.log(i + 1 + "\t\t\t\t\t" + nilai + "\t\t\t\t\t" + indexNilai);
  }
  console.log("============================================");
}
liatIndex(nilaiMahasiswa);
