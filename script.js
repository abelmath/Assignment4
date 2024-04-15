// Function to perform a search
function search() {
    // Define your API key and retrieve the search query from the input field
    const apiKey = 'AE2A704629AF46DCB7698824C833148B';
    const searchQuery = document.getElementById('searchQuery').value.trim();

    // Check if the search is empty
    if (searchQuery === '') {
        alert('Please enter a search query.');
        return;
    }

    // Construct the API URL with the search query and API key
    const apiUrl = `https://api.scaleserp.com/search?q=${searchQuery}&api_key=${apiKey}`;

    // Make a GET request to the API
    axios.get(apiUrl)
        .then(response => {
            // Handle the response and update the search results on the webpage
            const searchResults = document.getElementById('search-results');
            searchResults.innerHTML = `
                <h2>Search Results for "${searchQuery}"</h2>
                <p>Student ID: 200552821</p> <!-- Include your student ID -->
                <p>Name: Abel Sam Mathew</p> <!-- Include your name -->
                <pre>${JSON.stringify(response.data, null, 2)}</pre> <!-- Display API response -->
            `;
        })
        .catch(error => {
            // Log any errors that occur
            console.error('Error fetching data:', error);
        });
}
