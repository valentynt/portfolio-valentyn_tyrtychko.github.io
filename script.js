'use strict'


AOS.init({
    disable: 'mobile'
});

AOS.init({
    disable: function () {
        let maxWidth = 1020;
        return window.innerWidth < maxWidth;
    }
});



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