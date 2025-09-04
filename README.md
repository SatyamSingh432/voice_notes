# Voice Notes with AI Summarization

This is a full-stack web application that allows users to record voice notes, transcribe them, and generate AI-powered summaries.


https://github.com/user-attachments/assets/d4c60353-8384-408b-8ea9-dab42a5e076b

HD Video Demo -
```sh
https://drive.google.com/file/d/1OJhbto-9sO_JWsHjimgo02Ld0WhTaKus/view?usp=sharing
```

## Features

- **Record Voice Notes:** Users can record voice notes directly in the browser.
- **Automatic Transcription:** The recorded voice is automatically transcribed into text using the browser's Speech Recognition API.
- **CRUD Operations:** Users can create, read, update, and delete notes.
- **AI-Powered Summarization:** Users can generate a summary of their note using the OpenAI API.
- **Responsive UI:** The application is designed to be responsive and work on different screen sizes.

## Architecture

The application is built using the MERN stack with GenAI integration.

- **Frontend:** The frontend is a single-page application built with React.js. It uses `axios` to communicate with the backend API and `react-router-dom` for routing. The UI is styled with Tailwind CSS.

- **Backend:** The backend is a RESTful API built with Node.js, Express.js, and Mongoose. It provides endpoints for CRUD operations on notes and for generating summaries.

- **Database:** MongoDB is used as the database to store the notes.

- **GenAI:** The OpenAI API is used to generate summaries of the notes.

## API Endpoints

The following API endpoints are available:

| Method | Endpoint                   | Description            |
| ------ | -------------------------- | ---------------------- |
| GET    | `/api/notes`               | Get all notes          |
| POST   | `/api/notes/add`           | Add a new note         |
| GET    | `/api/notes/:id`           | Get a note by ID       |
| DELETE | `/api/notes/:id`           | Delete a note by ID    |
| POST   | `/api/notes/update/:id`    | Update a note by ID    |
| POST   | `/api/notes/:id/summarize` | Summarize a note by ID |

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

- Node.js and npm
- MongoDB
- OpenAI API Key

### Installation

1. **Clone the repo**

   ```sh
   git clone https://github.com/your_username/voice-notes.git
   ```

2. **Backend Setup**

   - Navigate to the `backend` directory

     ```sh
     cd backend
     ```

   - Install NPM packages

     ```sh
     npm install
     ```

   - Create a `.env` file in the `backend` directory and add the following variables:

     ```
     MONGO_URI=<your_mongodb_uri>
     OPENAI_API_KEY=<your_openai_api_key>
     BASE_URL="openai_base_url"
     MODEL_NAME="your_model_name"
     ```

   - Start the backend server

     ```sh
     npm start
     ```

3. **Frontend Setup**

   - Navigate to the `frontend` directory

     ```sh
     cd frontend
     ```

   - Install NPM packages

     ```sh
     npm install
     ```

   - Start the frontend development server

     ```sh
     npm run dev
     ```
