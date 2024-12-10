function sayHello() {
    return "BONJOUR DWWM5 !";
}

let greetings = console.log(sayHello());

function chooseGame(nameGame) {
    return `Viens on joue à ${nameGame}`;
}

// let gameChoosen = console.log(chooseGame("Call Of Duty !"));

// // && (ET)
// //     || (OU)


// // false && true = false;
// // Est - ce que je peux faire les courses ? J'ai pas d'argent(false), le magasin est ouvert(true);

// // true && true = true;
// // Est - ce que je peux faire les courses ? J'ai de l'argent(true), le magasin est ouvert(true);

// // true && false = false;
// // Est - ce que je peux faire les courses ? J'ai de l'argent(true), le magasin est fermé(false);

// // false && false = false;
// // Est - ce que je peux faire les courses ? J'ai de l'argent(false), le magasin est fermé(false);


// // && = Tout doit être true pour avoir true;

// // false || false = false;
// // Est-ce que je peux me déplacer ? J'ai pas de voiture (false), j'ai pas de vélo (false);

// // true || true = true;
// // Est-ce que je peux me déplacer ? J'ai une voiture (true), j'ai un vélo (true);

// // true || false = true;
// // Est-ce que je peux me déplacer ? J'ai une voiture (true), j'ai un vélo (false);

// // false || true = true;
// // Est-ce que je peux me déplacer ? J'ai une voiture (false), j'ai un vélo (true);

// // || = Il suffit QU'UNE SEULE chose soit true pour avoir true.


// function getReady(clothes, bag, food){
//     return  `J'ai un ${food} dans mon ${bag} et j'ai mis mon ${clothes} !`
// }

// let myself = console.log(getReady("survet", "Eastpack", "sandwich"));


// const cow ={
//     name: "Nemo",
//     moew: function(){
//         return "La vache fait moww !"
//     }
// }

// console.log(cow)


// const myArray = [1, 3, 789, 90000988];

// console.log(myArray)

// const arrayOfObjects = [
//     {
//         name : "Julie",
//         age : 32,
//         address : "rue de la Beaune"
//     },
//     {
//         name : "Matt"
//     },
//     {
//         name : "Adam"
//     },
// ];

// console.log(arrayOfObjects);


// (function(){
//     console.log("S'exécute seule !")
// })();

// function order(dish= "pizza", drink="water"){
//     return `T'as commandé : ${dish} avec ${drink}`
// }

// console.log(order())

// const callFamily = function(){
//     return "Hello mom !"
// }

// console.log(callFamily())

// let cat = {
//     name: "Felix",
//     age: 2,
//     isCute: true,
//     isSleepy: true
// };

// console.log(cat.name)

// console.log(`Mon chat s'appelle ${cat.name} et il a ${cat.age} mois`);

// const musicInstrument = {
//     type: "drums"
// };

// console.log(musicInstrument);

// musicInstrument.price = 2600;
// musicInstrument.currency = "dollars";
// console.log("NEW", musicInstrument);

// if (musicInstrument.price = 2600) {
//     console.log("Wow, pas cher !")
// } else {
//     console.log("Wow wow c'est trop cher, je vais devoir casser la tirelire")
// }

// if (musicInstrument.price < 300) {
//     console.log("Wow, pas cher !")
// } else if (musicInstrument.price > 3000) {
//     console.log("Wow wow c'est trop cher, mais je m'en fous, je suis dev !")
// } else {
//     console.log("Wow wow c'est trop cher, je vais devoir casser la tirelire")
// }

// // if(conditon){
// //     return si code est vrai
// // } else {
// //     si faux return ce code
// // }

// // if(conditon1){
// //     return si code est vrai
// // } else if (condition2) {
// //     si condition précedente fausse return ce code
// // } else {
// //     si aucune condition n'est vraie, return ce code
// // }

// const studentAssofac = {
//     firstname: "Sami",
//     age: 21,
//     formation: "DWWM",
//     city: "Montreuil"
// }

// console.log(`Je m'appelle ${studentAssofac.firstname} et je suis en ${studentAssofac.formation}`)

// if (studentAssofac.age < 18){
//     console.log("Il est trop jeune")
// }
// else if (studentAssofac.age > 18 && studentAssofac.age < 60 ){
// console.log("Il peut rester dans la formation")
// } else {
//     console.log("Il est trop vieux");
// }

// const jour = "Samedi";

// switch(jour){
//     case "Lundi":
//         case "Mardi":
//         case "Mercredi":
//     case "Jeudi":
//         case "Vendredi":
//             console.log("Jour de la semaine, on bosse");
//             break;
//         default:
//             console.log("C'est le week-end, repos !")
// }

// let ballon = "C'est un ballon bleu";

// function myRoom(){
//     let mytoy= "Barbie";
// console.log(mytoy);
// }

// myRoom()
// console.log(ballon)

// function multiplier(x,y){
//     const res= x*y;
//     return isNaN(res) ? "Il me faut 2 nombres pour faire le calcul" : res;
// }

// resultatCalcul = multiplier(2, 5);
// console.log('----->', resultatCalcul)

// function longestWord(mot1, mot2){
//     let result = "Le mot le plus long est :";
//     if(mot1.length > mot2.length){
//         return result + mot1; 
//     } else {
//         return result + mot2;
//     }
// }

// console.log(longestWord("blabla", "serre-tête"))

// let Hulk = {
//     life: 90
// }

// console.log("Hulk a "+ Hulk.life +" points de vie.")


// const phone = {
//     marque: "Samsung",
//     modele: "S24",
//     prix: 2100
// }

// if (phone.marque === "Samsung") {
//     console.log("Yay ! C'est le bon téléphone !")

// } else if (phone.marque === "Iphone") {
//     console.log("Oops ! Mauvais téléphone ! Cherches encore !")
// }

// if (phone.prix > 2000) {
//     console.log(" Le tél Samsung est cher");
// } else if (phone.prix < 200) {
//     console.log("Le tél Samsung n'est pas cher !");

// } else {
// console.log("Le tél Samsung coûte 2000");
// }

// if(phone.prix > 2000){
//     console.log(`Le ${phone.marque} ${phone.modele} est à ${phone.prix} €, c'est un téléphone haut de gamme !`);
// } else {
//     console.log(`Le prix est inférieur à  2000€`);
// }

// // console.log(phone.modele)

// if(phone.prix > 2800) {
//     console.log("Le téléphone est cher");
// } else {
//     console.log("If other phone, the price is different")
// }


// if (!phone.marque){
//     console.log("oops, mauvais téléphone, sorry !")
// } else {
// console.log("Yay ! Samsung")
// }

// const user = {
//     name: "Julie",
//     email: "julie@hello.fr",
//     isAdmin: false
// };

// if (!user.isAdmin){
//     console.log("t'es pas admin !!!")
// } else {
//     console.log("bienvenue dans la partie admin")
// }


// ARRAYS (Tableaux)

// const users = [
//     {
//         name: "Julie",
//         age: 34
//     }
//     , {
//         name: "Bernard",
//         age: 67
//     }
// ];
// console.log("Users", users[1].name)

// const monPremierArray = [30, 9, "Toto", true, 56];

// console.log("log de mon premier array =>", monPremierArray);
// console.log("Longueur de mon array =>", monPremierArray.length);


// const notes = [3, 16, 20, 1, 0, 3, 10, 17, 19]
// console.log("Notes avant push :", notes)
// notes.push(15)

// console.log("Notes", notes)

// notes.unshift(1)
// console.log("Notes après unshift :", notes)

// console.log("Première valeur du tableau", notes[5])

// console.log("Dernière case de l'array :", notes[notes.length - 1])


// const monSecondArray = [30, "Jean", 33, 1099, 299, 200, 277399, 2777399990, 2899];

// function lastValueOfArray(array) {
//     return array[array.length - 1];
// };

// console.log("test function :", lastValueOfArray(monSecondArray)) 

// monSecondArray.push("foo");

// console.log("Second test :", lastValueOfArray(monSecondArray));

// let str = "Bonjour tout le monde";

// console.log("String", str[str.length - 1])


// const assofaciens = [
//     {
//         prenom: "Yacine",
//         promo: "DWWM5"
//     },
//     {
//         prenom: "Asma",
//         promo: "DWWM5"
//     }
// ]


// console.log("Mon second assofacien est :" + assofaciens[1].prenom)

// assofaciens.push({
//     prenom: "Noah",
//     promo: "DWWM5"
// });

// console.log("tous les assofaciens : ", assofaciens)

// console.log("Dernier étudiant de la liste :" + assofaciens[assofaciens.length - 1].prenom);




// Exercice 1
/*
Créez une fonction qui prend une note sur 100 et retourne :
- "Excellent" si >= 90
- "Très bien" si >= 80
- "Bien" si >= 70
- "Passable" si >= 60
- "À améliorer" si < 60
*/



// Exercice 2
/*
Créez un système qui calcule une remise selon :
- Montant d'achat > 100€ : 10%
- Montant d'achat > 200€ : 15%
- Client fidèle (boolean) : +5% supplémentaire
*/

// function calculerRemise(montant, ClientFidele) {
//     let tauxRemise = 0;

//     if (montant > 200) {
//         tauxRemise = 0.15; // 15%
//     } else if (montant > 100) {
//         tauxRemise = 0.10; // 10%
//     }

//     if (ClientFidele) {
//         tauxRemise += 0.05; // +5%
//     }

//     const remise = montant * tauxRemise;
//     const montantFinal = montant - remise;

//     return {
//         montantInitial: montant,
//         tauxRemise: tauxRemise * 100 + '%',
//         montantRemise: remise,
//         montantFinal: montantFinal.toFixed(2)
//     };
// }

// console.log(calculerRemise(250, true));

// function nomFonction(nbr) {

// }

// nomFonction(3)

// const nbr = [1, 2, 3, 4, 5];
// console.log(nbr.length)

// const arrayOfArrays = [
//     [1, 3, 4, 6, 98], // Index 0
//     //  0  1  2  3   4
//     [true, false, false, true], // Index 1
//     //    0      1      2     3
//     ["hi !", "bonjour", "Mardi", [2,3]], // Index 2
//     //    0         1          2       3 
//                                 //    0 1 
//     [{name: "Frigo", price: 600}, { name: "car",price: 10000}] // Index 3
//                 // 0                               1
// ]

// console.log("tableau imbriqué =>", arrayOfArrays[3][1].name)

// let word = "Salut Sami !"
// let word1 = "Hello !"
// console.log(word1[3], word[3])

// let x = 0;
// console.log(x);
// console.log("------------------");
// x = x + 1;
// console.log(x)
// console.log("------------------");
// x += 1
// console.log(x)
// console.log("------------------");
// x += 10; // => x = x + 10
// console.log(x);
// console.log("------------------");
// x++;
// console.log(x);
// x--;
// console.log(x);

// console.log("------------------");
// // WHILE
// let count = 0;
// while (count <= 20) {
//     console.log(count);
//     count++;
// }

// let superMario = {
//     score: 0,
//     life: 100,
// };

// let nombreEnnemis = 0;

// console.log("avant la boucle :", superMario);

// while (superMario.life > 0) {
//     nombreEnnemis++;
//     superMario.life--;
// }

// console.log("Ennemis : ", nombreEnnemis);
// console.log("après la boucle", superMario);


// Créer une fonction qui vérifie si un mot de passe est valide:
// - au moins 8 caractères
// - au moins une majuscule
// - au moins un chiffre 
// - au moins un caractère spécial

// function VerifMdp(mdp) {
//     if (mdp.length < 8) return false;
//     const majuscule = "{A-Z}";
//     const chiffre = "{0-9}";
//     const special = "{&'#!?}";
//     return (
//         majuscule.test("mdp") &&
//         chiffre.test("mdp") &&
//         special.test("mdp")
//     );
// }

// console.log(VerifMdp("Test,8hdjhl4"))

// const str = "football";
// const regex = new RegExp('foo*');
// const globalRegex = new RegExp('foo*', 'g');

// console.log(globalRegex.test(str));


//     / (?=.* [a - z] ?/
// function checkPassword(characters) {
//     const min_length = 8;
//     const error_length = 'erreur : le mot de passe doit faire au moins 8 charactères';
//     const valide_password = "mot de passe valide !";
//     const erreur_prefix = "il manque : ";
//     const erreur = {
//         upper: "Majuscule",
//         lower: "minuscule",
//         number: "un chiffre",
//         special: "un caractère spécial"
//     };
//     const missing_element = [];

//     if (characters.length < min_length) {
//         return error_length;
//     } else {
//         const status = {
//             hasUpper: false,
//             hasLower: false,
//             hasNumber: false,
//             hasSpecial: false
//         };
//         for (const char of characters) {
//             if (char >= 'A' && char <= 'Z') {
//                 status.hasUpper = true
//             } else if (char >= 'a' && char <= 'z') {
//                 status.hasLower = true
//             } else if (char >= '0' && char <= '9') {
//                 status.hasNumber = true
//             } else {
//                 status.hasSpecial = true
//             }

//             if (!status.hasUpper) {
//                 missing_element.push(erreur.upper);
//             }
//             if (!status.hasLower) {
//                 missing_element.push(erreur.lower);
//             }
//             if (!status.hasNumber) {
//                 missing_element.push(erreur.number);
//             }
//             if (!status.hasSpecial) {
//                 missing_element.push(erreur.special);
//             };
//             if (missing_element.length > 0) {
//                 return erreur_prefix + missing_element.join("", "");
//             } else {
//                 return valid_password;
//             }
//         }

//     }
// }
// const test_password = ["abc", "abcdefgh", "ABCDEFGH", "ABCD1234", "Abcdefgh", "abcd1234!", "Abcd123!"];

// console.log("===, testDesMotsDePasse ===");
// test_password.forEach(password => {
//     const result = checkPassword(password);
//     console.log(` "${password}" : ${result}`);
// });

// let bonbons = ["citron", "abricot", "peche", "fraise"];

// bonbons.forEach(bonbon => {
//     console.log( `${bonbon}`);
// })



// const users = [{ name: "Samia" }, { name: "Jordan" }, { name: "Lucie" }, { name: "Mathis" }, { name: "Eleanore" }, { name: "Bruno" }, { name: "Louis" }];

// console.log("Name à l'index 3 :", users[3].name)

// DO...while

// let contenuBol = 500;

// do {
//     console.log("Mange la soupe :", contenuBol);
//     let qteMangee = Math.ceil(Math.random() * (0, 100));
//     // génère un nombre aléatoire entre 0 et 100 et va l'arrondir à l'entier inférieur
//     contenuBol -= qteMangee;
// } while (contenuBol >= 0);

// const persons = [{ name: "Samia" }, { name: "Jordan" }, { name: "Lucie" }, { name: "Mathis" }, { name: "Eleanore" }, { name: "Bruno" }, { name: "Louis" }];


// for (let i = 0; i < persons.length; i += 1) {
//     console.log(i, persons[i].name)
// }

// console.log("-------")

// for (let i = 0; i < 101; i += 1) {
//     console.log(i)
//     console.log("-------")
// }

// console.log("---MOINS----")

// for (let i = 10; i > -1; i -= 5) {
//     console.log(i)
//     console.log("--- Tour ---")
// }

// const phraseSimple = "Voici une phrase toute simple, en guise d'exemple !";
// console.log("Parcourir toutes les lettres d'une phrase ----");

// for (let index = 0; index < phraseSimple.length - 1; index++) {
//     console.log(phraseSimple[index]);
// }
// const assofac = [{
//     name: "Karla", promo: "dww5"
// },
// {
//     name: "Mohamed", promo: "dww5"
// },
// {
//     name: "Sami", promo: "dww5"
// },
// {
//     name: "Noah", promo: "dww5"
// },
// {
//     name: "Yacine", promo: "dww5"
// },
// {
//     name: "Arthur", promo: "dww5"
// },
// {
//     name: "Maimouna", promo: "dww5"
// },
// {
//     name: "Farah", promo: "dww5"
// },
// {
//     name: "Mahamoudou", promo: "dww5"
// },
// {
//     name: "Ilyas", promo: "dww5"
// },
// {
//     name: "Asma", promo: "dww5"
// },
// {
//     name: "Nishan", promo: "dww5"
// },]


// for (let j = 0; j < assofac.length; j++) {
//     console.log(assofac[j].name)
// }

// let valeur = 0;

// for (let k = 0; k < assofac.length; k++) {
//     // console.log(assofac[k].nom)
//     valeur += assofac[k].name.length
// }

// console.log(valeur)


// function multiplication(var1, var2) {
//     return var1 * var2
// }
// console.log("resultat multiplication")

// console.log(multiplication(3, 5))


// function motPlusLong(mot1, mot2) {
//     if (mot1.length > mot2.length) {
//         return mot1
//     } else {
//         return mot2
//     }
// }

// console.log(motPlusLong("gateau", "pistache"))

// const cat = {
//     name: "Felix",
//     age: 1,
//     talk: function (humeur) {
//         return humeur === "bonne" ? "meeoowwww" : " shhhrrrrrhhh"
//     }
// }


// console.log(cat.talk("bonne"))


// for (let i = 0; i <= 10; i++) {
//     console.log(`2 x ${i} = ${2 * i}`)
// }

// let i = 10;
// while (i >= 0) {
//     console.log(i)
//     i--;
// }

// i++ === i += 1;

// const nombres = [1, 4, 8, 12, 98, 10005, 99304, 938839, 992886630090];
// let liste = [];

// for (let i = 0; i < nombres.length; i++) {
//     if (nombres[i] % 2 === 0) {
//         liste.push(nombres[i])
//     }
// }

// const nombres2 = [1, 4, 8, 12, 98, 10005, 99304, 938839, 992886630090];
// let liste2 = [];

// nombres2.forEach((nombre) => {
//     if (nombre % 2 === 0) {
//         liste2.push(nombre)
//     }
// })




// console.log("Nombres pairs avec for :", liste)
// console.log(liste2)

// const card = [{ name: "Ps5", price: 700 },
// { name: "Xbox", price: 400 },
// { name: "PC", price: 2000 },
// { name: "Nintendo Switch", price: 300 },];
// let total = 0;
// card.forEach((article) => {
//     total += article.price
//     console.log(` Article : ${article.name} - Price : ${article.price}`);
// })

// console.log(`Total : ${total} €`)






// let x = 100;
// function bar() {
//     let count = 10;
//     console.log("---1----")
//     console.log("count dans bar :", count);
//     console.log("x dans bar :", x);
// }

// console.log(bar())

// function baz() {
//     let count = 0;
//     console.log("---2----");
//     console.log("count dans baz", count);
//     console.log("x dans baz :", x);
// }
// console.log(baz());


// let varGlobale = "Je suis globale";
// console.log(varGlobale)
// function test() {
//     let varLocale = "Je suis locale";
//     console.log(varLocale)
//     console.log(varGlobale)
// }
// console.log(varGlobale)
// console.log(test())
// console.log(varLocale)


// function gateau(recette) {
//     console.log("préparation des ingrédients");
//     console.log("début de la préparation");
//     recette();
// }

// function recette() {
//     console.log("on fait le gateau ici!")
// }

// console.log(gateau(recette));

// const products = [{
//     id: 1, name: "iPhone", price: 1500, stock: 0
// },
// {
//     id: 1, name: "Samsung", price: 1200, stock: 9800
// },
// {
//     id: 1, name: "Huawai", price: 500, stock: 11220
// },
// {
//     id: 1, name: "Motorola", price: 100, stock: 44330
// },
// {
//     id: 1, name: "Nokia", price: 200, stock: 30
// },
// {
//     id: 1, name: "LG", price: 700, stock: 400
// },
// {
//     id: 1, name: "Pixel", price: 1000, stock: 90
// },
// {
//     id: 1, name: "Oppo", price: 900, stock: 3
// }]


// function productFiltered(productsFilter, priceLimit) {
//     const filtered = [];
//     for (let index = 0; index < productsFilter.length; index++) {
//         if (productsFilter[index].price >= priceLimit) {
//             filtered.push(productsFilter[index]);
//         }
//     }
//     return filtered;
// }
// const filtered1 = products.filter(function (product) {
//     return product.price >= 1000;
// });
// const newFiltered = products.filter(product => product.price >= 1000);

// console.log(productFiltered(products, 1000));
// console.log("Filter =>", filtered1);
// console.log("New filter = >", newFiltered)

// const sum = products.reduce(function (accumulateur, product) {
//     if (isNaN(product.price)) throw new TypeError("sorry gros, ça marche pas ici !!!");
//     return (accumulateur += Number(product.price));
// }, 0);

// console.log("Somme du prix de tous les produits est :", sum)

// const array1 = [1, 2, 3, 4];

// const initalValue = 0;

// const sumInitial = array1.reduce((accumulateur, currentValue) => accumulateur + currentValue, initalValue);

// console.log(sumInitial);

// Synchrone - Asynchrone 

// const timeOut = setTimeout(function () {
//     console.log("Action 1 terminée !!! Yay !");
//     clearTimeout(timeOut);
// }, 3000)

// const callback = () => {
//     console.log("Autre action terminée !")
//     clearTimeout(callback)
// }

// const newTimeOut = setTimeout(callback, 3000);

// let countFoo = 0;

// const interval = setInterval(() => {
//     countFoo++
//     console.log("count ++ setInterval", countFoo);
//     if (countFoo === 10) clearInterval(interval)
// }, 1000)


// const users = [
//     { name: "bill", lastname: "bar", id: 10, age: 20, email: "foo@bar.com" },
//     { name: "jane", lastname: "doe", id: 30, age: 40, email: "jane@doe.io" },
//     { name: "jim", lastname: "foo", id: 100, age: 30, email: "jimmy@foo.org", isAdmin: true }
// ];

// const prods = [
//     {
//         id: 1,
//         name: "Sony Bravia",
//         price: 500,
//         stock: 20,
//         rate: 3.5,
//         category: "multimedia"
//     },
//     {
//         id: 2,
//         name: "skateboard element full",
//         price: 180,
//         stock: 3,
//         rate: 5,
//         category: "sport"
//     },
//     {
//         id: 3,
//         name: "Samsung S7",
//         price: 600,
//         stock: 10,
//         rate: 4,
//         category: "multimedia"
//     },
//     {
//         id: 4,
//         name: "Baby radio",
//         price: 20,
//         stock: 100,
//         rate: 5,
//         category: "babies"
//     }
// ];

// const orders = [
//     { id: 1, userID: 10, productID: 1234, quantity: 2, date: "19-02-2019" },
//     { id: 2, userID: 10, productID: 1, quantity: 1, date: "01-01-2020" },
//     { id: 3, userID: 30, productID: 2, quantity: 1, date: "25-03-2020" }
// ];

// function isUserValid(id) {
//     const userFound = users.filter(user => user.id === id);
//     return userFound.length === 1;
// }

// console.log(isUserValid())

// Fonctions fléchées ==== arrow function
// function additionner(a, b) { return a + b };


// console.log(additionner(3, 3));


// const addition = (a, b) => a + b;

// console.log(addition(3, 8));

// destructuring

// const prenom = person.prenom;
// const age = person.age;

// const { prenom, age } = person;

// Spread
// const nums = [1, 3, 7, 9];
// const num2 = [...nums, 8, 19, 39];

// console.log("NUMS =>>>", nums);
// console.log("NUM2 =>>>", num2);

// const tabs1 = [3939, 998, 98983];
// const tabs2 = [3, 9, 77, 739, 44, 55];

// const fusionTabs = [...tabs1, ...tabs2];

// console.log("FusionTabs =>>>", fusionTabs);
// console.log("NUM1 =>>>", tabs1)

// const student = { name: "Julien", age: 34 };
// const addInfos = { promo: "dwwm5" };

// const newInfoStudent = { ...student, ...addInfos };
// console.log("newInfoStudent =>>>", newInfoStudent);
// console.log("student =>>>", student);


// const card = ["iPhone", "pommes", "chaussettes"];
// const wishList = [...card];
// card.push("jus d'orange");

// console.log("WishList ==>", wishList);
// console.log("Card", card);
// console.log("wishList 2 ==>", wishList)


// .map()

// const numbs = [3, 4, 6];
// const triple = numbs.map(t => t * 3);
// console.log("Triple = ", triple);


const cities = [
    { name: "Paris", country: "France" },
    { name: "Marseille", country: "France" },
    { name: "Lyon", country: "France", },
    { name: "Brest", country: "France", },
    { name: "Strasbourg", country: "France", },
    { name: "Bordeaux", country: "France", },
    { name: "Quimper", country: "France", },
    { name: "Lille", country: "France", }
]

// for (let i = 0; i < cities.length; i++) {
//     console.log("Sans if : ", cities[i].name);
// }

// const onlyNames = cities.map(city => city.name);
// console.log("City avec .map()", onlyNames);

// const citiesWithIndex = cities.map((city, index) => `${index}. ${city.name}`);
// console.log("City avec index", citiesWithIndex);


// cities.forEach(city => { console.log(` Avec forEach : ${city.name} est en ${city.country}`) })

const newTown = [...cities, { name: "Toulouse", country: "France", }]
console.log("NewTown : ", newTown)

// console.log("Cities", cities)

// const newCity = { name: "Reims", country: "France", }

// cities.push(newCity)
// const newTown = [...cities, { name: "Toulouse", country: "France", }]
// console.log("NewTown : ", newTown)
// console.log("NewCity dans cities :", cities)
// console.log("newTown après push", newTown)

const foods = [
    { name: "tomatoes", family: "fruits" },
    { name: "potatoes", family: "vegetables" },
    { name: "carrots", family: "vegetables" },
    { name: "apple", family: "fruits" },
    { name: "strawberries", family: "fruits" },
    { name: "bananas", family: "fruits" }
];

// Créer une phrase : " Machin fait partie de la famille des ....."

"Tomatoes fait partie de la famille des fruits."

const foodFamilly = foods.map(food => `${food.name} appartient à la famille ${food.family}`);
console.log("Food familly", foodFamilly);

const onlyFruits = foods.map(food => food.name);
console.log("bar avec .map()", onlyFruits);




// Consigne => ajouter le poste et l'ancienneté dans l'entreprise avec spread operator
// poste: developpeur fullstack
// ancienneté: 10

const employee = {
    name: "Bertrand",
    age: 36,
    city: "La Rochelle"
};
const newInfosEmployee = {
    ...employee,
    poste: "developpeur fullstack",
    yearsIn: 10
};

console.log("Employee ====>", employee);
console.log("newinfosEmployee ===>", newInfosEmployee);
// console.log("Employee 2 :>", employee)




