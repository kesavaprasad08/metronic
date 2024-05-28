# Metronic - React, Bootstrap, TypeScript, Express, Node.js, MySQL, Sequelize App

Metronic is a web application built with React, Bootstrap, TypeScript Express.js, Node.js, MySQL and Sequelize.

## Features

- **Express & Node.js Backend**: Backend server built with Express.js and Node.js for handling HTTP requests and responses.
- **MySQL Database**: Persistent data storage using MySQL relational database.
- **Sequelize ORM**: Sequelize is used as an Object-Relational Mapping tool for Node.js, providing easy access to the MySQL database.
- **React Frontend**: Frontend user interface built with React library for dynamic and interactive user experience.
- **Bootstrap Styling**: UI styling and layout are done using Bootstrap framework for a responsive design.
- **TypeScript**: Entire application is written in TypeScript for static type checking and improved code quality.

## Prerequisites

- Node.js & NPM: Make sure you have Node.js and Node Package Manager installed.
- MySQL: Install MySQL server on your system.
- Git: Version control system for managing project files.

## Getting Started

1. **Clone the repository**:

    git clone https://github.com/kesavaprasad08/metronic.git

2. **Install dependencies**:

    ```
    cd metronic
    npm install
    ```

3. **Set up MySQL Database**:

    - Create a MySQL database for the application.
    - Update the database configuration in `util/database.js` file.

4. **Build and Run the Application**:

    - To build the backend and frontend:

        npm run build

    - To start the frontend server:

        npm run dev

    - To start the backend server:

        cd backend
        npm start

5. **Access the Application**:

    Open your web browser and go to `http://localhost:3000` to access the Metronic application.
