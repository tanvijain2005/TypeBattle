// VARIABLES
let words = ['magic', 'journey', 'travel', 'explore', 'life', 
'experience', 'happiness', 'gratitude', 'discipline', 'exercise', 
'workout', 'friendship', 'practice', 'routine', 'morning', 'reading', 
'books', 'education', 'amour', 'delibrate', 'protein', 'partner',
'empathy', 'concert', 'patience', 'humor', 'resilience', 'confidence',
'consistency', 'appreciation', 'literature', 'meaning', 'humble',
'province', 'flight', 'alchemy', 'intense', 'adorable', 'swoon', 'stunning',
'sensational', 'provocative', 'apocalypse', 'compliance', 'meticulous',
'replicate', 'relentless', 'pursuit', 'proactive', 'astounding',
'delightful', 'legitimate', 'mesmerizing', 'polarizing', 'validate'];

const levels = {
    easy: 7,
    medium: 5,
    hard: 3
};

let currentLevel = levels.easy;
let timeCount = currentLevel;
let scoreCount = 0;
let wordDisplayed;

// DOM ELEMENTS
let currentWord  = document.querySelector('#current-word'),
    inputWord = document.querySelector('#input-word'),
    time = document.querySelector('#seconds'),
    timeLeft = document.querySelector('#time-left'),
    score = document.querySelector('#score'),
    message = document.querySelector('#message'),
    difficultyLevel = document.querySelector('#difficulty');

// EVENT LISTENERS
window.addEventListener('load', init);
inputWord.addEventListener('input', startMatch);
difficultyLevel.addEventListener('change', changeLevel);

// INIT FUNCTION
function init() { 
    time.textContent = currentLevel;
    timeLeft.textContent = currentLevel;
    score.textContent = scoreCount;
    showWord();
    setInterval(countdown, 1000);
}

// SHOW RANDOM WORD
function showWord() {
    let randomIndex = Math.floor(Math.random() * words.length);
    wordDisplayed = words[randomIndex];
    currentWord.textContent = wordDisplayed;
    inputWord.value = ''; // clear input for new word
}

// COUNTDOWN
function countdown() {
    if (timeCount > 0) {
        timeCount--;   
        timeLeft.textContent = timeCount;
    } else if(timeCount === 0) {
        message.textContent = 'Time Up!!';
        message.className = 'time-up';
        timeCount = currentLevel; // reset timer for next word
        timeLeft.textContent = timeCount;
        showWord(); // next word appear
    }
}

// CHECK CORRECT INPUT
function startMatch() {
    if (inputWord.value === wordDisplayed) {
        message.textContent  = 'Correct!!';
        message.className = 'text-success';
        scoreCount++;
        score.textContent = scoreCount;
        timeCount = currentLevel; 
        timeLeft.textContent = timeCount;
        showWord();
    }
}

// CHANGE DIFFICULTY
function changeLevel() {
    let level = difficultyLevel.value.toLowerCase();
    inputWord.focus();

    // Reset score
    scoreCount = 0;
    score.textContent = scoreCount;
    message.textContent = '';

    // Set current level
    if(level === 'easy') currentLevel = levels.easy;
    if(level === 'medium') currentLevel = levels.medium;
    if(level === 'hard') currentLevel = levels.hard;

    // Reset timer display
    time.textContent = currentLevel;
    timeLeft.textContent = currentLevel;
    timeCount = currentLevel;

    showWord();
}
