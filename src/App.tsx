import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Events from './pages/Events';
import Join from './pages/Join';
import Members from './pages/Members';
import { Global, css } from '@emotion/react';

const globalStyles = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    margin: 0;
    padding: 0;
    width: 100%;
    min-height: 100vh;
    overflow-x: hidden;
  }

  body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background-color: #fff8f0;
    color: #333;
    line-height: 1.6;
  }

  #root {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Poppins', sans-serif;
  }

  /* Remove default iframe border */
  iframe {
    border: none;
  }
`;

function App() {
  return (
    <>
      <Global styles={globalStyles} />
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="events" element={<Events />} />
            <Route path="join" element={<Join />} />
            <Route path="members" element={<Members />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
