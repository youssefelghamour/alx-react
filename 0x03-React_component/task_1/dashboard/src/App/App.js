import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import CourseList from '../CourseList/CourseList';
import { getLatestNotification } from '../utils/utils';


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
    console.log('App mounted');
    const logOut = this.props;

    return (
      <React.Fragment>
        <Notifications listNotifications={ listNotifications }/>
        
        <div className="App">
          <Header />

          { this.props.isLoggedIn ? <CourseList listCourses={ listCourses } /> : <Login /> }

          <Footer />
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

export default App;
