// Ask the user how many movies they want to rate
const movieNum = parseInt(prompt("How many movies do you want to rate?"));

// Create an empty array to store movie objects
const movies = [];

// Loop to collect movie data from the user
for (let i = 0; i < movieNum; i++) {
    let title;
    do {
        title = prompt("Enter movie title:").trim();
    } while (!title); // Keep asking until a valid title is entered

    let rating;
    do {
        rating = parseInt(prompt(`Enter movie rating (1-5) for "${title}":`));
    } while (isNaN(rating) || rating < 1 || rating > 5); // Ensure valid rating

    // Store the movie as an object in the array
    movies.push({ title: title, rating: rating });
}

// Print the original list
console.log("Original Movies:");
movies.forEach(movie => {
    console.log(`Title: "${movie.title}", Rating: ${movie.rating}`);
});

// Sort the movies from highest to lowest rating
movies.sort((a, b) => b.rating - a.rating);

// Print the sorted movies
console.log("Sorted Movies:");
movies.forEach(movie => {
    console.log(`Title: "${movie.title}", Rating: ${movie.rating}`);
});

// Get the highest-rated movie (first in the sorted array)
const highestRatedMovie = movies[0];

console.log(`Highest Rated Movie: "${highestRatedMovie.title}" with a rating of ${highestRatedMovie.rating}`);

// Display sorted movies in the HTML document
const movieListElement = document.getElementById("movieList");
const highestMovieElement = document.getElementById("highestMovie");

if (movieListElement) {
    let movieListText = "Movie List:\n";
    movies.forEach(movie => {
        movieListText += `Title: "${movie.title}", Rating: ${movie.rating}\n`;
    });
    movieListElement.innerText = movieListText;
}

if (highestMovieElement) {
    highestMovieElement.innerText = `Highest Rated Movie: "${highestRatedMovie.title}" with a rating of ${highestRatedMovie.rating}`;
}