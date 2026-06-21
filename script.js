/* Game Stuff */
const rollButton = document.getElementById("rollButton");
const counter = document.getElementById("counter");
const autorollButton = document.getElementById("autorollButton");
let count = 0;
let cooldown = false;
let autoroll = false
let autorollInterval;

/* Rarities */


/* Roll function */
function roll() {
   if (cooldown == true) return
    count ++;
    counter.textContent = count;
    console.log("Rolled.");
    console.log("Cooldown started.");
    cooldown = true;
        setTimeout(() => {
            console.log("Cooldown ended.");
            cooldown = false;
        }, 5000);
        setTimeout(() => {
             let roll = Math.floor(Math.random() * 10000) + 1;
                if (roll == 5000) {
                    common ++;
                }
           

        
        }, 2000);
};
/* RollClick */
rollButton.addEventListener("click", () => {
    roll();
});
 
/* Autoroll Toggle */
autorollButton.addEventListener("click", () => {
    if (count >= 1) {if (!autoroll) {
        autoroll = true;
        autorollButton.textContent = "ON";
        console.log("Autoroll enabled.");
        autorollInterval = setInterval(roll, 5000)}
        else{autoroll = false;
        autorollButton.textContent = "OFF";
        console.log("Autoroll disabled.");
        clearInterval(autorollInterval)
    
}}});
