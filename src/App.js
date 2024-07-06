import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Index from "./page/Index";
import About from "./page/About";
import Services from "./page/Services";
import Cart from "./page/Cart";
import Dashboard from "./page/users/Dashboard";
import Profile from "./page/users/Profile";
import AboutUser from "./page/users/AboutUser";
import CustomNavbar from "./components/Navbar";
import Contact from "./page/Contact";
import { ToastContainer} from "react-toastify";
import Login from "./page/Login";
import Register from "./page/Register";
import Home from "./page/users/Home";
import UserProvider from "./context/UserProvider";
import Order from "./page/users/Order";
import AdminDashboard from "./page/admin/AdminDashboard";
import AdminHome from "./page/admin/AdminHome";
import AddProduct from "./page/admin/AddProduct";
import ViewProducts from "./page/admin/ViewProducts";
import AddCategory from "./page/admin/AddCategory";
import ViewCategories from "./page/admin/ViewCategories";
import AdminOrders from "./page/admin/AdminOrders";
import AdminUsers from "./page/admin/AdminUsers";
import StorePage from "./page/users/StorePage";
import ProductView from "./page/users/ProductView";
import CategoryStorePage from "./page/users/CategoryStorePage";
import CartProvider from "./context/CartProvider";
import Loading from "./components/Loading";
import { useEffect, useState } from "react";
import { privateAxios } from "./services/axios.service";
import Swal from "sweetalert2";
import useLoader from "./hooks/useLoader";
function App() {
  const loading = useLoader();

  return (
    // setting up routes

    <UserProvider>
      <CartProvider>
        <BrowserRouter>
          <ToastContainer position="bottom-center" theme="dark" draggable />
          <CustomNavbar />
          <Loading show={loading} />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/store" element={<StorePage />} />
            <Route path="store/products/:productId" element={<ProductView />} />
            <Route
              path="store/:categoryId/:categoryTitle"
              element={<CategoryStorePage />}
            />

            <Route path="/users" element={<Dashboard />}>
              <Route path="home" element={<Home />} />
              <Route path="profile/:userId" element={<Profile />} />
              <Route path="about" element={<AboutUser />} />
              <Route path="orders" element={<Order />} />
            </Route>

            <Route path="/admin" element={<AdminDashboard />}>
              <Route path="home" element={<AdminHome />} />
              <Route path="add-product" element={<AddProduct />} />
              <Route path="add-category" element={<AddCategory />} />
              <Route path="categories" element={<ViewCategories />} />
              <Route path="products" element={<ViewProducts />} />
              <Route path="orders" element={<AdminOrders />} />
              <Route path="users" element={<AdminUsers />} />
          
              
            </Route>
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </UserProvider>
  );
}

export default App;
