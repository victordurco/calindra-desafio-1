import styled from 'styled-components';

export default function ProductCard({ name, type, score }) {
    return (
        <Container>
            <Prop>Name: </Prop><Description>{name}</Description>
            <Prop>Type: </Prop><Description>{type}</Description>
            <Prop>Score: </Prop><Description>{score}</Description>
        </Container>
    );
}

const Container = styled.div`
    width: 220px;
    height: 200px;
    border-radius: 6px;
    background-color: #F1E9DA;
    margin: 0 15px 15px 0;
    padding: 10px;
`;

const Prop = styled.span`
    font-size: 16px;
    color: black;
    font-weight: bold;
`;

const Description = styled.div`
    font-size: 16px;
    color: #444;
    margin-bottom: 5px;
`;