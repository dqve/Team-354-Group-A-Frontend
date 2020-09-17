import {
  CREATE_TOURISTS_STARTED,
  CREATE_TOURISTS_SUCCEEDED,
  CREATE_TOURISTS_FAILED,
} from "../constants/index"

export const touristsInitialState = {
  data: [],
  isLoading: false,
  error: null,
}

const touristsReducer = (state = touristsInitialState, action) => {
  switch (action.type) {
    case CREATE_TOURISTS_STARTED: {
      return {
        ...state,
        isLoading: true,
      }
    }
    case CREATE_TOURISTS_SUCCEEDED: {
      return {
        ...state,
        isLoading: false,
        data: action.products,
      }
    }
    case CREATE_TOURISTS_FAILED: {
      return {
        ...state,
        isLoading: false,
        error: action.payload.error,
      }
    }
    default: {
      return state;
    }
  }
}

export default touristsReducer