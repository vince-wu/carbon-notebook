import React, { useState, useEffect } from 'react';

export const MovieForm = ({onNewMovie}) => {
    const [title, setTitle] = useState('');
    const [rating, setRating] = useState('');
    return (
        <form>
            <input 
                type='text'
                placeholder='movie title' 
                value={title} 
                onChange={e => setTitle(e.target.value)}
            />
            <input 
                type='number'
                placeholder='1'
                value={rating} 
                onChange={e => setRating(e.target.value)}
            />
            <input 
                type='submit'
                value='Submit'
                onClick={async () => {
                    const movie = {title, rating};
                    const res = await fetch('/api/add_movie', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(movie)
                });

                if (res.ok) {
                    console.log('response worked!');
                    onNewMovie(movie);
                    setTitle('');
                    setRating('1');
                }
            }}
            />
        </form>
    )
}