const app = express(); 

const inputFieldFirstName = document.getElementById('input-firstname')
const inputFieldLastName = document.getElementById('input-lastname')

function ShowUsers() {
    // const User = function (firstname, lastname) {
    //     this.firstname = firstname;
    //     this.lastname = lastname;
    // }

    // let newuser = new User(inputFieldFirstName.value, inputFieldLastName.value)
    app.post("/users", users.create(inputFieldFirstName.value, )); 

    

    app.post('/users', (req, res) => {
        let user = {
            firstname: inputFieldFirstName.value,
            lastname: inputFieldLastName.value
        }
        return res.send('Received a POST HTTP method');
      });
    console.log(newuser)
}




// const button = document.getElementById('myButton');
// button.addEventListener('click', function(e) {
//   console.log('button was clicked');

//   fetch('/users', {method: 'POST'})
//     .then(function(response) {
//       if(response.ok) {
//         console.log('Click was recorded');
//         return;
//       }
//       throw new Error('Request failed.');
//     })
//     .catch(function(error) {
//       console.log(error);
//     });
// });

// let user1 = {
    //     firstName: "Sjon",
    //     lastName: "Harms",
    //     age: 24,
    //     game: "CSGO",
    //     rank: "Silver 2"
    // }
    
    // let user2 = {
    //     firstName: "Koos",
    //     lastName: "de Boer",
    //     age: 12,
    //     game: "Club Pinguin",
    //     rank: "69",
    // }
    
    // let user3 = {
    //     firstName: "Piet",
    //     lastName: "Paulusma",
    //     age: 63,
    //     game: "Weerman simulator",
    //     rank: "PRO"
    // }
    
    // let user4 = {
    //     firstName: "Prince-Fritz-Cruene-August-Willem-Jan-Hendrik-Dick",
    //     lastName: "de Tweede",
    //     age: 37,
    //     game: "Fortnite",
    //     rank: "3"
    // }
    
    // //geeft random user
    // let users = [user1, user2, user3, user4];
    // let x = Math.floor(Math.random() * users.length);
    
    // document.getElementById("user").innerHTML = JSON.stringify(users[x]);
    
    // function Random(x) {
    //     console.log(x)
    // }
    // Random('Hallo')