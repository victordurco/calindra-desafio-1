import styled from 'styled-components';
import {FaSearch} from 'react-icons/fa';

export default function SearchBar() {
    return(
        <Container>
            <Form>
                <Input placeholder="Digite sua busca" />
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