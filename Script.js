document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector(".container");
    console.log(container);

    const wheel = document.querySelector(".wheel");
    console.log(wheel);

    const target = document.getElementById("target");
    console.log(target);

    const line = document.getElementById("line");
    console.log(line);

    

    document.addEventListener('keydown', function(event) {
        if (event.key === 'e') {
            console.log('E clicked');
            moveElements();
            difficulty()
            
        }

        function moveElements(){
            let random = Math.floor(Math.random() * 360) ;
            wheel.style.transform = "rotate(" + random + "deg)"; 
            console.log(wheel.style.transform)

        }

        function difficulty(){
            let speed = Math.floor(Math.random() * 3 ) + 0.5;
            line.style.transform = "spin(" + speed +"s infinite linear"
            console.log(line.style.animation)
            console.log(speed)

        }

        function nextLevel(){
            
        }

    });

});
