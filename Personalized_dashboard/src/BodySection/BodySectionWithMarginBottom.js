import React, { Component } from "react";
import BodySection from "./BodySection";
import PropTypes from "prop-types";
import { StyleSheet, css } from "aphrodite";


class BodySectionWithMarginBottom extends Component {
    render() {
        return (
            <div className={css(styles.bodySectionWithMargin)}>
                <BodySection { ...this.props } />
            </div>
        );
    }
}

BodySectionWithMarginBottom.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node,
};

BodySectionWithMarginBottom.defaultProps = {
    title: '',
    children: null,
};

const styles = StyleSheet.create({
    bodySectionWithMargin: {
        marginBottom: '40px',
    }
});

export default BodySectionWithMarginBottom;