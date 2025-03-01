# Math-app
# E-Learning Website

##Project Demo: https://drive.google.com/file/d/1w2NFw7Fb-f2gkslsgG1tplOXHvg6ATNv/view?usp=sharing

![image](https://github.com/user-attachments/assets/eaea0993-7c3a-43df-a19e-2b6aa25ea390)


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
- **CSS** and TailwindCSS: For styling the components and creating animations (e.g., flipping flashcards).

### Development Tools:
- **npm**: Package manager for installing dependencies.
- **Git**: Version control system for managing the codebase.

## Setup Instructions
Follow the steps below to run the project locally:

### 1. Clone the Repository
- **git clone https://github.com/VNBcoding/Math-app.git
- **cd Math-app
### 2. Install Dependencies
- **npm install
### 3.Run the Development Server
- **This will start the app at http://localhost:5173/ by default

## Challenges Faced and How They Were Addressed 🚧

### 1. **Responsive Design Implementation**
   - **Challenge**: Ensuring the website is mobile-friendly and adapts to various screen sizes.
   - **Solution**:
     - Used **TailwindCSS**'s responsive utilities and breakpoints to create a flexible layout.
     - Utilized Tailwind's grid system to adapt the layout for different screen sizes.
     - Added custom CSS media queries to adjust the layout, font sizes, and card dimensions based on the screen width.
     - Implemented **Flexbox** and **CSS Grid** to ensure the cards reflowed properly on smaller screens.

### 2. **Navigation Between Pages**
   - **Challenge**: Implementing seamless navigation between different sections of the website.
   - **Solution**:
     - Used **React Router** to define routes for each section and grade.
     - Leveraged the `Link` component to enable navigation between pages without reloading the app.
     - Ensured smooth transitions and a consistent user experience across all pages.

### 3. **Dynamic Content Rendering**
   - **Challenge**: Displaying different content for each grade without hardcoding multiple components.
   - **Solution**:
     - Created a `gradeData` array to store content for each grade (e.g., Grade 6, Grade 7, Grade 8).
     - Dynamically rendered the cards using React's `map` function, making it easy to add or update content for each grade.
     - Ensured the UI remains consistent and scalable as new grades or topics are added.
