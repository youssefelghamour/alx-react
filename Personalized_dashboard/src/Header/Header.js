import React, { Component } from 'react';
import logo from '../../dist/favicon.ico';
import { StyleSheet, css } from 'aphrodite';
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
          {/* <h1 className={css(styles.h1)} >SCHOOL DASHBOARD</h1> */}
          
          
          <div className={css(styles.navContainer)}>
              <a href="#" className={css(styles.nav)}>
                  Home
              </a>

              <a href="#body" className={css(styles.nav)}>
                  Courses
              </a>

              <a href="#news" className={css(styles.nav)}>
                  News
              </a>

              <a href="#news" className={css(styles.nav)}>
                  Updates
              </a>
              
          </div>
          
          {/* user.email to confirm the user is logged in and has an email

              The whole user object is {} when the user isn't logged in,
              or set to null when the user logs out. In both case the check will be false
          */}
          { user && user.email ? (
              <div id="logoutSection" className={css(styles.logOut)}>
                <p style={{display: 'inline', margin: '0', color: 'grey'}}> {user.email}</p>
                <span onClick={logout} className={css(styles.logOutButton)}> logout</span>
              </div>
            ) : (<button className={css(styles.loginButton)}>Login</button>)
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
    /*borderBottom: '3px solid',*/
    width: '100%',
    justifyContent: 'space-between',
    boxSizing: 'border-box',
    paddingRight: '22px',
    fontFamily: 'Poppins, sans-serif',
    //background: 'linear-gradient(355deg, #e0354ba3 -118%, #00000000 67%)',
    backgroundColor: '#ffffffb3',
    borderBottomLeftRadius: '20px',
    borderBottomRightRadius: '20px',
    boxShadow: '0 8px 16px #0003',
    position: 'sticky',
    top: '0',
    backdropFilter: 'blur(10px)',
  },

  AppHeader: {
    display: 'flex',
    alignItems: 'center',
    color: '#e0354b',
    //borderBottom: '3px solid',
    width: '100%',
    fontFamily: 'Poppins, sans-serif',
    //background: 'linear-gradient(355deg, #e0354ba3 -118%, #00000000 67%)',
    backgroundColor: '#ffffffb3',
    //borderBottomLeftRadius: '20px',
    //borderBottomRightRadius: '20px',
    boxShadow: '0 8px 16px #0003',
    position: 'sticky',
    top: '0',
    backdropFilter: 'blur(10px)',
    zIndex: '1',
  },

  img: {
    position: 'relative',
    width: '3rem',
    left: '12%',
    padding: '12px',
    borderRadius: '20px',
    transition: 'transform filter 0.3s ease',

    ':hover': {
      transform: 'scale(103%)',
      filter: 'hue-rotate(30deg)',
    },
  },

  h1: {
    fontSize: '1.5rem',
    position: 'absolute',
    top: '-10%',
    left: '50%',
    transform: 'translateX(-50%)',
    //background: 'linear-gradient(to right, #e31c3f, rgb(227, 97, 131))',
    WebkitBackgroundClip: 'text',
    //color: 'transparent',
    color: 'black',

    '@media (max-width: 600px)': {
      display: 'none',
    },
  },

  logOut: {
    marginLeft: '30px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'end',
    position: 'absolute',
    right: '12%',
  },

  logOutButton: {
    fontWeight: 'bold',
    cursor: 'pointer',
    
    ':hover': {
      transform: 'scale(110%)',
      color: '#a90318',
    },
  },

  navContainer: {
    display: 'flex',
    alignItems: 'center',
    position: 'absolute',
    //top: '40px',
    top: '33%',
    left: '50%',
    transform: 'translateX(-50%)',
    gap: '13px',

    '@media (max-width: 600px)': {
      display: 'none',
    },
  },

  nav: {
    color: 'black',
    textDecoration: 'none',
    fontWeight: 'bold',

    ':hover': {
      color: 'darkgrey',
    },
  },

  loginButton: {
    position: 'absolute',
    right: '12%',
    padding: '8px 16px',
    border: 'none',
    color: '#ffffff',
    fontWeight: 'bold',
    borderRadius: '25px',
    backgroundColor: '#d2d2d2',
    cursor: 'pointer',

    ':hover': {
      backgroundColor: 'grey',
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