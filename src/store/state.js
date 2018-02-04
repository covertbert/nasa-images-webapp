export default {
  searchQuery: JSON.parse(sessionStorage.getItem('searchQuery')) || null,
  searchResults: JSON.parse(sessionStorage.getItem('searchResults')) || null,
  searchResultsLoaded: JSON.parse(sessionStorage.getItem('searchIsLoaded')) || false,
  currentResultData: JSON.parse(sessionStorage.getItem('currentResultData')) || false,
  currentResultLoaded: JSON.parse(sessionStorage.getItem('currentResultLoaded')) || false
}
