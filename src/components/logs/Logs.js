import React, { useEffect } from "react";
import LogItem from "./LogItem";
import Preloader from "../layout/Preloader";
//CONNECT WITH THE STATE/REDUCER
import { connect } from "react-redux";
//GET THE ACTIONS FROM ACTIONS
import { getLogs } from "../../actions/logActions";

function Logs({ log, getLogs }) {
  const { logs, loading } = log;

  useEffect(() => {
    getLogs();
    // eslint-disable-next-line
  }, []);

  if (loading || logs === null) {
    return <Preloader></Preloader>;
  }

  return (
    <ul className="collection with-header">
      <li className="collection-header">
        <h4 className="center blue-grey-text">System Logs</h4>
      </li>
      {!loading && logs.length === 0 ? (
        <p className="center">No logs to show...</p>
      ) : (
        logs.map((log) => <LogItem log={log} key={log.id}></LogItem>)
      )}
    </ul>
  );
}

//GET THE STATE FROM logReducer
const mapStateToProps = (state) => ({
  log: state.log,
});

//PASS the actions as a secend parameter
export default connect(mapStateToProps, { getLogs })(Logs);
