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

/* Scroll Event */
const mainnav = document.querySelector('.main-navigation');
const originalHeight = mainnav.style.height; /* Original navigation height */

document.addEventListener('scroll', (ev) => {
    // Shrink the navbar
    // Are we at the top of the page?
    if(window.scrollY === 0){
        mainnav.style.height = originalHeight;
    }
    else{
        mainnav.style.height = "70px";
    }
});

/* Select Event */

function createOverlay(){
    const mainOverlay = document.createElement("div");
    mainOverlay.className = "main-overlay";

    const overlayForm = document.createElement("form");
    overlayForm.className = "emailForm";

    const emailLabel = document.createElement("label");
    emailLabel.textContent = "Email: ";
    emailLabel.setAttribute("for", "email");

    const emailInput = document.createElement("input");
    emailInput.setAttribute("type", "text");
    emailInput.setAttribute("name", "email");
    emailInput.setAttribute("placeholder", "Email Address");

    overlayForm.appendChild(emailLabel);
    overlayForm.appendChild(emailInput);

    mainOverlay.appendChild(overlayForm);

    return mainOverlay;
}

const signUpBtns = document.querySelectorAll('.btn');
const ovrly = createOverlay();

signUpBtns.forEach((btn) => {
    btn.addEventListener('click', (ev) => {
        // Main Content Area
        const content = document.querySelector('.home');
    
        // Display the overlay
        content.appendChild(ovrly);
    });
});

ovrly.addEventListener('select', (ev) => {
    const selection = ev.target.value.substring(ev.target.selectionStart, ev.target.selectionEnd);

    console.log(`The following text was selected: ${selection}`);
});