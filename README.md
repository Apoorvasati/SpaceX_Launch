
# SpaceX Launches App

This project is a React Native app that displays a list of SpaceX launches fetched from the Space X API. It includes filter and search functionality, as well as user authentication with login and signup features.

# Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.



## Prerequisites

Software you need to install

node.js

Install dependencies:

    "@expo/metro-runtime": "~3.1.3",
    "@react-navigation/native": "^6.1.16",
    "@react-navigation/native-stack": "^6.9.25",
    "axios": "^1.6.8",
    "expo": "~50.0.13",
    "react": "18.2.0",
    "react-dom": "^18.2.0",
    "react-native": "0.73.5",
    "react-native-paper": "^5.12.3",
    "react-native-web": "^0.19.10",
    "react-redux": "^9.1.0",
    "redux": "^5.0.1"



To start the app you have to use this command:

    npm expo




## Overview


#### API Integration with Launches Grid Page   :

The application retrieves launches from the SpaceX API through the following endpoint using axios library.


    https://api.spacexdata.com/v4/launches

The launches grid page displays a visually appealing list of launches fetched from the Space X API. Each launch item includes the following:


Image (mission_patch), 
Title (mission_name), 
Launch date in DD/MM/YYYY (launch_date_local), 
Rocket (rocket_name), 
Launch site name (site_name).

#### Filter and Search Functionality
The launches list page includes filter and search functionality to help users find specific launches.

#### User Authentication
The app includes user authentication with login and signup features.
Login with email and password, Signup with email and password.

Redux is employed for state management, overseeing the following states:

authReducer and rootReducer.
