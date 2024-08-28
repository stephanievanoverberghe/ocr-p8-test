/**
 * Ajoute une valeur (chiffre ou opérateur) à l'affichage de la calculatrice.
 * @param {string} value - Le chiffre ou l'opérateur à ajouter à l'affichage.
 */
const appendToDisplay = (value) => {
    const display = document.getElementById('display');
    display.value += value; // Ajoute les chiffres ou opérateurs à l'affichage
};

/**
 * Efface le contenu de l'affichage de la calculatrice.
 */
const clearDisplay = () => {
    const display = document.getElementById('display');
    display.value = ''; // Remet l'affichage à zéro
};

/**
 * Calcule le résultat de l'expression mathématique affichée et gère les erreurs comme la division par zéro.
 */
const calculateResult = () => {
    const display = document.getElementById('display');

    try {
        // Vérifie si l'utilisateur tente une division par zéro
        if (display.value.includes('/0')) {
            display.value = 'Division by zero is not allowed';
        } else {
            // Évalue l'expression mathématique et affiche le résultat
            display.value = eval(display.value);
        }
    } catch (error) {
        // Si une erreur survient dans l'évaluation
        display.value = 'Erreur';
    }
};
