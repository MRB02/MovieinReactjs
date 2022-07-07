import React from 'react'
import Movie from './Movie'
import '../index.css'

export default function Movies(props) {
    const {movies=[]} =props
    return (
<div className='moviesN'>
{movies.length ? movies.map(movie=>(
   <Movie key={movie.imdbID} {...movie}/>
)): <h4>Nothing Found</h4>}
    </div>
  )
}
