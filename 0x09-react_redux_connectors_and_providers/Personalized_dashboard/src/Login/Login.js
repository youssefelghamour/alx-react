import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import PropTypes from 'prop-types';


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      enableSubmit: false,
    };
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
  }

  handleLoginSubmit(event) {
    this.props.logIn(this.state.email, this.state.password);
    event.preventDefault();
  }

  handleChangeEmail(event) {
    this.setState({ email: event.target.value });

    if (event.target.value.length > 0 && this.state.password.length > 0) {
      this.setState({ enableSubmit: true });
    } else {
      this.setState({ enableSubmit: false });
    }
  }

  handleChangePassword(event) {
    this.setState({ password: event.target.value })

    if (event.target.value.length > 0 && this.state.email.length > 0) {
      this.setState({ enableSubmit: true });
    } else {
      this.setState({ enableSubmit: false });
    }
  }

  render () {
    return (
      <React.Fragment>
          <div className={css(styles.loginContainer)}>
              <p>Login to access the full dashboard</p>
              
              <form className={css(styles.formContainer)} onSubmit={this.handleLoginSubmit}>
                <label className={css(styles.label)}  htmlFor='email'>Email</label>
                <input className={css(styles.input)}  type='email'    id='email'    name="email"    value={this.state.email}    onChange={this.handleChangeEmail}    placeholder="Email"/>

                <label className={css(styles.label)}  htmlFor='password'>Password</label>
                <input className={css(styles.input)}  type='password' id='password' name="password" value={this.state.password} onChange={this.handleChangePassword} placeholder="Password"/>

                <input className={css(styles.button)} type='submit'   value='Sign In'    disabled={!this.state.enableSubmit}/>
              </form>
          </div>
      </React.Fragment>
    );
  }
}

Login.propTypes = {
  logIn: PropTypes.func,
};

Login.defaultProps = {
  logIn: () => {},
};

const styles = StyleSheet.create({
  loginContainer: {
    margin: '3rem 2rem',
    fontSize: '1rem',
    fontFamily: 'Poppins, sans-serif',
    fontWeight: '400',
    textAlign: 'center',
    textAlign: '-webkit-center',
    '@media (max-width: 900px)': {
      margin: 0,
    },
  },
    
  label: {
    margin: '8px 0',
    fontWeight: '600',
    fontSize: '15px',
  },
    
  input: {
    border: '1.5px solid rgb(101 101 101 / 33%) !important',
    padding: '3px 15px',
    borderRadius: '20px',
    height: '30px',
    backgroundColor: '#d3d3d347',
    fontFamily: 'Poppins, sans-serif',
    '@media (max-width: 900px)': {
      margin: '6px 0',
      width: '88%',
    },
  },
    
  button: {
    borderRadius: '20px',
    padding: '3px 10px',
    background: 'linear-gradient(to right, #e66562, #e36183)',
    cursor: 'pointer',
    marginTop: '15px',
    height: '39px',
    color: 'white',
    fontWeight: 'bold',
    border: 'none',
    fontFamily: 'Poppins, sans-serif',
    ':hover': {
      backgroundColor: 'rgba(219, 219, 219, 0.477)',
    },
    ':disabled': {
      backgroundColor: '#ffffff',
      cursor: 'not-allowed',
      opacity: '0.5',
    },
    '@media (max-width: 900px)': {
      marginLeft: 0,
      width: '100%',
    },
  },

  formContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '35%',
    boxShadow: '2px 2px 9px #0000001f',
    padding: '25px',
    borderRadius: '33px',
    marginTop: '30px',
    backgroundColor: 'white',
    '@media (max-width: 900px)': {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      margin: 0,
    },
  }
});

export default Login;