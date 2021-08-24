import React from 'react';
import Typography from '@material-ui/core/Typography';

import ProductFilter from '../ProductFilter';
import ProductCard from '../ProductCard';

const MarketPlace = () => {
    return (
        <div className="product-container">
            <div className="product-title">
                <Typography variant="body1">
                    MarketPlace / All Products
                </Typography>

            </div>
            <div className="product-list">
                <ProductCard card={{}} />

                <ProductCard card={{}} />

                <ProductCard card={{}} />

                <ProductCard card={{}} />

                <ProductCard card={{}} />

                <ProductCard card={{}} />

                <ProductCard card={{}} />
                <ProductCard card={{}} />

                <ProductCard card={{}} />

                <ProductCard card={{}} />

                <ProductCard card={{}} />

                <ProductCard card={{}} />

                <ProductCard card={{}} />

            </div>
        </div>
    )
}

export default MarketPlace;
