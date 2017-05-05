import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchBeer } from '../actions/beer_action';

class SearchBarBeer extends Component {
  constructor(props) {
  super(props);

  this.state = { term: ''};

  this.onInputChange = this.onInputChange.bind(this);
  this.onFormSubmit = this.onFormSubmit.bind(this);
}

onInputChange(event) {
  this.setState({ term: event.target.value });
}

onFormSubmit(event) {
  event.preventDefault();
  //fetching data from API, call data, search and then set term back to empty term once event is handled
  this.props.fetchBeer(this.state.term);
  this.setState({ term: '' });
}

render () {
  return (
    <form onSubmit={this.onFormSubmit} id="input-section" className="input-group">
      <input
        type="text"
        id="input-field"
        placeholder="Search for a Drink"
        className="form-control"
        value={this.state.term}
        onChange={this.onInputChange} />
      <span className="input-group-btn">
        <button type="submit" id="submit-button" className="btn btn-secondary">Submit</button>
      </span>
    </form>
  );
}
}

//function that will add food data to the searchbar container
function mapDispatchToProps(dispatch) {
return bindActionCreators({ fetchBeer }, dispatch); //action will flow into the middleware and then the reducer of this application
}

//connecting the SearchBar property to Redux
export default connect(null, mapDispatchToProps)(SearchBarBeer);
