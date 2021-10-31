import React from "react";
import { Link } from "react-router-dom";
import "./Table.css";

const InformationTable = (props) => {
  const { fullname,date,bookingId,email,ticket } = props.manage;
  return (
    <>
      <tr>
         <td>{bookingId}</td>
        <td>{date}</td>
        <td>{fullname}</td>
        <td>{email}</td>
        <td>{ticket}</td>
        <td>
        <button className="px-3 ourButton">Edit</button>
        </td>
        <td>
        <button className="px-2 bg-danger ourButton">Cancel</button>
        </td>
      </tr>
    </>
  );
};

export default InformationTable;
