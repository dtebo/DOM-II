/* Listen for Block Click and move the clicked block to the top */
const blockContainer = document.querySelector('.blocks');
const blocks = document.querySelectorAll('.block');

let timer = 0;

blocks.forEach((b) => {
    b.addEventListener('click', (e) => {
        const t = setInterval((e) => {
            b.animate([
                // keyframes
                { transform: 'translateY(0px)' },
                { transform: 'translateY(-100px)' }
            ], {
                // timing
                duration: 1000
            });
        }, 1000);

        blockContainer.prepend(e.target);
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
        clearInterval(timer);
    });
});