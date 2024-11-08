import React, { Component } from 'react';
import logo from '../assets/holberton-logo.jpg';
import { StyleSheet, css } from 'aphrodite';
import AppContext from '../App/AppContext';


class Header extends Component {
  static contextType = AppContext;

  render () {
    return (
      <div className={css(styles.AppHeader)}>
          <img className={css(styles.img)} src={logo} alt="Holberton logo" />
          <h1 className={css(styles.h1)} >School dashboard</h1>
          { this.context.user.isLoggedIn ? (
              <p id="logoutSection" className={css(styles.logOut)}>
                Welcome {this.context.user.email}
                <span onClick={this.context.logOut} className={css(styles.logOutButton)}> logout</span>
                </p>
            ) : (null)
          }
      </div>
    );
  }
}

const styles = StyleSheet.create({
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

export default Header;