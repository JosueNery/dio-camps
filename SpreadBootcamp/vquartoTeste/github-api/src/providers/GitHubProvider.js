import React, { createContext, useCallback, useState } from 'react';
import api from '../services/api'

export const GitHubContext = createContext({
    hasUser: false,
    loading: false,
    user: {},
    repositories: [],
    starred: [],
});

const GitHubProvider = ({ children }) => {

    const [gitHubState, setGitHubState] = useState({
        hasUser: false,
        loading: false,
        user: {
            avatar: undefined,
            login: undefined,
            name: undefined,
            html_url: undefined,
            blog: undefined,
            company: undefined,
            location: undefined,
            followers: 0,
            following: 0,
            public_gists: 0,
            public_repos: 0,
        },
        repositories: [],
        starred: [],
    });

    const getUser = (username) => {
        setGitHubState(prevState => ({
            ...prevState,
            loading: !prevState.loading,
        }));

        api.get(`users/${username}`)
            .then(({ data }) => {
                setGitHubState(prevState => ({
                    ...prevState,
                    hasUser: true,
                    user: {
                        avatar: data.avatar_url,
                        login: data.login,
                        name: data.name,
                        html_url: data.html_url,
                        blog: data.blog,
                        company: data.company,
                        location: data.location,
                        followers: data.followers,
                        following: data.following,
                        public_gists: data.public_gists,
                        public_repos: data.public_repos,
                    },
                }));
            }).finally(() => {
                setGitHubState((prevState) => ({
                    ...prevState,
                    loading: !prevState.loading,
                }));
            })
    };

    const contextValue = {
        gitHubState,
        getUser: useCallback((username) => getUser(username), []),
    }

    return (
        <GitHubContext.Provider value={contextValue}>{children}</GitHubContext.Provider>
    );
};

export default GitHubProvider;