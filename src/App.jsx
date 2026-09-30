import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Home } from './routes/Home';
import { CaseStudyPage } from './routes/CaseStudyPage';
import { OwnerDashboard } from './routes/OwnerDashboard';
import { NotFound } from './routes/NotFound';
import { trackPageView } from './analytics/AnalyticsProvider';

export function App() {
  const location = useLocation();

  useEffect(() => {
    trackPageView(location.pathname + location.hash);
  }, [location]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/work/:slug" element={<CaseStudyPage />} />
      <Route path="/owner" element={<OwnerDashboard />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
