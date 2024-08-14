// 1. import data from json

const ALL_DATA = require("./data.json");
// console.log("ALL_DATA :", ALL_DATA)

// 2. give all city name of state which one give by user

// function cityByState(stateName) {
//     let matchData = ALL_DATA.filter((e) => {
//         return e.state_name === stateName;
//     });
//     let data = matchData.map((e) => {
//         return e.city;
//     });
//     return data;
// }

// let cityOfMH = cityByState("Mahārāshtra");
// console.log("cityOfAP:", cityOfMH);


// 3. give all city name , which have more character than user given input

// function cityData(cityname) {
//     let findcity = ALL_DATA.filter((e) => {
//         return e.city.length > cityname
//     });
//     let data = findcity.map((e) => {
//         return e.city
//     });
//     return data;

// }

// let user = cityData(18)
// console.log("user:", user)

// 4. city list which has population more then user give

// let populationData = require("./data.json");

// function AllCitiesByState(populationbystate) {
//     let citiesByState = {};

//     populationData.forEach(city => {
//         let state = city.state_name;
//         let population = parseInt(city.population);

//         if (population > populationbystate) {
//             if (!citiesByState[state]) {
//                 citiesByState[state] = [];
//             }

//             citiesByState[state].push(city.city);
//         }
//     });

//     return citiesByState;
// }

// let Citiesdata = AllCitiesByState(2000000);
// console.log(Citiesdata);

// 5. Email

// give username from email adress
// class UserName {
//     constructor(email) {
//         this.email = email;
//     }
//     giveName() {
//         let name = this.email.split("@")[0];
//         return name
//     }
// }
// let a = new UserName("divyesh429.dp@gmail.com");
// let Username = a.giveName();
// console.log("Ussername : ", Username);


// // give "gmail" from email adress
// class EmailService {
//     constructor(email) {
//         this.email = email
//     }
//     giveGmail() {
//         let mail = this.email.split("@")
//         let Gmail = mail[1].split('.')[0];
//         return Gmail
//     }
// }
// let b = new EmailService("divyesh429.dp@gmail.com")
// let Email = b.giveGmail();
// console.log("Email : ", Email);


// // give Domain from email adress
// class DOMAIN {
//     constructor(email) {
//         this.email = email
//     }
//     giveDomain() {
//         let mail = this.email.split('gmail')
//         let Gmail = mail[1].split('.')[1]
//         return Gmail
//     }
// }
// let c = new DOMAIN("divyesh429.dp@gmail.com")
// let Domain = c.giveDomain()
// console.log("Domain :", Domain)

