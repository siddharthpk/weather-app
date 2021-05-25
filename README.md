# Weather App

This repo hosts code for a minimalistic Weather App that allows users to input a desired location and retreive the current weather. 

# Before Deployment

- Run `npm install` to install all required dependencies.
- Create a `.env` file and add the following
    
        WEATHERSTACK_KEY = 'YOUR_API_KEY'
        MAPBOX_KEY = 'YOUR_API_KEY'
    
- Run `npm start` to run the node scripts 

- Visit `localhost:3000` in a browser window to see your app,

# Concepts learned:
  - Asynchronous JS
  - Callback Functions, Abstraction & Chaining
  - Error Handling
  - Data retreival from Mapbox & Weathestack APIs using HTTP requests
  - Exporting results to the user using APIs
  - Object destructuring 
  - Web Servers
  - Express! 
  - Serving Static & Dynamic assets
  - 404 Pages
  - Templating
  - Application Styling
  - API access from browser - Mapbox, Weatherstack
  - JSON HTTP Endpoint
  - UI Designing
  - Cloud Deployment

# Deployment

The web app is deployed to Heroku Dyno offered under GitHub Dev Pack. Give it about 15-30 seconds to load.

# Next Steps
- Add a Dockerfile
- Migrate to a Docker container
