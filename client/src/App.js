import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import './styles/App.css';
import './styles/SearchBar.css';
import './styles/Spotify.css';
import SharedDataProvider from './components/SharedDataContext';
import RoutesComponent from "./routes/routes";
import Layout from './components/Layout'; //

function App() {
  return (
    <SharedDataProvider>
      <Router>
        <Layout>
          <RoutesComponent />
        </Layout>
      </Router>
    </SharedDataProvider>
  );
}

export default App;
