import React from 'react';


export const Movies = ({ movies }) => {
    return (
        <ul>
            {movies.map(movie => {
                return (
                    <li key={movie.title}>
                        <h1>{movie.title}</h1>
                        <h2>{movie.rating}</h2>
                    </li>
                )
            })}
        </ul>
    )
}