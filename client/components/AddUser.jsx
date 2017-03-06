import React, { Component, PropTypes} from 'react';
import { connect } from 'react-redux';
import * as actions from 'client/actions';

import Button from 'client/components/Button';

class AddUser extends Component {

  handleFormSubmit = (e) => {
    e.preventDefault();

    const firstname = this.refs.firstname.value;
    const lastname = this.refs.lastname.value;
    const email = this.refs.email.value;
    
    if(firstname.length && lastname.length && email.length) {
      this.refs.firstname.value = '';
      this.refs.lastname.value = '';
      this.refs.email.value = '';
      this.props.addUser({firstname, lastname, email});
    }
  }
  
  render() {
    return (
      <div className="add-user-container">
        <form className="form-inline add-user-form" onSubmit={this.handleFormSubmit.bind(this)}>
          <div className="form-group">
            <input type="text" className="form-control" placeholder="Ime" ref='firstname' />
          </div>
          <div className="form-group">
            <input type="text" className="form-control" placeholder="Prezime" ref='lastname'/>
          </div>
          <div className="form-group">
            <input type="email" className="form-control" placeholder="email" ref='email' />
          </div>
          <button type="submit" className="btn btn-add">Dodaj</button>
        </form>  
      </div>
    );  
  }
  
}

AddUser.propTypes = {
  addUser: PropTypes.func.isRequired
};

export default connect(
null, 
actions)(AddUser);