import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Viewproduct() {
  const [products, setProducts] = useState([]);
  let navigator = useNavigate();

  let { id } = useParams();
  console.log(id);
  useEffect(() => {
    let fetchData = async () => {
      let userData = await axios.get(
        `https://628f15bbdc4785236538febb.mockapi.io/products/${id}`
      );
      // console.log(userData)
      setProducts(userData.data);
    };
    fetchData();
  }, []);

  let handleDelete = async (id) => {
    let ask = window.confirm(`Do you want to delete ${products.name}`);
    if (ask) {
      await axios.delete(
        `https://628f15bbdc4785236538febb.mockapi.io/products/${id}`
      );
      navigator("/table");
    }
  };
    
      return (
        <div className="card align-middle" style= {{width: '18rem'}}>
          <div className="card-header align-middle">Product Details</div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">{`Title      :       ${products.title}`}</li>
            <li className="list-group-item">{`Price  :       ${products.price}`}</li>
            
          </ul>
        </div>
      );
}

export default Viewproduct