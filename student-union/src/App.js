import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import EventPage from './pages/EventPage';
import EventListPage from './pages/EventListPage';
import TeamPage from './pages/TeamPage';
import CommissionPage from './pages/CommissionPage';
import MaterialHelpPage from './pages/MaterialHelpPage'
import MaterialHelpPageUni from './pages/MaterialHelpPageUni';
import MaterialHelpPageInst from './pages/MaterialHelpPageInst';
import MaterialHelpPageContract from './pages/MaterialHelpPageContract';
import ProfPage from './pages/ProfPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<MainPage />} />
        <Route path="our-events" element={<EventListPage />} />
        <Route path="event/:eventId" element={<EventPage />} />
        <Route path="team" element={<TeamPage />} />
        <Route path="commission/:commissionId" element={<CommissionPage />} />
        <Route path="materialhelp" element={<MaterialHelpPage />} />
        <Route path="materialhelp/uni" element={<MaterialHelpPageUni />} />
        <Route path="materialhelp/inst" element={<MaterialHelpPageInst />} />
        <Route path="materialhelp/contract" element={<MaterialHelpPageContract />} />
        <Route path="profunion" element={<ProfPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
