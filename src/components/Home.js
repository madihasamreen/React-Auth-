import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {
    let navigate = useNavigate();
    useEffect(() => {
        let authToken = sessionStorage.getItem('Auth Token')

        if (authToken) {
            navigate('/home')
        }

        if (!authToken) {
            navigate('/login')
        }
    }, [])

    const handleLogout = () => {
        sessionStorage.removeItem('Auth Token');
        navigate('/login')
    }
    return (
        <div>
            <p>Home</p>
            <button onClick={handleLogout}>Log Out</button>
        </div>
    )
}

export default Home