let current_movie = 0
let next_movie = 0
let person = {
    name: 'timothy',
    age: 15
}

let movie_data = {
    1 : ['the godfather', 'youtube.com'],
    2 : ['endgame', 'roblox.com'],
    3 : ['deadpool', 'minecraft.com'],
    4 : ['infinity war', 'google.com'],
    5: ['train to busan', 'jlpt.com']
}

console.log("Hello, " + person.name);

function buttonPressed() {
    alert("You pressed the button!")
    changeMovie()
    alert(movie_data[current_movie][0])
}

function changeMovie() {
    while (next_movie === current_movie) {
        next_movie = next_movie = Math.floor(Math.random() * Object.keys(movie_data).length) + 1;
    }
    current_movie = next_movie
    document.getElementById("titleText").innerHTML = movie_data[current_movie][0]
}

function randomIntFromInterval(min, max) { 
    // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function changeButtons(exclude) {
    
}