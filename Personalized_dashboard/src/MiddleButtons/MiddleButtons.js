import React, { Component } from "react";
import { css, StyleSheet } from "aphrodite";
import { VscTriangleRight } from "react-icons/vsc";


export default class MiddleButtons extends Component {
    render () {
        return (
            <div className={css(styles.container)}>
                <div className={css(styles.middleButton)}>
                    <p className={css(styles.text)}>New Classroom Technology</p>

                    <div className={css(styles.iconContainer)}>
                        <VscTriangleRight />
                    </div>
                </div>

                <div className={css(styles.middleButton)}>
                    <p className={css(styles.text)}>Prior Learning Assessment</p>

                    <div className={css(styles.iconContainer)}>
                        <VscTriangleRight />
                    </div>
                </div>

                <div className={css(styles.middleButton)}>
                    <p className={css(styles.text)}>Career Opportunities</p>

                    <div className={css(styles.iconContainer)}>
                        <VscTriangleRight />
                    </div>
                </div>

                <div className={css(styles.middleButton)}>
                    <p className={css(styles.text)}>Alumni's Space</p>

                    <div className={css(styles.iconContainer)}>
                        <VscTriangleRight />
                    </div>
                </div>
            </div>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr 1fr',
        gap: '30px',
    },

    middleButton: {
        display: 'grid',
        gridTemplateColumns: '7fr 1fr',
        alignItems: 'center',
        border: 'none',
        //background: 'linear-gradient(149deg, #e1003c 37%, #f100a5)',
        backgroundColor: '#e9e9e9',
        color: 'black',
        background: 'linear-gradient(238deg, rgb(228 228 228) 37%, rgb(178 178 178))',
        borderRadius: '20px',
        clipPath: 'border-box',
    },

    text: {
        padding: '12px 0 12px 25px',
        fontSize: '17px',
        fontWeight: 'bold',
    },

    iconContainer: {
        backgroundColor: 'black',
        height: '100%',
        alignContent: 'center',
        textAlign: 'center',
        padding: '0 15px',
        background: 'linear-gradient(238deg, rgb(228 228 228) 37%, rgb(178 178 178))',
        color: 'white',
    },
});