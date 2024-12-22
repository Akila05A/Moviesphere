import React from "react";

const MovieSlider = ({ movies }) => {
  return (
    <div id="movieSlider" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        {movies.map((movie, index) => (
          <div
            key={index}
            className={`carousel-item ${index === 0 ? "active" : ""}`}
          >
            <div className="d-flex justify-content-center">
              <div
                className="card"
                style={{
                  width: "80%", // Adjust width as needed
                  maxWidth: "800px", // Optional: Limit maximum width
                  margin: "0 auto",
                }}
              >
                <img
                  src={movie.image1}
                  className="card-img-top"
                  alt={movie.title}
                  style={{ maxHeight: "400px", objectFit: "cover" }}
                />
                <div className="card-body text-center">
                  <h5 className="card-title">{movie.title}</h5>
                  <p className="card-text">{movie.description}</p>
                  <a href={`/movies/${movie.title}`} className="btn btn-primary">
                    View Details
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#movieSlider"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#movieSlider"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default MovieSlider;
