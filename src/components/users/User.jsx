import React, { Fragment, Component } from 'react';
import Spinner from '../layout/Spinner';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Repos from '../repos/Repos';

export class User extends Component {
  componentDidMount() {
    this.props.getUser(this.props.match.params.login);
    this.props.getUserRepos(this.props.match.params.login);
  }

  static propTypes = {
    loading: PropTypes.bool,
    user: PropTypes.object.isRequired,
    getUser: PropTypes.func.isRequired,
    repos: PropTypes.array.isRequired,
    getUserRepos: PropTypes.func.isRequired
  };

  render() {
    const {
      name,
      avatar_url,
      location,
      bio,
      blog,
      login,
      html_url,
      followers,
      following,
      public_repos,
      public_gists,
      hireable
    } = this.props.user;

    const { loading } = this.props;

    if (loading) return <Spinner />;

    return (
      <Fragment>
        <Link to='/' className='btn btn-dark'>
          Back To Home
        </Link>
        Hireable :{' '}
        {hireable ? (
          <i className='fa fa-check text-success' />
        ) : (
          <i className='fa fa-times-circle text-danger' />
        )}
        <div className='card text-center' style={{ width: '80rem' }}>
          <img
            className='card-img-top round-img ml-5 pl-5'
            style={{ width: 400, height: 400, float: 'center' }}
            src={avatar_url}
            alt='sorry'
          />
          <div className='card-body'>
            <h2 className='card-title'>{name}</h2>
            <h5 className='card-title'>{login}</h5>
            <p className='card-text'>{bio}</p>
            <p className='card-text'>
              Followers : <span className='text-success'>{followers}</span>
            </p>
            <p className='card-text'>
              Following : <span className='text-primary'>{following}</span>
            </p>
            <p className='card-text'>
              Location : <span className='text-warning'>{location}</span>
            </p>
          </div>
          <div className='card-body'>
            <Link to={html_url} className='card-link'>
              Github-link
            </Link>
            <br />
            <Link to={blog} className='card-link'>
              Blog
            </Link>

            <p className='card-text'>
              Public Repos :{' '}
              <span className='text-secondary'>{public_repos}</span>
            </p>
            <p className='card-text'>
              Public Gists :{' '}
              <span className='text-secondary'>{public_gists}</span>
            </p>
          </div>
        </div>
        <Repos repos={this.props.repos} />
      </Fragment>
    );
  }
}

export default User;
