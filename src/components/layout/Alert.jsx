import React from 'react';

const Alert = ({ alert }) => {
  return (
    alert !== null && (
      <div className={alert.color} style={{ marginBottom: '10px' }}>
        <i className='fa fa-circle mx-3'></i>
        {alert.error}
      </div>
    )
  );
};

export default Alert;
