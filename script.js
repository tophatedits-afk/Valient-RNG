/* Game Stuff */
const rollButton = document.getElementById("rollButton");
const counter = document.getElementById("counter");
const autorollButton = document.getElementById("autorollButton");
const commonc = document.getElementById("commonc");
const rarec = document.getElementById("rarec");
const epicc = document.getElementById("epicc");
const legendaryc = document.getElementById("legendaryc");
const mythicalc = document.getElementById("mythicalc");
let count = 0;
let cooldown = false;
let autoroll = false;
let autorollInterval;

/* Rarities */
let common = 0;
let rare = 0;
let epic = 0;
let legendary = 0;
let mythical = 0;

/* UpdateUI */
function update() {
    commonc.textContent = common;
    rarec.textContent = rare;
    epicc.textContent = epic;
    legendaryc.textContent = legendary;
    mythicalc.textContent = mythical;

}

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
             let roll = Math.floor(Math.random() * 5000) + 1;
                console.log(roll);
                if (roll >= 3750) {
                    common ++;
                    console.log("Rolled Common.");
                    update();
                }
                    else
                {if (roll >= 3500) {
                    rare ++;
                    console.log("Rolled Rare.");
                    update();
                }
                    else
                {if (roll >= 2750) {
                    epic ++;
                    console.log("Rolled Epic.");
                    update();
                }
                    else
                {if (roll >= 2250) {
                    legendary ++;
                    console.log("Rolled Legendray.");
                    update();
                }
                    else
                {if (roll >= 2000) {
                    mythical ++;
                    console.log("Rolled Mythical.");
                    update()
                }
                    else
                {if (roll <= 1999) {
                    console.log("Nothing has been set for under 2000.");
                }
                 }}}}};
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
        autorollInterval = setInterval(roll, 1000)}
        else{autoroll = false;
        autorollButton.textContent = "OFF";
        console.log("Autoroll disabled.");
        clearInterval(autorollInterval)
    
}}});
