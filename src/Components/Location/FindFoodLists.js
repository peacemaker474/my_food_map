import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import SearchForm from './SearchForm';
import StoreList from './StoreList';
import { kakaoSearch } from 'services/kakaoMap';

const LayerFood = styled.aside`
    width: 25%;
    height: 100%;
`;

const FindFoodLists = () => {
    const [searchKeyword, setSearchKeyword] = useState();
    const [getLists, setGetLists] = useState();
    const [page, setPage] = useState(1);

    useEffect(() => {
        kakaoSearch(searchKeyword, setGetLists, page);
    }, [searchKeyword, page]);

    return (
        <>
            <LayerFood>
                <SearchForm setSearchKeyword={setSearchKeyword}/>
                <StoreList getLists={getLists} setPage={setPage} />
            </LayerFood>
        </>
    )
}

export default FindFoodLists;