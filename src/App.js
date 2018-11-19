import React, { Component } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import Events from './components/Events';

class App extends Component {
  
  token = 'ACEHVBPMHBQQG5V76YMW'

  state = {
    categories: [],
    events: []
  }

  componentDidMount(){
    this.getAllCategories();
  }

  getAllEvents = async(data) =>{
    
      const URL = `https://www.eventbriteapi.com/v3/events/search/?q=${data.name}&sort_by=date&categories=${data.category}&token=${this.token}`;

      await fetch(URL)
            .then(response => {
              return response.json();
            })
            .then(event =>{
              this.setState({
                events : event.events
              })
            })

  }

  getAllCategories = async() => {

      const URL = `https://www.eventbriteapi.com/v3/categories/?token=${this.token}`;

      await fetch(URL)
              .then(response => {
                return response.json();
              })
              .then(cat => {
                 this.setState({
                   categories : cat.categories
                 })
              })
  }
  
  render() {
    return (
      <div className="App">
          <Header />
          <div className="uk-container">
            <Form getAllEvents={this.getAllEvents} categories={this.state.categories}/>
            <Events events={this.state.events}/>
          </div>
      </div>
    );
  }
}

export default App;
