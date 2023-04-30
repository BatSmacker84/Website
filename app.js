'use strict';

const switcher = document.getElementById('theme-toggle');

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

const menu = document.getElementById('menu');
const menuItems = document.getElementsByClassName('menu-item');

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// Create event listener for onmouseover for menu-item class
// When onmouseover, set all the text of the menu-item to random letters
Array.from(menuItems).forEach((item) => {
    item.addEventListener('mouseover', () => {
        let iterations = 0;
        const interval = setInterval(() => {
            item.textContent = item.textContent.split('')
            .map((letter, index) => {
                if (index < iterations) {
                    return item.dataset.value[index];
                }
                return letters[Math.floor(Math.random() * 26)]
            })
            .join('');
            if (iterations >= item.dataset.value.length) clearInterval(interval);
            iterations += 1 / 3;
        }, 30);
    });
});