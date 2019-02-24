import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchInput: ''
    };

    this.changeHandler = this.changeHandler.bind(this);
  }

  changeHandler = (event) => {
    this.setState({
      searchInput: event.target.value
    });
  }

  render() {
    const { searchInput } = this.state;
    const { placeholder, getVenues } = this.props;
    return (
      <div className="input-container">
        <input onChange={this.changeHandler} placeholder={placeholder} type="text" name="searchInput" id="searchInput" />
        <button type="button" onClick={getVenues.bind(null, searchInput)}>Search</button>
      </div>
    );
  }
}

Input.propTypes = {
  placeholder: PropTypes.string,
  getVenues: PropTypes.func
};

Input.defaultProps = {
  placeholder: null,
  getVenues: null
};

export default Input;
