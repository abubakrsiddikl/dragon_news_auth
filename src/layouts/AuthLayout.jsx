import React from 'react';
import { Outlet } from 'react-router-dom';

const AuthLayout = () => {
    return (
        <div>
            auth AuthLayout
            <Outlet></Outlet>
        </div>
    );
};

export default AuthLayout;