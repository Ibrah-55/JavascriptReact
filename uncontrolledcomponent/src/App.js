import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';

class App extends React.Component{
  constructor(props){
    super(props);
    this.updateSubmit= this.updateSubmit.bind(this);
    this.input= React.createRef();

  }
  updateSubmit(event){
    alert("Details Entered Successfully");
    event.preventDefault();
   // console.log(event.target.value)
  }
  render(){
    return (
      <form onSubmit= {this.updateSubmit}>
         <h1>Uncontrolled Form Example</h1>  
        <label>Name:  
            <input type="text" ref={this.input} />  
        </label>  
        <h1>{this.state.input}</h1> 

        <label>  
            CompanyName:  
            <input type="text" ref={this.input} />  
        </label>  
        <input type="submit" value="Submit" />  
      </form> 
    );
  }
}

export default App;
