import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import IndexRouter from './config/IndexRouters'
import ThemeProviders from './providers/ThemeProviders'

function App() {

  return (
    <div className="App">
      <ThemeProviders>
        <BrowserRouter>
          <IndexRouter/>
        </BrowserRouter>
      </ThemeProviders>
    </div>
  )
}

export default App
