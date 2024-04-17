//cara menghitung array dengan lenght
// const angka = [9, 2, 3, 4, 6, 7]
// for (let i = 0; i < angka.length; i++){
//     console.log("index ke-" + " " + i + "=" + angka[i])
// }

//cara menghapus element
//cara pertama pake undefined
const angka = [2, 4, 6, 8, 10];

angka[1] = undefined;

angka[4] = undefined;
console.log(angka);

//cara keduameghapus array mengguakan delete
delete angka[0];
console.log(angka);
