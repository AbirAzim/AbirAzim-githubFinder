import React, { Fragment } from 'react';
import spinner from './1.gif';

const Spinner = () => (
  <Fragment>
    <img
      src={spinner}
      alt='loading...'
      style={{ width: '200px', margin: 'auto', display: 'block' }}
    />
  </Fragment>
);

export default Spinner;
