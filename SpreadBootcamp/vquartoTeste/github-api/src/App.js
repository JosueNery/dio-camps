import React from 'react';
import Layout from './components/layout';
import Profile from './components/profile';
import Repositories from './components/repositories';
import useGitHub from './hooks/githubHooks';

const App = () => {
  const { gitHubState } = useGitHub();

  return (
    <Layout>
      {gitHubState.hasUser ? <>
        {gitHubState.loading ? (<p>Loading</p>) :
          (
            <>
              <Profile />
              <Repositories />
            </>
          )}
      </> : <div>Nenhum usuario pesquisado</div>}

    </Layout>

  );
}

export default App;
