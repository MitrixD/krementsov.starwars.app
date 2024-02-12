# Star Wars Universe Explorer
This React application provides information about characters, ships, and episodes from the Star Wars universe. It utilizes an open GraphQL API provided by Star Wars SWAPI as the data source.

### Overview
The application consists of several pages, each accessible via a unique URL and featuring routing. It's built using React and is designed to be responsive, supporting various screen resolutions.  
While the design of the application is flexible, it aims to prioritize readability and clarity.

### Pages
Home Page: Displays all sections.
Characters Page: Shows a list of characters with their names and images. Users can filter the list by different criteria such as planet, species, or episode.   
Character Details Page: Retrieves detailed information about a specific character, including name, origin, affiliation, and episodes.  
Ships Page: Displays a list of ships with their names and images.  
Ship Details Page: Retrieves information about a specific ship, including name, class, model, and images.  
Episodes Page: Displays a list of episodes with their titles, release years, and image.  
Episode Details Page: Retrieves information about a specific Star Wars episode.  

## Implementation
The application leverages React components to structure each page and utilize GraphQL queries to fetch data from the Star Wars SWAPI GraphQL API. Routing is managed using React Router, enabling seamless navigation between different pages. 

## Tech Stack

The project utilizes the following technologies, frameworks, libs:

- React
- TypeScript
- Material UI
- ESLint
- Vite

## Installation

To install and set up the project locally, follow these steps:

1. Clone the repository: 

```bash
git clone https://github.com/MitrixD/krementsov.starwars.app.git
```

2. Navigate to the project directory: 

```bash
cd krementsov.starwars.app
```

3. Install the dependencies: 

```bash
npm install
```
## Usage
To run the project locally, follow these steps:

1. Start the development server:

```bash
npm run dev
```
2. Open your web browser and visit http://localhost:5173 to access the application.
