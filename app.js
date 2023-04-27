'use strict';

const switcher = document.querySelector('.theme-switch');

switcher.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme')
    document.body.classList.toggle('light-theme')

    const className = document.body.className;
    if (className == "light-theme") {
        this.textContent = "Dark";
    }
    else {
        this.textContent = "Light";
    }
});