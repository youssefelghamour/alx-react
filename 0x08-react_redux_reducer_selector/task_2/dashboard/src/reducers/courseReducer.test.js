import { FETCH_COURSE_SUCCESS, SELECT_COURSE, UNSELECT_COURSE } from "../actions/courseActionTypes";
import { courseReducer } from "./courseReducer";


describe('courseReducer', () => {
    const initialState = [
        { id: 1, name: "ES6",     isSelected: false, credit: 60 },
        { id: 2, name: "Webpack", isSelected: false, credit: 20 },
        { id: 3, name: "React",   isSelected: false, credit: 40 }
    ];

    it('default state returns an empty array', () => {
        expect(courseReducer(undefined, {})).toEqual([]);
    });

    it('FETCH_COURSE_SUCCESS returns the data passed', () => {
        const action = {
            type: FETCH_COURSE_SUCCESS,
            data: [
              { id: 1, name: "ES6",     credit: 60 },
              { id: 2, name: "Webpack", credit: 20 },
              { id: 3, name: "React",   credit: 40 }
            ]
        };
        expect(courseReducer(undefined, action)).toEqual(initialState);
    });

    it('SELECT_COURSE returns the data with the right item updated', () => {
        const action = {
            type: SELECT_COURSE,
            index: 2
        };
        const result = initialState.map(course =>
            course.id === action.index
                ? { ...course, isSelected: true }
                : course
        );
        expect(courseReducer(initialState, action)).toEqual(result);
    });

    it('UNSELECT_COURSE returns the data with the right item updated', () => {
        const action = {
            type: UNSELECT_COURSE,
            index: 2
        };
        const result = initialState.map(course =>
            course.id === action.index
                ? { ...course, isSelected: false }
                : course
        );
        expect(courseReducer(initialState, action)).toEqual(result);
    });
});