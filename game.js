
const angkaRahasia = Math.floor(Math.random() * 10) + 1;
console.log("Angka yang Benar:" ,angkaRahasia);

document.getElementById("btn").addEventListener("click", function() {
    const tebakAngka = parseInt(document.getElementById("tebak").value);

    if(isNaN(tebakAngka)) {
        document.getElementById("result").innerText = "Error";
    } else if(tebakAngka === angkaRahasia) {
        document.getElementById("result").innerText = "Benar";
    } else {
        document.getElementById("result").innerText = "Salah";
    }
});

document.getElementById("reset").addEventListener("click" ,function() {
    location.reload();
});
