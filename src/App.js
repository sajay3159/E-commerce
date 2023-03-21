//import logo from './logo.svg';
import './App.css';
import ProductList from './ProductComponent/ProductList';
import ProductDetails from './ProductComponent/ProductDetails';
import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="Productdetails/:id" element={<ProductDetails />} />
      </Routes>

    </>
  );
}

export default App;