// Créez votre fonction ici

const calculate = (nbr1, nbr2, operator) => {
    nbr1 = parseFloat(nbr1);
    nbr2 = parseFloat(nbr2);

    let result;

    switch (operator) {
        case '+':
            result = nbr1 + nbr2;
            break;
        case '-':
            result = nbr1 - nbr2;
            break;
        case '*':
            result = nbr1 * nbr2;
            break;
        case '/':
            if (nbr2 !== 0) {
                result = nbr1 / nbr2;
            } else {
                return "Division by zero is not allowed";
            }
            break;
        default:
            return "Invalid operator";
    }
    return result;
}

// Exemples d'utilisation de la fonction
console.log(calculate(5, 3, '+'));   // Affiche 8
console.log(calculate(10, 4, '-'));  // Affiche 6
console.log(calculate(7, 2, '*'));   // Affiche 14
console.log(calculate(12, 3, '/'));  // Affiche 4
console.log(calculate(8, 0, '/'));   // Affiche "Division by zero is not allowed"
console.log(calculate(4, 5, '%'));   // Affiche "Invalid operator"

export default calculate
