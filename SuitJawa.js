var tanya = true;
while( tanya ){
    // menangkap pilihan player
    var p = prompt('pilih : gajah, semut, orang');
    // menangkap pilihan komputer

    // membangkitkan bilangan random
    var comp = Math.random();

    if (comp < 0.34) {
        
        comp = 'gajah';

    } else if(comp >= 0.34 && comp < 0.67){

        comp = 'orang';

    } else {

        comp = 'semut';
    }

    var hasil = '';

    // tentukan rules
    if (p == comp) {

        hasil = 'SERI!';

    } else if(p == 'gajah'){
        // if (comp == 'orang') {
        //     hasil = 'MENANG!';
        // } else {
        //     hasil = 'KALAH!';
        // }
        hasil = (comp == 'orang') ? 'KALAH!' : 'MENANG!';

    } else if(p == 'orang'){
        // if (comp == 'gajah') {
        //     hasil = 'KALAH!';
        // } else {
        //     hasil = 'MENANG!';
        // }
        hasil = (comp == 'semut') ? 'MENANG!' : 'KALAH';

    } else if (p == 'semut') {
        // if (comp == 'orang') {
        //     hasil = 'KALAH!';
        // } else {
        //     hasil = 'MENANG!';
        // }
    hasil = (comp == 'gajah') ? 'MENANG!' : 'KALAH!'; 

    } else {

        hasil = 'Memasukkan pilihan yang salah!!';
    }

    // tampilkan hasilnya

    alert('Kamu Memilih: ' + p + ' Dan Komputer Memilih: ' + comp + '\nMaka hasilnya : Kamu ' + hasil);
    tanya = confirm('lagi');
}

alert('terimakasih sudah bermain');