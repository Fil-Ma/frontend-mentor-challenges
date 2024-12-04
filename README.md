# HomePage React Application

This is a frontend application built with React, Vite, and Styled Components. It serves as a home page for hosted applications, providing links to various apps and some additional information about the project.

## Table of Contents
- [Overview](#overview)
- [Technologies Used](#technologies-used)
- [Features](#features)
- [Installation](#installation)
- [Running the App](#running-the-app)
- [Deployment](#deployment)
- [GitHub Repository](#github-repository)

## Overview
This application is hosted on [Netlify](https://www.netlify.com/) and is built using modern frontend tools including React and Vite. The design and layout are inspired by challenges from [Frontend Mentor](https://www.frontendmentor.io/challenges).

The homepage displays a list of hosted applications that users can navigate to by clicking on the links. The app also provides information about the technologies used and where the source code is hosted.

## Technologies Used
- **React**: A JavaScript library for building user interfaces.
- **Vite**: A fast, modern build tool for React projects.
- **Styled Components**: A library for styling React components using tagged template literals.
- **React Router**: For handling navigation and routing within the app.

## Features
- A clean, user-friendly homepage that lists the hosted applications.
- Easy navigation using `NavLink` from `react-router-dom`.
- Responsive design and hover effects for interactivity.
- Information section with details about the project, technologies used, and links to GitHub and Frontend Mentor.

## Installation

To set up this project locally, follow the steps below:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/your-repository-name.git
   cd your-repository-name
   ```
2. **Install dependencies**:
   Make sure you have Node.js installed on your machine. Then run the following command to install the required dependencies:
   ```bash
   npm install
   ```

## Running the App

After installing the dependencies, you can run the app locally.

1. Start the development server:

```bash
npm run dev
```

2. Open your browser and navigate to http://localhost:5173 to view the app.

## Deployment
This app is deployed on Netlify. To deploy the app to Netlify:

1. Create a Netlify account (if you haven't already).
2. Link your GitHub repository to Netlify via their interface.
3. Build and deploy the app by following the instructions on Netlify.

Alternatively, if you want to deploy it manually:

Run the build command:
```bash
npm run build
```

Deploy the dist/ folder to your preferred hosting service (like Netlify, Vercel, or GitHub Pages).

## GitHub Repository

You can find the source code for this project on GitHub.
Feel free to fork the repository, open issues, and submit pull requests.

## License

This project is open-source and available under the MIT License.