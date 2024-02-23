import React, { useContext } from 'react';
import { ShopContext } from '../context/shopcontext';
import { useParams } from 'react-router-dom';
import Breadcrum from '../components/Breadcurm/Breadcrum';

const Product = () => {
    const contextValue = useContext(ShopContext);
    const { productId } = useParams();
    const product = contextValue.find((e) => e.id === Number(productId));

    return (
        <div>
            <Breadcrum product={product}/>
            
            
        </div>
    )
};

export default Product;
