import { css, StyleSheet } from "aphrodite";
import React, { Component } from "react";


class NewsSectionGrid extends Component {
    render() {
        return (
            <div className={css(styles.newsSectionGrid)}>
                { this.props.children }
            </div>
        );
    }
}

const styles = StyleSheet.create({
    newsSectionGrid: {
        display: 'grid',
        gridTemplateColumns: '2fr 1fr',
        gap: '10px',
        margin: '0 100px 60px 60px',

        '@media (max-width: 900px)': {
            gridTemplateColumns: '1fr',
            marginRight: '60px',
        },
    },
});

export default NewsSectionGrid;