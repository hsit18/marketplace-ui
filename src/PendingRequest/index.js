import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';

import './index.css';

const MarketPlace = () => {

    return (
        <div className="container pending-request-container">
            <div className="left-section">
                <div className="product-title">
                    <Typography variant="body1">
                        MarketPlace / Pending Request
                    </Typography>
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

            </div>
            <div className="right-section">
                <div className="right-header">
                    <div className="header">
                        <Typography variant="body1">
                            133232323232323232
                        </Typography>
                        <div className="product-card-title">
                            <Typography variant="body1" component="h3" color="primary" style={{ fontWeight: 'bold' }}>
                                Contract Bonus
                            </Typography>
                        </div>
                    </div>
                    <Button variant="outlined" color="primary" size="small">
                        Approve
                    </Button>
                    <Button variant="outlined" color="primary" size="small">
                        Reject
                    </Button>
                </div>
                <div className="right-content">
                    <div className="label-value">
                        <Typography variant="subtitle2" style={{ fontWeight: 'bold' }}>
                            Requested By
                        </Typography>
                        <Typography variant="body2">
                            VenkataRamana
                        </Typography>
                    </div>
                    <div className="right-row">
                        <div className="label-value">
                            <Typography variant="subtitle2" style={{ fontWeight: 'bold' }}>
                                Biz Reason ForAccess
                            </Typography>
                            <Typography variant="body2">
                                Analysis Projet- FIT2
                            </Typography>
                        </div>
                        <div className="label-value">
                            <Typography variant="subtitle2" style={{ fontWeight: 'bold' }}>
                                Requested on
                            </Typography>
                            <Typography variant="body2">
                                20 May 2021
                            </Typography>
                        </div>
                        <div className="label-value">
                            <Typography variant="subtitle2" style={{ fontWeight: 'bold' }}>
                                LastUpdated
                            </Typography>
                            <Typography variant="body2">
                                21 May 2021
                            </Typography>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MarketPlace;
