/* Game Stuff */
const rollButton = document.getElementById("rollButton");
const counter = document.getElementById("counter");
const autorollButton = document.getElementById("autorollButton");
const commonc = document.getElementById("commonc");
const rarec = document.getElementById("rarec");
const epicc = document.getElementById("epicc");
const legendaryc = document.getElementById("legendaryc");
const mythicc = document.getElementById("mythicc");
const lastRoll = document.getElementById("lastRoll");
let count = 0;
let cooldown = false;
let autoroll = false;
let autorollInterval;

/* Rarities */
let common = 0;
let rare = 0;
let epic = 0;
let legendary = 0;
let mythic = 0;

/* UpdateUI */
function update() {
    commonc.textContent = common;
    rarec.textContent = rare;
    epicc.textContent = epic;
    legendaryc.textContent = legendary;
    mythicc.textContent = mythic;

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
                    lastRoll.textContent = "Common";
                    update();
                }
                    else
                {if (roll >= 3500) {
                    rare ++;
                    console.log("Rolled Rare.");
                    lastRoll.textContent = "Rare";
                    update();
                }
                    else
                {if (roll >= 2750) {
                    epic ++;
                    console.log("Rolled Epic.");
                    lastRolltextContent = "Epic";
                    update();
                }
                    else
                {if (roll >= 2250) {
                    legendary ++;
                    console.log("Rolled Legendray.");
                    lastRoll.textContent = "Legendary";
                    update();
                }
                    else
                {if (roll >= 2000) {
                    mythic ++;
                    console.log("Rolled Mythic.");
                    lastRoll.textContent = "Mythic";
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
