import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Popover from '@material-ui/core/Popover';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';
import ArrowForward from '@material-ui/icons/ArrowForward';
import { makeStyles } from '@material-ui/core/styles';
import ProductCard from './ProductCard';

const useStyles = makeStyles(theme => ({
  popover: {
    pointerEvents: 'none',
  },
  popoverContent: {
    pointerEvents: 'auto',
  },
}));

const MarketPlace = () => {
    const classes = useStyles();

    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };


    const open = Boolean(anchorEl);

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
                <ProductCard card={{}} click={handleClick} close={handleClose} />
                <ProductCard card={{}} click={handleClick} close={handleClose} />
                <ProductCard card={{}} click={handleClick} close={handleClose} />
                <ProductCard card={{}} click={handleClick} close={handleClose} />
                <ProductCard card={{}} click={handleClick} close={handleClose} />
                <ProductCard card={{}} click={handleClick} close={handleClose} />
                <ProductCard card={{}} click={handleClick} close={handleClose} />
                <ProductCard card={{}} click={handleClick} close={handleClose} />
                <ProductCard card={{}} click={handleClick} close={handleClose} />
                <ProductCard card={{}} click={handleClick} close={handleClose} />
                <ProductCard card={{}} click={handleClick} close={handleClose} />
                <ProductCard card={{}} click={handleClick} close={handleClose} />
                <ProductCard card={{}} click={handleClick} close={handleClose} />
                <ProductCard card={{}} click={handleClick} close={handleClose} />
                <ProductCard card={{}} click={handleClick} close={handleClose} />
                <ProductCard card={{}} click={handleClick} close={handleClose} />
            </div>

            <Popover
                id={open ? "product-detail" : undefined}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                className={classes.popover}
                classes={{
                  paper: classes.popoverContent,
                }}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 256,
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                PaperProps={{onMouseEnter: handleClick, onMouseLeave: handleClose}}
                disableRestoreFocus
            >
                <div className="product-card-content">
                    <Typography variant="subtitle1" component="h3" style={{ fontWeight: 'bold' }}>
                        Available Formats
                    </Typography>
                    <div className="product-card-subtitle">
                        <span className="badge">xls</span>
                    </div>
                    <div className="product-dates">
                        <div className="col">
                            <Typography variant="caption" component="p" style={{ fontWeight: 'bold' }}>
                                Date Created
                            </Typography>
                            <Typography variant="caption" component="p">
                                12 May 2021
                            </Typography>
                        </div>

                        <div className="col">
                            <Typography variant="caption" component="p" style={{ fontWeight: 'bold' }}>
                                Date Modified
                            </Typography>
                            <Typography variant="caption" component="p">
                                14 May 2021
                            </Typography>
                        </div>
                    </div>
                    <div className="product-source product-download">
                        <img src="img/download.svg" /> https://dgs.verizon.com
                    </div>
                    <div className="attributes">
                        <span className="chip">
                            CUST
                        </span>
                        <span className="chip">
                            PROS
                        </span>
                    </div>
                    <Button variant="outlined" color="primary" endIcon={<ArrowForward />}>
                        View All Details
                    </Button>
                </div>
            </Popover>
        </div>
    )
}

export default MarketPlace;
