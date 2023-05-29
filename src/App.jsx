
import 'antd/dist/reset.css';
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Provider } from "react-redux";
import Home from './pages/Home'
import Content from './pages/Content'
import store from './redux/store';
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="id/:productId" element={<Content />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
