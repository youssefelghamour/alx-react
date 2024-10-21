import React from "react";
import CourseListRow from './CourseListRow';
import './CourseList.css';
import PropTypes from "prop-types";
import CourseShape from "./CourseShape";


export default function CourseList({ listCourses }) {
    return (
        <div className="CourseList-container">
            <table id="CourseList">
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

CourseList.propTypes = {
    listCourses: PropTypes.arrayOf(CourseShape),
};

CourseList.defaultProps = {
    listCourses: [],
}