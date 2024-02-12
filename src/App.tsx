import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { URL_PATHS } from "./constants/urlPaths.ts";
import { Container } from "@mui/material";
import HomePage from "./pages/HomePage";
import CharactersPage from "./pages/CharactersPage";
import ShipsPage from "./pages/ShipsPage";
import EpisodesPage from "./pages/EpisodesPage";
import CharacterDetailsPage from "./pages/CharacterDetailsPage";
import ShipDetailsPage from "./pages/ShipDetailsPage";
import EpisodeDetailsPage from "./pages/EpisodeDetailsPage";
import Navbar from "./components/NavBar/NavBar.tsx";
import NotFoundPage from "./pages/NotFoundPage.tsx";

function App() {
  return (
    <Container>
      <Router basename="/krementsov.starwars.app">
        <Navbar />
        <Routes>
          <Route path={URL_PATHS.HOME_PAGE} element={<HomePage />} />
          <Route
            path={URL_PATHS.CHARACTERS_PAGE}
            element={<CharactersPage />}
          />
          <Route path={URL_PATHS.SHIPS_PAGE} element={<ShipsPage />} />
          <Route path={URL_PATHS.EPISODES_PAGE} element={<EpisodesPage />} />
          <Route
            path={URL_PATHS.CHARACTER_DETAILS}
            element={<CharacterDetailsPage />}
          />
          <Route path={URL_PATHS.SHIP_DETAILS} element={<ShipDetailsPage />} />
          <Route
            path={URL_PATHS.EPISODE_DETAILS}
            element={<EpisodeDetailsPage />}
          />
          <Route path="*" element={<NotFoundPage />}  />
        </Routes>
      </Router>
    </Container>
  );
}

export default App;
