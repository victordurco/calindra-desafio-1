import { useState } from 'react';
import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';

import { getSearchResult } from '../../services/searchProduct.services';

export default function SearchBar({setProducts}) {
    const [ search, setSearch ] = useState('');
 

    const handleSubmit = (e) => {
        e.preventDefault();
        let searchString = search.replace(' ', '%20');
        getSearchResult(searchString)
            .then((res)=>{
                setProducts(res.data.products);
            })
            .catch((err)=> console.error(err));
    };

    return(
        <Container>
            <Form onSubmit={handleSubmit}>
                <Input 
                    placeholder="Digite sua busca" 
                    onChange={(e)=> setSearch(e.target.value)}
                />
                <SearchButton>
                    <FaSearch />
                </SearchButton>
            </Form>
        </Container>
    );
}

const Container = styled.div`
    width: 100%;
    height: 70px;
    background-color: #2E294E;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Form = styled.form`
    width: 80%;
    max-width: 400px;
    height: 48px;
    display: flex;
    align-items: center;
`;

const Input = styled.input`
    width: 80%;
    height: 100%;
    border-bottom-left-radius: 10px;
    border-top-left-radius: 10px;
    border: none;
    padding: 0 10px;
    font-size: 18px;
    

    ::placeholder{
        font-size: 18px;
        padding: 0 10px;
    }
`;

const SearchButton = styled.button`
    width: 20%;
    height: 100%;
    border-bottom-right-radius: 10px;
    border-top-right-radius: 10px;
    border: none;
`;