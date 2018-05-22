import React, { Component } from 'react';
import './App.css';
import Form from './Form/Form';
import Output from './Output/Output';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      firstname: '',
      lastname: '',
      showOutput: false
    };

  }


  handleChange = (e) => {
    console.log(e.target.id);
    if(e.target.id === "firstname"){
      this.setState({
        firstname:  e.target.value
      })
    }
    if(e.target.id === "lastname"){
      this.setState({
        lastname:  e.target.value
      })
    }
    
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const doesShow = this.state.showOutput;
    this.setState({showOutput: !doesShow});
  }

  render() {
    let output = null;
    if(this.state.showOutput){
      output = (
        <Output
        firstname={this.state.firstname}
        lastname={this.state.lastname}
      />
      )
      
    }

    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <Form
            firstname={this.state.firstname}
            lastname={this.state.lastname}
            changed={this.handleChange}
          />
          
        </form>
        {output}
      </div>
    );
  }
}

export default App;
