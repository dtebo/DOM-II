/* Drag and Drop - Thank you to https://syntaxxx.com/rearranging-web-page-items-with-html5-drag-and-drop/ */

let source = null;

// Get the elements to drag
const draggableItems = document.querySelectorAll('.content-section');

// Loop through and make each item and make them draggable
draggableItems.forEach((item) => {
    item.setAttribute('draggable', true);

    // Grab the element information for transfer to the drop zone
    item.addEventListener('dragstart', (ev) => {
        source = ev.target;

        ev.dataTransfer.setData("text/plain", ev.target.innerHTML);
        ev.dataTransfer.effectAllowed = "move";
    });
});

// Get the drop location
const dropZone = document.querySelector('.drop-zone');

dropZone.addEventListener('drop', (ev) => {
    ev.preventDefault();
    ev.stopPropagation();

    // The magic happens here! Swap the elements around.
    source.innerHTML = ev.target.innerHTML;

    const data = ev.dataTransfer.getData("text/plain");
    ev.target.innerHTML = data;
});

// Allow the dropping of the element
dropZone.addEventListener('dragover', (ev) => {
    ev.preventDefault();

    ev.dataTransfer.dropEffect = "move";
});


/* Hover Image Overlay */
const introOverlay = document.createElement("div");
const overlayText = document.createElement("p");
const intro = document.querySelector('.intro');
const img = document.querySelector('.intro img');

img.addEventListener('mouseover', (ev) => {
    // Set the class for the overlay
    introOverlay.className = "overlay";

    overlayText.textContent = "Fun in the Sun!";

    // Add the text to the overlay
    introOverlay.appendChild(overlayText);

    // Add the overlay element to the intro section
    intro.appendChild(introOverlay);
});

introOverlay.addEventListener('mouseleave', (ev) => {
    // Remove the overlay
    intro.removeChild(introOverlay);
});

/* Keydown */
window.addEventListener('keydown', (ev) => {
    // Get the key that was pressed
    const key = ev.which || ev.keyCode;

    // Was the up or down arrow pressed?
    if(key === 38 || key === 40){
        // Yes it was! Log that the user scrolled with the keyboard
        console.log(`The user scrolled with the keyboard! ${key === 38 ? 'User scrolled up' : 'User scrolled down'}`);
    }
});

/* Mouse Wheel Event */
window.addEventListener('wheel', (ev) => {
    console.log(`The user scrolled with the mouse X: ${ev.x} Y: ${ev.y}`);
});

/* Load Event */
window.addEventListener('load', (ev) => {
    console.log('The page has loaded!');
});

/* Focus Event */
const navItems = document.querySelectorAll('nav a');

navItems.forEach((item) => {
    item.addEventListener('focus', (ev) => {
        console.log(`${ev.target.textContent} link has focus!`);
    });
});

/* Resize Event */
window.addEventListener('resize', (ev) => {
    console.log('window was resized!');
});