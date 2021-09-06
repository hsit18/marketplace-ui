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
                <Typography variant="subtitle2">
                    12323232323
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
            <div className="product-card-description">
                <Typography variant="subtitle2" component="p" paragraph>
                    Description upto 200 characters Description upto 200 characters Description upto 200 characters  Description upto 200 characters Description upto 200 characters Description upto 200 characters
                </Typography>
            </div>
        </div>
    )
}

export default ProductCard;
