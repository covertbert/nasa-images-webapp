export default {
  searchResults: JSON.parse(sessionStorage.getItem('searchResults')) || null,
  searchResultsLoaded: JSON.parse(sessionStorage.getItem('searchIsLoaded')) || false
}
