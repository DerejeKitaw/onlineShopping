import axios from 'axios';

import { ADD_CATEGORY, GET_ERRORS,CLEAR_ERRORS,GET_CATEGORIES,CATEGORY_LOADING } from '../types';

export const addCategory = categoryData => dispatch => {
  dispatch(clearErrors());
  axios
    .post('/api/category', categoryData)
    .then(res =>
      dispatch({
        type: ADD_CATEGORY,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};
// Get Categories
export const getCategories = () => dispatch => {
  dispatch(setCategoryLoading());
  axios
    .get('/api/category/all')
    .then(res =>
      dispatch({
        type: GET_CATEGORIES,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};
// Set loading state
export const setCategoryLoading = () => {
  return {
    type: CATEGORY_LOADING
  };
};
// Clear errors
export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS
  };
};