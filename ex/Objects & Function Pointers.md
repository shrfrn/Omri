Here’s a set of exercises centered around a `movies` entity, with a focus on managing an array of movies and analyzing data about actors:

---

### Setup:

Here’s the sample data structure for the exercises:

```javascript
const movies = [
  {
    id: 1,
    title: "Inception",
    year: 2010,
    actors: [
      { name: "Leonardo DiCaprio", salary: 25000000 },
      { name: "Joseph Gordon-Levitt", salary: 9000000 },
      { name: "Ellen Page", salary: 8000000 },
    ],
  },
  {
    id: 2,
    title: "The Dark Knight",
    year: 2008,
    actors: [
      { name: "Christian Bale", salary: 20000000 },
      { name: "Heath Ledger", salary: 10000000 },
      { name: "Gary Oldman", salary: 6000000 },
    ],
  },
  {
    id: 3,
    title: "Interstellar",
    year: 2014,
    actors: [
      { name: "Matthew McConaughey", salary: 18000000 },
      { name: "Anne Hathaway", salary: 15000000 },
      { name: "Jessica Chastain", salary: 10000000 },
    ],
  },
  {
    id: 4,
    title: "The Wolf of Wall Street",
    year: 2013,
    actors: [
      { name: "Leonardo DiCaprio", salary: 25000000 },
      { name: "Jonah Hill", salary: 1000000 },
      { name: "Margot Robbie", salary: 8000000 },
    ],
  },
  {
    id: 5,
    title: "Batman Begins",
    year: 2005,
    actors: [
      { name: "Christian Bale", salary: 10000000 },
      { name: "Katie Holmes", salary: 5000000 },
      { name: "Liam Neeson", salary: 7000000 },
    ],
  },
  {
    id: 6,
    title: "Tenet",
    year: 2020,
    actors: [
      { name: "John David Washington", salary: 2000000 },
      { name: "Robert Pattinson", salary: 4000000 },
      { name: "Elizabeth Debicki", salary: 3500000 },
    ],
  },
  {
    id: 7,
    title: "Dunkirk",
    year: 2017,
    actors: [
      { name: "Tom Hardy", salary: 10000000 },
      { name: "Cillian Murphy", salary: 8000000 },
      { name: "Harry Styles", salary: 3000000 },
    ],
  },
  {
    id: 8,
    title: "The Prestige",
    year: 2006,
    actors: [
      { name: "Christian Bale", salary: 9000000 },
      { name: "Hugh Jackman", salary: 10000000 },
      { name: "Scarlett Johansson", salary: 7000000 },
    ],
  },
]
```

---

### Exercises:

1. **Find a Movie by ID** Write a function `findMovieById(movies, id)` that takes the `movies` array and an `id` as arguments and returns the movie object with the matching `id`.
    
2. **List All Actors** Write a function `getAllActors(movies)` that returns an array of all actor names (no duplicates).
    
3. **Find the Highest Paid Actor** Write a function `getHighestPaidActor(movies)` that finds and returns the actor object with the highest salary across all movies.
    
4. **Movies by Actor** Write a function `getMoviesByActor(movies, actorName)` that returns an array of movie titles in which a given actor appears.
    
5. **Add a New Movie** Write a function `addMovie(movies, newMovie)` that adds a new movie to the `movies` array. Ensure the new movie has a unique `id`.
    
6. **Remove a Movie by ID** Write a function `removeMovieById(movies, id)` that removes the movie with the given `id` from the array and returns it.
    
7. **Actors Appearing in Multiple Movies** Write a function `getFrequentActors(movies)` that returns an array of actor names who appear in more than one movie.
    
8. **Sort Movies by Year** Write a function `sortMoviesByYear(movies)` that returns the movies array sorted by the year they were released (ascending).
   
9. **Sort Movies by Top Salary** Write a function `sortMoviesByTopSalary(movies)` which finds the top salary paid in every movie and sorts the movie array in descending order of top salaries. 
    
10. **Total Salary per Movie** Write a function `calculateTotalSalary(movies, movieId)` that calculates and returns the total salary paid to actors for a given movie by its `id`.
11. **Top Earning Actors** Write a function `getTopEarningActors(movies, n)` that takes the `movies` array and an integer `n` and returns the top `n` highest-earning actors based on their total salaries across all movies.
    
12. **Find Movies with Shared Actors** Write a function `findMoviesWithSharedActors(movies, movieId)` that returns the titles of movies that share any actors with the movie specified by `movieId`.
    
13. **Dynamic Data Transformation**
    Write a function `transformMovies(movies, transformFn)` which applies a transformation function `transformFn` to each movie object and returns a new array of transformed objects. Implement the following transformations using arrow functions:
    
	- Return just the titles of all movies.
	- Return a new object with the title and total actor salaries.
	- Return the original object but add a `totalSalaries` property.

```javascript
const titlesAndSalaries = transformMovies(movies, (movie) => {
	// Code to transform a single movie object into an object like this:
	// { title: 'Some title', totalSalary: 1000000000 }
})

function transformMovies(movies, func) {
	// Run func on every movie in the movies array and return a new
	// array of transformed results
}
```
15. **Object map** 
    Create an object where keys are years and values are arrays of movie titles released that year.