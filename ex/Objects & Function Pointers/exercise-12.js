'use strict'

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

  /* 
    Find Movies with Shared Actors 
    Write a function findMoviesWithSharedActors(movies, movieId) that 
    returns the titles of movies that share any actors with the movie specified by movieId.
  */

  function findMoviesWithSharedActors(movies, movieId) {
    var sharedMovies = []
    var sharedActors = movies.find(movie => movie.id === movieId).actors
    console.log(`current movie: ${movies.find(movie => movie.id === movieId).title}`)
    for (var i=0; i<movies.length; i++) {
      if (movies[i].id === movieId) continue
      else {
        for (var j=0; j<movies[i].actors.length; j++) {
          if (sharedActors.find(actor => actor.name === movies[i].actors[j].name)) {
            sharedMovies.push(movies[i].title)
          }
        }
      }
    }
    return sharedMovies
  } 

  console.log(findMoviesWithSharedActors(movies, 2))