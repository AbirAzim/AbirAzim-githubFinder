import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const UserItem = ({ user: { id, login, avatar_url, html_url }, col }) => {
  return (
    <div key={id} className={col}>
      <div className='card' style={{ width: '22rem' }}>
        <img
          className='card-img-top round-img'
          style={{ width: 100, height: 100 }}
          src={avatar_url}
          alt='sorry'
        />
        <div className='card-body'>
          <h5 className='card-title'>{login}</h5>
          <p className='card-text'>{id}</p>
        </div>
        <div className='card-body'>
          <Link to={`/user/${login}`} className='card-link'>
            Github-link
          </Link>
        </div>
      </div>
    </div>
  );
};

UserItem.prototype = {
  col: PropTypes.string.isRequired,
  user: PropTypes.object.isRequired
};

export default UserItem;
