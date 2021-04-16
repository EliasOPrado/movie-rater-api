import React, {useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function MovieDetail(props) {
  const movie = props.movie;
  const [hightlighted, setHighlighted] = useState(-1)

const highlighRate = high => evt => {
  setHighlighted(high)
}

const rateClicked = rate => evt => {
  fetch(`http://127.0.0.1:8000/api/movie/${movie.id}/rating/`, {
      method: 'POST',
      headers: {
        'Content-type':'application/json',
        'Authorization': 'Token da8cf0de17fd702713e195636fff6e55f2687ab9'
      },
      body: JSON.stringify({stars:rate + 1}) 
    })
    .then(response => response.json())
    .then( response => console.log(response))
    .catch(error => console.log(error))
}

  return (
    <div>
      {movie ? (
        <div>
          <h1>{movie.title}</h1>
          <p>{movie.description}</p>
          <FontAwesomeIcon
            icon={faStar}
            className={movie.avg_rating > 0 ? "orange" : ""}
          />
          <FontAwesomeIcon
            icon={faStar}
            className={movie.avg_rating > 1 ? "orange" : ""}
          />
          <FontAwesomeIcon
            icon={faStar}
            className={movie.avg_rating > 2 ? "orange" : ""}
          />
          <FontAwesomeIcon
            icon={faStar}
            className={movie.avg_rating > 3 ? "orange" : ""}
          />
          <FontAwesomeIcon
            icon={faStar}
            className={movie.avg_rating > 4 ? "orange" : ""}
          />
          ({movie.no_of_ratings})
        </div>
      ) : null}
      <div className="rate-container">
        <h2>Rate it</h2>
        {[...Array(5)].map((e, i) => {
          return (
            <FontAwesomeIcon
              key={i}
              icon={faStar}
              className={hightlighted > i - 1 ? "orange" : ""}
              onMouseEnter={highlighRate(i)}
              onMouseLeave={highlighRate(-1)}
              onClick={rateClicked(i)}
            />)
        })}
      </div>
    </div>
  );
}

export default MovieDetail;
