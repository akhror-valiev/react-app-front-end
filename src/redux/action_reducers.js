const FETCH_GREETING = 'FETCH_GREETING';

const fetchGreeting = () => async (dispatch) => {
  try {
    const response = await fetch('http://localhost:3000/api/v1/greetings');
    const result = await response.json();
    dispatch({ type: FETCH_GREETING, payload: result });
  } catch (error) {
    console.log(error);
  }
};

const greetingsReducer = (state = [], action) => {
  if (action.type === FETCH_GREETING) {
    return action.payload;
  }
  return state;
};

export {
  fetchGreeting, greetingsReducer,
};
