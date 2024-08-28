/**
 * Convertit un nombre décimal en binaire et affiche le résultat, ou ne fait rien si l'entrée est invalide.
 */
const convertToBinary = () => {
    const decimalValue = document.getElementById('decimalInput').value.trim();

    // Si l'entrée n'est pas un nombre ou est vide, on ne fait rien
    if (isNaN(decimalValue) || decimalValue === '' || !/^\d+$/.test(decimalValue)) {
        document.getElementById('binaryResult').textContent = '';
        return;
    }

    // Convertir la valeur en entier
    const decimalNumber = parseInt(decimalValue, 10);

    // Si le nombre est inférieur à 0, on affiche un message
    if (decimalNumber < 0) {
        document.getElementById('binaryResult').textContent = "Veuillez entrer un nombre décimal positif.";
        return;
    }

    // Conversion en binaire
    const binaryResult = decimalNumber.toString(2);

    // Affichage du résultat
    document.getElementById('binaryResult').textContent = `Le nombre binaire est : ${binaryResult}`;
};
