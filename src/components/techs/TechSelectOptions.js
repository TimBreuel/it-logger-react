import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getTech } from "../../actions/techActions";

function TechSelectOptions({ getTech, tech }) {
  const { techs, loading } = tech;
  useEffect(() => {
    getTech();
    // eslint-disable-next-line
  }, []);
  return (
    !loading &&
    techs !== null &&
    techs.map((t) => {
      return (
        <option key={t.id} value={`${t.firstName} ${t.lastName}`}>
          {t.firstName} {t.lastName}
        </option>
      );
    })
  );
}

const mapStateToProps = (state) => ({
  tech: state.tech,
});

export default connect(mapStateToProps, { getTech })(TechSelectOptions);
