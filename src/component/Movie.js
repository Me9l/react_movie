// 영화 정보 출력 component
import React from "react";
// css import
import "./Movie.css";

const IMG_BASE_URL = "https://image.tmdb.org/t/p/w1280/";

export default function Movie( {title, poster_path, vote_average, id} ) {
    return (
        <div className="movie-container" key={id}>
            <img src = {IMG_BASE_URL + poster_path} alt="poster"/>
                <div className="movie-info">
                    <h4>{title}</h4>
                    <span>{vote_average}</span>
                </div>
        </div>
    );
}

// export default Movie;