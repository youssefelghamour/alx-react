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
          <h1 className={css(styles.h1)} >School dashboard</h1>
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
  },

  AppHeader: {
    display: 'flex',
    alignItems: 'center',
    color: '#e0354b',
    borderBottom: '3px solid',
    width: '100%',
  },

  img: {
    width: '12rem',
  },

  h1: {
    fontFamily: 'sans-serif',
    fontSize: '1.8rem',
  },

  logOut: {
    marginLeft: '30px',
    display: 'flex',
    flexDirection: 'column',
  },

  logOutButton: {
    fontWeight: 'bold',
    cursor: 'pointer',
  },
});

const mapStateToProps = (state) => ({
  user: state.ui.get('user'),
});

const mapDispatchToProps = {
  logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);