var jmlAngkot = 10;
var angkotBeroperasi = 4;

for (let noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++) {
    if ( noAngkot <= angkotBeroperasi ) {
        console.log("Angkot beroperasi No. " + noAngkot + " Beroperasi dengan benar.");
    } else {
        console.log("Angkot No. " + noAngkot + " sedang tidak beroperasi dengan benar.");
    }
    
}