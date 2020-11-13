let user1 = {
    firstName : "Sjon",
    lastName : "Harms",
    age : 24,
    game : "CSGO",
    rank : "Silver 2"
}

let user2 = {
    firstName : "Koos",
    lastName : "de Boer",
    age : 12,
    game : "Club Pinguin",
    rank : "69",
}

let user3 = {
    firstName : "Piet",
    lastName : "Paulusma",
    age : 63,
    game : "Weerman simulator",
    rank : "PRO"
}

let user4 = {
    firstName: "Prince-Fritz-Cruene-August-Willem-Jan-Hendrik-Dick",
    lastName : "de Tweede",
    age : 37,
    game : "Fortnite",
    rank : "3"
}

//geeft random user
let users = [user1, user2, user3, user4];
let x = Math.floor(Math.random() * users.length);

document.getElementById("user").innerHTML= JSON.stringify(users[x]);

function Random(x) {
    console.log(x)
}

Random('Hallo')


