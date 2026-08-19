// let speech = new SpeechSynthesisUtterance();
// let addvoice = [];

// let voiceSelect = document.querySelector("select");
// window.speechSynthesis.onvoiceschanged = () => {
//     window.speechSynthesis.getVoices();
//     speech.voice = voices[0];
//     voices.forEach((voice, i) => (voiceSelect.option[i] = new Option(voice.name, i)));
//     // voices.forEach((voice, i) => (voiceSelect.option[i] = new Option(voice.name, i)));
// };

// voiceSelect.addEventListener("change", () => {
//     speech.voice = voices;
// })



// document.querySelector("button").addEventListener("click", () => {
//     speech.text = document.querySelector("textarea").value;
//     window.speechSynthesis.speak(speech);
// });

let submitBtn = document.querySelector("button");
let speech = new SpeechSynthesisUtterance();
let voices = [];

let voiceSelect = document.querySelector("select");
let textInput = document.querySelector("textarea"); // Reference to the textarea

window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices(); // Store the voices in a variable
    speech.voice = voices[0]; // Set default voice to the first one

    // Clear any existing options in the select element
    voiceSelect.innerHTML = '';

    // Add voices as options in the select element
    voices.forEach((voice, i) => {
        let option = new Option(voice.name, i); // Create new option
        voiceSelect.add(option); // Add the option to the select
    });
};

// When the user selects a voice from the dropdown, update the speech voice
voiceSelect.addEventListener("change", () => {
    speech.voice = voices[voiceSelect.value];
});

// Function to trigger speech
function triggerSpeech() {
    speech.text = textInput.value; // Set text to be spoken
    window.speechSynthesis.speak(speech); // Start speaking
}

// Listen for Enter key press in the textarea
textInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") { // Check if Enter key was pressed
        event.preventDefault();  // Prevent newline in textarea
        triggerSpeech();          // Trigger the speech function
    }
});

// Listen for the button click
submitBtn.addEventListener("click", triggerSpeech);
