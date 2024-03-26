let inputField;
let displayedLetters = [];

let slider;
let fontSizeSlider;
let size = 100;
let padding = 400; 
let canvasHeight;

// Load images for each letter
let letterImages = {};

function preload() {
    // Load images for each letter
    letterImages['a'] = loadImage('./font-image/a.png');
    letterImages['e'] = loadImage('./font-image/e.png');
    // letterImages['b'] = loadImage('b.png');

}

function setup() {
    createCanvas(windowWidth, 3 * windowHeight);
    background(0);

    slider = createSlider(0, 30, 15);
    slider.position(100, 30);
    slider.style('width', '200px');

    fontSizeSlider = createSlider(1, 100, 20);
    fontSizeSlider.position(100, 10);
    fontSizeSlider.style('width', '200px');

    inputField = createInput('HI!');
    inputField.style('width', '265px');
    inputField.position(10, 60);
    inputField.input(updateDisplayedLetters);
}

function draw() {
    background(0, 50);
    fill(255);
    size = fontSizeSlider.value();
    textAlign(LEFT, CENTER);
    text("fontSize: ", 10, 20)
    text("fontWeight: ", 10, 40)
    
    displayLetters(displayedLetters);
    updateDisplayedLetters();
}

function updateDisplayedLetters() {
    let inputText = inputField.value();
    displayedLetters = inputText.toLowerCase(); 
}

function displayLetters(letters) {
    let padding = fontSizeSlider.value();
    let startX = padding + 20;
    let startY = padding + 100;

    for (let i = 0; i < letters.length; i++) {
        let letter = letters[i];
        if (letter in letterImages) {
            drawLetter(letterImages[letter], startX, startY);
            startX += size + padding; 
            if (startX + size > width) {
                startX = padding + 20;
                startY += size + padding;
            }
        }
    }
}

function drawLetter(img, x, y) {
    let val = slider.value();
    image(img, x, y, val + size, val + size);
}
