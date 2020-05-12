import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Tank extends Component {
  render() {
    return (
      <div>
        <h3>Tank</h3>
        {JSON.stringify(this.props.fish)}
      </div>
    );
  }
}

Tank.propTypes = {
  fish: PropTypes.array,
};

Tank.defaultProps = {
  fish: [],
}

export default Tank;