import React, { Component, PropTypes }  from 'react';
import { connect } from 'react-redux';
import * as actions from 'client/actions';

import User from 'client/components/User';
import Button from 'client/components/Button';
import FetchError from 'client/components/FetchError';

class UserList extends Component {
  
  componentDidMount() {
    this.props.fetchUsers();
  }
  
  buttonClickHandler(id) {
    this.props.removeUser(id);
  }
  
  render() {
    const {users, isFetching, fetchUsers, errorMessage} = this.props;
    
    if (isFetching) {
      return <div className="loader"></div>;
    }
    
    if(errorMessage) {
      return <FetchError onRetry={fetchUsers} message={errorMessage}/>;
    }
    
    return (
      <ul className="users-list">
        {users.map((user) => (
          <User {...user} key={user._id}>
            <Button   
              id={user._id} 
              type="button" 
              classStyle="close btn--close" 
              onButtonClick={this.buttonClickHandler.bind(this)}
              >
                <span>&times;</span>
            </Button>
          </User>
        ))}
      </ul>  
    );
  }
}

UserList.proptypes = {
  users: PropTypes.array.isRequired,
  fetchUsers: PropTypes.func.isRequired,
  removeUser: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  users: state.users,
  isFetching: state.fetching.isFetching,
  errorMessage: state.fetching.errorMessage
});

export default connect(
mapStateToProps,
actions
)(UserList);