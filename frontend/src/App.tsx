import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import NavBar from './NavBar'
import {
  Typography,
  Button,
  Container,
  Box,
  TextField,
} from '@mui/material';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <div>
          <Container>
            {/* Merch Section */}
            <section id="merch">
              <h1>Merch Section</h1>
            </section>

            <section id="newletter">
              <h1>Newsletter section</h1>
            </section>

            <section>
              <h1>Coming Soon!</h1>
            </section>
          </Container>
          <a href="https://vite.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>

      </BrowserRouter>
    </>
  )
}

export default App
