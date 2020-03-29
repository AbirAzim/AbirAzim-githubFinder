import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Search extends Component {
  state = {
    text: ''
  };

  static propTypes = {
    searchUsers: PropTypes.func,
    clearUsers: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired,
    setAlert: PropTypes.func
  };

  onChange = e => this.setState({ text: e.target.value });

  onSubmit = e => {
    e.preventDefault();
    if (this.state.text === '') {
      this.props.setAlert('Please Enter Some Text', 'bg-danger');
    } else {
      this.props.searchUsers(this.state.text);
      this.setState({ text: '' });
    }
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
          className='form-control mb-4'
          type='text'
          name='text'
          value={this.state.text}
          placeholder='Search Users...'
          onChange={this.onChange}
        />
        <button type='submit' className='btn btn-dark btn-block mb-4'>
          Search
        </button>
        {this.props.showClear && (
          <button
            className='btn btn-primary btn-block mb-4'
            onClick={this.props.clearUsers}
          >
            Clear
          </button>
        )}
      </form>
    );
  }
}

export default Search;
