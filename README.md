Put all the font images into the  font-image file !
and update the preload function



## you can define the character you want to used in the array!

var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];


for (var i = 0; i < letters.length; i++) {
    var letter = letters[i];
    letterImages[letter] = loadImage('./font-image/' + letter + '.png');
}