import React from 'react'
import Movies from '../component/Movies'
import Search from '../component/Search';
import '../index.css'
import Loader from './../component/Loader';

export default class Main extends React.Component{
state={
    movies: []
}
componentDidMount(){
    fetch(`http://www.omdbapi.com/?apikey=329ffa13&s=panda`)
    .then(response=>response.json())
    .then(data => this.setState({movies:data.Search}))
}

searchMovies=(txt, type='all')=>{
    fetch(`http://www.omdbapi.com/?apikey=329ffa13&s=${txt}${type!=='all' ? `&type=${type}` : ''}`)
    .then(response=>response.json())
    .then(data => this.setState({movies:data.Search}))
}
render(){
  return (
    <div className='container content'>
        <Search searchMovies={this.searchMovies}/>
        {
            this.state.movies.length ?(<Movies movies={this.state.movies}/>) : <Loader className="loader"/>
        } 
    </div>
  )
}
}
