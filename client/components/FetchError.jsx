import React, { PropTypes } from 'react';
import Button from 'client/components/Button';

const FetchError = ({message, onRetry}) => (
  <div className="fetch-erorr">
    <p>{message}</p>
    <Button 
      classStyle="btn btn-info"
      onButtonClick={onRetry}
      >
        Pokušaj ponovno!
    </Button>
  </div>  
);

FetchError.propTypes = {
  message: PropTypes.string.isRequired,
  onRetry: PropTypes.func.isRequired
}

export default FetchError;