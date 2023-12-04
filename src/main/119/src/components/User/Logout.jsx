import axios from 'axios';
import React from 'react';

function Logout({ handleLogout }) {
    return (
        <div>
            <button onClick={handleLogout}>로그아웃</button>
        </div>
    );
}

export default Logout;