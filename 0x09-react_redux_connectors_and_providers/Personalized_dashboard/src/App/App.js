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
              <Fragment >
                  <BodySectionWithMarginBottom title="Course list">
                    <CourseList />
                  </BodySectionWithMarginBottom>

                  <BodySection title="News from the School">
                    <div style={{display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '10px', margin: '0 100px 0 60px'}}>

                      <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr',}}>

                        <div style={{padding: '10px', display: 'flex', flexDirection: 'column', cursor: 'pointer'}}>
                          <img src='news1.jpg' style={{width: '100%', height: '150px', objectFit: 'cover'}}></img>
                          <div style={{padding: '8px 15px', backgroundColor: '#f2b1b282'}}>
                            <p style={{margin: '5px 0', fontSize: '0.8rem'}}>Sports</p>
                            <p style={{margin: '5px 0', fontSize: '1rem', fontWeight: 'bold',}}>Annual Sports Day Highlights</p>
                            <p style={{margin: '5px 0', fontSize: '0.7rem'}}>14 November 2024</p>
                          </div>
                        </div>

                        <div style={{padding: '10px', display: 'flex', flexDirection: 'column', cursor: 'pointer'}}>
                          <img src='news2.jpg' style={{width: '100%', height: '150px', objectFit: 'cover'}}></img>
                          <div style={{padding: '8px 15px', backgroundColor: '#f2b1b282'}}>
                            <p style={{margin: '5px 0', fontSize: '0.8rem'}}>Events</p>
                            <p style={{margin: '5px 0', fontSize: '1rem', fontWeight: 'bold',}}>Science Fair 2024</p>
                            <p style={{margin: '5px 0', fontSize: '0.7rem'}}>12 Devember 2024</p>
                          </div>
                        </div>

                        <div style={{padding: '10px', display: 'flex', flexDirection: 'column', cursor: 'pointer'}}>
                          <img src='news3.jpg' style={{width: '100%', height: '150px', objectFit: 'cover'}}></img>
                          <div style={{padding: '8px 15px', backgroundColor: '#f2b1b282'}}>
                            <p style={{margin: '5px 0', fontSize: '0.8rem'}}>Administration</p>
                            <p style={{margin: '5px 0', fontSize: '1rem', fontWeight: 'bold',}}>New Principal Appointment</p>
                            <p style={{margin: '5px 0', fontSize: '0.7rem'}}>16 November 2024</p>
                          </div>
                        </div>

                        <div style={{padding: '10px', display: 'flex', flexDirection: 'column', cursor: 'pointer'}}>
                          <img src='news4.jpg' style={{width: '100%', height: '150px', objectFit: 'cover'}}></img>
                          <div style={{padding: '8px 15px', backgroundColor: '#f2b1b282'}}>
                            <p style={{margin: '5px 0', fontSize: '0.8rem'}}>Administration</p>
                            <p style={{margin: '5px 0', fontSize: '1rem', fontWeight: 'bold',}}>School Safety Policy Update</p>
                            <p style={{margin: '5px 0', fontSize: '0.7rem'}}>18 November 2024</p>
                          </div>
                        </div>
                      </div>

                      <aside>
                          <div style={{borderBottom: '0.8px solid lightgrey'}}>
                            <p style={{margin: '5px 0', fontSize: '1.5rem', fontWeight: 'bold', color: '#e0354b', marginBottom: '15px'}}>School Highlights</p>
                          </div>

                          <div style={{borderBottom: '0.8px solid lightgrey'}}>
                            <p style={{margin: '5px 0', fontSize: '0.8rem'}}>Administration</p>
                            <p style={{margin: '5px 0', fontSize: '1rem', fontWeight: 'bold',}}>New Virtual Classroom Guidelines</p>
                            <p style={{margin: '5px 0', fontSize: '0.7rem'}}>15 November 2024</p>
                          </div>

                          <div style={{borderBottom: '0.8px solid lightgrey'}}>
                            <p style={{margin: '5px 0', fontSize: '0.8rem'}}>Platform Update</p>
                            <p style={{margin: '5px 0', fontSize: '1rem', fontWeight: 'bold',}}>Interactive Quizzes</p>
                            <p style={{margin: '5px 0', fontSize: '0.7rem'}}>11 November 2024</p>
                          </div>

                          <div style={{borderBottom: '0.8px solid lightgrey'}}>
                            <p style={{margin: '5px 0', fontSize: '0.8rem'}}>Learning</p>
                            <p style={{margin: '5px 0', fontSize: '1rem', fontWeight: 'bold',}}>Update on Peer Learning days</p>
                            <p style={{margin: '5px 0', fontSize: '0.7rem'}}>10 November 2024</p>
                          </div>

                          <div style={{borderBottom: '0.8px solid lightgrey'}}>
                            <p style={{margin: '5px 0', fontSize: '0.8rem'}}>Administration</p>
                            <p style={{margin: '5px 0', fontSize: '1rem', fontWeight: 'bold',}}>Online Exam Protocol Update</p>
                            <p style={{margin: '5px 0', fontSize: '0.7rem'}}>9 November 2024</p>
                          </div>

                          <div style={{borderBottom: '0.8px solid lightgrey'}}>
                            <p style={{margin: '5px 0', fontSize: '0.8rem'}}>Events</p>
                            <p style={{margin: '5px 0', fontSize: '1rem', fontWeight: 'bold',}}>Graduation Ceremony</p>
                            <p style={{margin: '5px 0', fontSize: '0.7rem'}}>8 November 2024</p>
                          </div>
                      </aside>

                    </div>

                  </BodySection>
                </Fragment>
              ) : ( 
                <BodySectionWithMarginBottom title="Log in to continue" >
                  <Login logIn={loginRequest}/>
                </BodySectionWithMarginBottom>
              )
            }

            
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