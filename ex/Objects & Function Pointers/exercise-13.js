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
    Dynamic Data Transformation 
    Write a function transformMovies(movies, transformFn) which applies a transformation function transformFn to each movie object and returns a new array of transformed objects. 
    Implement the following transformations using arrow functions:

    Return just the titles of all movies.
    Return a new object with the title and total actor salaries.
    Return the original object but add a totalSalaries property.
  */

  function transformMovies(movies, transformFn) { 
    return movies.map(transformFn)
  }

  const titlesAndSalaries = transformMovies(movies, (movie) => {
    var retMovie = {}
    retMovie.totalSalary = 0
    retMovie.title = movie.title
    for (var i=0; i<movie.actors.length; i++) {
      retMovie.totalSalary += movie.actors[i].salary
    }
    return retMovie
  })

  const onlyTitles = transformMovies(movies, (movie) => movie.title)

  const originalObjectsWithTotalSalaries = transformMovies(movies, (movie) => {
    movie.totalSalary = 0
    for (var i=0; i<movie.actors.length; i++) {
      movie.totalSalary += movie.actors[i].salary
    }
    return movie
  })

  console.log(titlesAndSalaries)  
  console.log('--------------------------------')
  console.log(onlyTitles)
  console.log('--------------------------------')
  console.log(originalObjectsWithTotalSalaries)