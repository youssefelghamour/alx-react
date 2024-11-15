import React, { Component } from "react";


class Updates extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <aside>
                <div style={{borderBottom: '0.8px solid lightgrey'}}>
                    <p style={{margin: '5px 0', fontSize: '1.5rem', fontWeight: 'bold', color: '#e0354b', marginBottom: '15px'}}>School Updates</p>
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

                <div style={{borderBottom: '0.8px solid lightgrey'}}>
                    <p style={{margin: '5px 0', fontSize: '0.8rem'}}>Events</p>
                    <p style={{margin: '5px 0', fontSize: '1rem', fontWeight: 'bold',}}>News on the Book Fair</p>
                    <p style={{margin: '5px 0', fontSize: '0.7rem'}}>8 November 2024</p>
                </div>
            </aside>
        );
    }
}

export default Updates;