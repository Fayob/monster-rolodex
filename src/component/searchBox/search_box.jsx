import React, { Component } from 'react';
import './search_box.css'

class SearchBox extends Component {
  render() {
    console.log('searchbox component');
    const {onChangeHandler, className, placeholder} = this.props
    return (
      <div>
        <input
          className={`search-box ${className}`}
          type="search"
          placeholder={placeholder}
          onChange={onChangeHandler} />
      </div>
    );
  }
}

export default SearchBox;