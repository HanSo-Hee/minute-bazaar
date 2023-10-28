document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("searchInput");
    const movieList = document.getElementById("movieList");

    // Sample movie data in JSON format
    const movies = [
        {
            title: "Avatar the Way Of Water",
            poster: "./movies-poster/avatar.jpg",
            link: "./Hollywood/avatartheway.html",
        },
        {
            title: "Nun",
            poster: "./movies-poster/TheNunPoster.jpg",
            link: "./Hollywood/nun2.html",
        },
        {
            title: "1917",
            poster: "./movies-poster/1917.jpg",
            link: "./Bollywood/omg2.html",
        },{
            title: "Morbius",
            poster: "movies-poster/morbius.jpg",
            link: "./Hollywood/avatartheway.html",
        },
        {
            title: "Red Notice",
            poster: "movies-poster/red-notice.jpg",
            link: "./Hollywood/nun2.html",
        },
        {
            title: "Pathaan",
            poster: "movies-poster/pathaan.jpg",
            link: "./Bollywood/omg2.html",
        },
        
    ];

    // Function to display movies
    function displayMovies(movies) {
        movieList.innerHTML = "";
        movies.forEach((movie) => {
            const movieCard = document.createElement("div");
            movieCard.classList.add("movie-card");

            // Create a link element for the entire movie card
            const movieLink = document.createElement("a");
            movieLink.href = movie.link;

            const movieTitle = document.createElement("h2");
            movieTitle.textContent = movie.title;

            const moviePoster = document.createElement("img");
            moviePoster.classList.add("movie-poster");
            moviePoster.src = movie.poster;

            movieLink.appendChild(movieTitle);
            movieLink.appendChild(moviePoster);

            movieCard.appendChild(movieLink);
            movieList.appendChild(movieCard);
        });
    }

    // Initial display of movies
    displayMovies(movies);

    // Event listener for search input
    searchInput.addEventListener("input", function () {
        const searchTerm = searchInput.value.toLowerCase();

        const filteredMovies = movies.filter((movie) =>
            movie.title.toLowerCase().includes(searchTerm)
        );

        displayMovies(filteredMovies);
    });
});
