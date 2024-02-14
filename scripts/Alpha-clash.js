// function play() {
//     //step-1: hide the home screen. to hide the screen add the class hidden to the home section.
//     const homeSection = document.getElementById('home-screen');
//     homeSection.classList.add('hidden');
//     // console.log(homeSection.classList);

//     // show the playground
//     const playgroundSection= document.getElementById('play-ground');
//     playgroundSection.classList.remove('hidden');
//     // console.log(playgroundSection.classList);
// }

function continueGame() {
    // step:1 generate a random Alphabet
    const alphabet = getARandomAlphabet();
    console.log('Your random Alphabet', alphabet);

    // set randomly Alphabet to the screen (show it)
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;
}


function play() {
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame()
}