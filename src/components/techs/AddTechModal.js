import React, { useState } from "react";
import M from "materialize-css";
import { connect } from "react-redux";
import { addTech } from "../../actions/techActions";

function AddTechModal({ addTech }) {
  const [firstName, setFirstname] = useState("");
  const [lastName, setLastname] = useState("");

  const onSubmit = () => {
    if (firstName === "" || lastName === "") {
      M.toast({ html: "Please enter the fist and last name" });
    } else {
      const newTech = {
        firstName,
        lastName,
      };
      addTech(newTech);
      //Clear Fields
      setFirstname("");
      setLastname("");
    }
  };
  return (
    <div id="add-tech-modal" className="modal" style={modalStyle}>
      <div className="modal-content">
        <h4>New Technician</h4>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="firstName"
              value={firstName}
              onChange={(e) => setFirstname(e.target.value)}
            />
            <label htmlFor="firstName" className="active">
              First Name
            </label>
          </div>
        </div>

        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="lastName"
              value={lastName}
              onChange={(e) => setLastname(e.target.value)}
            />
            <label htmlFor="lastName" className="active">
              Last Name
            </label>
          </div>
        </div>
      </div>
      <div
        className="modal-footer"
        style={{ marginBottom: "20px", paddingRight: "12px" }}
      >
        <a
          href="#!"
          onClick={onSubmit}
          className="modal-close waves-effect waves-blue btn-large"
        >
          Enter
        </a>
      </div>
    </div>
  );
}

const modalStyle = {
  width: "75%",
};

export default connect(null, { addTech })(AddTechModal);
