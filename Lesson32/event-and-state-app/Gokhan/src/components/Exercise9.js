import { useState } from "react";

export const Exercise9 = () => {
    // Buttons with id and with label
    const [buttons, setButtons] = useState([
        { id: 1, label: 'Button 1', color: "blue" },
        { id: 2, label: 'Button 2', color: "red" },
        { id: 3, label: 'Button 3', color: "green" },
    ]);

    // Function of change Buttons color
    const handleColorChange = (id) => {
        setButtons((prevButtons) =>
            prevButtons.map((button) =>
                button.id === id
                    ? { ...button, color: button.color === "blue" ? "red" : "blue" }
                    : button
            )

        );
    };

    return (
        <div>
            {buttons.map((button) => (
                <button
                    key={button.id}
                    onClick={() => handleColorChange(button.id)}
                    style={{ backgroundColor: button.color, color: "white", margin: "10px", padding: "10px 20px" }}>
                    {button.label}
                </button>
            ))}
        </div>
    );
};