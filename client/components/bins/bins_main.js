import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Bins } from '../../../imports/collections/bins';

class BinsMain extends Component {
  render() {
    console.log(this.props.bin);
    return (
      <div>BinsMain</div>
    );
  }
}

export default withTracker((props) => {
  const { binId } = props.params;
  Meteor.subscribe('bins');

  return{ bin: Bins.findOne(binId) };
})(BinsMain);
