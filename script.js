const fetchMovie = async () => {
  let movieName = document.getElementById("moive-name").value;
  const api = `https://www.omdbapi.com/?i=tt3896198&apikey=d45911e9&s=${movieName}`;
  const data = await fetch(api);
  const jsonData = await data.json();
  return jsonData.Search;
};



const showData = (movie) => {
  return `<div class="col-lg-3 col-md-4 col-sm-6 mb-5 d-inline-flex">
  <div class="card m-3">
  <img src="${movie.Poster}" class="card-img-top" style="height: 350px;">
  <div class="card-body">
    <h5 class="card-title text-info">${movie.Title}</h5>
    <div class="fs-6 text-warning mb-2">Release Year : ${movie.Year}<br>Type : ${movie.Type}</div>
    <div class="d-grid gap-2"><button class="btn btn-outline-danger">Add to Cart</button></div>
  </div>
</div></div>`;
};



const showMovies = async () => {
  const val = document.getElementById("movies-list");
  let movies
  const movieArray = await fetchMovie();
  movieArray.map((a) => {
    movies += showData(a);
    val.innerHTML = movies;
  });
  document.getElementById("moive-name").value = "";
};