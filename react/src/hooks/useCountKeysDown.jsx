import { useState, useEffect } from "react";

export default function useCountKeysDown() {
    // State to store the count of keys down
    const [count, setCount] = useState(0);

    // useEffect to add event listeners when the component is mounted
    useEffect(() => {
        // Function to handle key down event
        const handleKeyDown = () => {
            setCount(count + 1);
        };

        window.addEventListener("keydown", handleKeyDown);

        // Cleanup function to remove event listeners when the component is unmounted
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [count]);

    return count;
}
