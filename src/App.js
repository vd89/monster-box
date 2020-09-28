import React, { Component } from 'react';
import './App.css';
import { CardList } from './component/card-list/CardList.component';
import { SearchBox } from './component/search-box/SearchBox.components';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: '',
      placeholder: 'Search Monsters',
    };
  }
  async componentDidMount() {
    try {
      const users = await (await fetch('https://jsonplaceholder.typicode.com/users')).json();
      this.setState({ monsters: users });
    } catch (err) {
      console.log(err);
    }
  }
  async onChangeHandler(e) {
    await this.setState({ searchField: e.target.value });
  }
  render() {
    const { monsters, searchField, placeholder } = this.state;
    const filterMonsters = monsters.filter((monster) => monster.name.toLowerCase().includes(searchField.toLowerCase()));

    return (
      <div className='App'>
        <SearchBox placeholder={placeholder} onChangeHandler={(e) => this.onChangeHandler(e)} />
        <CardList monsters={filterMonsters} />
      </div>
    );
  }
}

export default App;
