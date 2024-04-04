const nilai3 =prompt ("Masukan Tahun Lahir Anda: ");
let generasi = "";
if (nilai3 <= 1965) {
    generasi = "Baby Boomer"
} else if (nilai3 <= 1979) {
    generasi = "Generasi X"
} else if (nilai3 <= 1994) {
    generasi = "Generasi Y"
} else {
    generasi = "Generasi Z"
}
console.log("Anda Termasuk: " + generasi)