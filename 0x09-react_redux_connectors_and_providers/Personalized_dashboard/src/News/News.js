import { css, StyleSheet } from "aphrodite";
import React, { Component } from "react";


class News extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className={css(styles.newsContainer)}>

                <div className={css(styles.newsItem)}>
                    <img src='news1.jpg' className={css(styles.coverImage)}></img>
                    <div className={css(styles.infoContainer)}>
                        <p className={css(styles.newsType)}>Sports</p>
                        <p className={css(styles.newsTitle)}>Annual Sports Day Highlights</p>
                        <p className={css(styles.newsDate)}>14 November 2024</p>
                    </div>
                </div>

                <div className={css(styles.newsItem)}>
                    <img src='news2.jpg' className={css(styles.coverImage)}></img>
                    <div className={css(styles.infoContainer)}>
                        <p className={css(styles.newsType)}>Events</p>
                        <p className={css(styles.newsTitle)}>Science Fair 2024</p>
                        <p className={css(styles.newsDate)}>12 Devember 2024</p>
                    </div>
                </div>

                <div className={css(styles.newsItem)}>
                    <img src='news3.jpg' className={css(styles.coverImage)}></img>
                    <div className={css(styles.infoContainer)}>
                        <p className={css(styles.newsType)}>Administration</p>
                        <p className={css(styles.newsTitle)}>New Principal Appointment</p>
                        <p className={css(styles.newsDate)}>16 November 2024</p>
                    </div>
                </div>

                <div className={css(styles.newsItem)}>
                    <img src='news4.jpg' className={css(styles.coverImage)}></img>
                    <div className={css(styles.infoContainer)}>
                        <p className={css(styles.newsType)}>Administration</p>
                        <p className={css(styles.newsTitle)}>School Safety Policy Update</p>
                        <p className={css(styles.newsDate)}>18 November 2024</p>
                    </div>
                </div>
            </div>
        );
    }
}

const styles = StyleSheet.create({
    newsContainer: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
    },

    newsItem: {
        padding: '10px',
        display: 'flex',
        flexDirection: 'column',
        cursor: 'pointer',
        alignSelf: 'stretch',
    },

    coverImage: {
        width: '100%',
        height: '150px',
        objectFit: 'cover',
        flexGrow: 1,
    },

    infoContainer: {
        padding: '8px 15px',
        backgroundColor: '#f2b1b282',
    },

    newsType: {
        margin: '5px 0',
        fontSize: '0.8rem',
    },

    newsTitle: {
        margin: '5px 0',
        fontSize: '1rem',
        fontWeight: 'bold',
    },

    newsDate: {
        margin: '5px 0',
        fontSize: '0.7rem',
    }
});

export default News;