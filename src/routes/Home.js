import React, { useState, useEffect } from "react";
import Movie from "../components/Movie";

function Home(){
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const getMovies = async() => {
        const json= await 
        (await fetch(
            'https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year'
            )
        ).json();

        setMovies(json.data.movies);
        setLoading(false);
    };
    useEffect(() => {
            getMovies();
        }, []);
        console.log(movies);
    return (
    <div>
        {loading ? (
            <h1> Loading... </h1> 
            ) : (
                <div>
                    {movies.map((movie) => (
                        <Movie
                            key={movie.id} 
                            medium_cover_image={movie.medium_cover_image} alt="{title}"
                            title={movie.title} 
                            summary={movie.summary} 
                            genres={movie.genres}
                            id={movie.id}
                        />
                    ))}
                </div>
            )}
        </div>
    );

}

export default Home;