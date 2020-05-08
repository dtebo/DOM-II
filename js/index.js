/* Drag and Drop - Thank you to https://syntaxxx.com/rearranging-web-page-items-with-html5-drag-and-drop/ */

let source;

// Get the elements to drag
let draggableItems = document.querySelectorAll('.content-section');

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
let dropZone = document.querySelector('.home');

dropZone.ondrop = (ev) => {
    ev.preventDefault();
    ev.stopPropagation();

    // The magic happens here! Swap the elements around.
    source.innerHTML = ev.target.innerHTML;

    let data = ev.dataTransfer.getData("text/plain");
    ev.target.innerHTML = data;
};

// Allow the dropping of the element
dropZone.ondragover = (ev) => {
    ev.preventDefault();

    ev.dataTransfer.dropEffect = "move";
};