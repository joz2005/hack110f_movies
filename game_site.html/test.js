let current_movie = 0
let next_movie = 0
let person = {
    name: 'timothy',
    age: 15
}

let movie_data = {
    1 : ['Your Name', 'https://www.youtube.com/embed/98H7ZjDrbcA?si=G2kZMnuS-ZzXJ4NP&amp;controls=0'],
    2 : ['Home Alone', 'https://www.youtube.com/embed/5O60LjTtfaY?si=DJHbNtOpth7niNPm&amp;controls=0'],
    3 : ['Forrest Gump', 'https://www.youtube.com/embed/Rn5SwEp4CaE?si=Jhg-5LBNVP4qsWuL&amp;controls=0'],
    4 : ['China Man', 'https://www.youtube.com/embed/G95b3ji-tek?si=8MHZDwnJtkLqgfAC&amp;start=5']
}

let button_choices = {
    1 : 'left-choice-button',
    2 : 'middle-choice-button',
    3 : 'right-choice-button'
}

function buttonPressed() {
    alert("You pressed the button!");
    changeMovie();
    alert(movie_data[current_movie][0]);
}

function changeMovie() {
    while (next_movie === current_movie) {
        next_movie = Math.floor(Math.random() * Object.keys(movie_data).length) + 1;
    }
    current_movie = next_movie;
    document.querySelector('.video').src = String(movie_data[current_movie][1])
    document.getElementById("titleText").innerHTML = movie_data[current_movie][0];
    changeButtons(current_movie)
}

function randomIntFromInterval(min, max) { 
    // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function changeButtons(exclude) {
    let temp1 = -1;
    let temp2 = -1;
    while ((temp1 === -1) || (temp1 === exclude)) {
        temp1 = Math.floor(Math.random() * Object.keys(movie_data).length) + 1;
    }
    while ((temp2 === -1) || (temp2 === exclude) || (temp2 === temp1)) {
        temp2 = randomIntFromInterval(1, Object.keys(movie_data).length);
    }
    document.getElementsByClassName("left-choice-button")[0].innerHTML = movie_data[temp1][0];
    document.getElementsByClassName("middle-choice-button")[0].innerHTML = movie_data[temp2][0];
    document.getElementsByClassName("right-choice-button")[0].innerHTML = movie_data[exclude][0]
}