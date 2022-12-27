
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "../Admin/Dashboard";
import Owner from "../Admin/Owner";
import Prescription from "../Admin/Prescription";
import Product from "../Admin/Product";
import ProductType from "../Admin/ProductType";
import Staff from "../Admin/Staff";
import Supplier from "../Admin/Supplier";
import User from "../Admin/User";
import Header from "../componnet/Header";
import Sidebar from "../componnet/Sidebar";
import Login from "../Login/Login";


export default function RouterAdmin() {
  return (
    <BrowserRouter>
    <Header />
    <Sidebar />
      <Routes>
        <Route path="/" element={<Dashboard/>}  />
        <Route path="/owner" element={<Owner />}  />
        <Route path="/staff" element={<Staff />}  />
        <Route path="/supplier" element={<Supplier />}  />
        <Route path="/user" element={<User />}  />
        <Route path="/product" element={<Product />}  />
        <Route path="/producttype" element={<ProductType />}  />
        <Route path="/prescription" element={<Prescription />}  />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

