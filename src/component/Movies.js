import React from 'react'
import Movie from './Movie'
import '../index.css'

export default function Movies(props) {
    const {movies} =props
    return (
<div className='moviesN'>
{
 movies.map(movie=>(
    <Movie key={movie.imdbID} {...movie}/>
 ))}
    </div>
  )
}
