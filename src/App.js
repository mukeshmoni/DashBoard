import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Dashboard from "./Dashboard";
import Table from "./Table";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from "./Product";
import AddUser from "./AddUser";
import AddProduct from "./AddProduct";
import ViewUser from "./ViewUser";
import Viewproduct from "./Viewproduct";
import EditUser from "./EditUser";
import EditProduct from "./EditProduct";


function App() {
  return (
    <BrowserRouter>
      <div id="page-top">
        <div id="wrapper">
          <Sidebar />
          <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
              <Navbar />
              <div class="container-fluid">
                <Routes>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/table" element={<Table />} />
                  <Route path="/product" element={<Product />} />
                  <Route path="/table/adduser" element={<AddUser />} />
                  <Route path="/product/addproduct" element={<AddProduct />} />
                  <Route path='/table/view/:id' element={<ViewUser/>}/>
                  <Route path='/product/view/:id' element={<Viewproduct/>}/>
                  <Route path="/table/edit/:id" element={<EditUser/>}/>
                  <Route path="/product/edit/:id" element={<EditProduct/>}/>
                </Routes>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;