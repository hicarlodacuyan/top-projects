/* eslint-disable no-useless-constructor */
import React, { Component } from "react";

class Overview extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul className="tasks">
        {this.props.tasks.map((task, index) => {
          return <li key={task} className='task'>
                    {task}
                    <button onClick={() => {
                      this.props.onButtonClicked(index);
                    }}>x</button>
                  </li>;
        })}
      </ul>
    );
  }
}

export default Overview;