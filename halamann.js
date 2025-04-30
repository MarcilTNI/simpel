document.getElementById("cekBtn").addEventListener("click", function() {
    const status = parseInt(document.getElementById("umur").value);

    if(isNaN(status)) {
        document.getElementById("hasil").innerText = "Error";
    } else if((status >= 0) && (status <= 3)) {
        document.getElementById("hasil").innerText = "Balita";
    } else if((status > 3) && (status <= 14)) {
        document.getElementById("hasil").innerText = "Anak-Anak";
    } else if((status > 14) && (status <= 23)) {
        document.getElementById("hasil").innerText = "Remaja";
    } else if((status > 23) && (status <= 50)) {
        document.getElementById("hasil").innerText = "Dewasa";
    } else {
        document.getElementById("hasil").innerText = "Lansia";
    }
});

document.getElementById("reset").addEventListener("click", function() {
    location.reload();
});