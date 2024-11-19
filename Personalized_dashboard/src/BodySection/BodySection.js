import React, { Component } from "react";
import PropTypes from "prop-types";


class BodySection extends Component {
    render() {
        return (
            <div className="bodySection">
                <h2 style={{fontSize: '3.5rem', letterSpacing: '-5px', textAlign: 'center', margin: '35px 0 0 0', lineHeight: '54px',}}>{ this.props.title }</h2>

                { this.props.message ? (
                        <h3 style={{fontSize: '2rem', margin: '0', textAlign: 'center', color: 'darkgray',}}>{this.props.message}</h3>
                    ): (null)
                }
                

                <h3 style={{fontSize: '2rem', /*margin: '8px 0 0 0',*/ margin: '0',}}>{this.props.subtitle}</h3>

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