<template>
  <v-row justify="center">
    <v-col cols="12" sm="8">
      <v-card class="pa-5 pb-7 primary flat">
        <v-card-title class="pa-0 mb-2"
          >Let’s find your ideal car
        </v-card-title>
        <small class="body-2">Pick-up Location</small>
        <v-text-field
          @input="searchLocation"
          v-model="term"
          placeholder="city, airport, station, region and district..."
          outlined
          return-object
          color="secondary"
          hide-details
          solo
        ></v-text-field>
        <v-card v-for="results in searchResults" :key="results.placeKey">
          <v-card-title>{{ results.name }}</v-card-title>
          <v-card-subtitle v-if="results.city"
            >{{ results.city }}, {{ results.country }}</v-card-subtitle
          >
          <v-card-subtitle v-else>{{ results.country }}</v-card-subtitle>
        </v-card>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import SearchService from '@/services/SearchService.js'
export default {
  data() {
    return {
      term: '',
      searchResults: [],
    }
  },
  methods: {
    searchLocation() {
      if (this.term.length > 1) {
        SearchService(this.$axios)
          .searchLocation(this.term)
          .then((response) => {
            this.searchResults = response.data.results.docs
          })
      } else {
        this.searchResults = []
      }
    },
  },
}
</script>
