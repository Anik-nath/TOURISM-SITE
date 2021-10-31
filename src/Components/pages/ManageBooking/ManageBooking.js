import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import InformationTable from "../../Table/InformationTable";
import "./ManageBook.css";

const ManageBooking = () => {
  const [manage, setManage] = useState([]);
  useEffect(() => {
    fetch("https://glacial-lake-74710.herokuapp.com/booked")
      .then((res) => res.json())
      .then((data) => setManage(data));
  }, []);
  return (
    <div className="booking-title">
      <div className="container-fluid ">
        <div className="row pt-5 text-center cover">
          <div className="col mt-5 text-white pt-5">
            <h2>Your Booking</h2>
            <p>Your Best Trip Book Now</p>
          </div>
        </div>
      </div>
      {/* show booking */}
      <Container>
        <div className="py-5 info">
          <h2 className="mb-4">Booking List</h2>
          <table>
            <tr>
              <th>BOOKING ID</th>
              <th>DATE</th>
              <th>FULLNAME</th>
              <th>EMAIL</th>
              <th>TICKET</th>
              <th>UPDATE</th>
              <th>DELETE</th>
            </tr>
            <tbody className="tbody">
              {manage.map((manage) => (
                <InformationTable
                  key={manage._id}
                  manage={manage}
                ></InformationTable>
              ))}
            </tbody>
          </table>
        </div>
      </Container>
    </div>
  );
};

export default ManageBooking;
