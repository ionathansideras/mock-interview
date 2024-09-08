async function fetchUniversities(country) {
    // Fetch data from the API
    const response = await fetch(
        `http://universities.hipolabs.com/search?country=${country}`
    );
    // Parse the response as JSON
    const universities = await response.json();
    // Return the list of universities
    return universities;
}

export { fetchUniversities };
