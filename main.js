// 1. DOM References
const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random() * array.length);
  return array[random];
}

// 2. STORY TEXT AND VARIABLES
// The template uses generic tokens like :item: and :creature: to avoid focus on physical/weather traits
const storyText = "The stars were just beginning to blink open when :hero: discovered a hidden doorway behind the old bookshelf. Slipping inside, they found themselves in :setting:, where a glowing :item: floated silently in mid-air. Suddenly, :creature: materialized from the mist. Luna gasped, but the creature simply smiled and offered a gentle warning: 'The true adventure hasn't even begun yet.'";

const insertHero = [
  "Barnaby the Clockmaker",
  "A quiet little star-catcher",
  "An apprentice wizard"
];

const insertSetting = [
  "an endless forest of glowing blue mushrooms",
  "a forgotten library where the books whisper secrets",
  "a floating island made entirely of spun sugar"
];

const insertItem = [
  "silver pocketwatch that ticked backwards",
  "teapot that brewed liquid starlight",
  "leather-bound diary with blank pages that wrote themselves"
];

const insertCreature = [
  "a tiny teacup dragon pulling a tiny cart",
  "a majestic deer with antlers made of crystalline quartz",
  "a mischievous cat wearing a velvet wizard hat"
];

// 3. EVENT LISTENER AND MAGIC WEAVING FUNCTION
randomize.addEventListener('click', weaveStory);

function weaveStory() {
  let newStory = storyText;

  // Extract random elements
  const heroItem = randomValueFromArray(insertHero);
  const settingItem = randomValueFromArray(insertSetting);
  const itemItem = randomValueFromArray(insertItem);
  const creatureItem = randomValueFromArray(insertCreature);

  // Replace placeholders
  newStory = newStory.replace(':hero:', heroItem);
  newStory = newStory.replace(':setting:', settingItem);
  newStory = newStory.replace(':item:', itemItem);
  newStory = newStory.replace(':creature:', creatureItem);

  // Custom Companion Name Replacement (defaults to 'Luna' if empty)
  if (customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replaceAll('Luna', name);
  }

  // Check the Vibe Modifier (Instead of US/UK standard metrics, we shift the story tone!)
  if (document.getElementById('spooky').checked) {
    // Modify specific pastel keyphrases into slightly more mysterious twilight equivalents
    newStory = newStory.replace('glowing blue mushrooms', 'shadowy violet brambles');
    newStory = newStory.replace('spun sugar', 'whispering silver fog');
    newStory = newStory.replace('a gentle warning', 'a cryptic riddle');
  }

  // Display the woven tale
  story.textContent = newStory;
  story.classList.remove('visibility-hidden');
}