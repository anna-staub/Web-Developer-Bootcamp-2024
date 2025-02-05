/*
********************************************************************************************
AUFGABE
Define a function called allEvens that accepts a single array of numbers.  If the array contains all even numbers, return true.  Otherwise, return false.
********************************************************************************************

LÖSUNG
Als klassische Funktion:
-----------------------
function allEvens(numbers) {
    return numbers.every(number => 
        number % 2 === 0
    )
}


Als Callback mit nested Arrow Funktionen mit {}-Klammern
--> {}-Klammern erfordern immer ein explizites return!
--------------------------------------------
const allEvens = numbers => {
    return numbers.every(number => {
        return number % 2 === 0
    });
}

 Als Callback mit nested Arrow Funktionen ohne {}-Klammern (und entsprechend ohne explizites return)
 ------------------------------------------------------------------------ */
const allEvens = numbers => numbers.every(number => number % 2 === 0);

console.log(allEvens([1, 2, 4, 6]));