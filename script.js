// get button
const startBtn = document.getElementById("startBtn");

// when button is clicked, run this function
startBtn.addEventListener("click", function() {

    // change text 
    document.body.innerHTML = `<h1 style="color:white;">Loading...</h1>`;

    // wait 3 seconds
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
    }, 3000);
    });

        
    
    

   


