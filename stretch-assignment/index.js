/* Listen for Block Click and move the clicked block to the top */
const blockContainer = document.querySelector('.blocks');
const blocks = document.querySelectorAll('.block');

let timer = 0;

blocks.forEach((b) => {
    b.addEventListener('click', (e) => {
        blockContainer.prepend(e.target);
    });

    b.addEventListener('mousedown', (e) => {
        timer = setInterval((e) => {
            let left = window.getComputedStyle(b, null).left;
            let idx = left.indexOf('p'); // Index of the first non-numeric character

            left = left.substring(0, idx); // The new left value without the measurement type

            let numericLeft = parseInt(left); // The numeric value for left

            numericLeft += 20;

            b.style.left = numericLeft + 'px';

            // console.log(left, numericLeft + 'px');
        }, 500);
    });

    window.addEventListener('mouseup', (e) => {
        clearInterval(timer);
    });
});