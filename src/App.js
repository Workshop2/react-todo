import React, { Component } from 'react'
import List from './List'
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
      items: []
    };
  }
  
  onChange = (event) => {
    this.setState({term: event.target.value});
  }

  onSubmit = (event) => {
    event.preventDefault()
    this.setState({
      term: '',
      items: [...this.state.items, this.state.term]
    });
  }

  removeItem = (itemIndex) => {
    var array = [...this.state.items];

    if (itemIndex !== -1) {
      array.splice(itemIndex, 1);
      this.setState({items: array});
    }
  }

  render() {
    return (
      <div>
        <form className="App" onSubmit={this.onSubmit}>
          <input value={this.state.term} onChange={this.onChange} />
          <button>Submit</button>
        </form>

        <List
          items={this.state.items}
          removeItem={this.removeItem}
          />
      </div>
    );
  }
}
