import React from 'react';
import { Link } from 'react-router-dom';

const Logo: React.FC = () => {
    return (
        <div className="mr-auto">
            <Link to="/">
                <span className="font-bold text-3xl">fiverr</span>
            </Link>
            <Link to='/' className="text-[#1dbf73] font-bold text-2xl">.</Link>
        </div>
    );
};

export default Logo;
