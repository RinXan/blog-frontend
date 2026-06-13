import { StrictMode } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import { AuthProvider } from './app/providers/AuthProvider.tsx'
import { Toaster } from 'react-hot-toast'
import App from './app/App.tsx'
import "./index.css";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <AuthProvider>
      <App />
      <Toaster position='bottom-right' />
    </AuthProvider>
    </BrowserRouter>
  </StrictMode>,
)
