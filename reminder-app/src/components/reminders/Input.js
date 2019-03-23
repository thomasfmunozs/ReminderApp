import React, { Component } from 'react';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

class Input extends Component {
  state = {
    inputValue: '',
    dateValue: ''
  };

  formatDate = date => {
    return `${date.getYear()}-${date.getMonth()}-${date.getDate()}`
  }

  handleDateChange = date => {
    this.setState({dateValue: date });
  }

  handleChange = e => {
    this.setState({inputValue: e.target.value});
  };

  handleSubmit = e => {
    e.preventDefault()
    const { inputValue, dateValue } = this.state;
    if (dateValue !== "") {
      this.props.createReminder(inputValue, this.formatDate(dateValue));
    }
    console.log(this.state)
  }

  render() {
    const { inputValue, dateValue } = this.state
    return (
      <form className="inputContainer" onSubmit={this.handleSubmit}>
      <input type="text" className="taskInput"
        placeholder="Add a reminder" maxLength="50"
        value={inputValue} onChange={this.handleChange}
      />
      <DatePicker onChange={this.handleDateChange} value={dateValue.toString()}/>
      <button type="submit">Add</button>
      </form>

    )
  }
}

export default Input
