const students = [
    { id: 1, name: "Alice", marks: [15, 17, 13], age: 20, city: "Paris" },
    { id: 2, name: "Bob", marks: [12, 14, 16], age: 22, city: "Lyon" },
    { id: 3, name: "Charlie", marks: [18, 16, 19], age: 19, city: "Paris" },
    { id: 4, name: "David", marks: [10, 13, 15], age: 21, city: "Lyon" },
    { id: 4, name: "Lucie", marks: [14, 11, 5], age: 31, city: "Paris" },
];

// Trouver les étudiants de Paris et calculer leur moyenne (map)

// Ajouter une notes aux étudiants ayant plus de 15 de moyenne (spread + conditions)

// Catégoriser les étudiants en fonction de leur moyenne, si moyenne >= à 16 alors : 
// catégorie : Excellent, commentaire : Félicitations
// si moyenne >= 13 alors categorie : Bien, commentaire : Travail correct, si moyenne >= 10 
// alors categorie; Assez bien, commentaire : Peut mieux faire et si moyenne < 10 alors categorie : insuffisant,
// commentaire : "Vous devez travailler d'avantage"