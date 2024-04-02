// script.js
function searchFile() {
    const searchInput = document.getElementById('searchInput').value;
    // You can implement your own logic here to search for files in the root directory
    // For demonstration purposes, let's assume we have an array of file names:
    const fileNames = ['index.html', 'about.html', 'contact.html'];

    const searchResults = document.getElementById('searchResults');
    searchResults.innerHTML = ''; // Clear previous results

    const matchingFiles = fileNames.filter(fileName =>
        fileName.toLowerCase().includes(searchInput.toLowerCase())
    );

    if (matchingFiles.length > 0) {
        matchingFiles.forEach(file => {
            const resultItem = document.createElement('p');
            resultItem.textContent = file;
            searchResults.appendChild(resultItem);
        });
    } else {
        searchResults.textContent = 'No matching files found.';
    }
}
