# CryptoCurrencyApp
CryptoCurrencyApp is a fintech application that provides detailed information about various cryptocurrencies. The app offers a seamless user experience with multiple features including a tab bar for easy navigation, real-time market updates, search functionality, news articles, and user profile management.

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
    npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.


## Features

### Home
![Home Screen](path/to/home_screen_image.jpg)
- **User Profile:** Displays the user's name and profile picture at the top.
- **Cryptocurrency List:** A comprehensive list of cryptocurrencies. Clicking on any cryptocurrency provides detailed information about it.
- **Dynamic Data:** The list of cryptocurrencies is fetched dynamically from an API, ensuring that the data is always up-to-date.

### Market
![Market Screen](path/to/market_screen_image.jpg)
- **Gainers and Losers:** View all coins that have gained or lost value, displayed in separate swipes for easy navigation.
- **Dynamic Data:** The gainers and losers data is fetched dynamically from an API, providing real-time market updates.

### Search
![Search Screen](path/to/search_screen_image.jpg)
- **Search Functionality:** Allows users to search for specific bitcoins or cryptocurrencies.
- **Search Results:** Displays a list of cryptocurrencies related to the search query. Clicking on a result provides detailed information about the selected cryptocurrency.
- **Dynamic Data:** The search results are fetched dynamically from an API, ensuring accurate and up-to-date information.

### News
![News Screen](path/to/news_screen_image.jpg)
- **Latest News:** Provides up-to-date news articles about cryptocurrencies.
- **External Links:** Clicking on a news article opens the source in a Chrome tab for detailed reading.
- **Dynamic Data:** News articles are fetched dynamically from an API, ensuring that the latest news is always available.

### Profile
![Profile Screen](path/to/profile_screen_image.jpg)
- **Profile Management:** Users can update their profile information.
- **Logout:** Option to log out of the application.

## Authentication
![Splash Screen](path/to/splash_screen_image.jpg)
- **Splash Screen:** The app starts with a splash screen.
![Login Screen](path/to/login_screen_image.jpg)
- **Login/Register:** Users need to log in or register to access the app's features.
- **Authentication:** Secure authentication process for user data protection.

## Getting Started

### Prerequisites
- Node.js
- npm or yarn

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/gautamkshah/CryptoCurrencyApp.git


## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.
