import React, { Component, Fragment } from 'react';
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
import { connect } from 'react-redux';
import { displayNotificationDrawer, hideNotificationDrawer, login, loginRequest, logout } from '../actions/uiActionCreators';
import NotificationsContainer from '../Notifications/NotificationsContainer';
import News from '../News/News';
import Updates from '../News/Updates';
import NewsSectionGrid from '../News/NewsSectionGrid';


export class App extends Component {

  constructor(props) {
    super(props);
    this.handleKeyDown = this.handleKeyDown.bind(this);
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
      this.props.logOut;
      window.removeEventListener('keydown', this.handleKeyDown);
    }
  };

  render () {
    const { isLoggedIn, displayDrawer, displayNotificationDrawer, hideNotificationDrawer, loginRequest, logout } = this.props;

    return (
      <Fragment>
        <NotificationsContainer 
          displayDrawer={displayDrawer}
          handleDisplayDrawer={displayNotificationDrawer}
          handleHideDrawer={hideNotificationDrawer}
        />
        
        <div className="App">
          <Header />

          <div className={css(styles.body)} >
            { isLoggedIn ? (
                <BodySectionWithMarginBottom title="Course list">
                  <CourseList />
                </BodySectionWithMarginBottom>
              ) : ( 
                <BodySectionWithMarginBottom title="Log in to continue" >
                  <Login logIn={loginRequest}/>
                </BodySectionWithMarginBottom>
              )
            }

            <BodySection title="News from the School">
              <NewsSectionGrid>
                <News />
                <Updates />
              </NewsSectionGrid>
            </BodySection>
          </div>

          <div className={css(styles.footer)} >
            <Footer />
          </div>
        </div>
      </Fragment>
    );
  }
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  displayDrawer: PropTypes.bool,
  displayNotificationDrawer: PropTypes.func,
  hideNotificationDrawer: PropTypes.func,
  loginRequest: PropTypes.func,
  logout: PropTypes.func,
};

App.defaultProps = {
  isLoggedIn: false,
  displayDrawer: false,
  displayNotificationDrawer: () => {},
  hideNotificationDrawer: () => {},
  loginRequest: () => {},
  logout: () => {},
};

const listCourses = [
  { id: 1, name: "ES6",     credit: 60 },
  { id: 2, name: "Webpack", credit: 20 },
  { id: 3, name: "React",   credit: 40 }
];

const styles = StyleSheet.create({
  body: {
    display: 'block',
    margin: '15px',
    fontFamily: 'Poppins, sans-serif',
    minHeight: '62vh',
  },

  footer: {
    /*
    position: 'absolute',
    bottom: 0,
    left: 0,*/
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
  isLoggedIn: state.ui.get('isUserLoggedIn'),
  displayDrawer: state.ui.get('isNotificationDrawerVisible'),
});

export const mapDispatchToProps = {
  displayNotificationDrawer,
  hideNotificationDrawer,
  loginRequest,
  login,
  logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);