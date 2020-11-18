const initialState = {
  data: null,
  loading: null,
  error: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'LOAD_DATA_REQUEST':
      return {
        ...state,
        loading: true,
      };
    case 'LOAD_DATA_SUCCESS':
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case 'LOAD_DATA_FAIL':
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case 'LOAD_DATA_RESET':
      return {
        ...state,
        loading: null,
        error: null,
        success: null,
      };
    default:
      return state;
  }
}
