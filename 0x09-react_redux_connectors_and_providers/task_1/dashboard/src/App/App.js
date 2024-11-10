import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import CourseList from '../CourseList/CourseList';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import BodySection from '../BodySection/BodySection';
import { getLatestNotification } from '../utils/utils';
import { StyleSheet, css } from 'aphrodite';
import AppContext, { logOut, user } from './AppContext';
import { UiInitialState } from '../reducers/uiReducer';
import { connect } from 'react-redux';
import { displayNotificationDrawer, hideNotificationDrawer } from '../actions/uiActionCreators';


class App extends Component {

  constructor(props) {
    super(props);
    this.handleDisplayDrawer = this.handleDisplayDrawer.bind(this);
    this.handleHideDrawer = this.handleHideDrawer.bind(this);
    this.logIn = this.logIn.bind(this);
    this.logOut = this.logOut.bind(this);
    this.markNotificationAsRead = this.markNotificationAsRead.bind(this);

    this.state = {
      displayDrawer: false,
      user: user, // user from AppContext.js
      logOut: this.logOut,
      listNotifications: listNotifications, // Defined below
    };
    
  }

  handleDisplayDrawer() {
    this.setState({ displayDrawer: true });
  }

  handleHideDrawer() {
    this.setState({ displayDrawer: false });
  }

  logIn(email, password) {
    this.setState({
      user: {
        email: email,
        password: password,
        isLoggedIn: true,
      }
    });
  }

  logOut() {
    this.setState({ user: user }); // Default to user object imported from AppContext.js
  }

  markNotificationAsRead(id) {
    // Removes the nofitication with the id from the listNotifications in state
    this.setState({ listNotifications: this.state.listNotifications.filter(notification => notification.id !== id)});
  }

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    /* Keeping this even if it's redundant:
       if the component unmounts without the key being pressed,
       the event listener won't be removed; so this to ensure it's removed
    */
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = (event) => {
    if (event.ctrlKey && event.key === 'h') {
      alert("Logging you out");
      this.props.logOut();
      window.removeEventListener('keydown', this.handleKeyDown);
    }
  };

  render () {
    const { isLoggedIn, displayDrawer, displayNotificationDrawer, hideNotificationDrawer } = this.props;

    return (
      <AppContext.Provider value={{ user: this.state.user, logOut: this.state.logOut }}>
        <Notifications 
          listNotifications={ this.state.listNotifications }
          displayDrawer={displayDrawer}
          handleDisplayDrawer={displayNotificationDrawer}
          handleHideDrawer={hideNotificationDrawer}
          markNotificationAsRead={this.markNotificationAsRead}
        />
        
        <div className="App">
          <Header />

          <div className={css(styles.body)} >
            { isLoggedIn ? (
                <BodySectionWithMarginBottom title="Course list">
                  <CourseList listCourses={ listCourses } />
                </BodySectionWithMarginBottom>
              ) : ( 
                <BodySectionWithMarginBottom title="Log in to continue" >
                  <Login logIn={this.logIn}/>
                </BodySectionWithMarginBottom>
              )
            }

            <BodySection title="News from the School">
              <p>Some random news from the school</p>
            </BodySection>
          </div>

          <div className={css(styles.footer)} >
            <Footer />
          </div>
        </div>
      </AppContext.Provider>
    );
  }
}

App.propTypes = {
};

App.defaultProps = {
};

const listCourses = [
  { id: 1, name: "ES6",     credit: 60 },
  { id: 2, name: "Webpack", credit: 20 },
  { id: 3, name: "React",   credit: 40 }
];

const listNotifications = [
  { id: 1, type: "default", value: "New course available"             },
  { id: 2, type: "urgent",  value: "New resume available"             },
  { id: 3, type: "urgent",  html: { __html: getLatestNotification() } }
];

const styles = StyleSheet.create({
  body: {
    display: 'block',
    margin: '15px',
  },

  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    textAlign: 'center',
    fontSize: '1rem',
    fontFamily: 'sans-serif',
    fontWeight: 400,
    borderTop: 'solid 3px #e0354b',
    fontStyle: 'italic',
  },
});

export const mapStateToProps = (state) => ({
  isLoggedIn: state.get('isUserLoggedIn'),
  displayDrawer: state.get('isNotificationDrawerVisible'),
});

export const mapDispatchToProps = {
  displayNotificationDrawer,
  hideNotificationDrawer,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);