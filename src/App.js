import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Tank from "./components/tank/Tank";
import FishMake from "./components/fishSubmit/fishMake";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fish: [],
    }
  }

  addFish = (newFish) => this.setState({fish: [...this.state.fish, newFish]})

  render () {
    const {fish} = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <FishMake addFish={this.addFish}/>
          <Tank fish={fish}/>
          {/*<a*/}
          {/*  className="App-link"*/}
          {/*  href="https://reactjs.org"*/}
          {/*  target="_blank"*/}
          {/*  rel="noopener noreferrer"*/}
          {/*>*/}
          {/*  Learn React*/}
          {/*</a>*/}
        </header>
      </div>
    );
  }
}

export default App;
