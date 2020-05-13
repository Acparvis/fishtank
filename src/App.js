import React, {Component} from 'react';
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
        </header>
      </div>
    );
  }
}

export default App;
