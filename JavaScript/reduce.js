// AUFGABE: Mit der reduce Methode alle Preise addieren
const prices = [9.99, 1.50, 19.99, 49.99, 30.50];

const totalPrice = prices.reduce((total, price) => {
    return total+price
})

console.log(`Total Price = ${totalPrice}`);

//--------------------------------------------------------------------------------
// AUFGABE: Mit der reduce Methode den tiefsten Preis identifizieren

const lowestPrice = prices.reduce((min, price) => {
    if (price < min) {
        return price
    } else {
        return min
    }
});

console.log(`Lowest Price = ${lowestPrice}`);

//--------------------------------------------------------------------------------
// AUFGABE: Mit der reduce Methode den bestbewerteten Film aus movies herausholen

const movies = [
    {
        title: 'Amadeus',
        score: 99
    },
    {
        title: 'Stand By Me',
        score: 85
    },
    {
        title: 'Parasite',
        score: 95
    },
    {
        title: 'Alien',
        score: 90
    }
]

const findBestMovie = movies.reduce((bestMovie, currMovie) => {
    if (currMovie.score > bestMovie.score) {
        return currMovie}
    return bestMovie
    // ACHTUNG: der return Wert wird wieder in die Funktion/Schleife eingegeben als previousValue/bestMovie.
    // return bestMovie.title funktioniert nicht, weil "reduce" die gleiche Datenstruktur erwartet, wie die, mit der es begonnen hat. Die Iteration crasht, wenn nur ein String ausgegeben und wieder in die Funktion reingespielt wird.
    // Wenn nur der Filmtitel ausgegeben werden soll, kann man .title noch am Schluss der gesamten Funktion anfügen ---> ).title;
    }
);

console.log("Best Movie =",findBestMovie.title);

//--------------------------------------------------------------------------------
// AUFGABE: Mit der reduce Methode die Zahlen addieren - aber mit einem bestimmten Start-Value, in diesem Fall 100

const evens = [2, 4, 6, 8];
const sumFrom100 = evens.reduce((sum, num) => sum + num, 100)
console.log("Summe mit Startwert 100 =",sumFrom100);