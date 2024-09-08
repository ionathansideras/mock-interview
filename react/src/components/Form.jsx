import { fetchUniversities } from "../api/fetchUniversities";

export default function Form({ inputValue, setInputValue, setUniversities }) {
    function handleFromSubmit(e) {
        e.preventDefault();
        // Fetch universities based on the input value
        fetchUniversities(inputValue).then((universities) => {
            // Update the universities state with the fetched data
            setUniversities(universities);
        });
    }

    return (
        <form onSubmit={handleFromSubmit}>
            <input
                type="text"
                value={inputValue}
                // Update the input value state on change
                onChange={(e) => setInputValue(e.target.value)}
            />
            <button>Submit</button>
        </form>
    );
}
