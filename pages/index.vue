<template>
  <v-row justify="center">
    <v-col>
      <v-card class="pa-5 pb-7 primary flat">
        <v-card-title class="pa-0 mb-2"
          >Let’s find your ideal car
        </v-card-title>
        <v-row>
          <v-col cols="6">
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
          </v-col>
          <v-col cols="2">
            <small class="body-2">Pick-up Date</small>
            <v-menu
              v-model="menu3"
              :close-on-content-click="false"
              :nudge-right="40"
              transition="scale-transition"
              offset-y
              color="secondary"
              min-width="290px"
            >
              <template v-slot:activator="{ on }">
                <v-text-field
                  v-model="pickUpDate"
                  label="Pick up date"
                  prepend-icon=""
                  append-icon="mdi-calendar"
                  readonly
                  outlined
                  solo
                  color="secondary"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker
                v-model="pickUpDate"
                @input="menu3 = false"
              ></v-date-picker>
            </v-menu>
          </v-col>
          <v-col cols="2">
            <small class="body-2">Drop-off Date</small>
            <v-menu
              v-model="menu2"
              :close-on-content-click="false"
              :nudge-right="40"
              transition="scale-transition"
              offset-y
              min-width="290px"
              color="secondary"
            >
              <template v-slot:activator="{ on }">
                <v-text-field
                  v-model="dropOffDate"
                  label="Drop off date"
                  prepend-icon=""
                  append-icon="mdi-calendar"
                  readonly
                  outlined
                  solo
                  color="secondary"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker
                v-model="dropOffDate"
                @input="menu2 = false"
              ></v-date-picker>
            </v-menu>
          </v-col>
          <v-col cols="2">
            <v-btn class="mt-6 v-btn--large" block color="success">
              Search
            </v-btn>
          </v-col>
        </v-row>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import SearchService from '@/services/SearchService.js'
export default {
  data() {
    return {
      menu2: false,
      menu3: false,
      term: '',
      searchResults: [],
      pickUpDate: '',
      dropOffDate: '',
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
<style lang="scss">
.v-btn {
  &--large {
    height: 56px !important;
  }
}
</style>
