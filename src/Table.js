import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
// const tableDetails = [
//   {
//     id: 1,
//     Name : 'Person 1',
//     Position: 'Manager',
//     Office: 'Chennai',
//     Age: '45',
//     StartDate: '12/05/2021',
//     Salary: '60000'
//   },
//   {
//     id: 2,
//     Name  : 'Person 2',
//     Position: 'Manager',
//     Office: 'Chennai',
//     Age: '45',
//     StartDate: '12/05/2021',
//     Salary: '60000'
//   },
//   {
//     id: 3,
//     Name : 'Person 3',
//     Position: 'Manager',
//     Office: 'Chennai',
//     Age: '45',
//     StartDate: '12/05/2021',
//     Salary: '60000'
//   },
// ]

function Table() {
  const [tableDetails , settable] = useState([])
  useEffect(() =>{
   
    fetchData()
  },
  [])
  let fetchData = async() => {
    let userData =  await axios.get('https://628f15bbdc4785236538febb.mockapi.io/users');
   console.log(userData.data)
   settable(userData.data)
  }
  let handleDelete = async(id) => {
    let ask = window.confirm(`Do you want to delete ${tableDetails[id-1].name}`);
    if(ask){
     await axios.delete(`https://628f15bbdc4785236538febb.mockapi.io/users/${id}`)
     fetchData()
    }
  }
  return (
    <>
      <h1 class="h3 mb-2 text-gray-800">Tables</h1>
      <Link
        to="/table/adduser"
        class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
      >
        <i class="fas fa-download fa-sm text-white-50"></i> Add User
      </Link>
      <p class="mb-4">
        DataTables is a third party plugin that is used to generate the demo
        table below. For more information about DataTables, please visit the{" "}
        
        .
      </p>

      <div class="card shadow mb-4">
        <div class="card-header py-3">
          <h6 class="m-0 font-weight-bold text-primary">DataTables Example</h6>
        </div>
        <div class="card-body">
          <div class="table-responsive">
            <table
              class="table table-bordered"
              id="dataTable"
              width="100%"
              cellspacing="0"
            >
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Position</th>
                  <th>Office</th>
                  <th>Age</th>
                  <th>Start date</th>
                  <th>Salary</th>
                  <th>Controls</th>
                </tr>
              </thead>
              <tfoot>
                <tr>
                  <th>Name</th>
                  <th>Position</th>
                  <th>Office</th>
                  <th>Age</th>
                  <th>Start date</th>
                  <th>Salary</th>
                  <th>Controls</th>
                </tr>
              </tfoot>
              <tbody>
                {tableDetails.map((detail)=>{
                  return(<tr>
                    <td>{detail.name}</td>
                    <td>{detail.position}</td>
                    <td>{detail.office}</td>
                    <td>{detail.age}</td>
                    <td>{detail.startDate}</td>
                    <td>{detail.salary}</td>
                    <td>
                      <Link to={`/table/view/${detail.id}`} className="btn btn-lg-2 mr-2 btn-primary">View</Link>
                      <Link to={`/table/edit/${detail.id}`} className="btn btn-lg-2 mr-2 btn-success">Edit</Link>
                      <button onClick={()=>handleDelete(detail.id)} className="btn btn-lg-2 mr-2 btn-warning">Delete</button>
                    </td>
                  </tr>)
                
                })}
                
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Table;