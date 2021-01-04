import React, { Fragment, useRef } from "react";
import { connect } from "react-redux";
import { searchLogs } from "../../actions/logActions";

const Searchbar = ({ searchLogs }) => {
  const text = useRef("");

  const onChange = (e) => {
    searchLogs(text.current.value);
  };
  return (
    <Fragment>
      <nav style={{ marginBottom: "30px" }} className="blue-grey">
        <div className="nav-wrapper">
          <form>
            <div className="input-field">
              <input
                id="search"
                type="search"
                placeholder="Search Logs..."
                ref={text}
                onChange={onChange}
              />
              <label className="label-icon" htmlFor="search">
                <i className="material-icons">search</i>
              </label>
              <i className="material-icons">close</i>
            </div>
          </form>
        </div>
      </nav>
    </Fragment>
  );
};

export default connect(null, { searchLogs })(Searchbar);
