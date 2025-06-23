import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import EventPage from './pages/EventPage';
import EventListPage from './pages/EventListPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<MainPage />} />
        <Route path="our-events" element={<EventListPage />} />
        <Route path="event" element={<EventPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
