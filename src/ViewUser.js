import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function ViewUser() {
  const [tableDetails, settable] = useState([]);
  let navigator = useNavigate();

  let { id } = useParams();
  console.log(id);
  useEffect(() => {
    let fetchData = async () => {
      let userData = await axios.get(
        `https://628f15bbdc4785236538febb.mockapi.io/users/${id}`
      );
      // console.log(userData)
      settable(userData.data);
    };
    fetchData();
  }, []);

  let handleDelete = async (id) => {
    let ask = window.confirm(`Do you want to delete ${tableDetails.name}`);
    if (ask) {
      await axios.delete(
        `https://628f15bbdc4785236538febb.mockapi.io/users/${id}`
      );
      navigator("/table");
    }
  };

  return (
    <>
      <div
        className="card d-flex justify-content-center"
        style={{ width: "18rem" }}
      >
        <div className="card-header align-middle">User Details</div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">{`Name      :       ${tableDetails.name}`}</li>
          <li className="list-group-item">{`Position  :       ${tableDetails.position}`}</li>
          <li className="list-group-item">{`Office    :       ${tableDetails.office}`}</li>
          <li className="list-group-item">{`Age       :       ${tableDetails.age}`}</li>
          <li className="list-group-item">{`Start Date:       ${tableDetails.startDate}`}</li>
          <li className="list-group-item">{`Salary    :       ${tableDetails.salary}`}</li>
        </ul>
      </div>
      <div className="d-flex justify-content-center col-12">
        <Link to={"/table"}>
          {" "}
          <input
            className="btn btn-primary m-3"
            type={"button"}
            value="Back"
          />{" "}
        </Link>
        <Link to={`/table/edit/${id}`}>
          {" "}
          <input
            className="btn btn-primary m-3"
            type={"button"}
            value="Edit"
          />{" "}
        </Link>
        <input
          type={"button"}
          onClick={() => handleDelete(id)}
          className="btn m-3 btn-warning"
          value={'Delete'}
        />
          
               
      </div>
    </>
  );
}

export default ViewUser;