export default ($axios) => ({
  searchLocation(term) {
    return $axios.get(
      '/FTSAutocomplete.do?solrIndex=fts_en&solrRows=6&solrTerm=' + term
    )
  },
})
