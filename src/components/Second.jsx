import React from "react"
import { useNavigate } from "react-router-dom"

const Second = () => {
    const navigate = useNavigate()
    return (
        <>
            <h3>Halaman About</h3>
            <button onClick={() => navigate('/')}>Hal Home</button>

        </>
    )
}

export default Second
