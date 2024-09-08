export default function Filter({ setSort }) {
    function handleInputChange(e) {
        const isChecked = e.target.checked;
        // Update the sort state based on checkbox value
        setSort(isChecked);
    }

    return (
        <>
            <label htmlFor="alphabetical-filter">Sort in alphabetical</label>
            <input
                type="checkbox"
                id="alphabetical-filter"
                onChange={handleInputChange}
            />
        </>
    );
}
