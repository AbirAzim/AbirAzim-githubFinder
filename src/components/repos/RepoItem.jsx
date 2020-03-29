import React from 'react';
import PropTypes from 'prop-types';

const RepoItem = ({ repo }) => {
  return (
    <div>
      <div className='card w-50'>
        <div className='card-body'>
          <a className='text-success' href={repo.html_url}>
            {repo.name}
          </a>
        </div>
      </div>
    </div>
  );
};

RepoItem.prototypes = {
  repo: PropTypes.object.isRequired
};

export default RepoItem;
