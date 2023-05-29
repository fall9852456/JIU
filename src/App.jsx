import 'antd/dist/reset.css';
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Provider } from "react-redux";
import Product from './pages/Product'
import Content from './pages/Content'
import store from './redux/store';
import Home from './pages/Home'
import Aboutus from './pages/Aboutus'
import Login from './pages/Login'
import { HelmetProvider } from 'react-helmet-async'
function App() {
  return (
    <Provider store={store}>
      <HelmetProvider context={{}}>
        <BrowserRouter>
          <Routes>
            <Route path="/product" element={<Product />} />
            <Route path="id/:productId" element={<Content />} />
            <Route path="/" element={<Home />} />
            <Route path="/Aboutus" element={<Aboutus />} />
            <Route path="/login" element={<Login/>}/>
          </Routes>
        </BrowserRouter>
      </HelmetProvider>
    </Provider>
  );
}

export default App;
