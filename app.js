let count = 0;

const value = document.querySelector('#value');
const buttons = document.querySelectorAll('.btn');

buttons.forEach(function(button) {
    button.addEventListener('click', function(buttonPressed) {
        const stylesInButton = buttonPressed.currentTarget.classList;

        if (stylesInButton.contains("decrease")) {
            count--;
        } else if (stylesInButton.contains("increase")) {
            count++;
        } else if (stylesInButton.contains("reset")) {
            count = 0;
        }

        if (count>0) {
            value.style.color = "green";
        } else if (count<0) {
            value.style.color = "red";
        } else {
            value.style.color = "black";
        }

        value.textContent = count;
    });
})