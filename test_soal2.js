//validasi yang di inginkan: 

//- Jika inputan mengandung angka maka harus mengeluarkan output : Sistem kami menolak untuk inputan berisi angka 167283
//- Jika inputan tidak mengandung angka maka harus mengeluarkan output : Sistem memeriksa data anda valid dengan ketentuan kami dengan inputan hallo justin selamat datang!

var input1 = "hallo jesika24 selamat datang!"
var input2 = "hallo anggun selamat datang!"
var input3 = "hallo ** selamat datang!"
var input4 = "hallo Mariage889120! selamat datang!"

function ValidasiHuruf(input){
    if(input.match(/^-{0,1}\D+$/)){
        console.log('Sistem memeriksa data anda valid dengan ketentuan kami dengan inputan hallo justin selamat datang!')
    }else{
        console.log('Sistem kami menolak untuk inputan berisi angka 167283');
    }
}
ValidasiHuruf(input1)
ValidasiHuruf(input2)
ValidasiHuruf(input3)
ValidasiHuruf(input4)