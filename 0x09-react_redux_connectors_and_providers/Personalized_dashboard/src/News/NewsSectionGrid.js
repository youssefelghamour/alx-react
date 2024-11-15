import React, { Component } from "react";


class NewsSectionGrid extends Component {
    render() {
        return (
            <div style={{display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '10px', margin: '0 100px 0 60px'}}>
                { this.props.children }
            </div>
        );
    }
}

export default NewsSectionGrid;