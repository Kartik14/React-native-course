import React, { useContext, useEffect } from 'react';
import { Context } from '../context/authContext';

const AuthUserScreen = () => {
    const { initialAuth } = useContext(Context);
    useEffect(() => {
        initialAuth();
    }, [])

    return null;
}

export default AuthUserScreen;
