import React from 'react';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';

import ProductCard from './ProductCard';

const MarketPlace = () => {
    return (
        <div className="product-container">
            <div className="product-title">
                <Typography variant="body1">
                    MarketPlace / All Products
                </Typography>
                <span className="add-cart">2</span>
            </div>
            <div className="product-search">
                <TextField id="outlined-basic" label="" variant="outlined" size="small" placeholder="Search Products" fullWidth InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <SearchIcon />
                        </InputAdornment>
                    ),
                }} />
                <img className="filtericon" src="img/filter.svg" />
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
