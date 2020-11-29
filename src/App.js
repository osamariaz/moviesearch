import React, { Component } from "react";
import './App.css';
import Button from 'react-bootstrap/Button';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import {moviesList} from "./components/movies/movies";
import Movielist from "./components/movies/movielist";
import {genres} from "./movies";
import movielist from "./components/movies/movielist";


class App extends Component {
  state={
    movies:moviesList,
    moviecopy:[]
  }

  //filtering using buttons

fileterbtn=value=>()=>{

console.log(value);
let moviecopy;
if(value==='All'){
  moviecopy=this.state.movies;
}
else{
  moviecopy=this.state.movies.filter(item=>item.genre===value)
}
this.setState({
  moviecopy:moviecopy
})
}


render(){
  return (
    <React.Fragment>
    <div className="App">
      
      <h1 >Search For the Movies</h1>
      
      <div className="btns">
      <Button variant="primary"  onClick={this.fileterbtn('All')}>All</Button>
      {  
      genres.map((value,index)=>(<Button variant="primary" key={index} onClick={this.fileterbtn(value)}>{value}</Button>))
      }
        </div>
        <Movielist movie={this.state.moviecopy} />
{<br></br>}

    </div>
    </React.Fragment>
  );
}}

export default App;
