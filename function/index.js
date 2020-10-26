function like() {
  console.log("Like");
}

like();

// function arguments(/*any number of arguments we want*/){}

function arguments(argument1) {
  console.log(argument1);
  return "This is a value";
}

arguments([1, 2, 3, 4]); // this is not giing me undefined
arguments({ name: "Andre", anotherName: "Sophie" }); // this is not giving me undefined

const gosia = arguments();
console.log("gosia:", gosia);

const obj = {};

function letsSeeMoreArguments(a, b, c, d) {
  //
  return a + 1;
}

letsSeeMoreArguments(1);

// KATA

function doSomethingHere(arg1, arg2) {
  if (!arg2) {
    return true;
  }
  if (arg1.length === 0) {
    return null;
  }

  const empty = [];
  arg1.forEach(function (element) {
    empty.push(element + 1);
  });

  //   before the loop - empty []
  // 1st loop -> [1+1]
  // 2nd loop -> [1+1, 2+1]
  // 3rd version of the loop -> [1+1, 2+1, 3+1]
  // [2,3,4]

  return empty;
}

// call function doSomethingHere 💚
// function doSomethingHere takes 2 arguments 💚
// function doSomething must return true if just given 1 argument 💚
// if sends an empt array return null (empty array is the first arguemnt) 💚
// if i send an array of numbers [1,2,3] i want to get back [2,3,4] 💚
// if I send array of numbers [2,3,4] i want to get back [3,4,5]
