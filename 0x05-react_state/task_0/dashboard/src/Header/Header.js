import React from 'react';
import logo from '../assets/holberton-logo.jpg';
import { StyleSheet, css } from 'aphrodite';


function Header() {
  return (
    <div className={css(styles.AppHeader)}>
        <img className={css(styles.img)} src={logo} alt="Holberton logo" />
        <h1 className={css(styles.h1)} >School dashboard</h1>
    </div>
  );
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
});

export default Header;