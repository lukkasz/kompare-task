import React, { PropTypes } from 'react';

function Button({id, onButtonClick, type, classStyle, children}) {

  return(
    <button 
      type={type} 
      className={classStyle} 
      onClick={ () => onButtonClick(id) }
      >
        {children}
    </button> 
  );
}

Button.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  classStyle: PropTypes.string,
  onButtonClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired
};

Button.defaultProps = {
  type: "button",
  classStyle:"btn",
  children: 'X'
};

export default Button;