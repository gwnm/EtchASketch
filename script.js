const screen = document.querySelector('#screen');

let color = 0;

//create pixel grid

function createGrid(size) {

    document.styleSheets[1].cssRules[3].style["grid-template-columns"] = "repeat(" + size + ", 1fr)"

    document.styleSheets[1].cssRules[3].style["grid-template-rows"] = "repeat(" + size + ", 1fr)"

    for (i = 0; i < size * size; i++) {

        let pixel = document.createElement('div');

        pixel.className = 'pixel';

        screen.appendChild(pixel);

    }

}

//load starting grid

createGrid(16);



//add hover event listeners

function onHover() {

    let pixels = Array.from(document.querySelectorAll(".pixel"));

    // loop through each pixel adding listener

    for (i = 0; i < pixels.length; i++) {

        pixels[i].addEventListener('mouseover', function (e) {

            //change css value based on current value

            (this.style.opacity) ? this.style.opacity = parseFloat(this.style.opacity) + 0.1: this.style.opacity = 0.1;

        });

    }

}
//apply event listeners to inital grid

onHover();

// clear board on click

document.querySelector("#left-knob").addEventListener('click', e => {

    let newsize = Number(window.prompt('please provide a new grid size', 16));

    // only if new size is provided create remove old grid

    if (newsize) {

        while (screen.hasChildNodes()) {

            screen.removeChild(screen.lastChild);

        }

    //create new grid from size    

    createGrid(newsize);

    onHover();

    (color) ? colourful(): "";

    }

});

// toggle B/W and color pixels 

document.querySelector('#right-knob').addEventListener('click', e => {

    if (color) {

        color = 0;

        bw();

    } else {

        color = 1;

        colourful();

    }

});

//add color to pixels

function colourful() {

    let pixels = Array.from(document.querySelectorAll(".pixel"));

    const hexSymbol = "0123456789abcdef"



    // loop through each pixel

    for (i = 0; i < pixels.length; i++) {

        let color = "#";

        pixels[i].style.opacity = 0;

        //create a random hexcode for each pixel

        for (var j = 0; j < 6; j++) {

            color += hexSymbol.charAt(Math.floor(Math.random() * hexSymbol.length));

        }

        //set pixel to new color

        console.log(Math.floor(Math.random() * hexSymbol.length));

        pixels[i].style.backgroundColor = color;

    }

};



// remove color from pixels 

function bw() {

    let pixels = Array.from(document.querySelectorAll(".pixel"));

    for (i = 0; i < pixels.length; i++) {

        pixels[i].style.opacity = 0;

        pixels[i].style.backgroundColor = "black";

    }

};