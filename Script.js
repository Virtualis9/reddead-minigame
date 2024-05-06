document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector(".container");
    const wheel = document.querySelector(".wheel");
    const target = document.getElementById("target");
    const line = document.getElementById("line");
    
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

     
    // // Function to detect collision
    // function detectCollision(line, target) {
    //     const rect1 = line.getBoundingClientRect();
    //     const rect2 = target.getBoundingClientRect();
    //     const collisionDetected = !(rect1.right < rect2.left || 
    //              rect1.left > rect2.right || 
    //              rect1.bottom < rect2.top || 
    //              rect1.top > rect2.bottom);
    //              console.log("Collision detected:", collisionDetected); // Log the result
    //              return collisionDetected;     
    // }
    
    function moveElements() {
        let random = Math.floor(Math.random() * 360);
        wheel.style.transform = "rotate(" + random + "deg)";
        // console.log(wheel.style.transform);
        // if(detectCollision(line, target)){
        //     console.log("collision detected")
        // }
    }


      // Function to change difficulty
      function difficulty() {
        let speed = Math.floor(Math.random() * 3) + 1;
        line.style.animation = "spin " + speed + "s infinite linear";
        console.log(line.style.animation);
        console.log(speed);
    }
    
    //logic for hit or miss
    document.addEventListener('keydown', function(event) {
        detectAndHandleCollision();
        if (event.key === 'e' && detectAndHandleCollision() === true) {
            console.log('hit');
            moveElements();
            difficulty();
            
        }else {
            console.log("missed")
            gameOver()
        }
    });

  

    function gameOver(){
        alert("you lose")


    }

    function update() {
       
        detectAndHandleCollision(); // Detect and handle collision
        requestAnimationFrame(update); // Schedule the next update
    }
    
    // Start the update loop
    update();

})
