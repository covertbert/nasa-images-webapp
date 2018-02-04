export default {
  searchQuery: JSON.parse(sessionStorage.getItem('searchQuery')) || null,
  searchResults: JSON.parse(sessionStorage.getItem('searchResults')) || null,
  searchResultsLoaded: JSON.parse(sessionStorage.getItem('searchIsLoaded')) || false
}
