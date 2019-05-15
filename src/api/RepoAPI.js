import axios from 'axios';

export const getRepo = (repo, dispatch) => {
    dispatch({ type: "FETCHING_DATA"})
    axios.get("https://api.github.com/repos/thefreymaster/" + repo)
    .then(function (response) {
        dispatch({ type: "FETCH_COMPLETE", payload: response.data})
    })
    .catch(function (error) {
        console.log(error);
    });
}