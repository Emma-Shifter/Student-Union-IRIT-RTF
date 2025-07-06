import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import EventPage from './pages/EventPage';
import EventListPage from './pages/EventListPage';
import TeamPage from './pages/TeamPage';
import CommissionPage from './pages/CommissionPage';
import MaterialHelpPage from './pages/MaterialHelpPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<MainPage />} />
        <Route path="our-events" element={<EventListPage />} />
        <Route path="event/:eventId" element={<EventPage />} />
        <Route path="team" element={<TeamPage />} />
        <Route path="commission" element={<CommissionPage />} />
        <Route path="materialhelp" element={<MaterialHelpPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
