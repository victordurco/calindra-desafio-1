import { useState } from 'react';
import styled from 'styled-components';

import SearchBar from '../../components/SearchBar';
import ProductCard from '../../components/ProductCard';

export default function Home() {
    const [ products, setProducts ] = useState([]);

    return(
        <>
            <SearchBar 
                setProducts={setProducts}
            />
            <ProductsContainer>
            {
                products.map(product => 
                    <ProductCard 
                        key={product.id}
                        name={product.name}
                        type={product.type}
                        score={product._meta.score}
                    />)
            }
            </ProductsContainer>
        </>
    );
}

const ProductsContainer = styled.div`
    width: 100%;
    height: 100%;
    padding: 30px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    flex-direction: row;
`;