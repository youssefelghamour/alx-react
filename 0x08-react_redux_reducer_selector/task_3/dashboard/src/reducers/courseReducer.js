import { FETCH_COURSE_SUCCESS, SELECT_COURSE, UNSELECT_COURSE } from "../actions/courseActionTypes";


export const courseReducer = (state = [], action) => {
    switch (action.type) {
        case FETCH_COURSE_SUCCESS:
            return action.data.map(course => ({ ...course, isSelected: false }));
        case SELECT_COURSE:
            return state.map(course =>
                course.id === action.index
                    ? { ...course, isSelected: true }
                    : course
            );
        case UNSELECT_COURSE:
            return state.map(course =>
                course.id === action.index
                    ? { ...course, isSelected: false }
                    : course
            );
        default:
            return state;
    }
};

/*
FETCH_COURSE_SUCCESS action: the API returning the list of courses
{
  type: FETCH_COURSE_SUCCESS,
  data: [
    {
      id: 1,
      name: "ES6",
      credit: 60
    },
    {
      id: 2,
      name: "Webpack",
      credit: 20
    },
    {
      id: 3,
      name: "React",
      credit: 40
    }
  ]
}

SELECT_COURSE action: it sends an index corresponding to the id of the course to update, sets isSelected to true
{
  type: SELECT_COURSE,
  index: 2
}

UNSELECT_COURSE action: it sends an index corresponding to the id of the course to update, sets isSelected to false
{
  type: UNSELECT_COURSE,
  index: 2
}
*/