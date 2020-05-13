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
    const {addFish} = this.props;

    return (
      <div>
        <form>
          <input value={fishName} onChange={e => this.fishNameChange(e.target.value)}/>
          <select value={fishSelect} onChange={e => this.fishChange(e.target.value)}>
            {fishTypes.map((fish, i) => <option value={i} key={i}>{fish.type}</option>)}
          </select>

          {/*prop callback for updating parent state*/}
          <button onClick={(e) => {
            e.preventDefault();
            addFish(this.state)
          }}> Add Fish </button>
        </form>
      </div>
    );
  }
}

FishMake.propTypes = {
  addFish: PropTypes.func,
};

export default FishMake;