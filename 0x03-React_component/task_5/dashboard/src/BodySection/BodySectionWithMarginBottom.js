import React, { Component } from "react";
import BodySection from "./BodySection";
import './BodySectionWithMarginBottom.css';
import PropTypes from "prop-types";


class BodySectionWithMarginBottom extends Component {
    render() {
        return (
            <div className="bodySectionWithMargin">
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

export default BodySectionWithMarginBottom;