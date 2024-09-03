import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Product() {
  const [products , setProducts] = useState([])
  useEffect(() =>{
   
    fetchData()
  },
  [])
  let fetchData = async() => {
    let userData =  await axios.get('https://628f15bbdc4785236538febb.mockapi.io/products');
   console.log(userData.data)
   setProducts(userData.data)
  }
  let handleDelete = async(id) => {
    let ask = window.confirm(`Do you want to delete ${products[id-1].title}`);
    if(ask){
     await axios.delete(`https://628f15bbdc4785236538febb.mockapi.io/products/${id}`)
     fetchData()
    }
  }
  return (
    <>
    <Link
        to="/product/addproduct"
        class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
      >
        <i class="fas fa-download fa-sm text-white-50"></i> Add Product
      </Link>
      <div><h2 className="text-center ">List of products</h2></div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="row">
              {products.map((product) => {
                return (
                  <div className="col-lg-4">
                    <div className="card" style={{ width: "18rem" }}>
                      <img
                        src='https://picsum.photos/80/50?grayscale'
                        className="card-img-top img-thumbnail"
                        alt="..."
                      />
                      <div className="card-body">
                        <h2 className="card-title">{product.title}</h2>
                        <h6>₹{product.price}</h6>
                        
                      </div>
                      <div className="d-flex justify-content-center mb-3">
                    <Link to={`/product/view/${product.id}`} className="btn btn-lg-2 mr-2 btn-primary">View</Link>
                      <Link to={`/product/edit/${product.id}`} className="btn btn-lg-2 mr-2 btn-success">Edit</Link>
                      <button onClick={()=>handleDelete(product.id)} className="btn btn-lg-2 mr-2 btn-warning">Delete</button>
                      </div>
                    </div>
                   
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;