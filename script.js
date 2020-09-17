'use strict'


function makeAge() {
    let now = new Date();
    return now.getFullYear() - 1985;  
};

function pushAge() {
    let age = document.getElementById('age');
    let myAge = age.innerHTML = "Valentyn Tyrtychko-" + makeAge() + " years";
    return myAge;
};

pushAge();