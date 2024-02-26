
import * as Pages from './pages';
import { Routes, Route } from 'react-router-dom';
import { Header } from './components';
import './App.css'

function App() {
  return (
    <>
      
        <Routes>
          <Route path='/' element={<Header />}>
            <Route index element={<Pages.HomePage />} />
            <Route path='shows' >
              <Route index element={<Pages.ShowsPage />} />
              <Route path=':id' element={<Pages.ShowPage />} />
            </Route>
            <Route path='search' element={<Pages.SearchPage />} />
            <Route path='*' element={<Pages.NotFoundPage />} />
          </Route>
        </Routes>
    </>
  )
}

export default App
