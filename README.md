# LMS (Learning Management System) Project

## Overview

This repository contains the source code for a Learning Management System (LMS). The system is built using Node.js, Express.js, MongoDB, and other web technologies. The project aims to provide functionalities for administrators, teachers, and students to manage classes, students, and teachers efficiently.

## Project Structure

The project is organized into several directories, each serving a specific purpose:

- **bin**: Contains the www script to start the server.
- **public**: Holds static assets like stylesheets and images.
- **routes**: Defines the route handlers for various parts of the application.
- **models**: Defines Mongoose models for MongoDB collections.
- **views**: Contains Jade templates for rendering views.
- **controllers**: Implements the business logic for different modules (e.g., Admin, Head, etc.).
- **middlewares**: Custom middleware functions.

## Getting Started

### Prerequisites

Before running the project, make sure you have the following installed:

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/try/download/community)

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/lms-project.git
    ```

2. Change into the project directory:

    ```bash
    cd lms-project
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

4. Start the MongoDB server.

5. Create a `.env` file in the root directory and add the following:

    ```env
    MONGODB_URI=mongodb://localhost:27017/lms
    ```

   Update the MongoDB URI if necessary.

6. Run the application:

    ```bash
    npm start
    ```

7. Open your browser and navigate to [http://localhost:3000/](http://localhost:3000/) to access the application.

## Usage

### Admin Dashboard

- `/admins`: View all admins.
- `/admin/:id`: View admin details.
- `/addadmin`: Add a new admin.
- `/adminDelete/:id`: Delete an admin.

### Student Dashboard

- `/students`: View all students.
- `/student/:id`: View student details.

### Teacher Dashboard

- `/teachers`: View all teachers.
- `/teacher/:id`: View teacher details.

### Head Dashboard

- `/admins`: View all admins.
- `/admin/:id`: View admin details.
- `/addadmin`: Add a new admin.
- `/adminDelete/:id`: Delete an admin.
- `/students`: View all students.
- `/student/:id`: View student details.
- `/teachers`: View all teachers.
- `/teacher/:id`: View teacher details.

## Contributing

Contributions are welcome! If you find any issues or have improvements to suggest, please open an issue or create a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
