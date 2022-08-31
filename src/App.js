import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Contato from './components/Contato/Contato';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Produtos from './components/Produtos/Produtos';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div className="content">
          <Routes>
            <Route path='/' element={<Produtos />} />
            <Route path='contato' element={<Contato />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
