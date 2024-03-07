import React from 'react';
import './Breadcrum.css';
import arrowIcon from '../Assets/breadcrum_arrow.png';

const Breadcrum = (props) => {
    const{product}=props;
    
    return (
        <div className="breadcrumb">
            HOME
            <img className='img' src={arrowIcon} alt='' />
            Shop
            <img className='img' src={arrowIcon} alt='' />
            {product.category}   
            <img className='img' src={arrowIcon} alt='' />
            {product.name}
           
        </div>
    );
};

export default Breadcrum;
