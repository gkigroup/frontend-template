import axios from 'axios';

const PATH = 'https://jsonplaceholder.typicode.com/posts';

export const loadData = () => async (dispatch) => {
  try {
    dispatch({ type: 'LOAD_DATA_REQUEST' });
    const { data } = await axios.get(`${PATH}`);
    dispatch({ type: 'LOAD_DATA_SUCCESS', payload: data });
  } catch (error) {
    dispatch({
      type: 'LOAD_DATA_FAIL',
      payload: error.response?.data?.errors,
    });
  }
};
