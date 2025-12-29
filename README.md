🏡 Full Stack Airbnb Website

The Full Stack Airbnb Website is a rental marketplace application where users can create, explore, review, and manage property listings. The application follows MVC architecture, secure authentication flows, and scalable backend design patterns commonly used in production systems.

This project is suitable for: 
• Full Stack Developer portfolios 
• Internship & fresher resumes 
• Backend-focused interviews 
• MERN stack practice projects

🚀 Core Features

🏠 Property Listings (CRUD Operations) 

• Create property listings • View all listings (Index) 
• View individual listing details (Show) • Update listings (Owner only) 
• Delete listings (Owner only) 
• Ownership-based access control

👤 Authentication & Authorization 

• User registration and login • Secure password hashing and salting 
• Session-based authentication • Persistent login using cookies 
• Protected routes with authorization middleware • Logout functionality

🧾 Reviews & Ratings System 
• Add reviews to listings 
• Rating support 
• Delete reviews (authorized users only) 
• MongoDB relationships between users, listings, and reviews

📍 Maps & Location Integration 
• Address-based location handling 
• Geocoding for latitude and longitude 
• Interactive maps with markers and popups 
• Location visualization for listings

🛡 Validation, Security & Error Handling 
• Client-side and server-side validation 
• Schema validation using Mongoose 
• Custom error classes 
• Centralized error-handling middleware 
• Async error handling utilities

🍪 Sessions, Cookies & Flash Messages 
• Express session management 
• Cookie-based authentication 
• Flash messages for success and error feedback

🎨 UI & Responsiveness 
• Responsive layout for all screen sizes 
• Clean listing cards and forms 
• User-friendly navigation 
• Mobile-first design principles

🛠 Tech Stack

Frontend 
• HTML5 
• CSS3 
• JavaScript 
• EJS Templates 
• Bootstrap

Backend 
• Node.js 
• Express.js 
• RESTful APIs 
• MVC Architecture

Database 
• MongoDB 
• Mongoose ODM

Authentication & Security 
• Passport.js 
• bcrypt.js 
• Express Sessions 
• Cookie Parser

Maps • Mapbox / Leaflet

📂 Folder Structure

staysphere/ │ ├── models/ ├── routes/ ├── controllers/ ├── middleware/ ├── views/ ├── public/ │ ├── css/ │ └── js/ ├── utils/ ├── app.js ├── server.js ├── package.json └── README.md

🌐 Routes Overview

Method Route Description GET /listings View all listings GET /listings/:id View listing POST /listings Create listing PUT /listings/:id Update listing DELETE /listings/:id Delete listing POST /reviews Add review POST /register Register user POST /login Login user
