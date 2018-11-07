import React, { Component } from 'react';
import './App.css';
import './Person/Person.css';


import Person from './Person/Person';
import { green, white, black } from 'ansi-colors';



class App extends Component {
  state = {
    persons : [
      { id: 'asdasd', name: "bela", age: 11},
      { id: 'fsdsdf', name: 'steph', age: 22},
      { id: 'asfgda', name: 'valami', age: 2}
    ],
    showPersons: false,
  }

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons.slice();
    // do not change the ARRAY directly, but crete a reference by using spred operator and change that [...]
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  tooglePersonsHandler = () =>{
    const doesShow = this.state.showPersons;
    this.setState({showPersons : !doesShow});
  }

  nameChangeHandler=(event, id)=>{
    // find the index of the clicked person
    const personIndex = this.state.persons.findIndex(p => { return p.id == id});

    // do not change the OBJECT directly, but crete a reference by using spred operator {...} and change that 
    const person = {...this.state.persons[personIndex]};
    // alternative
    //const person = Object.assign({}. this.state.persons[personIndex]);
    person.name = event.target.value;
    const persons = [...this.state.persons];

    persons[personIndex] = person;

    this.setState({persons : persons});
  }

  render() {
    const style = {
      backgroundColor : 'green',
      color : 'white',
      fontSize : '18px',
      font : 'Verdana',
      border : '1px solid blue',
      padding : '8px',
      cursor : 'pointer'
    }
    
    let persons = null;

    if(this.state.showPersons){
      persons = (   
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
                    click={() => this.deletePersonHandler(index)}        
                    name={person.name} 
                    age={person.age}
                    key={person.id}
                    changed={(event) => this.nameChangeHandler(event, person.id)}/>;
            })}
          </div> 
      );
      style.backgroundColor = 'red';
    };

    const classes = [];
    if(this.state.persons.length <= 2){
      classes.push('red');
    }
    if(this.state.persons.length <= 1){
      classes.push('bold');
    }

    return (
      
      <div className="App">
        <h1>I am a React App</h1>
        <p
          className = {classes.join(' ')}>
          This is really working 
          </p>
        <button 
          style = {style}
          onClick={this.tooglePersonsHandler}>
          Toggle Persons
        </button>

        {persons}  
      </div>
    
    );
  }
}

export default App;
