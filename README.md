# 🇨🇲 Cameroon Web Application

## Project Overview
The **Cameroon Web Application** is a modern, bilingual (English / French) web platform designed to showcase the **history, culture, diversity, and heritage of Cameroon**.  
The application aims to promote cultural awareness through an intuitive, visually appealing, and responsive user interface.

This project was developed as an academic and practical exercise, applying **front-end and back-end web development concepts** with a clear **MVP architecture**.

## Why Cameroon?
Cameroon, often referred to as *“Africa in Miniature”*, is known for its rich cultural diversity, multiple ethnic groups, languages, traditions, and landscapes.  
This application highlights Cameroon’s unique identity by presenting its history, culture, and traditions in a structured and accessible digital format.

## Objectives
- Promote Cameroonian culture and history
- Provide a bilingual experience (English & French)
- Apply modern web development best practices
- Implement a scalable MVP architecture
- Deliver a clean, light-themed and user-friendly interface

## Features
-  Home page with animated sections
-  History page showcasing national figures
-  Culture page (attire, music, cuisine, customs)
-  Explore section
-  Internationalization (i18n: EN / FR)
-  Newsletter subscription system
-  Light color theme with semi-transparent navbar
-  Fully responsive design

## MVP Architecture
The project follows a **Minimum Viable Product (MVP)** approach:

- **Model**: MongoDB (newsletter subscribers)
- **View**: React UI components
- **Controller**: Node.js & Express API

This structure allows easy scalability and future feature expansion.

## 🖥️ Front-End
**Technologies Used:**
- React.js
- React Router
- Framer Motion
- i18next (Internationalization)
- CSS3 (Custom styling)
- HTML5

**Key Concepts:**
- Component-based architecture
- Reusable UI components
- Animated transitions
- Responsive layout
- Light and soft color palette


## Back-End
**Technologies Used:**
- Node.js
- Express.js
- MongoDB (local or Atlas)
- Mongoose
- Dotenv

**Features:**
- Newsletter subscription API
- Email validation
- RESTful API structure

##  Project Structure
MERN/
│
├── backend/
| ├── config/
| ├── controllers/
| ├── middlewares/
│ ├── routes/
│ ├── models/
│ ├── server.js
| ├── utils/
|
│ frontend/
| ├── front-app/
| ├── public/
│ ├── src/
│ │ ├── components/
│ │ ├── pages/
│ │ ├── i18n/
│ │ │ ├── en/translation.js
│ │ │ └── fr/translation.js
│ │ └── styles/
| | ├── index.js
| | ├── App.js
└── README.md

##  Internationalization
The application supports:
- 🇬🇧 English
- 🇫🇷 French

Translations are managed using **react-i18next** with separate translation files for each language

## Installation & Setup

### Front-End
```bash
cd frontend
npm install
npm run dev

### Back-End
```bash
cd backend
npm install
npm run dev

### .evn file
PORT=4000
MONGO_URI=your_mongodb_connection_string

