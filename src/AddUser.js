import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useFormik } from "formik";
import './App.css'
import {useNavigate} from 'react-router-dom'
import axios from "axios";

function AddUser() {
  let navigation = useNavigate()
  let formik = useFormik({
    initialValues: {
      name: "",
      position: "",
      age: "",
      office: "",
      startDate: "",
      salary: "",
    },
    onSubmit: async(values) => {
      // console.log(values);
     
        try{
          await axios.post('https://628f15bbdc4785236538febb.mockapi.io/users' , values)
          navigation('/table')
        }
        catch(errors)
        {
          alert(errors)
        }
      
      
    },
    validate: (values) => {
      let errors = {};

      if (!values.name) {
        errors.name = "Please enter your name";
      } else if(values.name.length < 5){
        errors.name = "Name should be greater than 5"
      }
      if (!values.position) {
        errors.position = "Please enter your position";
      } 

      if (!values.age) {
        errors.age = "Please enter your age";
      }

      if (!values.office) {
        errors.office = "Please enter your office";
      }

      if (!values.startDate) {
        errors.startDate = "Please enter your start date";
      }

      if (!values.salary) {
        errors.salary = "Please enter your salary";
      }
      return errors;
    },
  });

  // useEffect(async(values) => {
  //   await axios.post('https://628f15bbdc4785236538febb.mockapi.io/:users' , values)
  //     },[])

  return (
    <div className="container">
      <div><h2 className="text-center">Enter data to add the users</h2></div>
      <form className="row g-3" onSubmit={formik.handleSubmit}>
        <div className="col-md-6 col-lg-4 col-sm-12">
          <label>Name</label>
          <input
            type="text"
            name="name"
            onChange={formik.handleChange}
            value={formik.values.name}
            className="form-control"
            placeholder="Enter User's name"
          />
          {
          formik.errors.name ? <span className="errors">{formik.errors.name}</span> : null
          }
        </div>
        <div className="col-md-6 col-lg-4 col-sm-12">
          <label>Position</label>
          <input
            type="text"
            className="form-control"
            name="position"
            onChange={formik.handleChange}
            value={formik.values.position}
            placeholder="Enter the Position"
          />
          {
          formik.errors.position ? <span className="errors">{formik.errors.position}</span> : null
          }
        </div>
        <div className="col-md-6 col-lg-4 col-sm-12">
          <label>Office</label>
          <input
            type="text"
            className="form-control"
            name="office"
            onChange={formik.handleChange}
            value={formik.values.office}
            placeholder={`Enter the User's office`}
          />
          {
          formik.errors.office ? <span className="errors">{formik.errors.office}</span> : null
          }
        </div>
        <div className="col-md-6 col-lg-4 col-sm-12">
          <label>Age</label>
          <input
            type="text"
            className="form-control"
            name="age"
            onChange={formik.handleChange}
            value={formik.values.age}
            placeholder={`Enter the User's Age`}
          />
          {
          formik.errors.age ? <span className="errors">{formik.errors.age}</span> : null
          }
        </div>
        <div className="col-md-6 col-lg-4 col-sm-12">
          <label>StartDate</label>
          <input
            type="date"
            className="form-control"
            name="startDate"
            onChange={formik.handleChange}
            value={formik.values.startDate}
            placeholder={`Enter the User's Start date of work`}
          />
          {
          formik.errors.startDate ? <span className="errors">{formik.errors.startDate}</span> : null
          }
        </div>
        <div className="col-md-6 col-lg-4 col-sm-12">
          <label>Salary</label>
          <input
            type="number"
            className="form-control"
            name="salary"
            onChange={formik.handleChange}
            value={formik.values.salary}
            placeholder={`Enter the User's Salary`}
          />
          {
          formik.errors.salary ? <span className="errors">{formik.errors.salary}</span> : null
          }
        </div>
        <div className="d-flex justify-content-center col-12">
         
          <input className="btn btn-primary" type={"submit"} value="Submit" disabled= {!formik.isValid ? true : false}/>
        </div>
      </form>
    </div>
  );
}

export default AddUser;