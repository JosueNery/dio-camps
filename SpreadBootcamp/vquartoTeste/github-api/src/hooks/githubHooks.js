import { useContext } from "react";
import { GitHubContext } from "../providers/GitHubProvider";

const useGitHub = () => {
    const { gitHubState, getUser } = useContext(GitHubContext);

    return { gitHubState, getUser };
};

export default useGitHub;