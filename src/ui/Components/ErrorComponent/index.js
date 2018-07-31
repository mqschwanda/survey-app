import React from 'react';
import { Alert } from 'reactstrap';

export const ErrorComponent = ({ code, header, reason, ...props }) => (
  <Alert color='danger' {...props}>
    {code && <h2>{code}</h2>}
    {header && <h4>{header}</h4>}
    {reason && <p>{reason}</p>}
  </Alert>
);

export default ErrorComponent;
