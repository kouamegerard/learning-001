import Poster from "./images/Poster.png"

const MovieCards = ({movie}) => {

    return (
        <div className="movie">
            <div>
                <p>{movie.Year}</p>
            </div>
            
            <div>
                <img src={movie.Poster === "N/A" ? Poster : movie.Poster} alt={movie.Title}/>
            </div>
            
            <div>
                <span>{movie.Type}</span>
                <h3>{movie.Title}</h3>
            </div>

        </div>
    )

}

export default MovieCards;