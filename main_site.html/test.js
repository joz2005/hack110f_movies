let person = {
    name: 'timothy',
    age: 15
}

let movie_data = {
    1 : ['the godfather', 'youtube.com']
}

console.log("Hello, " + person.name);

function buttonPressed() {
    alert("You pressed the button!")
    document.getElementById("titleText").innerHTML = 'Button has been pressed'
    alert(movie_data[1])
}