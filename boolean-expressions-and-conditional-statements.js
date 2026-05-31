/*

Objective:
You will practice creating and combining boolean expressions
to drive logic and outcomes in you program.

Instructions:
If you are not familiar with the concept of a text-based adventure game,
let's set the scene...
Example: "You wake up in a dark forest. There are two paths ahead of you:
one leading to the mountains and one to a village.
Your choices will determine your fate!"

Define the Requirements: You must:
  - Write conditional statements to handle player choices.
  - Use boolean expressions to combine multiple conditions.
  - Include at least one use of logical operators (&&, ||, !).

Starter Code:
  - Run the following command in your terminal to install the readline-sync module:
    npm install readline-sync

Paste the following code into your editor:

*/

const readline = require('readline-sync');

const hasTorch = true;
const hasMap = false;

console.log("You see two paths: one leads to the mountains, the other to the village.");
const choice = readline.question("Do you go to the 'mountains' or the 'village'?");

if (choice === "mountains" && hasTorch) {
  console.log("You safely navigate through the dark mountains.");
} else if (choice === "mountains" && !hasTorch) {
  console.log("It's too dark to proceed. You decide to turn back.");
} else if (choice === "village" || hasMap) {
  console.log("You find your way to the village.");
} else {
  console.log("You get lost and wander aimlessly.");
}

/* 

Add Customization and expand the game:
  - Add more choices and scenarios.
  - Include additional items (e.g., a sword, a compass).
  - Use nested conditionals and logical operators to create complex outcomes.

*/
let isWet = false;
let hasBowAndArrows = false;
let hasGame = false;
let lbsOfGame = 0;
console.log(`The next day you wake up on the bank of a slow moving river. As you take in your suroundings you see an empty campsite upriver 30 meters.`);
const choiceTwo = readline.question("Do you investigate the 'campsite' or follow the 'river' downstream? ");

if (choiceTwo === 'campsite'){
  console.log("As you approach the campsite you start to hear voices as if the campers are waking up.");
  const campsitechoice = readline.question("Do you contiue your 'approach' in the open or do you 'sneak' closer to wait for them to leave?");
    if (campsitechoice === 'approach'){
      hasBowAndArrows = true;
      console.log(`When you are a few meters away you call out a greeting.
        The campers return your greeting and invite you to join them for breakfast.
        After the meal they warn you of danger nearby and gift you a bow and a full
        quill of arrows before you leave.`);
    } else if (campsitechoice === 'sneak'){
      console.log(`You manage to stay unnoticed and hide in a hollowed out tree.
        Unfortunatly you fall back asleep before they leave and when you
        awake the camp is gone.`);
    }
} else if (choiceTwo === 'river'){
  isWet = true;
  console.log(`As you follow the river downstream you get distracted, slip, and fall into
    the river. You are swept downriver almost drowning. Luckly a local fisherman sees you
    and pulls you out of the river. After letting you catch your breath and rest for a bit
    the fisherman explains he needs to bring back 50 pounds of fish for his wife's birthday
    feast asks if you will help him catch fish for the rest of the day.`);
  const fishchoice = readline.question("Do you 'help' the fisherman or 'leave' now.");
  if (fishchoice === 'help'){
    console.log(`"Wonderfull, oh and I have an extra set of clothes you can put on while your dry." 
      the fisherman exclaims. You help the fisherman bring in nets, set new lines, and refill hooks.
      By the end of the day the two of you have gathered well over what the fisherman needs. After getting
      the fish to his home you are rewarded with 5 pounds of fish and a place to stay for the night.`);
    isWet = false;
    hasGame = true;
    lbsOfGame = 5;
  } else if (fishchoice === 'leave'){
    console.log("You continue to walk along the river. As night falls you begin to shiver due to your wet clothing.");
  }
} 
if (choiceTwo === 'campsite' && hasBowAndArrows){
  console.log(`You walk for some time before coming into a clearing.
    As you rest at the edge you spot some movement from the other side.
    You remember the warning you were given and ready the bow.
    After a few moments have passed a deer walks into view.`);
  const bowchoice = readline.question("Do you try to 'shoot' the deer or let it 'pass' by.");
  if (bowchoice === 'shoot'){
    console.log(`You miss with all of your arrows, better luck next time.`);
    hasBowAndArrows = false;
  } else if (bowchoice === 'pass'){
    console.log("The deer spots you a runs away. After traveling for sometime you find an inn to spend the night at.");
  }
}
