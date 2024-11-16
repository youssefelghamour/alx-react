import React, { Component } from 'react';
import logo from '../assets/holberton-logo.jpg';
import { StyleSheet, css } from 'aphrodite';
import AppContext from '../App/AppContext';
import { connect } from 'react-redux';
import { logout } from '../actions/uiActionCreators';


export class Header extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    const { user, logout } = this.props;

    return (
      <div className={css(user && user.email ? styles.AppHeaderLoggedIn : styles.AppHeader)}>
          <img className={css(styles.img)} src={logo} alt="Holberton logo" />
          <h1 className={css(styles.h1)} >SCHOOL DASHBOARD</h1>
          
          <div style={{display: 'flex', alignItems: 'center', margin: '18px 0 0 0', position: 'absolute', top: '50px', left: '50%', transform: 'translateX(-50%)',}}>
              <a href="#" className={css(styles.nav)}>
                  Home
              </a>

              <a href="#body" className={css(styles.nav)} style={{margin: '0 10px',}}>
                  Courses
              </a>

              <a href="#news" className={css(styles.nav)}>
                  News
              </a>

              
          </div>
          
          {/* user.email to confirm the user is logged in and has an email

              The whole user object is {} when the user isn't logged in,
              or set to null when the user logs out. In both case the check will be false
          */}
          { user && user.email ? (
              <p id="logoutSection" className={css(styles.logOut)}>
                Welcome {user.email}
                <span onClick={logout} className={css(styles.logOutButton)}> logout</span>
                </p>
            ) : (null)
          }
      </div>
    );
  }
}

const styles = StyleSheet.create({
  AppHeaderLoggedIn: {
    display: 'flex',
    alignItems: 'center',
    color: '#e0354b',
    borderBottom: '3px solid',
    width: '100%',
    justifyContent: 'space-between',
    boxSizing: 'border-box',
    paddingRight: '22px',
    fontFamily: 'Poppins, sans-serif',
  },

  AppHeader: {
    display: 'flex',
    alignItems: 'center',
    color: '#e0354b',
    borderBottom: '3px solid',
    width: '100%',
    fontFamily: 'Poppins, sans-serif',
  },

  img: {
    width: '10rem',
  },

  h1: {
    fontSize: '1.8rem',
    position: 'absolute',
    top: '3px', left: '50%',
    transform: 'translateX(-50%)',
    background: 'linear-gradient(to right, rgb(230, 101, 98), rgb(227, 97, 131))',
    WebkitBackgroundClip: 'text',
    color: 'transparent',
  },

  logOut: {
    marginLeft: '30px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'end',
  },

  logOutButton: {
    fontWeight: 'bold',
    cursor: 'pointer',
  },

  nav: {
    color: 'black',
    textDecoration: 'none',

    ':hover': {
      color: 'darkgrey',
    },
  },
});

const mapStateToProps = (state) => ({
  user: state.ui.get('user'),
});

const mapDispatchToProps = {
  logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);