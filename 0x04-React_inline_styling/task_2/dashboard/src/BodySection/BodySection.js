import React, { Component } from "react";
import PropTypes from "prop-types";


class BodySection extends Component {
    render() {
        return (
            <div className="bodySection">
                <h2>{ this.props.title }</h2>
                { this.props.children }
            </div>
        );
    }
}

BodySection.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node,
}

BodySection.defaultProps = {
    title: '',
    children: null,
}

export default BodySection;