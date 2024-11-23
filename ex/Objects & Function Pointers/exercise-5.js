'use strict'

const movies = [
	{
		id: 1,
		title: 'Inception',
		year: 2010,
		actors: [
			{ name: 'Leonardo DiCaprio', salary: 25000000 },
			{ name: 'Joseph Gordon-Levitt', salary: 9000000 },
			{ name: 'Ellen Page', salary: 8000000 },
		],
	},
	{
		id: 2,
		title: 'The Dark Knight',
		year: 2008,
		actors: [
			{ name: 'Christian Bale', salary: 20000000 },
			{ name: 'Heath Ledger', salary: 10000000 },
			{ name: 'Gary Oldman', salary: 6000000 },
		],
	},
	{
		id: 3,
		title: 'Interstellar',
		year: 2014,
		actors: [
			{ name: 'Matthew McConaughey', salary: 18000000 },
			{ name: 'Anne Hathaway', salary: 15000000 },
			{ name: 'Jessica Chastain', salary: 10000000 },
		],
	},
	{
		id: 4,
		title: 'The Wolf of Wall Street',
		year: 2013,
		actors: [
			{ name: 'Leonardo DiCaprio', salary: 25000000 },
			{ name: 'Jonah Hill', salary: 1000000 },
			{ name: 'Margot Robbie', salary: 8000000 },
		],
	},
	{
		id: 5,
		title: 'Batman Begins',
		year: 2005,
		actors: [
			{ name: 'Christian Bale', salary: 10000000 },
			{ name: 'Katie Holmes', salary: 5000000 },
			{ name: 'Liam Neeson', salary: 7000000 },
		],
	},
	{
		id: 6,
		title: 'Tenet',
		year: 2020,
		actors: [
			{ name: 'John David Washington', salary: 2000000 },
			{ name: 'Robert Pattinson', salary: 4000000 },
			{ name: 'Elizabeth Debicki', salary: 3500000 },
		],
	},
	{
		id: 7,
		title: 'Dunkirk',
		year: 2017,
		actors: [
			{ name: 'Tom Hardy', salary: 10000000 },
			{ name: 'Cillian Murphy', salary: 8000000 },
			{ name: 'Harry Styles', salary: 3000000 },
		],
	},
	{
		id: 8,
		title: 'The Prestige',
		year: 2006,
		actors: [
			{ name: 'Christian Bale', salary: 9000000 },
			{ name: 'Hugh Jackman', salary: 10000000 },
			{ name: 'Scarlett Johansson', salary: 7000000 },
		],
	},
]

/* 
    Add a New Movie 
    Write a function addMovie(movies, newMovie) that adds a new movie to the movies array.
    Ensure the new movie has a unique id.
  */

var newMovie = {
	title: 'The Matrix',
	year: 1999,
	actors: [{ name: 'Keanu Reeves', salary: 10000000 }],
}

function addMovie(movies, newMovie) {
	var maxId = findMaxMovieId(movies)

	newMovie.id = maxId + 1
	movies.push(newMovie)
	return newMovie
}

function findMaxMovieId(movies) {
	var maxId = 0

	for (var i = 0; i < movies.length; i++) {
		if (movies[i].id > maxId) maxId = movies[i].id
	}
	return maxId
}

console.log(addMovie(movies, newMovie))
