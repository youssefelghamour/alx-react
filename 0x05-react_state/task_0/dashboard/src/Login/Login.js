import React from 'react';
import { StyleSheet, css } from 'aphrodite';


function Login() {
  return (
    <React.Fragment>
        <div className={css(styles.loginContainer)}>
            <p>Login to access the full dashboard</p>
            
            <div className={css(styles.formContainer)}>
              <label className={css(styles.label)} htmlFor='email'>Email: </label>
              <input className={css(styles.input)} type='email' id='email' name="email" />

              <label className={css(styles.label)} htmlFor='password'>Password: </label>
              <input className={css(styles.input)} type='password' id='password' name="password" />

              <button className={css(styles.button)} >OK</button>
            </div>
        </div>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  loginContainer: {
    margin: '3rem 2rem',
    fontSize: '1rem',
    fontFamily: 'sans-serif',
    fontWeight: '400',
    '@media (max-width: 900px)': {
      margin: 0,
    },
  },
    
  label: {
    marginRight: '8px',
  },
    
  input: {
    border: '1px solid rgba(128, 128, 128, 0.507)',
    padding: '3px',
    marginRight: '8px',
    '@media (max-width: 900px)': {
      margin: '6px 0',
    },
  },
    
  button: {
    marginLeft: '8px',
    borderRadius: '5px',
    border: '0.5px solid rgba(128, 128, 128, 0.507)',
    padding: '3px 10px',
    backgroundColor: 'white',
    boxShadow: '0.5px 1px 2px rgba(0, 0, 0, 0.1)',
    cursor: 'pointer',
    ':hover': {
      backgroundColor: 'rgba(219, 219, 219, 0.477)',
    },
    '@media (max-width: 900px)': {
      marginLeft: 0,
    },
  },

  formContainer: {
    display: 'flex',
    flexDirection: 'row',
    '@media (max-width: 900px)': {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      margin: 0,
    },
  }
});

export default Login;