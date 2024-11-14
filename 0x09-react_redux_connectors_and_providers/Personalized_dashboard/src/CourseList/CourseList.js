import React, { Component } from "react";
import CourseListRow from './CourseListRow';
import PropTypes from "prop-types";
import { StyleSheet, css } from "aphrodite";
import { fetchCourses, selectCourse, unSelectCourse } from "../actions/courseActionCreators";
import { getCourses } from "../selectors/courseSelector";
import { connect } from "react-redux";


class CourseList extends Component {
    constructor(props) {
        super(props);
        this.onChangeRow = this.onChangeRow.bind(this);
    }

    componentDidMount() {
        this.props.fetchCourses();
    }

    onChangeRow(id, checked) {
        if (checked) {
            this.props.selectCourse(id);
        } else {
            this.props.unSelectCourse(id);
        }
    }

    render () {
        const { listCourses, fetchCourses, selectCourse, unSelectCourse } = this.props;

        return (
            <div className={css(styles.CourseListContainer)}>
                <table id="CourseList" className={css(styles.table)} >
                    <thead>
                        <CourseListRow isHeader={ true } textFirstCell="Available courses" />
                        <CourseListRow isHeader={ true } textFirstCell="Course name" textSecondCell="Credit" />
                    </thead>

                    <tbody>
                        { listCourses ? (
                            listCourses.map((course) => (
                                <CourseListRow
                                    key={ course.id }
                                    id={course.id}
                                    textFirstCell={ course.name }
                                    textSecondCell={ course.credit }
                                    isHeader={ false }
                                    isChecked={ course.isSelected }
                                    onChangeRow={ this.onChangeRow }
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
    listCourses: PropTypes.object,
    fetchCourses: PropTypes.func,
    selectCourse: PropTypes.func,
    unSelectCourse: PropTypes.func,
};

CourseList.defaultProps = {
    listCourses: {},
    fetchCourses: () => {},
    selectCourse: () => {},
    unSelectCourse: () => {},
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

export const mapStateToProps = (state) => ({
    listCourses: getCourses(state),
});

const mapDispatchToProps = {
    fetchCourses,
    selectCourse,
    unSelectCourse,
};

export default connect(mapStateToProps, mapDispatchToProps)(CourseList);