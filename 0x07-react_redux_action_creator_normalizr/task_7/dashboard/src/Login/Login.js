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
                <label className={css(styles.label)}  htmlFor='email'>Email: </label>
                <input className={css(styles.input)}  type='email'    id='email'    name="email"    value={this.state.email}    onChange={this.handleChangeEmail} />

                <label className={css(styles.label)}  htmlFor='password'>Password: </label>
                <input className={css(styles.input)}  type='password' id='password' name="password" value={this.state.password} onChange={this.handleChangePassword} />

                <input className={css(styles.button)} type='submit'   value='OK'    disabled={!this.state.enableSubmit}/>
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