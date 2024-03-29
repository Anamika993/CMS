import React, { useState } from "react";
import api from "../services/api";
import "./contactlist.css";
const ContactI= () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
    setError("");
  };

  const handleImport = async () => {
    try {
      if (!file) {
        setError("Please select a file.");
        return;
      }

      const result = await api.importContacts(file);

      setSuccessMessage(result.message);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="CI" style={{marginLeft:"50rem"}}>
      <input
        type="file"
        onChange={handleFileChange}
        placeholder="Select File"
        className="file"
      />
      <button onClick={handleImport}>Import Contacts</button>
      {error && <div style={{ color: "red" }}>{error}</div>}
      {successMessage && <div style={{ color: "green" }}>{successMessage}</div>}
    </div>
  );
};

export default ContactI;
