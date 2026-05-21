// so first idea was to make a sign up screen to win a gift card but make it take so long to load i got this idea from real life becuase websites usually take so long to load almost everytime
// get button
const startBtn = document.getElementById("startBtn");

// when button is clicked, run this function
startBtn.addEventListener("click", function () {

    // change text 
    document.body.innerHTML = `<h1 style="color:white;">Loading...</h1>`;

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
        </div>
        `;
        // i made the username box not go past 5 letters to make it glitchy 
        // get username input
        const username = document.getElementById("username");
        // when user types
        username.addEventListener("input", function () {

            let text = username.value;
            // remove last letter 
            if (text.length > 5) {
                username.value = text.slice(0, -1);

            }
        });
        // i made the submit button unclickable so everytime you try to click on it it goes away 
        // get submit button 
        const submitBtn = document.getElementById("submitBtn");
        // make button run away 
        submitBtn.addEventListener("mouseover", function () {
            let randomX = Math.random() * 500;
            let randomY = Math.random() * 500;
            submitBtn.style.position = "absolute";
            submitBtn.style.left = randomX + "px";
            submitBtn.style.top = randomY + "px";
        });
        // i made it that when the user presses the agree box the password box disappears 
        //  get checkbox
        const agreeBox = document.getElementById("agreeBox");
        // remove password input when checked 
        agreeBox.addEventListener("click", function () {
            // get password filed 
            const passwordinput =
                document.querySelector('input[type="password"]');
            // remove it 
            passwordinput.remove();


        });
        // get slider
        const crazySlider = document.getElementById("crazySlider")
        // slider chnages background color instead of volume 
        crazySlider.addEventListener("input", function(){
            let value = crazySlider.value;
            // change background color
            document.body.style.backgroundColor = 
             `rgb(${value * 2}, ${255 - value}, ${value + 100})`;

        });

        // chnage timer back reminder 
    }, 2000);
});








