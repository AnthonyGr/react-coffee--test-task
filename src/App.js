import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import CatalogPage from './componets/pages/CatalogPage';
import MainPage from './componets/pages/MainPage';
import CoffeePage from './componets/pages/CoffeePage';

function App() {
  return (
    <>
      <Router>
            <main>
              <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/catalog" element={<CatalogPage />} />
                <Route path="/coffee" element={<CoffeePage />} />
                {/* <Route path="*" element={<Page404 />} /> */}
              </Routes>
            </main>

      </Router>
    </>
  )
  
}

export default App;
