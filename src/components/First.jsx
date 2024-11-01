import React from "react"
import { useNavigate } from "react-router-dom"

const First = () => {
    const navigate = useNavigate()

    return (
        <>
            <h3>Ini Halaman Home</h3>
            <button onClick={() => navigate('/about')}>Hal About</button>
        </>
    )
}

export default First