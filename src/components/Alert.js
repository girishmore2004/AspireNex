import React from 'react';
import { Alert as BootstrapAlert } from 'react-bootstrap';

const Alert = ({ alert }) => {
  return (
    alert && (
      <BootstrapAlert variant={alert.type} className="mt-3">
        {alert.message}
      </BootstrapAlert>
    )
  );
};

export default Alert;
