import React, { useState } from "react";
import * as S from './styled';
import useGitHub from '../../hooks/githubHooks'

const Header = () => {

    const { getUser } = useGitHub();
    const [userNameForSearch, setUserNameForSearch] = useState();

    const submitGetUser = () => {
        if (!userNameForSearch) return;
        return getUser(userNameForSearch);
    }

    return (
        <header>
            <S.Wrapper>
                <input type="text" placeholder="Digite o username para pesquisa..." onChange={(event) => setUserNameForSearch(event.target.value)}></input>
                <button type="submit" onClick={submitGetUser}><span>Buscar</span></button>
            </S.Wrapper>

        </header>
    );
};

export default Header;