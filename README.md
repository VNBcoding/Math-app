# Math-app
# E-Learning Website

## Project Overview
This project is a responsive e-learning website built with **ReactJS**, **TailwindCSS**, **Node.js**, and **CSS**. The website allows users to learn various subjects, with a focus on the **Math Page**, where users can explore math topics, learn the material, and complete related assignments. The website ensures a smooth and responsive experience across devices.

### Features:
- **Math Page**: A page dedicated to learning math topics and completing assignments. Users can read through the material and work on assigned exercises.
- **Responsive Design**: Fully responsive and mobile-friendly layout that adapts to various screen sizes.
- **Interactive Assignments**: Allows users to complete assignments and submit answers directly on the website.

## Setup Instructions

### Prerequisites
Ensure you have the following installed on your machine:
- [Node.js](https://nodejs.org/) (version 14 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- [Git](https://git-scm.com/), if you plan to clone the repo via Git

## Technologies Used

### Frontend:
- **React**: A JavaScript library for building user interfaces.
- **React Router**: For handling navigation and routing within the app.
- **CSS**: For styling the components and creating animations (e.g., flipping flashcards).

### Development Tools:
- **npm**: Package manager for installing dependencies.
- **Git**: Version control system for managing the codebase.

## Setup Instructions
Follow the steps below to run the project locally:

1. Clone the Repository
git clone https://github.com/VNBcoding/Math-app.git
cd Math-app
2.Install Dependencies
npm install
3.Run the Development Server
This will start the app at http://localhost:5173/ by default

##Challenges Faced and How They Were Addressed
Responsive Design Implementation:
  Ensured the website is mobile-friendly using TailwindCSS's responsive utilities.
  Utilized Tailwind's breakpoints and grid system to adapt the layout for different screen sizes.
  Used CSS media queries to adjust the layout, font sizes, and card dimensions based on the screen width. Flexbox and grid layouts were used to ensure the cards reflowed     
  properly on smaller screens.

Navigation Between Pages:
  Used React Router to define routes for each section and grade. The Link component was used to navigate between pages without reloading the app.

Dynamic Content Rendering:

  Created a gradeData array to store the content for each grade and dynamically rendered the cards using the map function in React.
