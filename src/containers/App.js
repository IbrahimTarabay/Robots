import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      robots: [],
      searchfield: ''
    }
  }

//fetch users or robots from this website that give us json file
//then update state (robots) from empty array to filled with users 
componentDidMount(){
 fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(users => {this.setState({robots: users})});
}

//update state (searchfield) when we type in searchBox
onSearchChange = (event) => {
  this.setState({searchfield: event.target.value});
}

render(){
 //destructing to use robots and searchfield only without this.state.robots
 const {robots, searchfield} = this.state;
 const filteredRobots = robots.filter(robot =>{
   return robot.name.toLowerCase().includes(searchfield.toLowerCase());
 })
 return !robots.length ?
  <h1>Loading!!!</h1> :
   ( 
    <div className='tc'>
      <h1 className='f1'>RoboFriends</h1>
      <SearchBox searchChange={this.onSearchChange}/>
      <Scroll>
       <CardList robots={filteredRobots}/>
      </Scroll>
    </div>
    );
  }
}

export default App;