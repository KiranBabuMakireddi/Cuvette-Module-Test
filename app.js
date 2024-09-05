let action = document.getElementsByClassName('action');
let mypick = document.getElementById('mypick');
let pcchoice = document.getElementById('pcchoice');
let addbg = document.getElementById('addbg');
let addbgpc = document.getElementById('addbgpc');
let btn = document.getElementById('btn');
let resultShow = document.getElementById('resultShow');
let result = document.getElementById('result');
let gameZone = document.getElementById('gamezone');
let buttons=document.getElementsByClassName('buttons');
let game=document.querySelector('.Game')
let celebration=document.getElementById('celebration');



// Function to update background class

function updateBgClass(element, pick) {
    element.classList.remove('rock', 'paper', 'scissor');
    element.classList.add(pick);
}

// Function for next and rules Button

function VisibilityofBtns(checker){
    let next=document.getElementById('next')
    if(checker==='win'){
        next.innerHTML=`NEXT`;
        next.classList.add('btn');
        next.style.visibility='visible';
        next.style.display='block'
    }
    else{
        next.classList.remove('btn');
        next.style.visibility='hidden';
    }
}


// PC choice
function pcChoice() {
    let arr = ['rock', 'paper', 'scissor'];
    let idx = Math.floor(Math.random() * arr.length);
    let pick = arr[idx];
    
    pcchoice.innerHTML = `<img src="images/${pick}.png" alt="${pick}" width="50px" height="50px">`;
    updateBgClass(addbgpc, pick);
    
    return pick;
}

// scoreBoard

function scoreIncrement(checker) {
    let computerScore = document.getElementById('computerScore');
    let yourScore = document.getElementById('yourScore');

    // Initialize scores from sessionStorage or set to 0 if not present
    let computerScoreValue = parseInt(sessionStorage.getItem('computerScore')) || 0;
    let yourScoreValue = parseInt(sessionStorage.getItem('yourScore')) || 0;

    // Update scores based on the game result
    if (checker === 'win') {
        yourScoreValue++;
        sessionStorage.setItem('yourScore', yourScoreValue);  // Store the updated score
    } else {
        computerScoreValue++;
        sessionStorage.setItem('computerScore', computerScoreValue);  // Store the updated score
    }

    // Update the DOM with the new scores
    yourScore.innerHTML = yourScoreValue;
    computerScore.innerHTML = computerScoreValue;
}

// Initialize the scores when the page loads
window.onload = function() {
    document.getElementById('computerScore').innerHTML = sessionStorage.getItem('computerScore') || 0;
    document.getElementById('yourScore').innerHTML = sessionStorage.getItem('yourScore') || 0;
};

function greenBack(checker){
    let userbox1=document.getElementById('userbox1');
    let userbox2=document.getElementById('userbox2');
    let userbox3=document.getElementById('userbox3');
    let pcbox1=document.getElementById('pcbox1');
    let pcbox2=document.getElementById('pcbox2');
    let pcbox3=document.getElementById('pcbox3');
    let text=document.querySelectorAll('.text');
    let usertext=document.getElementById('usertext')
    let pctext=document.getElementById('pctext')
    if(checker==='win'){

        pcbox1.classList.remove('box1');
        pcbox2.classList.remove('box2');
        pcbox3.classList.remove('box3');
        userbox1.classList.add('box1');
        userbox2.classList.add('box2');
        userbox3.classList.add('box3');
        pctext.style.top='-30%'
        usertext.style.top='20%'
        
    }else if(checker==='lost'){
        userbox1.classList.remove('box1');
        userbox2.classList.remove('box2');
        userbox3.classList.remove('box3');
        pcbox1.classList.add('box1')
        pcbox2.classList.add('box2')
        pcbox3.classList.add('box3')
        usertext.style.top='-30%'
        pctext.style.top='20%'
    }
    else{
        pcbox1.classList.remove('box1');
        pcbox2.classList.remove('box2');
        pcbox3.classList.remove('box3');
        userbox1.classList.remove('box1');
        userbox2.classList.remove('box2');
        userbox3.classList.remove('box3');
        usertext.style.top='-30%'
        pctext.style.top='-30%'
    }
}

// Game start
const start = (urpick) => {
    let checker="";
    mypick.innerHTML = `<img src="images/${urpick}.png" alt="${urpick}" width="50px" height="50px">`;
    updateBgClass(addbg, urpick);
    gameZone.style.visibility='hidden'
    
    let pcPick = pcChoice();
    
    // Game Logic
    if (pcPick === urpick) {
        btn.innerHTML = `REPLAY`;
        resultShow.innerHTML = `TIE UP`;
        document.getElementById('dontshow').innerHTML = ``;
        VisibilityofBtns(checker);
    } else {
        btn.innerHTML = `PLAY AGAIN`;
        if ((pcPick === 'rock' && urpick === 'paper') ||
            (pcPick === 'paper' && urpick === 'scissor') ||
            (pcPick === 'scissor' && urpick === 'rock')) {
            resultShow.innerHTML = `YOU WON <br>`;
            document.getElementById('dontshow').innerHTML = `AGAINST PC`;
            checker='win';
           
            
            scoreIncrement(checker);
            VisibilityofBtns(checker);
        } else {
            resultShow.innerHTML = `YOU LOST <br>`;
            document.getElementById('dontshow').innerHTML = `AGAINST PC`;

            checker='lost';
            scoreIncrement(checker);
            VisibilityofBtns(checker);
        }
    }
    
    result.style.visibility='visible';
    
    greenBack(checker);
    
   
}



//result functions on replay and playagain

btn.addEventListener('click', function(e) {
    e.preventDefault();
    result.style.visibility = 'hidden';
    gameZone.style.visibility='visible';
    let next=document.getElementById('next');
    next.classList.remove('btn');
    next.style.visibility='hidden';

});




//Close and open rules Modal
let close1 = document.getElementById('close1');
let close2 = document.getElementById('close2');
let clickToRules = document.getElementById("clickToRules");
let clickToRulesinCeleb = document.getElementById("clickToRulesinCeleb");
let ruleModal = document.getElementById("ruleModal");
let ruleModal2 = document.getElementById("ruleModal2");

clickToRules.onclick = () => {
    ruleModal.classList.toggle('rulesVisible');
}

clickToRulesinCeleb.onclick = () => {
    ruleModal2.classList.toggle('rulesVisible2');
}

close1.onclick = () => {
    ruleModal.classList.remove('rulesVisible');
}

close2.onclick = () => {
    ruleModal2.classList.remove('rulesVisible2');
}




// Celebration

let next=document.getElementById('next');

// Ensure to use .style for applying styles in JavaScript
let rcs=document.getElementById('rcs')
next.onclick = () => {
    rcs.style.visibility='hidden'
    rcs.style.display='none'
    celebration.style.display='block'
    result.style.visibility='hidden'
    gameZone.style.visibility='visible'
}

let btn2=document.getElementById('btn2')

btn2.onclick = () => {
    rcs.style.visibility='visible'
    rcs.style.display='block'
    celebration.style.display='none'
    // next.style.visibility='hidden'
    next.style.display='none'
}




