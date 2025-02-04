// Exercise: Write an arrow function expression called greet. It should accept a single string argument, representing a person's name. It should return a greeting string: "Hey [name]!"
const greet = name => {
    return `Hey ${name}!`
}
console.log(greet("Hagrid"));

//-----------------------------------------------------------------------------------
//Arrow functions that contain only one Expression can be written shorter with implicit returns:
//-----------------------------------------------------------------------------------
// const add = function(a, b) {
//     return a + b;
// }

// IS THE SAME AS

// const add = (a, b) => {
//     return a + b;
// }

// IS THE SAME AS

const add = (a, b) => a + b;
console.log('Addition:', add(2, 4));
//-----------------------------------------------------------------------------------

// const square = num => {
//     return num * num;
// }

//IS THE SAME AS

// const square = num => (
//      num * num )

//IS THE SAME AS

const square = num => num * num;
console.log('Square:', square(2));
//-----------------------------------------------------------------------------------
// const rollDie = () => {
//     return Math.floor(Math.random() * 6) + 1
// }

// IS THE SAME AS

// const rollDie = () => (
//     Math.floor(Math.random() * 6) + 1
// )

//IS THE SAME AS

const rollDie = () => Math.floor(Math.random() * 6) +1
console.log('Würfelwurf:', rollDie());
//-----------------------------------------------------------------------------------

// Using arrow functions with map method

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

// const newMovies = movies.map(function (movie) {
//     return `${movie.title} - ${movie.score / 10}`
// })

// IMPLICIT RETURN
const newMovies = movies.map(movie => (
    `${movie.title} - ${movie.score / 10}`
))


