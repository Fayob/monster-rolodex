import React, { Component } from "react";
import CardList from "./component/cardList/card_list.component";
import SearchBox from "./component/searchBox/search_box";
import "./App.css"

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users').then((response) => response.json()).then((users) => this.setState(() => {
      return { monsters: users }
    }))
  }

  onSearchChange = (e) => {
    const searchField = e.target.value.toLowerCase()
    this.setState(() => {
      return { searchField }
    })
  }

  render() {

    const { monsters, searchField } = this.state
    const { onSearchChange } = this

    const filterMonsters = monsters.filter((monster) => monster.name.toLowerCase().includes(searchField)
    )

    return (
      <div className="App">
        <h1 className="app-title">Monster Rolodex</h1>
        <SearchBox
          className='monster-search-box'
          onChangeHandler={onSearchChange}
          placeholder='Search Monsters' />
        <CardList filterMonsters={filterMonsters} />
      </div>
    );
  }
}

export default App;
