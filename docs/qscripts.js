const questions = [
  {
    question: "Which magical creature fascinates you the most?",
    options: [
      { text: "Phoenix", house: "Gryffindor" },
      { text: "Niffler", house: "Hufflepuff" },
      { text: "Hippogriff", house: "Ravenclaw" },
      { text: "Basilisk", house: "Slytherin" }
    ]
  },
  {
    question: "What would you do if you found a wallet on the street?",
    options: [
      { text: "Return it to the owner immediately.", house: "Hufflepuff" },
      { text: "Investigate whose it is using clues.", house: "Ravenclaw" },
      { text: "Keep it, might be useful later.", house: "Slytherin" },
      { text: "Turn it in to the police.", house: "Gryffindor" }
    ]
  },
  {
    question: "Which subject at Hogwarts would you be best at?",
    options: [
      { text: "Defense Against the Dark Arts", house: "Gryffindor" },
      { text: "Herbology", house: "Hufflepuff" },
      { text: "Charms", house: "Ravenclaw" },
      { text: "Potions", house: "Slytherin" }
    ]
  },
  {
    question: "Choose a magical item:",
    options: [
      { text: "Sword of Gryffindor", house: "Gryffindor" },
      { text: "Hufflepuff's Cup", house: "Hufflepuff" },
      { text: "Diadem of Ravenclaw", house: "Ravenclaw" },
      { text: "Locket of Slytherin", house: "Slytherin" }
    ]
  },
  {
    question: "What do you value most?",
    options: [
      { text: "Bravery", house: "Gryffindor" },
      { text: "Loyalty", house: "Hufflepuff" },
      { text: "Wisdom", house: "Ravenclaw" },
      { text: "Ambition", house: "Slytherin" }
    ]
  },
  {
    question: "Pick a wizarding snack:",
    options: [
      { text: "Chocolate Frogs", house: "Gryffindor" },
      { text: "Pumpkin Pasties", house: "Hufflepuff" },
      { text: "Fizzing Whizzbees", house: "Ravenclaw" },
      { text: "Bertie Bott’s Every Flavour Beans", house: "Slytherin" }
    ]
  },
  {
    question: "Your patronus would be:",
    options: [
      { text: "Stag", house: "Gryffindor" },
      { text: "Badger", house: "Hufflepuff" },
      { text: "Eagle", house: "Ravenclaw" },
      { text: "Snake", house: "Slytherin" }
    ]
  },
  {
    question: "How do you approach a problem?",
    options: [
      { text: "Face it head-on", house: "Gryffindor" },
      { text: "Work together with friends", house: "Hufflepuff" },
      { text: "Analyze all possibilities", house: "Ravenclaw" },
      { text: "Find a clever shortcut", house: "Slytherin" }
    ]
  },
  {
    question: "Which color combo do you prefer?",
    options: [
      { text: "Red & Gold", house: "Gryffindor" },
      { text: "Yellow & Black", house: "Hufflepuff" },
      { text: "Blue & Bronze", house: "Ravenclaw" },
      { text: "Green & Silver", house: "Slytherin" }
    ]
  },
  {
    question: "Pick a Hogwarts ghost:",
    options: [
      { text: "Nearly Headless Nick", house: "Gryffindor" },
      { text: "The Fat Friar", house: "Hufflepuff" },
      { text: "The Grey Lady", house: "Ravenclaw" },
      { text: "The Bloody Baron", house: "Slytherin" }
    ]
  }
];

// Tally points
let housePoints = {
  Gryffindor: 0,
  Hufflepuff: 0,
  Ravenclaw: 0,
  Slytherin: 0
};

let currentQuestion = 0;

function showQuestion(idx) {
  const quizDiv = document.getElementById('quiz');
  if (idx >= questions.length) {
    return showResult();
  }
  const q = questions[idx];
  let html = `<p>${q.question}</p><div class="options">`;
  q.options.forEach((opt, oidx) => {
    html += `<button onclick="answerQuestion('${opt.house}')">${opt.text}</button>`;
  });
  html += `</div>`;
  quizDiv.innerHTML = html;
}

function answerQuestion(house) {
  housePoints[house]++;
  currentQuestion++;
  if (currentQuestion < questions.length) {
    showQuestion(currentQuestion);
  } else {
    showResult();
  }
}

function showResult() {
  const resultDiv = document.getElementById('result');
  document.getElementById('quiz').style.display = 'none';
  // Find house with highest points
  let winner = "Gryffindor";
  let max = -1;
  for (let house in housePoints) {
    if (housePoints[house] > max) {
      max = housePoints[house];
      winner = house;
    }
  }
  const houseDesc = {
    Gryffindor: "Brave, daring, chivalrous! Welcome to Gryffindor 🦁",
    Hufflepuff: "Loyal, patient, true! Welcome to Hufflepuff 🦡",
    Ravenclaw: "Wise, witty, creative! Welcome to Ravenclaw 🦅",
    Slytherin: "Ambitious, cunning, resourceful! Welcome to Slytherin 🐍"
  };
  resultDiv.innerHTML = `<h2>${winner}!</h2><p>${houseDesc[winner]}</p>`;
  resultDiv.style.display = 'block';
}

// Start the quiz on page load
showQuestion(currentQuestion);