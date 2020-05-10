/* Listen for Block Click and move the clicked block to the top */
const blockContainer = document.querySelector('.blocks');
const blocks = document.querySelectorAll('.block');

let timer = 0;

let counter = -1;

blocks.forEach((b) => {
    b.style.order = 1; // Set all items to have a default order of 1

    b.addEventListener('click', (e) => {
        // Thank you to Jason Duncan for the example
        counter--;

        // blockContainer.prepend(e.target);
        b.style.order = counter;
    });

    b.addEventListener('mousedown', (e) => {
        timer = setInterval((e) => {
            let left = window.getComputedStyle(b, null).left;
            let idx = left.indexOf('p'); // Index of the first non-numeric character

            left = left.substring(0, idx); // The new left value without the measurement type

            let numericLeft = parseInt(left); // The numeric value for left

            numericLeft += 50;

            // Has the block reached it's movement limit?
            if(numericLeft > 400){
                clearInterval(timer);
                return;
            }

            b.style.left = numericLeft + 'px';
        }, 100);
    });

    window.addEventListener('mouseup', (e) => {
        b.style.left = '0px'; // Return the block to its original position

        clearInterval(timer);
    });
});