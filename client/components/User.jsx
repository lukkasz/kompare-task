import React, { PropTypes } from 'react';

function User ({firstname, lastname, email, children}) {
  return (
    <li className="user"> 
      {firstname} {lastname} - {email}
      {children}
    </li>
  );
}

User.propTypes = {
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired
};


export default User;