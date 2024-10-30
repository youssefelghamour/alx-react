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


class App extends Component {

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
    const logOut = this.props;

    return (
      <React.Fragment>
        <Notifications listNotifications={ listNotifications }/>
        
        <div className="App">
          <Header />

          <div className={css(styles.body)} >
            { this.props.isLoggedIn ? (
                <BodySectionWithMarginBottom title="Course list">
                  <CourseList listCourses={ listCourses } />
                </BodySectionWithMarginBottom>
              ) : ( 
                <BodySectionWithMarginBottom title="Log in to continue" >
                  <Login />
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
      </React.Fragment>
    );
  }
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func
};

App.defaultProps = {
  isLoggedIn: false,
  logOut: () => {},
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

export default App;