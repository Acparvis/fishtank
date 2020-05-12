import React, {Component} from 'react';
import PropTypes from 'prop-types';
import fishTypes from "../../constants/fishTypes";

class FishMake extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fishSelect: 0,
      fishName: ""
    }
  }

  fishChange = (value) => this.setState({ fishSelect: value});


  fishNameChange = (value) => this.setState({ fishName: value});


  render() {
    const {fishName, fishSelect} = this.state;

    return (
      <div>
        <form>
          <input value={fishName} onChange={e => this.fishNameChange(e.target.value)}/>
          <select value={fishSelect} onChange={e => this.fishChange(e.target.value)}>
            {fishTypes.map((fish, i) => <option value={i}>{fish.type}</option>)}
          </select>

          {/*prop callback for updating parent state triggered on press*/}
          <button onClick={() => alert(JSON.stringify(this.state))}> Add Fish </button>
        </form>
      </div>
    );
  }
}

FishMake.propTypes = {};

export default FishMake;