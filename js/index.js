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
const intro = document.querySelector('.intro');
const img = document.querySelector('.intro img');

img.onmouseover = (ev) => {
    introOverlay.className = "overlay";
    intro.appendChild(introOverlay);
};

img.onmouseleave = (ev) => {
    // Remove the overlay
    intro.removeChild(introOverlay);
};