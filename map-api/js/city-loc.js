document.addEventListener('DOMContentLoaded', function () {
    const locationInput = document.getElementById('location-input');
    const clearButton = document.getElementById('clear-button');
    const resultsContainer = document.getElementById('results');

    let placesService;

    // Initialize the Google Places service
    function initPlacesService() {
        placesService = new google.maps.places.PlacesService(document.createElement('div'));
    }

    // Function to handle the search and display results
    function searchLocation() {
        const query = locationInput.value;

        if (!query) {
            return; // No query, so do nothing
        }

        placesService.textSearch({
            query: query,
        }, function (results, status) {
            if (status === google.maps.places.PlacesServiceStatus.OK) {
                // Clear previous results
                resultsContainer.innerHTML = '';

                // Display new results
                results.innerHTML = '<ul>';
                results.innerHTML += results.map(function (result) {
                    return '<li>' + result.name + '</li>';
                }).join('');
                results.innerHTML += '</ul>';
            } else {
                // Handle errors
                console.error('Error:', status);
            }
        });
    }

    // Add a listener for the input field
    locationInput.addEventListener('input', searchLocation);

    // Add a listener for the clear button
    clearButton.addEventListener('click', function () {
        locationInput.value = '';
        resultsContainer.innerHTML = '';
    });

    // Initialize the Places service when the page loads
    initPlacesService();
});
