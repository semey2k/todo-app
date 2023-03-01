import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Provider } from 'react-redux';
import store from './store';

const theme = createTheme({
  typography: {
    fontFamily: ['Josefin Sans', 'sans-serif'].join(','),
    h1: {
      fontSize: 40,
      fontWeight: 700,
    },
    body1: {
      fontSize: 14,
      fontWeight: 400,
      color: '#9495A5',
    },
    body2: {
      fontSize: 18,
      fontWeight: 400,
      color: '#494C6B',
    },
  },
  palette: {
    primary: {
      main: 'rgb(73, 76, 107)',
    },
    secondary: {
      main: '#C8CBE7',
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
);
