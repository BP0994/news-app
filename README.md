# News Headlines App

This is a simple news headlines application that integrates with the [News API](https://newsapi.org/docs/endpoints/top-headlines) to fetch and display real-time news headlines. The application is built using [Vite](https://vitejs.dev/) and React.

## Features

- Fetches and displays the latest 5 news headlines.
- Includes news titles, sources, and publication dates.
- Error handling for API request failures with user-friendly messages.
- Uses environment variables to securely manage the API key.

## Prerequisites

Make sure you have the following installed on your local machine before setting up the project:

- **[Node.js](https://nodejs.org/)** (version 14 or higher)
- **[Git](https://git-scm.com/)** (optional, for cloning the repository)

## Setup Instructions

Follow these steps to clone, install, and run the project locally:

### 1. Clone the Repository

If you have Git installed, you can clone the repository using the following command:

```bash
  git clone https://github.com/BP0994/news-app.git

```
### 2. Navigate to the Project Directory 

Once the repository is cloned or the ZIP file is extracted, navigate into the project directory:Once the repository is cloned or the ZIP file is extracted, navigate into the project directory:

```bash
cd news-headlines-app
```

### 3. Install Dependencies
Install the required dependencies using npm (or yarn if you prefer):

```bash
 npm install
```

### 4. Set Up Environment Variables

Create a .env file in the root directory of the project. Add the following environment variable with your News API key:

```bash
VITE_NEWS_API_KEY=your_api_key_here
```
Replace your_api_key_here with your actual API key from News API.

### 5. Run the Development Server
Start the development server by running the following command:

```bash
 npm run dev
```

