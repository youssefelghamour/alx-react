import { Map } from 'immutable';
import { FETCH_NEWS_SUCCESS } from '../actions/newsActionTypes';
import { newsNormalizer } from '../schema/news';


export const newsReducer = (state = Map([]), action) => {
  switch (action.type) {
    case FETCH_NEWS_SUCCESS:
      // Normalize the news data
      let normalizedData = newsNormalizer(action.data).news;
      return state.merge(normalizedData);
    default:
      return state;
  }
};

/*
FETCH_COURSE_SUCCESS action: the API returning the list of courses
{
  type: FETCH_COURSE_SUCCESS,
  data: [
    { id: 1, name: "ES6",     credit: 60 },
    { id: 2, name: "Webpack", credit: 20 },
    { id: 3, name: "React",   credit: 40 }
  ]
}

***normalizedData = 
  1: { id: 1, name: "ES6",     credit: 60 },
  2: { id: 2, name: "Webpack", credit: 20 },
  3: { id: 3, name: "React",   credit: 40 }
}

The state after calling FETCH_COURSE_SUCCESS would look like this:
Map({
  1: { id: 1, name: "ES6",     credit: 60, isSelected: false },
  2: { id: 2, name: "Webpack", credit: 20, isSelected: false },
  3: { id: 3, name: "React",   credit: 40, isSelected: false }
})



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