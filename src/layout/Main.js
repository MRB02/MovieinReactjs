import React from 'react'
import Movies from '../component/Movies'
import Search from '../component/Search';
import '../index.css'
import Loader from './../component/Loader';

export default class Main extends React.Component{
state={
    movies: [],
    loading: true
}
componentDidMount(){
    fetch(`http://www.omdbapi.com/?apikey=329ffa13&s=panda`)
    .then(response=>response.json())
    .then(data => this.setState({movies:data.Search, loading:false }))
}

searchMovies=(txt, type='all')=>{
    this.setState({loading:true})
    fetch(`http://www.omdbapi.com/?apikey=329ffa13&s=${txt}${type!=='all' ? `&type=${type}` : ''}`)
    .then(response=>response.json())
    .then(data => this.setState({movies:data.Search, loading:false}))
}
render(){
  return (
    <div className='container content'>
        <Search searchMovies={this.searchMovies}/>
        {
            this.state.loading ? <Loader className="loader"/> : (<Movies movies={this.state.movies}/>)
        } 
    </div>
  )
}
}
