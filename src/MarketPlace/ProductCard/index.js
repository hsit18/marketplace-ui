import React from 'react';
import Typography from '@material-ui/core/Typography';
import Rating from '@material-ui/lab/Rating';
import '../index.css';

const ProductCard = () => {
    return (
        <div className="product-card">
            <div className="product-card-title">
                <Typography variant="body1" component="h3" color="primary" style={{ fontWeight: 'bold' }}>
                    Contract Bonus
                </Typography>

            </div>
            <div className="product-card-subtitle">
                <span className="badge">xls</span>
                <span className="pipe">|</span>
                <Rating name="read-only" value={5} readOnly size="small" />
                <span className="pipe">|</span>
                <Typography variant="subtitle2">
                    14 reviews
                </Typography>
            </div>
            <div className="product-source">
                Source: https://dgs.verizon.com
            </div>

            <div className="product-card-description">
                <Typography variant="subtitle2" component="p" paragraph>
                    Description upto 200 characters Description upto 200 characters Description upto 200 characters  Description upto 200 characters Description upto 200 characters Description upto 200 characters
                </Typography>
            </div>
            <div className="product-footer">
                <div class="subscribers"><img src="img/user.svg" /> 143</div>
                <div class="add_to_cart"><img src="img/add_to_cart.svg" height="30px;" /></div>
            </div>
        </div>
    )
}

export default ProductCard;
