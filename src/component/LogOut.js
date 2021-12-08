import React from 'react'

export default function LogOut() {
const handleClick= () =>{
    localStorage.removeItem('token');
    window.location.reload()
}
    return (
        <div>
            <button type= "submit" onClick={handleClick}>Log Out</button>
        </div>
    )
}
