import React from 'react';
import UserItem from './UserItem';
import Spinner from '../layout/Spinner';
import PropTypes from 'prop-types';

const Users = ({ users, loading }) => {
  console.log(loading);
  if (loading === true) {
    return <Spinner />;
  } else {
    return (
      <div className='row'>
        {users.map(user => (
          <UserItem col={'col-sm-3'} key={user.id} user={user} />
        ))}
      </div>
    );
  }
};

Users.prototypes = {
  users: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired
};

export default Users;
