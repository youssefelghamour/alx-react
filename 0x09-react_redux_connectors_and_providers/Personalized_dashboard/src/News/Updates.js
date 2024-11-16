import { css, StyleSheet } from "aphrodite";
import React, { Component } from "react";


class Updates extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <aside>
                <h3 className={css(styles.sectionTitle)}>School Updates</h3>

                <div className={css(styles.updateContainer)}>
                    <p className={css(styles.updateType)}>Administration</p>
                    <p className={css(styles.updateTitle)}>New Virtual Classroom Guidelines</p>
                    <p className={css(styles.updateDate)}>15 November 2024</p>
                </div>

                <div className={css(styles.updateContainer)}>
                    <p className={css(styles.updateType)}>Platform Update</p>
                    <p className={css(styles.updateTitle)}>Interactive Quizzes</p>
                    <p className={css(styles.updateDate)}>11 November 2024</p>
                </div>

                <div className={css(styles.updateContainer)}>
                    <p className={css(styles.updateType)}>Learning</p>
                    <p className={css(styles.updateTitle)}>Update on Peer Learning days</p>
                    <p className={css(styles.updateDate)}>10 November 2024</p>
                </div>

                <div className={css(styles.updateContainer)}>
                    <p className={css(styles.updateType)}>Administration</p>
                    <p className={css(styles.updateTitle)}>Online Exam Protocol Update</p>
                    <p className={css(styles.updateDate)}>9 November 2024</p>
                </div>

                <div className={css(styles.updateContainer)}>
                    <p className={css(styles.updateType)}>Events</p>
                    <p className={css(styles.updateTitle)}>Graduation Ceremony</p>
                    <p className={css(styles.updateDate)}>8 November 2024</p>
                </div>

                <div className={css(styles.updateContainer)}>
                    <p className={css(styles.updateType)}>Events</p>
                    <p className={css(styles.updateTitle)}>News on the Book Fair</p>
                    <p className={css(styles.updateDate)}>8 November 2024</p>
                </div>
            </aside>
        );
    }
}

const styles = StyleSheet.create({
    sectionTitle: {
        margin: '5px 0',
        fontSize: '1.5rem',
        fontWeight: 'bold',
        color: '#e0354b',
        paddingBottom: '15px',
        borderBottom: '0.8px solid lightgrey',
    },

    updateContainer: {
        borderBottom: '0.8px solid lightgrey',

        '@media (max-width: 900px)': {
            textAlign: 'center',
        },
    },

    updateType: {
        margin: '5px 0',
        fontSize: '0.8rem',
    },

    updateTitle: {
        margin: '5px 0',
        fontSize: '1rem',
        fontWeight: 'bold',
    },

    updateDate: {
        margin: '5px 0',
        fontSize: '0.7rem',
    },
});

export default Updates;