const board = [
  100,
  -10,
  0,
  0,
  -40,
  -10,
  -10,
  5,
  0,
  -10,
  -50,
  -10,
  0,
  0,
  -50,
  -10,
];

// console.log(this);

function letsGoToTheMall() {
  console.log(this.innerHeight);
}
// letsGoToTheMall();

let dice = () => Math.floor(Math.random() * 6) + 1;

function thisHere() {
  console.log(this);
}

const dimitri = {
  name: "Dimitri",
  position: 0,
  cash: 200,
  drawDice() {
    this.position += dice();
    this.cash += board[this.position];
  },
  getInfo() {
    console.log(this);
  },
  sayMyName: function () {
    console.log(this.name);
  },
  countriesLived: ["russia", "germany", "thailand", "tanzania"],
  whereHasLived() {
    console.log(this.countriesLived);
    this.countriesLived.forEach((element) => {
      console.log(this.name);
      console.log(`${this.name} has also lived in ${element}`);
    });
  },
};

dimitri.whereHasLived();

// const marta = {
//   name: "Marta",
//   position: 0,
//   cash: 200,
//   drawDice() {
//     this.position += dice();
//     this.cash += board[this.position];
//   },
// };
// const rosana = {
//   name: "Rosana",
//   position: 0,
//   cash: 200,
//   drawDice() {
//     this.position += dice();
//     this.cash += board[this.position];
//   },
// };

// rosana.drawDice();

// // DRY -> Dont repeat yourself

console.clear();
const rosana = {
  name: "Rosana",
  position: 0,
  cash: 200,
  drawDice() {
    this.position += dice();
    this.cash += board[this.position];
  },
};

//  camelCase -> firstWordIsNotCapitalizedEveryOtherIs
//  PascalCase -> EveryFirstLetterIsCapitalized

class Student {
  constructor(name, age) {
    this.name = name;
    this.position = 0;
    this.cash = 200;
    this.age = age;
  }

  drawDice() {
    console.log("DRAWING A DICE");
    this.position += dice();
    this.cash += board[this.position];
  }
}

// WebDevStudent = new Student + whatever new properties we want to add

// class WebDevStudent extends Student {
//   constructor(name, age, favoriteLab, position) {
//     super();
//     this.age = age * 7;
//     this.favoriteLab = favoriteLab;
//     this.position = position;
//     this.cash = 100000000;
//   }

//   hackWindows() {
//     console.log("Pff, easy peasy");
//   }
// }

// class DoesntDrawDice extends Student {
//   constructor() {
//     super();
//     this.drawDice = undefined;
//   }
// }

// let student = new Student("Rosana", 21);
// console.log("student:", student);
// let student2 = new WebDevStudent("Marta", 17, "GreatestMoviesLab", 10000);
// console.log("student2:", student2);
// student2.drawDice();
// student2.hackWindows();
// console.clear();

class Hangman {
  constructor() {
    this.lives = 1;
  }

  gameOver() {
    console.log("Booo, you lost");
  }

  failedLetter() {
    this.lives--;
    if (this.lives <= 0) {
      this.gameOver();
    }
  }
}

class GameGoal {
  constructor(word) {
    this.word = word;
  }

  guess(letter) {
    if (this.word.includes(letter)) {
      return true;
    } else {
      return false;
    }
  }
}

class Game {
  constructor(word) {
    this.word = new GameGoal(word);
    this.hangman = new Hangman();
  }
}

const boardGame = new Game("javascript");

if (boardGame.word.guess("e")) {
} else {
  boardGame.hangman.failedLetter();
}

console.clear();

class Human {
  constructor() {
    this.lives = 1; // You Only Live Once
  }

  screamYolo() {
    console.log(`YOLO`);
  }
}

// NotSmartHumanBeing = new Human() + changing ScreamHYoto
class NotSmartHumanBeing extends Human {
  /* 
  constructor() {
    super()
  }

  // its hidden in the depths of javascript
  */
  screamYolo() {
    console.log(`Heck YEAH. YOOOOOOOLOOOO`);
  }
}

// SmartHumanBeing -> new Human() + name+ different screamYolo
class SmartHumanBeing extends Human {
  constructor(name) {
    super();
    this.name = name;
    // this.screamYolo = undefined;
  }

  screamYolo() {
    console.log(
      `Listen, I am a smart human being. Smart human beings dont scream YOLO`
    );
  }
}

// WantsToBeSmarter -> new Human() + new SmartHumanBeing(name) + isStufying property + wantsToParty
class WantsToBeSmarter extends SmartHumanBeing {
  constructor(isStudying, name) {
    super(name);
    this.isStudying = isStudying;
  }

  wantsToParty() {
    console.log("Not really. I need all my brain cells");
  }
}

class DoesntHaveTimeToBeSmarter extends SmartHumanBeing {
  /* 
  constructor(name) {
    super(name) -> to call human and smart human being
  }
  */
  isBuildingFuture() {
    return true;
  }
}

class WebDevStudent extends WantsToBeSmarter {
  constructor(isStudying, name, field) {
    super(isStudying, name);
    this.field = field;
    this.isLikingWebDev = undefined;
  }
}

class Ironhacker extends WebDevStudent {
  constructor(name, favoriteLab) {
    super(true, name, "frontend");
    this.favoriteLab = favoriteLab;
  }

  graduate() {
    console.log("On my way to!");
  }
}

class WebDevRemoteClass {
  constructor() {
    this.room = [
      new Ironhacker("franck", "Greatest Movie Lab"),
      new Ironhacker("alex", "Greatest Movie Lab"),
      new Ironhacker("gosia", "Greatest Movie Lab"),
    ];
  }
}
const ourClass = new WebDevRemoteClass();
console.log("ourClass:", ourClass);
ourClass.room.forEach((element) => element.screamYolo());

const querien = new Ironhacker("Querien", "Greatest Movie Lab");

function returnsTrue() {
  return true;
}
