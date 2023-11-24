/* eslint-disable no-useless-constructor */
import './App.css';
import React, { Component } from 'react';
import Overview from './components/Overview';

class App extends Component {
  constructor() {
    super();

    this.state = {
      value: '',
      tasks: []
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();

    let todo = this.state.value;

    this.setState({
      value: '',
      tasks: this.state.tasks.concat(todo)
    });
  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    });
  }

  handleDelete(index) {
    const newTasks = [...this.state.tasks];
    newTasks.splice(index, 1);

    this.setState({
      tasks: newTasks
    })
  }

  render() {
    const {value, tasks} = this.state;

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" value={value} onChange={this.handleChange} />
            <input type="submit" value="submit" />
          </label>
        </form>
        <Overview tasks={tasks} onButtonClicked={this.handleDelete} />
      </div>
    );
  }
}

export default App;
