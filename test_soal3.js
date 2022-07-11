//Nama : Mohamad Idham Bahri
//Alamat Email: mohamad.idham.bahri@gmail.com
//Waktu Mulai : Senin, 11 Juli 2022 Pukul 12.42 WIB
//Waktu Selesai : Senin, 11 Juli 2022 Pukul 15.00 WIB



//Output 1
let n = 6;
let string = "";
for (let i = 1; i <= n; i++) {
    for (let j = 0; j < i; j++) {
        string += "*"
    }
    string += "\n";
}
console.log(string);




//Output 2
function Output2(angka) {
    let hasil = '';
    for (let i = 0; i < angka; i++) {
        for (let j = angka; j > i; j--) {
            hasil += '*';
        }
        hasil += '\n';
    }
    return hasil;
}
console.log(Output2(6));