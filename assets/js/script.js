
//variable for input
const searchInput = document.getElementById("searchMovie");
const searchInputVal = searchInput.value;
//variable for button press to search
const searchButton = document.getElementById("searchMovieBtn");
//variable for movie poster
const moviePosterHolder = document.getElementById("moviePoster");
const TMDBapiKey = `9e2d992d8fb0f9588f0d380dff3225e8`;
const nicCageID = '2963';

// fetch from TMDB with a search term
const searchMovieDatabase = function(){
	let searchInputVal = searchInput.value;
    //get movie genre value when the search button is clicked
    let movieGenre = document.getElementById("movieGenre").value;
    // get movie rating when search button is clicked
    let moviePopularity = document.getElementById("movieRating").value;
    console.log(moviePopularity);
	//letiable for the movie database API
	let movieApi = `https://api.themoviedb.org/3/search/movie?api_key=${TMDBapiKey}&query=${searchInputVal}`;
	fetch(movieApi)
		.then((response) => response.json())
		.then((data) => {
			// turn the data into an array
			let movieArray = Object.values(data);
			let movieList = movieArray[1];
			let movie = movieList[1];
			let movieId = movieList[1].id;
			// use the movie ID in another details fetch url
			let movieDetailsUrl = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${TMDBapiKey}&language=en-US`
			fetch(movieDetailsUrl)
				.then((response) => response.json())
				.then((detailsData) => {
					// use popularity data to compare to the moviePopularity value
					let pop = detailsData.popularity;

					console.log(pop);

				})
			// render the movie poster image
			let moviePosterUrl = `https://image.tmdb.org/t/p/w500${data.results[0].poster_path}`;
			moviePosterHolder.innerHTML = `<img src= '${moviePosterUrl}' />`;
			moviePosterHolder.style.width = '200px';
		})
}

searchButton.addEventListener("click", searchMovieDatabase)

// // grab the recipe responses from  spoonacular
// fetch('https://api.spoonacular.com/recipes/complexSearch?apiKey=a9af3d76ab984d298de29d4837c5c9d1')
// .then(response => response.json())
// .then(data => console.log(data))
// .catch(err => console.error(err));

// some variables for the TMDB search by actor ID, returns list of nic cage films

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