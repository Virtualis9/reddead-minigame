//event listener holding the whole game logic
document.addEventListener('DOMContentLoaded', function() {

    // veriables that hold the elements id's
    const container = document.querySelector(".container");
    const wheel = document.querySelector(".wheel");
    const target = document.getElementById("target");
    const line = document.getElementById("line");
    
    //function that gives the detection box
    //also handles the collision 
    function detectAndHandleCollision() {

        const lineRect = line.getBoundingClientRect();
        const targetRect = target.getBoundingClientRect();

        if (lineRect.right >= targetRect.left &&
            lineRect.left <= targetRect.right &&
            lineRect.bottom >= targetRect.top &&
            lineRect.top <= targetRect.bottom) {
            // Colliding
            line.classList.add('colliding');
            target.classList.add('colliding');
            return true
        } else {
            // Not colliding
            line.classList.remove('colliding');
            target.classList.remove('colliding');
            return false
        }
        
    }
    
    //function that moves the wheel in a random 360 degree angle
    //spinning wheel makes the allusion of the target moving 
    function moveElements() {
        let random = Math.floor(Math.random() * 360);
        wheel.style.transform = "rotate(" + random + "deg)";
    }

      // Function to change difficulty to easy
    function difficultyLevel1() {
        let speed = 0.9 ;
        line.style.animation = "spin " + speed + "s infinite linear";
        
    }

    // Function to change difficulty to medium
    function difficultyLevel2() {
        let speed = 0.8 ;
        line.style.animation = "spin " + speed + "s infinite linear";
        
    }
    // Function to change difficulty to max
    function difficultyLevel3() {
        let speed = 0.7 ;
        line.style.animation = "spin " + speed + "s infinite linear";
       
        
    }

    
    //variable that starts the array at index 0
    let currentDifficultyIndex = 0;

    // array storing difficulty levels
    const difficultylevels = [difficultyLevel1, difficultyLevel2, difficultyLevel3, youWin]

    //logic for hit or miss
    const hitOrMiss = document.addEventListener('keydown', function(event) {
        detectAndHandleCollision();
        if (event.key === 'e' && detectAndHandleCollision() === true) {
            moveElements();
            increasedDifficultyLevel()
        }else {
            gameOver()
        }
    });

    //function that runs through difficulty array
    function increasedDifficultyLevel(){
    currentDifficultyIndex++;
    if (currentDifficultyIndex < difficultylevels.length) {
        difficultylevels[currentDifficultyIndex]();
    } else {
        currentDifficultyIndex = 0;
        cancelAnimationFrame(animationFrameId)
    }

    }

    //function that alerts you win
    function youWin(){
        alert("you win")
        cancelAnimationFrame(animationFrameId)
    }

    //function that alerts you lose
    function gameOver(){
        alert("you lose")
        cancelAnimationFrame(animationFrameId)
    }

    //function that keeps the game updating 
    function update() {
        detectAndHandleCollision(); // Detect and handle collision
        animationFrameId = requestAnimationFrame(update); // Schedule the next update
    }

    // Start the update loop
    update();

})
