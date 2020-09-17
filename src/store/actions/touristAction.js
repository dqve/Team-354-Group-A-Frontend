import {
  CREATE_TOURISTS_STARTED,
  CREATE_TOURISTS_SUCCEEDED,
  CREATE_TOURISTS_FAILED,
} from "../constants/index"

const fetchTouristsSucceeded = (tasks) => ({
  type: CREATE_TOURISTS_SUCCEEDED,
  payload: {
    tasks,
  },
})

const fetchTouristsFailed = (error) => ({
  type: CREATE_TOURISTS_FAILED,
  payload: {
    error,
  },
})

const fetchTouristsStarted = () => ({
  type: CREATE_TOURISTS_STARTED,
})

const fetchTouristSites = () => {
  return (dispatch) => {
    dispatch(fetchTouristsStarted())

    setTimeout(() => dispatch(fetchTouristsSucceeded()), 1000)
    // api
    //   .fetchTasks()
    //   .then((resp) => {
    //     dispatch(fetchTouristsSucceeded(resp.data))
    //   })
    //   .catch((err) => {
    //     dispatch(fetchTouristsFailed(err.message))
    //   })
  }
}

export default fetchTouristSites