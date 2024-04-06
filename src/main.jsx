import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './routes/Layout.jsx'
import DetailView from './components/CoinDetail.jsx'
import NotFound from './routes/NotFound.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index={true} element={<App />} />
          <Route index={false} path='/coinDetails/:symbol' element={<DetailView />} />
        </Route>
        <Route path='*' element={ <NotFound/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
