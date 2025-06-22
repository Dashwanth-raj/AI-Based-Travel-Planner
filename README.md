# AI-Based Travel Planner

<p align="center">
  <a href="https://ai-based-travel-planner-ruby.vercel.app" target="_blank">
    <img src="https://img.shields.io/badge/Live%20Demo-Visit%20Now-blue?style=for-the-badge&logo=vercel" alt="Live Demo on Vercel">
  </a>
</p>
<p align="center">
  <a href="https://github.com/Dashwanth-raj/AI-Based-Travel-Planner/stargazers">
    <img alt="GitHub stars" src="https://img.shields.io/github/stars/Dashwanth-raj/AI-Based-Travel-Planner?style=social">
  </a>
  <a href="https://github.com/Dashwanth-raj/AI-Based-Travel-Planner/forks">
    <img alt="GitHub forks" src="https://img.shields.io/github/forks/Dashwanth-raj/AI-Based-Travel-Planner?style=social">
  </a>
  <a href="https://github.com/Dashwanth-raj/AI-Based-Travel-Planner/issues">
    <img alt="GitHub issues" src="https://img.shields.io/github/issues/Dashwanth-raj/AI-Based-Travel-Planner">
  </a>
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/Dashwanth-raj/AI-Based-Travel-Planner">
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/Dashwanth-raj/AI-Based-Travel-Planner">
  <img alt="License" src="https://img.shields.io/badge/License-MIT-blue.svg">
</p>

## Table of Contents

- [AI-Based Travel Planner](#ai-based-travel-planner)
  - [Table of Contents](#table-of-contents)
  - [Overview](#overview)
  - [Live Demo](#live-demo)
  - [Problem Solved](#problem-solved)
  - [Features](#features)
  - [Technologies Used](#technologies-used)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
  - [Usage](#usage)
  - [Project Structure](#project-structure)
  - [Screenshots](#screenshots)
  - [Acknowledgments](#acknowledgments)
  - [Contact](#contact)

---

## Overview

The **AI-Based Travel Planner** is a cutting-edge web application designed to simplify and personalize your travel planning experience. By harnessing the power of Artificial Intelligence through the Gemini API and robust Google Firebase services, it intelligently generates custom travel itineraries, recommends destinations and activities, and helps you organize your adventures effortlessly. Built with **Vite, React, Tailwind CSS, and Shadcn UI**, it offers a modern, intuitive, and visually appealing user interface. Say goodbye to manual research and hello to intelligent, tailored travel!

## Live Demo

Experience the AI-Based Travel Planner in action:

**[https://ai-based-travel-planner-ruby.vercel.app](https://ai-based-travel-planner-ruby.vercel.app)**

## Problem Solved

Traditional travel planning often leads to frustration due to:
* **Information Overload:** Sifting through countless websites for flights, accommodations, attractions, and reviews.
* **Lack of Personalization:** Generic recommendations that don't match individual interests, budget, or travel style.
* **Inefficient Itinerary Creation:** Difficulty in optimizing routes and activity sequences to maximize time and experience.
* **Time Consumption:** The sheer amount of effort required to plan a comprehensive trip.

This AI-Based Travel Planner directly addresses these pain points by offering an intuitive, AI-driven solution that automates research, personalizes suggestions, and presents them through a beautifully designed interface, providing a clear, actionable travel plan.

## Features

* **Intelligent Itinerary Generation:** Input your preferences (destination, dates, budget, interests) and let the Gemini AI craft a unique, day-by-day itinerary.
* **Smart Destination & Activity Suggestions:** Discover personalized recommendations for attractions, dining, and experiences.
* **User Authentication & Data Storage:** Securely save and manage multiple travel plans and user profiles using Google Firebase Authentication and Firestore.
* **OAuth Integration:** Seamless login experience using popular OAuth providers (e.g., Google, GitHub).
* **Modern & Responsive UI:** A fast, intuitive, and visually appealing user interface built with React, Vite, styled with Tailwind CSS, and enhanced with Shadcn UI components.

## Technologies Used

This project leverages a modern and efficient JavaScript-centric tech stack, emphasizing a sleek and functional user interface:

* **Frontend:**
    * **Vite:** A blazing fast build tool for modern web projects, used for its quick development server and optimized builds.
    * **React:** A powerful JavaScript library for building dynamic and interactive user interfaces.
    * **JavaScript (ES6+):** The core programming language for the entire application logic.
    * **Tailwind CSS:** A utility-first CSS framework for rapidly building custom designs and providing a highly configurable styling system.
    * **Shadcn UI:** A collection of beautifully designed, accessible, and customizable React components that are built with Radix UI and styled with Tailwind CSS, providing a consistent and polished look.

* **Backend / Cloud Services:**
    * **Google Firebase:** A comprehensive platform providing:
        * **Firestore:** A flexible, scalable NoSQL cloud database for storing user-specific travel plans, preferences, and more.
    * **Google Generative AI (Gemini API):** The core AI engine that processes user inputs and generates intelligent travel recommendations and itineraries.
    * **Google OAuth APIs:** For enabling secure and convenient social login functionality.

* **APIs (External):**
    * **Google Gemini API**
    * **Maps Embed API**
    * **Maps JavaScript API**
    * **Places API**

## Getting Started

Follow these instructions to set up and run the AI-Based Travel Planner on your local machine.

### Prerequisites

Before you begin, ensure you have the following installed:

* **Node.js & npm (or Yarn):** Essential for running Vite and React projects.
    * [Download Node.js](https://nodejs.org/en/download/)
* **Git:** For cloning the repository.
    * [Download Git](https://git-scm.com/downloads)
* **API Keys & Firebase Project:**
    * **Google Cloud Project:** Create one and enable the **Gemini API**. Generate an API key.
    * **Firebase Project:** Set up a Firebase project, enable **Firestore Database** and **Authentication** (including desired OAuth providers like Google, GitHub). Obtain your Firebase configuration object.
    * **Google Maps/Places:** Enable Google Maps JavaScript API,Maps Embed and Google Places API, then generate an API key.

### Installation

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/Dashwanth-raj/AI-Based-Travel-Planner.git](https://github.com/Dashwanth-raj/AI-Based-Travel-Planner.git)
    cd AI-Based-Travel-Planner
    ```

2.  **Install Frontend Dependencies:**
    ```bash
    npm install # or yarn install
    ```
    *Note: If you encounter issues with Shadcn UI components, you might need to run `npx shadcn-ui@latest add <component-name>` for any components you've manually added to your project if they were not automatically included during initial setup.*

3.  **Configure Environment Variables:**
    Create a `.env` file in the root of your project directory (`AI-Based-Travel-Planner/`) and add your API keys and Firebase configuration.
    * **Important:** For client-side Vite projects, environment variables must be prefixed with `VITE_`.

    ```env
    # Google Gemini API Key
    VITE_GEMINI_API_KEY=YOUR_GEMINI_API_KEY
    VITE_GOOGLE_PLACES_API_KEY=YOUR_GOOGLE_PLACES_API_KEY
    VITE_GOOGLE_OAUTH_API_KEY=YOUR_GOOGLE_OAUTH_API_KEY

    # Firebase Configuration (replace with your actual Firebase project config)
    VITE_FIREBASE_API_KEY=YOUR_FIREBASE_API_KEY
    VITE_FIREBASE_AUTH_DOMAIN=YOUR_FIREBASE_AUTH_DOMAIN
    VITE_FIREBASE_PROJECT_ID=YOUR_FIREBASE_PROJECT_ID
    VITE_FIREBASE_STORAGE_BUCKET=YOUR_FIREBASE_STORAGE_BUCKET
    VITE_FIREBASE_MESSAGING_SENDER_ID=YOUR_FIREBASE_MESSAGING_SENDER_ID
    VITE_FIREBASE_APP_ID=YOUR_FIREBASE_APP_ID
    VITE_FIREBASE_MEASUREMENT_ID=YOUR_FIREBASE_MEASUREMENT_ID

    
    *Make sure these match the variables you are trying to access in your React code.*

## Usage

1.  **Start the Development Server:**
    ```bash
    npm run dev # or yarn dev
    ```
    This will typically start the application in your browser at `http://localhost:5173` (Vite's default port, or whichever port it indicates).

2.  **Interact with the Application:**
    * Open your web browser and navigate to the URL provided by Vite.
    * Sign up or log in using your preferred method (email/password or OAuth).
    * Enter your travel details and preferences into the planner.
    * Click the "Generate Itinerary" button to see the AI create your custom travel plan, beautifully presented with Shadcn UI components!

## Project Structure
![image](https://github.com/user-attachments/assets/71b87381-c8b5-4374-b546-9c10a01e1407)

## Screenshots

![image](https://github.com/user-attachments/assets/62945b65-d71a-4600-bcc5-e035e8b18fe8)
![image](https://github.com/user-attachments/assets/6fc86fdf-f894-4755-92db-d8568acc36cd)
![image](https://github.com/user-attachments/assets/f49ea472-9db4-4c50-bdf0-05ab7b064bae)
![image](https://github.com/user-attachments/assets/cb8ad0c3-3b28-4f8a-a3f2-5302a6315f46)


## Acknowledgments

* Powered by **Vite** and **React** for a fast and dynamic user experience.
* Styling and component excellence provided by **Tailwind CSS** and **Shadcn UI**.
* Leverages the intelligence of **Google Generative AI (Gemini API)** for smart itinerary planning.
* Relies on **Google Firebase** for robust authentication and data storage.
* Inspired by the TubeGuruji youctube video and open-source community.
