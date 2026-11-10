const person = {
    firstName: "John",
    lastName: "Doe",
    age: 40,
    email: "john.doe@example.com",
    hoobies: ["reading", "traveling", "swimming"],
    address: {
        city: "ibadan",
        state: "Oyo",
    }   
}

const personTwo = {
    firstName: "Jane",
    lastName: "Smith",
    age: 35,
    hoobies: ["cooking", "yoga", "hiking"],
}

let val;

val = person.firstName;

console.log(val);

// Récupérer l'icône et le menu
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

// Au clic sur l'icône : ouvrir ou fermer le menu
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');   // l'icône devient une croix
    navbar.classList.toggle('active');   // le menu s'affiche ou se cache
};

// Quand on fait défiler la page : refermer le menu
window.onscroll = () => {
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};