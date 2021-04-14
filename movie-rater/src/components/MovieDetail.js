import React, {useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function MovieDetail(props) {
  const movie = props.movie;
  const [hightlighted, setHighlighted] = useState(3)

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
              onMouseEnter={setHighlighted(i)}
              onMouseLeave={setHighlighted(-1)}
            />)
        })}
      </div>
    </div>
  );
}

export default MovieDetail;
