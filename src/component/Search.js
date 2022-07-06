import React, { PureComponent } from "react";
import "../index.css";
export default class Search extends PureComponent {
  state = {
    searchValue: "panda",
    type: 'all'
  };

  handleKey = (e) => {
    if (e.key === "Enter") {
      this.props.searchMovies(this.state.searchValue);
    }
  };

  handleFilter=(e)=>{
  this.setState(()=>({type:e.target.dataset.type}), ()=>{
    this.props.searchMovies(this.state.searchValue, this.state.type)
  })
  }

  render() {
    return (
      <div className="row">
        <div className="col s12">
          <div className="input-field">
            <input
              type="search"
              placeholder="Search"
              className="search"
              value={this.state.searchValue}
              onChange={(e) => this.setState({ searchValue: e.target.value })}
              onKeyDown={this.handleKey}
            />
            <button
              className="waves-effect waves-teal btn-flat btn-button #26a69a teal lighten-1"
              onClick={() => this.props.searchMovies(this.state.searchValue, this.state.type)}
            >Search
            </button>
          </div>
        </div>
        <div>
          <label>
            <input className="with-gap" name="type" type="radio" 
            data-type="all" onChange={this.handleFilter} 
            checked={this.state.type ==='all'}/>
            <span>All</span>
          </label>
          <label>
            <input className="with-gap" name="type" type="radio" 
            data-type="movie" onChange={this.handleFilter}
            checked={this.state.type ==='movie'}/>
            <span>Movies only</span>
          </label>
          <label>
            <input className="with-gap" name="type" type="radio" 
            data-type="series" onChange={this.handleFilter}
            checked={this.state.type ==='series'}/>
            <span>Series</span>
          </label>
        </div>
      </div>
    );
  }
}
