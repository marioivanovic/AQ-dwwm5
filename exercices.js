// Exercice 1

const ages = [12, 15, 23, 25, 18, 8, 30, 16, 22, 17, 29, 19, 20];

//1 Utilisez la méthode adaptées pour trouver les majeurs (+ de 18 ans)

let list = [12, 15, 23, 25, 18, 8, 30, 16, 22, 17, 29, 19, 20];
const majeurs = ages.filter(a => a > 17);
console.log("Asma =>", majeurs);

const majeurPersons = 18;

const majeursPersons = ages.filter(age => age >= majeurPersons);
console.log("Ilyas =>", majeursPersons);

let maj = [];
for (let i = 0; i < ages.length; i++) {
    if (ages[i] > 17) {
        maj.push(ages[i]);
    }
}
console.log("Arthur => ", maj)

//2 Calculez l'age moyen

let moyenne = list.reduce((sum, ages) => sum + ages, 0) / list.length;
console.log("Asma : Age moyen : ", moyenne.toFixed(2))

let moy = 0;
for (let j = 0; j < ages.length; j++) {
    moy += ages[j]
}
moy = moy / ages.length;

console.log("Arthur: moyenne =>", moy - (moy % 0.01));

let totalAges = 0;
for (let i = 0; i < ages.length; i++) {
    totalAges += ages[i];
}
const ageMoyens = totalAges / ages.length;
const ageMoyensArr = Math.round(ageMoyens * 10) / 10;
console.log("Ilyas : Age moyen est :", ageMoyensArr);


const somme = ages.reduce((acc, age) => acc + age, 0);
const AgeMoyen = somme / ages.length;
console.log("Maimouna : moyenne : ", AgeMoyen.toFixed(2));

//3 Calculer la somme des ages
let total = 0;
for (let ages of list) {
    total += ages;
}
console.log("Asma : Somme totale des ages : ", total);

const sommeAges = ages.reduce((acc, age) => acc + age, 0);
console.log("Maimouna :", sommeAges)

function sommes(var1, var2, var3, var4, var5, var6, var7, var8, var9, var10, var11, var12, var13) {
    return var1 + var2 + var3 + var4 + var5 + var6 + var7 + var8 + var9 + var10 + var11 + var12 + var13
}
console.log("Karla : resultat somme : ", sommes(12, 15, 23, 25, 18, 8, 30, 16, 22, 17, 29, 19, 20))


// Exercice 2

const word = ["Angular", "Typescript", "Python", "Go", "Rust", "Php", "Java", "C#", "C++", "ReactJS", "MySQL"];

//1 Trouvez les mots de plus de 4 lettres.
const longWords = word.filter(i => i.length > 4);
console.log("Maimouna : mots longs :", longWords)

//2 Comptez le nombre total de lettres
const totalLetters = longWords.reduce((acc, curr) => acc + curr.length, 0);
console.log("Maimouna : nbr total de lettres", totalLetters)

//3 Afficher chaque mot
word.forEach((w) => console.log(' Maimouna : mot:', w));

//4 Afficher les mots commençant par la lettre P

const wordsP = word.filter((w) => w[0] == 'P');
console.log("Maimouna: word commençant par P :", wordsP)


// Exercice 3

const articles = [
    { name: "Pull", price: 35, stock: 90 },
    { name: "Chaussettes", price: 5, stock: 950 },
    { name: "Bonnet", price: 25, stock: 100 },
    { name: "Sweat", price: 45, stock: 50 },
    { name: "Jean", price: 95, stock: 20 },
    { name: "Jogging", price: 48.5, stock: 230 },
    { name: "T-shirt", price: 15, stock: 150 },
    { name: "Cardigan", price: 75, stock: 9 },
    { name: "Veste", price: 235, stock: 800 }
];

//1 Afficher les articles en rupture de stock (moins de 30 unités)
console.log("Asma : articles en rupture de stock:");
for (let article of articles) {
    if (article.stock < 30) {
        console.log(`${article.name} : ${article.stock} pièce ${article.stock > 1 ? "s" : ""}`)
    }
}

//2 Valeur totale du stock
const totalStock = articles.reduce((acc, article) => acc + article.stock, 0);
console.log("Karla : valeur totale du stock est : " + totalStock + " unités");

let totalValue = 0;
for (let article of articles) {
    totalValue += article.stock * article.price;
}
console.log("Asma : total  value :" + totalValue + "€");

// const totalPrice = articles.

//3 Afficher les produits à moins de 30€
let moinsdeTrente = articles.filter(article => article.price < 30);
console.log(" Asma : Produits à moins de 30 € : ");
moinsdeTrente.forEach(article => { console.log(`${article.name} : ${article.price} €`) });


for (let i = 0; i < articles.length; i++) {
    if (articles[i].price < 30) {
        console.log("Ilyas : articles : ", articles[i]);
    }
}


// Exercice 4

const weathers = [
    { day: "Lundi", temperature: 20, rain: true },
    { day: "Mardi", temperature: 25, rain: true },
    { day: "Mercredi", temperature: 35, rain: false },
    { day: "Jeudi", temperature: 30, rain: true },
    { day: "Vendredi", temperature: 20, rain: false },
    { day: "Samedi", temperature: 30, rain: false },
    { day: "Dimanche", temperature: 10, rain: true },
]

//1 Lister les jours de pluie
for (let index = 0; index < weathers.length; index++) {
    if (weathers[index].rain === true) {
        console.log("Mohammed : jours de pluie :", weathers[index].day);
    }

}

const joursDePluie = weathers.filter(function (day) {
    return day.rain === true;
});
console.log(joursDePluie);

const joursPluie = weathers.filter(day => day.rain);
console.log(" Asma : jours de pluie : ",);
joursDePluie.forEach(item => {
    console.log(`Asma : ${item.day} : ${item.temperature} °C`);
});

const rainyDays = weathers.filter(day => day.rain);
rainyDays.forEach(jours => {
    console.log(jours.day);
})

const daysOfRain = weathers.filter(weather => weather.rain === true)
console.log(" Karla : jours de pluie :", daysOfRain)

//2 Température moyenne des jours sans pluies
const sunnyDays = weathers.filter(day => !day.rain);
const totalTemp = sunnyDays.reduce((acc, day) => acc + day.temperature, 0);
const moyenneTemp = totalTemp / sunnyDays.length;
console.log('Ilyas : Temperature moyenne des jours sans pluie ' + moyenneTemp.toFixed(2) + '°C');

let moyTempNoPluie = 0;
let pluie = [];

for (let i = 0; i < weathers.length; i++) {
    if (weathers[i].rain == true) {
        pluie.push(weathers[i].day)
    }
}
console.log("Arthur :", pluie)

for (let i = 0; i < weathers.length; i++) {
    if (weathers[i].rain == false) {
        moyTempNoPluie += weathers[i].temperature
    }
}
console.log("Arthur: ", moyTempNoPluie / (-pluie.length + 7))

let totalTemp2 = 0;

for (let i = 0; i < weathers.length; i++) {
    totalTemp2 += weathers[i].temperature;
}
const moyenneTempature = totalTemp2 / weathers.length;
console.log("Karla :", moyenneTempature);



//3 Afficher les jours et les températures quand ces dernières sont au dessus de 20
for (let i = 0; i < weathers.length; i++) {
    if (weathers[i].temperature > 20) {
        console.log("Arthur : ", weathers[i].day + " : " + weathers[i].temperature)
    }
}

const temp20 = weathers.filter((day) => day.temperature > 20)
temp20.forEach((day) => {
    console.log(`Ilyas : jours ${day.day}, temperature ${day.temperature} °C`);
})

// const hotDays = weathers.filter(

//     function (day) {
//         hotDays.forEach(
//             function(day){
//             console.log('Karla' + day.day + ' + ' + day.temperature + '°C')
//         }
//         );
//     }
// )

// console.log(hotDays)



const warmWeather = weathers.filter(weather => weather.temperature > 20);
console.log(warmWeather);

//4 Afficher le type de jours (semaine ou weekend)
for (let i = 0; i < weathers.length; i++) {
    switch (weathers[i].day) {
        case "Lundi":
        case "Mardi":
        case "Mercredi":
        case "Jeudi":
        case "Vendredi":
            console.log(weathers[i].day, "semaine");
            break;
        default:
            console.log(weathers[i].day, "weekend : Yacine")
    }
}

function typeDeJour(day) {
    const weekend = ["samedi", "dimanche"];
    return weekend.includes(day) ? "weekend" : "semaine";
}

for (let i = 0; i < weathers.length; i++)
    console.log(`${weathers[i].day} est un jour de ${typeDeJour(weathers[i].day)}`);


// Exercice 5

const marks = [
    { name: "Alice", notes: [12, 17, 9, 14, 19, 6, 10, 11] },
    { name: "Alain", notes: [2, 17, 19, 4, 19, 16, 0, 1] },
    { name: "Oussama", notes: [1, 17, 19, 14, 19, 16, 13, 20] },
    { name: "Sabrina", notes: [11, 7, 9, 4, 19, 16, 1, 11] },
    { name: "Nawelle", notes: [3, 1, 9, 14, 19, 16, 0, 1] },
    { name: "Julien", notes: [1, 7, 9, 4, 13, 6, 10, 15] },
    { name: "Brice", notes: [18, 19, 14, 13, 9, 16, 20, 17] },
];

//1 Calculer la moyenne de chaque élève
let tab2 = [];
let tab3 = [];

for (let i = 0; i < marks.length; i++) {
    let average = 0;
    let supNote = false;
    for (let j = 0; j < marks[i].notes.length; j++) {
        average += marks[i].notes[j]
        if (marks[i].notes[j] > 15) {
            supNote = true;
        }
    }
    average = average / 8;
    average = average.toFixed(2);
    console.log("Yacine :", marks[i].name, " a une moyenne de ", average)
    if (average >= 10) {
        tab3.push(marks[i].name)
    }
}
console.log("Yacine2 :", tab3)

//2 Trouver les élèves ayant au moins une note > 15
let plusde15 = [];
for (let i = 0; i < marks.length; i++) {
    checking = false;
    for (let j = 0; j < marks[i].notes.length; j++) {
        if (marks[i].notes[j] > 15) {
            checking = true;
        }
    }
    if (checking === true) {
        plusde15.push(marks[i].name)
    }
}

console.log("Arthur :", plusde15)

marks.forEach(eleve1 => {
    if (eleve1.notes.some(notes => notes > 15)) {
        console.log("Ilyas :", eleve1.name);
    }
}
)


//3 Afficher les noms des élèves

for (let i = 0; i < marks.length; i++) {
    console.log("Noah ", marks[i].name)
}

//4 Trouver les élèves qui ont la moyenne

// for (let i = 0; i < marks.length; i++) {
//     for (let j = 0; j < marks[i].notes; j++) {
//         if (i >= 10) {
//         }
//         console.log()
//     }
// }


// Exercice 6 

const movies = [
    { name: "Lord Of The Ring", duration: 178, categories: ["Fantasy", "Adventure"] },
    { name: "The Shawshank Redemption", duration: 142, categories: ["Drama"] },
    { name: "The Dark Knight", duration: 152, categories: ["Action", "Crime", "Drama"] },
    { name: "Inception", duration: 148, categories: ["Action", "Sci-Fi", "Thriller"] },
    { name: "Forrest Gump", duration: 142, categories: ["Drama", "Romance"] },
    { name: "The Lord of the Rings: The Fellowship of the Ring", duration: 178, categories: ["Fantasy", "Adventure"] },
    { name: "Interstellar", duration: 169, categories: ["Adventure", "Drama", "Sci-Fi"] },
    { name: "The Matrix", duration: 136, categories: ["Action", "Sci-Fi"] },
    { name: "Pulp Fiction", duration: 154, categories: ["Crime", "Drama"] },
    { name: "The Lion King", duration: 88, categories: ["Animation", "Adventure", "Drama"] },
    { name: "Gladiator", duration: 155, categories: ["Action", "Drama", "Adventure"] }
]


//1 Afficher les films de plus de 2h
// const longMovies = movies.sort((a, b) => a.duration - b.duration);
// console.log("Maimouna : films de plus de 2h : ", longMovies);

const moviesLong = movies.filter(movie => movie.duration > 120);
console.log("Maimouna 2 : films de plus de 2h : ", moviesLong)

//2 Afficher uniquement les films de drama

const drama = movies.filter(movie => movie.categories.includes("Drama"));

console.log("Maimouna drama :", drama)


// Exercice 7
// Choisir un mot de plus de 4 lettres et compter les voyelles dans ce mot.
const mot = "components";
const voyelles = ["a", "e", "i", "o", "u"];
let voyellesCount = 0;

for (let i = 0; i < mot.length; i++) {
    if (voyelles.includes(mot[i].toLowerCase())) {
        voyellesCount++;
    }
}
console.log("Karla :", ('le mot `"${mot}" a ${voyellesCount} voyelles.`'));
console.log("Karla : le mot :", `"${mot}" a ${voyellesCount} voyelles.`);

// Exercice 8
// Faire la table de multiplication de 6

const number = 6;

console.log(`Multiplication ${number} :`);

for (let i = 0; i <= 10; i++) {
    console.log(` Nishan : ${number} x ${i} = ${number * i}`);
}

for (let i = 0; i <= 10; i++) {
    console.log(`Arthur : ${i * 6}`)
}


// Exercice 9
// Faire un compte à rebours de 30 à 0
for (let i = 30; i >= 0; i--) {
    console.log("Farah :", i);
}

let i = 30;
while (i >= 0) {
    console.log("Arthur", i)
    i--;
}

let start = 30;
do {
    console.log("Start :", start);
    start--;
} while (start >= 0);

