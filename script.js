var colorRed = document.getElementById("verm").value;
var colorGre = document.getElementById("verde").value;
var colorBlu = document.getElementById("azul").value;
var colorRGB;

var mudarCor = (colorRed, colorGre, colorBlu) => {
    document.body.style.backgroundColor = colorRGB;
    console.log(colorRGB);
}

verm.addEventListener('input', () => {
    colorRed = verm.value;
    colorRGB = "rgb(" + colorRed + ", " + colorGre + ", " + colorBlu + ")";
    mudarCor(colorRed, colorGre, colorBlu);
    document.getElementById("vermelho").innerText = " Red: " + colorRed;
});

verde.addEventListener('input', () => {
    colorGre = verde.value;
    colorRGB = "rgb(" + colorRed + ", " + colorGre + ", " + colorBlu + ")";
    mudarCor(colorRed, colorGre, colorBlu);
    document.getElementById("verd").innerText = "Green: " + colorGre;
});

azul.addEventListener('input', () => {
    colorBlu = azul.value;
    colorRGB = "rgb(" + colorRed + ", " + colorGre + ", " + colorBlu + ")";
    mudarCor(colorRed, colorGre, colorBlu);
    document.getElementById("azu").innerText = "Blue: " + colorBlu;
});