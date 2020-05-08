/* Drag and Drop - Thank you to https://syntaxxx.com/rearranging-web-page-items-with-html5-drag-and-drop/ */

const source = null;

// Get the elements to drag
const draggableItems = document.querySelectorAll('.content-section');

// Loop through and make each item and make them draggable
draggableItems.forEach((item) => {
    item.setAttribute('draggable', true);

    // Grab the element information for transfer to the drop zone
    item.ondragstart = (ev) => {
        source = ev.target;

        ev.dataTransfer.setData("text/plain", ev.target.innerHTML);
        ev.dataTransfer.effectAllowed = "move";
    };
});

// Get the drop location
const dropZone = document.querySelector('.drop-zone');

dropZone.ondrop = (ev) => {
    ev.preventDefault();
    ev.stopPropagation();

    // The magic happens here! Swap the elements around.
    source.innerHTML = ev.target.innerHTML;

    const data = ev.dataTransfer.getData("text/plain");
    ev.target.innerHTML = data;
};

// Allow the dropping of the element
dropZone.ondragover = (ev) => {
    ev.preventDefault();

    ev.dataTransfer.dropEffect = "move";
};


/* Hover Image Overlay */
const introOverlay = document.createElement("div");
const overlayText = document.createElement("p");
const intro = document.querySelector('.intro');
const img = document.querySelector('.intro img');

img.onmouseover = (ev) => {
    // Set the class for the overlay
    introOverlay.className = "overlay";

    overlayText.textContent = "Fun in the Sun!";

    // Add the text to the overlay
    introOverlay.appendChild(overlayText);

    // Add the overlay element to the intro section
    intro.appendChild(introOverlay);
};

introOverlay.onmouseleave = (ev) => {
    // Remove the overlay
    intro.removeChild(introOverlay);
};

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