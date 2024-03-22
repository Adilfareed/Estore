import React, { useContext } from 'react';
import { ShopContext } from '../context/shopcontext';
import { useParams } from 'react-router-dom';
import Breadcrum from '../components/Breadcurm/Breadcrum';
import Productdisplay from '../components/Product_display/Productdisplay';


const Product = () => {
    const { all_product } = useContext(ShopContext);
    const { productId } = useParams();

    if (!productId) {
        
        return <div>No product ID provided</div>;
    }

    
    const product = all_product.find((e) => e.id === Number(productId));

    if (!product) {
       
        return <div>Product not found</div>;
    }

    return (
        <div>
           <Breadcrum product={product} />
           <Productdisplay product={product}/>
          
        </div>
    );
};

export default Product;
