const initialState = {
    repo: {
        id: "",
        full_name: "",
        isPrivate: false,
        size: 0
    },
    isFetching: false
};

const reducer = (state = initialState, action) => {
    const newState = { ...state };

    switch (action.type) {
        case "UPDATE_REPO_TO_SEARCH":
            newState.repoToSearch = action.payload.repoToSearch
            break;
        case "FETCHING_DATA":
            newState.isFetching = true;
            break;
        case "FETCH_COMPLETE":
            let { repo } = newState;
            newState.isFetching = false;
            repo.full_name = action.payload.full_name;
            repo.id = action.payload.id;
            repo.isPrivate = action.payload.private;
            repo.size = action.payload.size;
            break;
        default:
            break;
    }
    return newState;
};

export default reducer;