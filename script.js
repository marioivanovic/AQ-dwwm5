// function sayHello(){
//     return "BONJOUR DWWM5 !";}

// let greetings = console.log(sayHello());

// function chooseGame(nameGame) {
//     return `Viens on joue à ${nameGame}`;
// }

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

let x = 0;
console.log(x);
console.log("------------------");
x = x + 1;
console.log(x)
console.log("------------------");
x += 1
console.log(x)
console.log("------------------");
x += 10; // => x = x + 10
console.log(x);
console.log("------------------");
x++;
console.log(x);
x--;
console.log(x);

console.log("------------------");
// WHILE
let count = 0;
while (count <= 20) {
    console.log(count);
    count++;
}

let superMario = {
    score: 0,
    life: 100,
};

let nombreEnnemis = 0;

console.log("avant la boucle :", superMario);

while(superMario.life > 0){
    nombreEnnemis++;
    superMario.life--;
}

console.log("Ennemis : ", nombreEnnemis);
console.log("après la boucle", superMario);


Créer une fonction qui vérifie si un mot de passe  est valide:
- au moins 8 caractères
- au moins une majuscule
- au moins un chiffre 
- au moins un caractère spécial


