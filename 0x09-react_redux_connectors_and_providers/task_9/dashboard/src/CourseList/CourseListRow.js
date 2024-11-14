import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';


export default function CourseListRow({ id, isHeader, textFirstCell, textSecondCell, isChecked, onChangeRow }) {
    const rowStyle = {backgroundColor: '#f5f5f5ab'};
    const headerStyle = {backgroundColor: '#deb5b545'};
    const style = isHeader ? headerStyle : rowStyle;

    if (isHeader) {
        if (textSecondCell === null) {
            return (
                <tr style={style}>
                    <th colSpan='2' className={css(styles.firstTh, styles.th)}>{ textFirstCell }</th>
                </tr>
            );
        } else {
            return (
                <tr style={style}>
                    <th className={css(styles.th)}>{ textFirstCell }</th>
                    <th className={css(styles.th)}>{ textSecondCell }</th>
                </tr>
            );
        }
    } else {
        return (
            <tr style={style} className={isChecked ? css(styles.rowChecked) : ''}>
                <td><input type='checkbox' onClick={() => onChangeRow(id, !isChecked)}/>{ textFirstCell }</td>
                <td>{ textSecondCell }</td>
            </tr>
        );
    }
}

/*
CourseListRow.propTypes = {
    isHeader: PropTypes.bool,
    textFirstCell: PropTypes.string.isRequired,
    textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CourseListRow.defaultProps = {
    isHeader: false,
    textSecondCell: null,
};*/

const styles = StyleSheet.create({
    firstTh: {
        textAlign: 'center',
    },

    th: {
        borderBottom: '2px solid lightgrey',
        padding: '5px 0 5px 6px',
    },

    rowChecked: {
        backgroundColor: '#e6e4e4',
    },
});