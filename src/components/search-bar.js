import React, {Component} from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    
    this.state = {term: ''};
  }
  
  render() {
    return (
      <div>
        <input
          type="text"
          onChange={this.onInputChange}
        />
        Va
      </div>
      
    )
  }
  
  onInputChange = (event) => {
    this.setState({term: event.target.value});
    console.log(event.target.value);
    console.log(this.state);
    // 'value of the input:' {this.state.term}
  }
}

export default SearchBar;
