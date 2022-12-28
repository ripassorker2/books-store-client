import React from 'react';
import { Outlet } from 'react-router-dom';

const OfferLayout = () => {
    return (
        <div>
            <div>
                limit offer
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default OfferLayout;