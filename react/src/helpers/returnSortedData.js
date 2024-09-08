// Function to return sorted data based on the sort flag
function returnSortedData({ universities, sort }) {
    // Check if sorting is required
    if (sort) {
        // Create a copy of the universities array and sort it by name
        const sortedUniversities = [...universities].sort((a, b) => {
            return a.name.localeCompare(b.name);
        });
        // Return the sorted array
        return sortedUniversities;
    }
    // If no sorting is required, return the original array
    return universities;
}

export { returnSortedData };
