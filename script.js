function sayHello(){
    return "BONJOUR DWWM5 !";}
    
let greetings = console.log(sayHello());

function chooseGame(nameGame) {
    return `Viens on joue à ${nameGame}`;
}

let gameChoosen = console.log(chooseGame("Call Of Duty !"));

// && (ET)
//     || (OU)


// false && true = false;
// Est - ce que je peux faire les courses ? J'ai pas d'argent(false), le magasin est ouvert(true);

// true && true = true;
// Est - ce que je peux faire les courses ? J'ai de l'argent(true), le magasin est ouvert(true);

// true && false = false;
// Est - ce que je peux faire les courses ? J'ai de l'argent(true), le magasin est fermé(false);

// false && false = false;
// Est - ce que je peux faire les courses ? J'ai de l'argent(false), le magasin est fermé(false);


// && = Tout doit être true pour avoir true;

// false || false = false;
// Est-ce que je peux me déplacer ? J'ai pas de voiture (false), j'ai pas de vélo (false);

// true || true = true;
// Est-ce que je peux me déplacer ? J'ai une voiture (true), j'ai un vélo (true);

// true || false = true;
// Est-ce que je peux me déplacer ? J'ai une voiture (true), j'ai un vélo (false);

// false || true = true;
// Est-ce que je peux me déplacer ? J'ai une voiture (false), j'ai un vélo (true);

// || = Il suffit QU'UNE SEULE chose soit true pour avoir true.


function getReady(clothes, bag, food){
    return  `J'ai un ${food} dans mon ${bag} et j'ai mis mon ${clothes} !`
}

let myself = console.log(getReady("survet", "Eastpack", "sandwich"));


const cow ={
    name: "Nemo",
    moew: function(){
        return "La vache fait moww !"
    }
}

console.log(cow)


const myArray = [1, 3, 789, 90000988];

console.log(myArray)

const arrayOfObjects = [
    {
        name : "Julie",
        age : 32,
        address : "rue de la Beaune"
    },
    {
        name : "Matt"
    },
    {
        name : "Adam"
    },
];

console.log(arrayOfObjects);


(function(){
    console.log("S'exécute seule !")
})();

function order(dish= "pizza", drink="water"){
    return `T'as commandé : ${dish} avec ${drink}`
}

console.log(order())

const callFamily = function(){
    return "Hello mom !"
}

console.log(callFamily())