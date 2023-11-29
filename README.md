# BookishMelodiesJS

## Overview

BookishMelodiesJS is a web application that combines the world of books with music, offering a unique experience of generating Spotify playlists based on the titles of books. The application uses React for the frontend, Express for the backend, and integrates with the Open Library and Spotify APIs.

## Functionality

- **Book Search:** Users can search for books by title. The application retrieves a list of books matching the search query using the Open Library API.
- **Spotify Authentication:** Users can log into their Spotify account to enable playlist generation.
- **Playlist Generation:** Based on the selected book, the application suggests a Spotify playlist related to the book's title or author.

## How to Use

1. **Search for Books:**
   - Enter the name of a book in the search bar.
   - Browse through the list of books that appear as a result.

2. **Select a Book:**
   - Click on a book to select it.

3. **Log in to Spotify:**
   - Use the Spotify login feature to authenticate and connect your Spotify account.

4. **Generate Playlist:**
   - The application will suggest a playlist from Spotify that relates to the selected book.

5. **Explore the Playlist:**
   - Browse through the suggested playlist and enjoy music that complements your reading experience.

## Technology Stack

### Frontend

- **React:**
  - Used for building the user interface.
  - Manages the state of the application, handling user inputs, and rendering the book search results.

### Backend

- **Express (Node.js):**
  - Serves as the intermediary server for handling API requests.
  - Manages communication with the Open Library and Spotify APIs.
  - Handles the Spotify authentication process.
  
  **RStudio (R):**
  - Used for data analysis.
  - Takes in book data and Spotify token from Express and performs Spotify API calls to generate playlist.

### APIs

- **Open Library API:**
  - Used for fetching book data based on user search queries.
- **Spotify API:**
  - Used for authenticating users and fetching playlist suggestions.


