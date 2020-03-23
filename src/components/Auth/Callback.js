import React, {Component} from 'react';
import { compose } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';
import { handleLogin } from './../../store/Auth/actions'
import { getUser } from './../../store/User/actions'

class Callback extends Component {
  async componentDidMount() {
    await this.props.handleLogin();
    await this.props.getUser();

    this.props.history.replace('/');
  }

  render() {
    return (
      <p>Loading profile...</p>
    );
  }
}

const mapDispatchToProps = {
  handleLogin: handleLogin,
  getUser: getUser
}

export default compose (
  withRouter,
  connect(null, mapDispatchToProps)
)(Callback);