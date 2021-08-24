import React from 'react';
import Typography from '@material-ui/core/Typography';
import Rating from '@material-ui/lab/Rating';

const ProductList = () => {
    return (
        <div className="product-card">
            <div className="product-card-subtitle">
                <Typography variant="body1">
                    12323232323
                </Typography>
                <span className="badge">xls</span>
                <span className="pipe">|</span>
                <Rating name="read-only" value={5} readOnly />
                <span className="pipe">|</span>
                <Typography variant="body1">
                    14 reviews
                </Typography>
                <span className="pipe">|</span>
                <Typography variant="body1">
                    104 subscribers
                </Typography>
                <span className="pipe">|</span>
                <Typography variant="body1" color="primary">
                    +14
                </Typography>
            </div>
            <div className="product-card-title">
                <Typography variant="h6" component="h3" color="primary" style={{ fontWeight: 'bold' }}>
                    Contract Bonus
                </Typography>
            </div>

            <div className="product-card-description">
                <Typography variant="body1" component="h2" noWrap>
                    Description upto 200 characters Description upto 200 characters Description upto 200 characters  Description upto 200 characters Description upto 200 characters Description upto 200 characters


                </Typography>
            </div>
        </div>
    )
}

export default ProductList;
