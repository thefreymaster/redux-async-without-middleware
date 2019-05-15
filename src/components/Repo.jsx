import React, { Component } from 'react';
import { connect } from "react-redux";

import logo from '../logo.svg';

import { getRepo } from '../api/RepoAPI';

class Parks extends Component {
    render() {
        const { getRepoInformation, isFetching, name, id, isPrivate, size, repoToSearch, updateRepoToSearch } = this.props;
        return (
            <div>
                {isFetching && <img src={logo} className="App-logo" alt="logo" />
                }
                {
                    !isFetching
                    &&
                    <React.Fragment>
                        <input value={repoToSearch} onChange={updateRepoToSearch} />
                        <button onClick={() => getRepoInformation(repoToSearch)}>Get Repo Information</button>
                    </React.Fragment>
                }
                {
                    id !== ''
                    &&
                    <div>
                        <p>Name: {name}</p>
                        <p>id: {id}</p>
                        <p>private: {isPrivate ? 'true' : 'false'}</p>
                        <p>size: {size}</p>
                    </div>
                }
            </div>
        )
    }
}
const mapStateToProps = state => {
    const { repo, isFetching, repoToSearch } = state;
    const { isPrivate, full_name, id, size } = repo;
    return ({
        name: full_name,
        id: id,
        isPrivate: isPrivate,
        size: size,
        isFetching: isFetching,
        repoToSearch: repoToSearch
    })

};

const mapDispachToProps = dispatch => {
    return {
        getRepoInformation: (repo) => getRepo(repo, dispatch),
        updateRepoToSearch: (e) => dispatch({ type: "UPDATE_REPO_TO_SEARCH", payload: {repoToSearch: e.target.value}})
    };
};

export default connect(
    mapStateToProps,
    mapDispachToProps
)(Parks);
