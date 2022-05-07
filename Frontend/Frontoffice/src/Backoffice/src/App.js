import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Switch, Route, Routes } from "react-router-dom";
import UserList from "./pages/userList/userList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import React from "react";
import NewCourse from "./pages/NewCourse/NewCourse";
import Course from "./pages/Course/Course";
import CourseList from "./pages/CourseList/CourseList";

function App() {
  return (
    <div>
      <Topbar />

      <div className="contTback">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home/>}/>


          <Route path="/users" element={<UserList />}/>


          <Route path="/user/:userId" element={<User />}/>


          <Route path="/newUser" element={<NewUser />}/>


          <Route path="/products" element={<ProductList />}/>

          <Route path="/courses" element={<CourseList />}/>


          <Route path="/product/:productId" element={<Product />}/>

          <Route path="/course/:courseId" element={<Course />}/>


          <Route path="/newproduct" element={<NewProduct />}/>

          <Route path="/newcourse" element={<NewCourse />}/>


        </Routes>
      </div>
    </div>
  );
}

export default App;
