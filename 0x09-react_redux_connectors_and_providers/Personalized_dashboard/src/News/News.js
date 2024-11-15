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
                    <div style={{padding: '8px 15px', backgroundColor: '#f2b1b282'}}>
                        <p style={{margin: '5px 0', fontSize: '0.8rem'}}>Sports</p>
                        <p style={{margin: '5px 0', fontSize: '1rem', fontWeight: 'bold',}}>Annual Sports Day Highlights</p>
                        <p style={{margin: '5px 0', fontSize: '0.7rem'}}>14 November 2024</p>
                    </div>
                </div>

                <div className={css(styles.newsItem)}>
                    <img src='news2.jpg' className={css(styles.coverImage)}></img>
                    <div style={{padding: '8px 15px', backgroundColor: '#f2b1b282'}}>
                        <p style={{margin: '5px 0', fontSize: '0.8rem'}}>Events</p>
                        <p style={{margin: '5px 0', fontSize: '1rem', fontWeight: 'bold',}}>Science Fair 2024</p>
                        <p style={{margin: '5px 0', fontSize: '0.7rem'}}>12 Devember 2024</p>
                    </div>
                </div>

                <div className={css(styles.newsItem)}>
                    <img src='news3.jpg' className={css(styles.coverImage)}></img>
                    <div style={{padding: '8px 15px', backgroundColor: '#f2b1b282'}}>
                        <p style={{margin: '5px 0', fontSize: '0.8rem'}}>Administration</p>
                        <p style={{margin: '5px 0', fontSize: '1rem', fontWeight: 'bold',}}>New Principal Appointment</p>
                        <p style={{margin: '5px 0', fontSize: '0.7rem'}}>16 November 2024</p>
                    </div>
                </div>

                <div className={css(styles.newsItem)}>
                    <img src='news4.jpg' className={css(styles.coverImage)}></img>
                    <div style={{padding: '8px 15px', backgroundColor: '#f2b1b282'}}>
                        <p style={{margin: '5px 0', fontSize: '0.8rem'}}>Administration</p>
                        <p style={{margin: '5px 0', fontSize: '1rem', fontWeight: 'bold',}}>School Safety Policy Update</p>
                        <p style={{margin: '5px 0', fontSize: '0.7rem'}}>18 November 2024</p>
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


});

export default News;