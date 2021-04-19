# Booking.com Technical Test

## Installation

Use the package manager npm to install all dependencies 

```bash
npm install
```

Run the project locally 

```bash
npm run dev
```


## Framework

I have used the front end framework Vue.js to implement the given user stories. I chose this framework as I have the most experience in developing applications using Vue. Within the code, I have incorporated the UI framework Vuetify as I think visually this creates a very clean, and similar style to the rentalcars.com website. Vuetify offers a simple and easy to use grid design using rows and columns, this helps when developing responsive code for different screensizes, display breakpoints are avaible for you to use depending on the desired screen size for the application. In this case I have developed the seach widget for a desktop screen.

To create the search widget in the index.vue file I used a text field to allow the user to enter their desired search term, however if I had more time to complete this task I would have made the use of an auto complete field rather than a text field. This would have worked more smoothly and displayed the items in a better format, visually. 

Once the user begins to type in the search term, I am using axios to make a GET request to the search api, I have set the baseUrl of this api within the nuxt.config.js file and then called upon it within services/SearchService.js. Within the SearchService.js file I am passing in the inputted search term and adding it to the api url to then get the desired response from the request. Within my index file I have created a method which runs this request and returns the response, this is then deduced and assigned to an array to enable the search results to be displayed on the screen. I have set the method to only run once the user has entered 2 or more alphanumeric characters and subsequently the results are cleared and reset once the characters have been deleted.  
