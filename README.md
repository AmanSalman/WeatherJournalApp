# Weather Journal App

## Overview
The Weather Journal App is a user-friendly web application designed to let you record your feelings alongside current weather data. By entering your zip code, you can retrieve the latest weather conditions from the OpenWeatherMap API and see a snapshot of the temperature, along with your personal notes and the date.

## Key Features
- **Weather Data Retrieval**: Fetches real-time weather information based on your zip code using the OpenWeatherMap API.
- **Personal Notes**: Allows you to enter a brief description of how you’re feeling.
- **Data Display**: Shows the current temperature, the date, and your personal notes on the screen.

## Project Layout
The project includes the following files:

- `website/index.html`: The core HTML structure of the web page.
- `website/style.css`: Stylesheet for customizing the appearance of the web page.
- `website/app.js`: JavaScript file that handles the client-side functionality.
- `server.js`: Server-side script built with Express.js for handling requests.
- `package.json`: Contains project metadata and dependencies.
- `README.md`: This documentation file.

## Getting Started
To get started with the Weather Journal App, follow these steps:

1. Clone the repository:
    ```bash
    git clone https://github.com/AmanSalman/WeatherJournalApp.git
    ```
2. Navigate to the project directory:
    ```bash
    cd WeatherJournalApp
    ```
3. Install the required dependencies:
    ```bash
    npm install
    ```

## Running the App
1. Launch the server:
    ```bash
    npm run start
    ```
2. Open your browser and go to `http://localhost:3000` to start using the app.
