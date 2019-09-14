import React, { Component } from 'react'
import List from './List'
import './App.scss';

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
    event.preventDefault();
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

  clearInput = () => {
    this.setState({
      term: ''
    });
  }

  render() {
    return (
      <div>
        <header>
          <h1>TODO List</h1>

          <form className="App" onSubmit={this.onSubmit}>
            <fieldset class="field-container">
              <input 
                type="text" 
                placeholder="Add something here..."
                class="field"
                value={this.state.term}
                onChange={this.onChange} />

              <div class="icons-container">
                <div class="icon-close" onClick={this.clearInput}>
                  <div class="x-up"></div>
                  <div class="x-down"></div>
                </div>
              </div>
            </fieldset>
          </form>
        </header>

        <List
          items={this.state.items}
          removeItem={this.removeItem}
          />
      </div>
    );
  }
}
