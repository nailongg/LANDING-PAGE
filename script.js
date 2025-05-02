const changingText = document.getElementById('changing-text');
const texts = ['Matematika', 'Fisika', 'Kimia', 'Biologi', 'Astronomi', 'Geometri'];
let index = 0;

function typeText(text) {
    changingText.innerHTML = '';
    let i = 0;

    const typingInterval = setInterval(() => {
        if (i < text.length) {
            changingText.innerHTML += text.charAt(i);
            i++;
        } else {
            clearInterval(typingInterval);
            setTimeout(() => {
                index = (index + 1) % texts.length; // Switch to the next text
                typeText(texts[index]); // Recursive call for the next word
            }, 1000); // Delay before changing text
        }
    }, 200); // Control typing speed
}

// Start the typing effect
typeText(texts[index]);