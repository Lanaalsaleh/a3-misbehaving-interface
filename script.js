// so first idea was to make a sign up screen to win a gift card but make it take so long to load i got this idea from real life becuase websites usually take so long to load almost everytime
// get button
const startBtn = document.getElementById("startBtn");

// when button is clicked, run this function
startBtn.addEventListener("click", function() {

    // change text 
    document.body.innerHTML = `<h1 style="color:white;">Loading...</h1>`;

    // wait 10 seconds
    // i tried 3 secs at first but felt too short so i made it 10 might even make it longer 
    setTimeout(function() {
        // transfer to signup page
        document.body.innerHTML = ` 
        <div class="container">
        <h1>Create an Account</h1>
        <input type="text" placeholder="Username">
        <input type="password" placeholder="Password">
        <br><br>
        <button id="submitBtn">Submit</button>
        </div>
        `;
    }, 15000);
    });

        
    
    

   


