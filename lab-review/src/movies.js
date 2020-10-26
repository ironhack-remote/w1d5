// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

function map(array, callbackFunction) {
  const arr = [];
  for (let i = 0; i < array.length; i++) {
    const result = callbackFunction(array[i], i, array);
    arr.push(result);
  }
  return arr;
}

function getAllDirectors(array) {
  //   return map(array, function (element) {
  //     return element.director;
  //   });
  return array.map(function (element) {
    return element.director;
  });
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function filter(array, callbackFunction) {
  const arr = [];
  for (let i = 0; i < array.length; i++) {
    const result = callbackFunction(array[i], i, array);
    if (result) {
      arr.push(result);
    }
  }
  return arr;
}

function howManyMovies(moviesArray) {
  const filtered = moviesArray.filter(function (movie) {
    return (
      movie.director === "Steven Spielberg" && movie.genre.includes("Drama")
    );
  });
  return filtered.length;
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(moviesArray) {
  if (moviesArray.length === 0) {
    return 0;
  }

  //   this way we would remove any movie without a rate, first
  //   const onlyMoviesWithRate = moviesArray.filter(function (movie) {
  //     return movie.rate;
  //   });
  const reduced = moviesArray.reduce(function (acc, movie) {
    if (!movie.rate) {
      return acc;
    }
    return acc + movie.rate;
  }, 0);
  const avg = reduced / moviesArray.length;
  return Number(avg.toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(moviesArray) {
  const onlyDramas = moviesArray.filter(function (movie) {
    return movie.genre.includes("Drama");
  });

  return ratesAverage(onlyDramas);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(moviesArray) {
  const copy = moviesArray.map(function (element) {
    return element;
  });

  const output = copy.sort(function (movie1, movie2) {
    if (movie1.year < movie2.year) {
      return -1;
    }

    if (movie1.year === movie2.year) {
      if (movie1.title.toLowerCase() < movie2.title.toLowerCase()) {
        return -1;
      }
    }
  });
  console.log(output);

  return output;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(moviesArray) {
  const copy = moviesArray.map(function (element) {
    return element.title;
  });
  const sorted = copy.sort(function (movie1, movie2) {
    if (movie1.toLowerCase() < movie2.toLowerCase()) {
      return -1;
    }
  });

  return sorted.slice(0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
