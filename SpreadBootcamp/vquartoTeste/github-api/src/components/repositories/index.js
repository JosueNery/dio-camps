import React from "react";
import RepositoryItem from "./repository-item";
import * as S from "./styled";

const Repositories = () => {
    return (
        <S.WrapperTabs
            selectedTabClassName="is-selected"
            selectedTabPanelClassName="is-selected">

            <S.WrapperTabList>
                <S.WrapperTab>Repositories</S.WrapperTab>
                <S.WrapperTab>Starred</S.WrapperTab>
            </S.WrapperTabList>
            <S.WrapperTabPanel>
                <RepositoryItem name="josue-nery" linkToRepo="https://github.com/JosueNery/JosueNery" fullName="JosueNery/JosueNery" />
            </S.WrapperTabPanel>
            <S.WrapperTabPanel>
                <RepositoryItem name="dio-camps" linkToRepo="https://github.com/JosueNery/dio-camps" fullName="JosueNery/dio-camps" />
            </S.WrapperTabPanel>

        </S.WrapperTabs>
    )
};

export default Repositories;