import { useState } from "react";

export const Exercise10 = () => {
    const [message, setMessage] = useState('');

    const handleDoubleClick = () => {
        const newMessage = 'Button was double-clicked!';
        setMessage(newMessage);
        console.log(newMessage);
       
    };

    return (
        <div>
            <button onDoubleClick={handleDoubleClick}>Click</button>
            {message && <p>{message}</p>}
        </div>
    );
};