//votre code ici

const pairNumbers = (min, max) => {
    let numbers = [];

    for (let i = min; i <= max; i++) {
        if (i % 2 === 0) {
            numbers.push(i);
        }
    }
    return numbers.join(',');
}

pairNumbers(1, 10);

export default pairNumbers
