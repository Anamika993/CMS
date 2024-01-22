import React, { useState, useEffect } from "react";
import ContactR from "./ContactR";
import api from "../services/api";

const ContactL = () => {
  const [contacts, setContacts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalC, setTotalC] = useState(10);
  const [error, setError] = useState("");
  const contactsPerPage = totalC;
  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const result = await api.getContacts(currentPage, contactsPerPage);
        console.log(result);
        setContacts(result.contacts);
        setTotalPages(result.totalPages);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchContacts();
  }, [currentPage, totalC]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // useEffect(() => {
  //   setCurrentPage(1);
  // }, [totalC]);

  return (
    <div className="main">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone Number</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <ContactR key={contact.id} contact={contact} />
          ))}
        </tbody>
      </table>
      <div className="top">
        {/* {totalPages > 1 && (
          <div className="tabs"> */}
            {/* {Array.from({ length: totalPages }, (_, index) => index + 1).map(
              (page) => (
                <button key={page} onClick={() => handlePageChange(page)}>
                  {page}
                </button>
              )
            )} */}
            {/* <h4>Page No.  {totalPages}</h4> */}
            {/* <input
              type="number"
              className="pageno"
              placeholder="Page No."
              onChange={(e) => handlePageChange(e.target.value)}
            ></input> */}
          </div>
        {/* )} */}
        <div className="perpage" style={{display:"flex"}}>
          <h4 style={{marginLeft:"50rem"}}>Contacts/page:</h4>
          <input
            type="number"
            placeholder="contacts per page"
            className="entry"
            style={{height: "1.5rem",
              width: "8rem", marginTop:"17px", marginLeft:"8px"}}
            onChange={(e) => setTotalC(e.target.value)}
          ></input>
        </div>
    
      {error && <div style={{ color: "red" }}>{error}</div>}
    </div>
  );
};

export default ContactL;
