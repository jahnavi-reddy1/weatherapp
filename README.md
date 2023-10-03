# Weather Checker Web Application

This is a simple web application that allows users to check the current weather for a location. Users can enter a city or ZIP code, and the app will display weather data in a user-friendly format. It also provides error handling for invalid locations or API issues and allows users to switch between temperature units. Additionally, there's an optional geolocation feature for automatic weather retrieval based on the user's current location.

## Requirements

### 1. Homepage

Create a homepage with a straightforward user interface. It includes a search input field and a "Get Weather" button to initiate the weather request.

### 2. Weather Display

Display current weather conditions for the specified location. Include details like temperature, humidity, wind speed, and a weather description. We will use a weather API (e.g., OpenWeatherMap) to fetch this data.

### 3. Error Handling

Implement error handling for cases where the user enters an invalid location or when there's an issue with the API request. Ensure that error messages are user-friendly and guide users on what to do next.

### 4. Unit Selection

Allow users to switch between temperature units (Celsius and Fahrenheit). Implement a toggle or dropdown for unit selection, and update weather data accordingly.

### 5. Optional: Geolocation

Offer the option to use the user's geolocation to fetch weather data for their current location. Ensure proper handling of geolocation permissions.

### 6. Styling

Apply CSS styles to make the app visually appealing, focusing on layout, color scheme, and readability.

### 7. Responsive Design

Ensure that the app is responsive and functions well on both desktop and mobile devices. Thoroughly test its usability on various screen sizes.

## Installation and Usage

1. Clone this repository to your local machine.

   ```bash
   git clone https://github.com/yourusername/weather-checker.git
   ```

2. Navigate to the project directory.

   ```bash
   cd weather-checker
   ```

3. Open `index.html` in your web browser to use the application.

## API Integration

This application uses the [OpenWeatherMap API](https://openweathermap.org/api) to fetch weather data. To use the API, you will need to obtain an API key by signing up on their website. Once you have the API key, replace `'YOUR_API_KEY'` in the JavaScript code with your actual API key.

```javascript
const apiKey = 'YOUR_API_KEY';
```

## Technologies Used

- HTML
- CSS
- JavaScript
- Weather API (e.g., OpenWeatherMap)

## Contributing

If you'd like to contribute to this project or report issues, please open a new issue or pull request on the GitHub repository.
