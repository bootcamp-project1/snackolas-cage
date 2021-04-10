
//variable for input
const searchInput = document.getElementById("searchMovie");
const searchInputVal = searchInput.value;
//variable for button press to search
const searchButton = document.getElementById("searchMovieBtn");
//variable for movie poster
const moviePosterHolder = document.getElementById("moviePoster");

//variable for select menus
// var genreSelect = 

// fetch from TMDB with a search term
const searchMovieDatabase = function(){
	let searchInputVal = searchInput.value;
    //get movie genre value when the search button is clicked
    let movieGenre = document.getElementById("movieGenre").value;
    // get movie rating when search button is clicked
    let movieRating = document.getElementById("movieRating").value;
    console.log(movieRating)
	//letiable for the movie database API
	let movieApi = 'https://api.themoviedb.org/3/search/movie?api_key=9e2d992d8fb0f9588f0d380dff3225e8&query=zombies';
	let response = fetch(movieApi + searchInputVal)
	.then((response) => response.json())
	.then((data) => {
		console.log(data);
		let moviePoster = `https://image.tmdb.org/t/p/w500%${data.results[0].poster_path}`;
		// clear out the old pic
		console.log(moviePosterHolder);
		moviePosterHolder.innerHTML = `<img src= '${moviePoster}' />`;
		console.log(moviePoster)
	})
	

	// .then(response => {
	// 	var data = JSON.parse(movieApi + searchInputVal)
	// 	console.log(data);
	
	// })
	// .catch(err => {
	// 	console.error(err);
	// });

}

searchButton.addEventListener("click", searchMovieDatabase)

// // grab the recipe responses from  spoonacular
// fetch('https://api.spoonacular.com/recipes/complexSearch?apiKey=a9af3d76ab984d298de29d4837c5c9d1')
// .then(response => response.json())
// .then(data => console.log(data))
// .catch(err => console.error(err));

// some variables for the TMDB search by actor ID, returns list of nic cage films
const TMDBapiKey = `9e2d992d8fb0f9588f0d380dff3225e8`;
const nicCageID = '2963';

// TMDB api fetch here, searches by actor ID number
const nicolasCager = (actor) => {
	fetch(`https://api.themoviedb.org/3/person/${nicCageID}/movie_credits?api_key=${TMDBapiKey}`)
		.then((response) => response.json())
		.then((TMDBresponse) => {
			console.log(TMDBresponse);
		})
		.catch(err => {
			console.error(err);
		});
}