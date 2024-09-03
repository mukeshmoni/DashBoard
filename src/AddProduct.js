import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useFormik } from "formik";
import './App.css'
import {useNavigate} from 'react-router-dom'
import axios from "axios";

function AddProduct() {

  let navigation = useNavigate()
  let formik = useFormik({
    initialValues:{
      title: '',
      price:''
    },
    onSubmit: async (values) =>{
      try{
        await axios.post('https://628f15bbdc4785236538febb.mockapi.io/products' , values)
        navigation('/product')
      }
      catch(errors)
      {
        alert(errors)
      }
    
      
    },
    validate: (values) => {
      let errors = {};

      if (!values.title) {
        errors.title = "Please enter your product name";
      } 
      if (!values.price) {
        errors.price = "Please enter your price";
      } 

      return errors;
    },
  })
  return (
    <div className="container">
      <div><h2 className="text-center">Enter data to add the product</h2></div>
      <form className="row g-3 d-flex justify-content-center" onSubmit={formik.handleSubmit}>
        <div className="col-md-6 col-lg-4 col-sm-12">
          <label>Product Name</label>
          <input
            type="text"
            name="title"
            onChange={formik.handleChange}
            value={formik.values.title}
            className="form-control"
            placeholder="Enter User's name"
          />
          {
          formik.errors.title ? <span className="errors">{formik.errors.title}</span> : null
          }
        </div>
        <div className="col-md-6 col-lg-4 col-sm-12">
          <label>Price</label>
          <input
            type="text"
            className="form-control"
            name="price"
            onChange={formik.handleChange}
            value={formik.values.price}
            placeholder="Enter the Position"
          />
          {
          formik.errors.price ? <span className="errors">{formik.errors.price}</span> : null
          }
        </div>
        
        
        
        
        <div className="d-flex justify-content-center col-12">
         
          <input className="btn btn-primary" type={"submit"} value="Submit" disabled= {!formik.isValid ? true : false}/>
        </div>
      </form>
    </div>
  )
}

export default AddProduct