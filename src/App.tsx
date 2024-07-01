import React from 'react';

import './App.css';
import WidgetOrderStats from './Components/1/WidgetOrderStats';
import CourseTable from './Components/3/CourseTable';
import { Container, CssBaseline } from '@mui/material';
import ResponsivePage from './Components/5/ResponsivePage';

function App() {
  return (
    <div className="App">
      <WidgetOrderStats />
      <Container>
        <CssBaseline />
        <CourseTable />
      </Container>
      <ResponsivePage />
    </div>
  );
}

export default App;
