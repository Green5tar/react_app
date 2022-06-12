import { Component } from 'react';
import CardList from './components/card-list/card-list-component';
import SearchBox from './components/search-box/search-box-component';
import './App.css';


class App extends Component {
  constructor (){
    super();
    this.state = {
      monsters: [],
      searchField: '',
    }
    console.log('constructor')
  }

  componentDidMount() {
    console.log('didmount')
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json()
      .then((users) => this.setState(() => {
        return {monsters: users}
      }))
        
      )
  }

  onSearchChange = (event) => { 
    const searchField = event.target.value.toLowerCase();
    
    this.setState(()=> { return {searchField}})
  }
  
  render(){
    console.log('render')

    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;
    const filter_monsters = monsters.filter((monster, index) => {
      return monster.name.toLowerCase().includes(searchField)
    });

    return (
      <div className="App">
        <SearchBox className='monsters-search-box' onChangeHandler={onSearchChange} placeHolder='Search Monsters' 
                    />
        <CardList monsters={filter_monsters} />
      </div>
    );
  }
}

export default App;
