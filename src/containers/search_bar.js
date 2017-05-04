import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchFood } from '../actions/index';

class SearchBar extends Component {

  //pass in the properties into the constructor
  constructor(props) {
    super(props);

    //sets initial state of blank
    this.state = { term: '' };

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState({ term: event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault();

    //fetching data from API, call data, search and then set term back to empty term once event is handled
    this.props.fetchFood(this.state.term);
    this.setState({ term: '' });
  }

  render () {
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
          placeholder="Search for a recipe"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange} />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    );
  }
}

//function that will add food data to the searchbar container
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchFood }, dispatch); //action will flow into the middleware and then the reducer of this application
}

//connecting the SearchBar property to Redux
export default connect(null, mapDispatchToProps)(SearchBar);
