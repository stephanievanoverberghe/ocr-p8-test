function convertToBinary() {

    const decimalValue = document.getElementById('decimalInput').value;

    if (isNaN(decimalValue) || decimalValue === '') {
        document.getElementById('binaryResult').textContent = "Veuillez entrer un nombre valide.";
        return;
    }

    const decimalNumber = parseInt(decimalValue, 10);

    if (decimalNumber < 0) {
        document.getElementById('binaryResult').textContent = "Veuillez entrer un nombre décimal positif.";
        return;
    }

    const binaryResult = decimalNumber.toString(2);

    document.getElementById('binaryResult').textContent = `Le nombre binaire est : ${binaryResult}`;
}
