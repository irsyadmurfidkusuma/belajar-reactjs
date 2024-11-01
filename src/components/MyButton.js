import React from "react"
const MyButton = (props) => {
    return (
        <div>
            <MyButton onClick={() => props.clicked()}>Klik Saya!</MyButton>
        </div>
    )
}

export default MyButton