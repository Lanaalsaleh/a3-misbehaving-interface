// so first idea was to make a sign up screen to win a gift card but make it take so long to load i got this idea from real life becuase websites usually take so long to load almost everytime
// get button
const startBtn = document.getElementById("startBtn");

// when button is clicked, run this function
startBtn.addEventListener("click", function () {

    // change text 
    document.body.innerHTML = `<h1 style="color:white;">Loading your gift card</h1>`;

    // wait 10 seconds
    // i tried 3 secs at first but felt too short so i made it 10 might even make it longer 
    setTimeout(function () {
        // transfer to signup page
        document.body.innerHTML = ` 
        <div class="container">
        <h1>Create an Account</h1>
        <input type="text"  id="username" placeholder="Username">
        <input type="password" placeholder="Password">
        <br><br>
        <button id="submitBtn">Submit</button>
        <br><br>
<label>
    <input type="checkbox" id="agreeBox">
    I agree to the terms 
</label>
<br><br>

<p>Volume</p>
<input type="range" id="crazySlider">
<div id="progressContainer">
<div id="progressBar"></div>
</div>


        </div>
        `;
        // made the username box not go past 3 letters then changed it to 5 then 4 i was just trying and 4 seemed perfect 
        // i made the username box not go past 4 letters to make it glitchy and impossible to write the username 
        // get username input
        const username = document.getElementById("username");
        // when user types
        username.addEventListener("input", function () {

            let text = username.value;
            // remove last letter 
            if (text.length > 4) {
                username.value = text.slice(0, -1);

            }
        });
        // i made the submit button unclickable so everytime you try to click on it it goes away to make it look chaotic
        // get submit button 
        const submitBtn = document.getElementById("submitBtn");
       

        // make button run away 
        // the speed was 500 but then i changed it to 700 just becuase i wanted to feel more broken
        submitBtn.addEventListener("mouseover", function () {
            let randomX = Math.random() * 700;
            let randomY = Math.random() * 700;
            submitBtn.style.position = "absolute";
            submitBtn.style.left = randomX + "px";
            submitBtn.style.top = randomY + "px";
        }); 
        // i made the button that if the user tries to sumbit it doesnt work the first time and takes you back to the main page because i wanted the user to feel frustrated
        let firstTry = true;
        // sumbit button not work the first try and reload and work second time
        submitBtn.addEventListener("click", function () {
            if (firstTry) {

        firstTry = false;
            
                // fake loading msg
                document.body.innerHTML = `

        <h1 style="color:white;">

        Connection Lost... Reloading

        </h1>

        `;

        // reload page after 3 seconds
        setTimeout(function () {

            location.reload();

        }, 3000);

         } else {

        alert("Submitted!");

    }

            
        });

        // i made it that when the user presses the agree box the password box disappears so it behaves in unexpected ways
        //  get checkbox
        const agreeBox = document.getElementById("agreeBox");
        // remove password input when checked 
        agreeBox.addEventListener("click", function () {
            // get password filed 
            const passwordinput =
                document.querySelector('input[type="password"]');
            // remove it 
            if (passwordinput) {
            passwordinput.remove();
            }


        });
        // this one is a little different because its unpredictable i wanted the volume button to chnage the background color to make it act weird
        // get slider
        const crazySlider = document.getElementById("crazySlider")
        // slider chnages background color instead of volume 
        crazySlider.addEventListener("input", function(){
            let value = crazySlider.value;
            // change background color
            document.body.style.backgroundColor = 
             `rgb(${value * 2}, ${255 - value}, ${value + 100})`;

        });
        // added a never ending progress bar because its annoying and make it look corrupted and like it might work but it wont
        // progress bar
        const progressBar = document.getElementById("progressBar");
        let progress = 0;
        // fake loading bar 
        setInterval(function () {

    progress += 10;

    // randomly reset progress
    if (Math.random() < 0.5) {
        progress = 0;
    } 
    progressBar.style.width = progress + "%";

}, 1000);
        // at first i just made it that a text over the sign up page would appear but i felt that if the whole page chnaged it would look more like a real crash 
        // after 15 seconds shows fake overeating error to make the whole website crash
        setTimeout(function(){
        //  turn screen red
        document.body.style.backgroundColor = "red";
        // replace entire page with warning
        document.body.innerHTML = `

    <h1 class="warning">

    WARNING: SYSTEM OVERHEATING

    </h1>

    `;

            
        }, 15000);

        // chnage timer back reminder 
    }, 15000);
});








