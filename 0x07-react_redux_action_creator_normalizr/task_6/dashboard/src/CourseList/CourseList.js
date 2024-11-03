import React, { Component } from "react";
import CourseListRow from './CourseListRow';
import PropTypes from "prop-types";
import CourseShape from "./CourseShape";
import { StyleSheet, css } from "aphrodite";


class CourseList extends Component {
    render () {
        const listCourses = this.props.listCourses;

        return (
            <div className={css(styles.CourseListContainer)}>
                <table id="CourseList" className={css(styles.table)} >
                    <thead>
                        <CourseListRow isHeader={ true } textFirstCell="Available courses" />
                        <CourseListRow isHeader={ true } textFirstCell="Course name" textSecondCell="Credit" />
                    </thead>

                    <tbody>
                        { listCourses.length > 0 ? (
                            listCourses.map((course) => (
                                <CourseListRow
                                    key={ course.id }
                                    textFirstCell={ course.name }
                                    textSecondCell={ course.credit }
                                    isHeader={ false }
                                />
                            ))
                        ) : (
                            <CourseListRow isHeader={ false } textFirstCell="No course available yet" />
                        )}
                    </tbody>
                </table>
            </div>
        );
    }
}

CourseList.propTypes = {
    listCourses: PropTypes.arrayOf(CourseShape),
};

CourseList.defaultProps = {
    listCourses: [],
}

const styles = StyleSheet.create({
    CourseListContainer: {
        padding: '2rem',
    },

    table: {
        width: '100%',
        textAlign: 'left',
        border: '1px solid lightgrey',
    }
});

export default CourseList;