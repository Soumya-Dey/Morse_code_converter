// map of morse code for encoding
const engToMorse = new Map([
    ['A', '.-'], ['B', '-...'], ['C', '-.-.'],
    ['D', '-..'], ['E', '.'], ['F', '..-.'],
    ['G', '--.'], ['H', '....'], ['I', '..'],
    ['J', '.---'], ['K', '-.-'], ['L', '.-..'],
    ['M', '--'], ['N', '-.'], ['O', '---'],
    ['P', '.--.'], ['Q', '--.-'], ['R', '.-.'],
    ['S', '...'], ['T', '-'], ['U', '..-'],
    ['V', '...-'], ['W', '.--'], ['X', '-..-'],
    ['Y', '-.--'], ['Z', '--..'], [' ', ' '],

    ['0', '-----'], ['1', '.----'], ['2', '..---'],
    ['3', '...--'], ['4', '....-'], ['5', '.....'],
    ['6', '-....'], ['7', '--...'], ['8', '---..'],
    ['9', '----.']
]);

// map of morse code for decoding
const morseToEng = new Map();

// reversing the engToMorse map i.e swapping key and value with each other
engToMorse.forEach((value, key) => {
    morseToEng.set(value, key);
})


const encodeMorse = (str) => {
    const arr = str.split('').map(c => {
        return engToMorse.get(c.toUpperCase());
    });

    return arr.join(' ');
};

const decodeMorse = (morse_code) => {
    let text = '';
    mc = morse_code.trim(); // "   hello  ".trim() -> "hello"

    mc.split('   ').forEach(word => {
        word.split(' ').forEach(c => {
            text += morseToEng.get(c);
        });
        text += ' ';
    });
        
    return text.trim();
};




const inputArea = document.querySelector('textarea[name="text_input"]');
const outputArea = document.querySelector('textarea[name="morse_output"]');
const submitBtn = document.querySelector('.convert_btn');

submitBtn.addEventListener('click', () => {
    const inputText = inputArea.value.toUpperCase();

    if(inputText){
        outputArea.textContent = encodeMorse(inputText.trim());
    }
    else{
        outputArea.textContent = '';
    }
});
