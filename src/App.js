import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import { Tabs, Tab, Box } from '@mui/material';
//페이지
import Home from './pages/Home';
import About from './pages/About';
import Popup from './pages/Popup';
import OpenAPI from './pages/OpenAPI';
import StateForLearn from './pages/StateForLearn';

/** 앱 시작 지점 */
export default function App() {
  return (
    <Router>
      <NavigationTabs />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />        
        <Route path="/popup" element={<Popup />} />
        <Route path="/OpenAPI" element={<OpenAPI />} />        
        <Route path="/stateforlearn" element={<StateForLearn />} />
      </Routes>
    </Router>
  );
}

function NavigationTabs() {
  const location = useLocation();

  // 매핑 값 (라우트와 일치하도록 수정)
  const pathnames = {
    "/": 0,
    "/about": 1,    
    "/popup": 2,
    "/openapi": 3,  // 수정된 부분
    "/stateforlearn": 4,
  };

  // 매핑 할당
  const tabIndex = pathnames[location.pathname.toLowerCase()] ?? false;

  return (
    <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 2 }}>
      <Tabs value={tabIndex} centered>
        <Tab label="Home" component={Link} to="/" />        
        <Tab label="About" component={Link} to="/about" />        
        <Tab label="MUI" component={Link} to="/popup" />
        <Tab label="OPEN-API" component={Link} to="/openapi" /> {/* 수정된 부분 */}
        <Tab label="State" component={Link} to="/stateforlearn" />
      </Tabs>
    </Box>
  );
}