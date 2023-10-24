import React from 'react';
import logo from './logo.svg';
import { Box } from '@mui/material';
import { router } from "./Router/router";
import { RouterProvider } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Box height="100vh" width="100vw">
        <RouterProvider router={router} />
    </Box>
  )
}

export default App;
