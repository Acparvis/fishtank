import React, {Component} from 'react';
import PropTypes from 'prop-types';
import fishTypes from "../../constants/fishTypes";
import tankPost from "../../utils/api/tankPost";

class Tank extends Component {

  feed = () => {
    const {fish} = this.props;
    let feedTotal = 0;

    fish.forEach((item) => {
      // checks the fishType definition contains a feed value, and adds it to the current feedTotal
      const feedValue = fishTypes[item.fishSelect]?.feedValue;
      if (!!feedValue) feedTotal += feedValue;
    });

    return feedTotal;
  }

  render() {
    const {fish} = this.props;

    return (
      <div>
        <h3>Tank</h3>
        <div>
        {JSON.stringify(this.props.fish)}
        </div>
        <button onClick={this.feed}>Feed</button>
        <p>Feed: {this.feed()}g</p>

        <button onClick={() => tankPost(fish)}>API</button>
      </div>
    );
  }
}

Tank.propTypes = {
  fish: PropTypes.array,
};

export default Tank;