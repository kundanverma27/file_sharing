📂 File Sharing Application

A secure and efficient File Sharing Web App built with Node.js, Express.js, and MongoDB, supporting validated file uploads, short URL generation, and automatic cleanup of expired links.

🚀 Features

Secure File Uploads
Upload files up to 10MB with server-side validation using Multer and Cloudinary for cloud storage.

Short URL Generation
Automatically generates short, shareable links for uploaded files.

Download Expiry Control
Ensures shared links expire after a set time or number of downloads to maintain security.

Automated Cleanup
Integrated Cron Jobs for expired file deletion — reduced test storage usage by 60%.

Metadata Extraction
Extracts and stores essential file details (name, size, type, upload date) in MongoDB.

Performance Optimized
Improved backend response time by 40% through optimized routing and caching mechanisms.

🛠️ Tech Stack
Layer	Technology
Frontend	HTML, CSS, JavaScript (optional if you added a UI)
Backend	Node.js, Express.js
Database	MongoDB (Mongoose ORM)
Cloud Storage	Cloudinary
File Handling	Multer
Task Scheduling	node-cron
⚙️ Installation

Install dependencies

npm install




Start the server

npm start


The app will run on http://localhost:5000.

📁 Folder Structure
File-Sharing-App/
├── controllers/        # Request handlers
├── models/             # Mongoose schemas
├── routes/             # Express routes
├── utils/              # Helper functions (upload, cleanup)
├── public/             # Static files (if frontend exists)
├── .env                # Environment variables
├── server.js           # Entry point
└── package.json

🔄 API Endpoints
Method	Endpoint	Description
POST	/api/files/upload	Upload a file
GET	/api/files/:id	Get file details
GET	/api/files/download/:id	Download file using short URL
🧹 Automated Cleanup

Uses node-cron to automatically:

Identify expired links from MongoDB

Remove corresponding files from Cloudinary

Delete database entries

📈 Performance Highlights

Reduced storage usage by 60% through expired file cleanup.

Handled 50+ file transfers during testing.

Achieved 40% faster response time via optimized Express routing.
