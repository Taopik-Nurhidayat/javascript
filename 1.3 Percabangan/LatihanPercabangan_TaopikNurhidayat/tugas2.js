const nilai2 = prompt("Masukan Nilai: ")
let grade = " ";
if (nilai2 >= 85) {
  grade = "A";
} else if (nilai2 >= 75) {
  grade = "B";
} else if (nilai2 >= 65) {
  grade = "C";
} else {
  grade = "D";
}

console.log("Nilai anda: " + nilai2 + " " + ",Grade Anda " + grade);
