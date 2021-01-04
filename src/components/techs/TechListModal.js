import React, { useEffect } from "react";
import TechItem from "./TechItem";
import { connect } from "react-redux";
import { getTech } from "../../actions/techActions";

function TechListModal({ getTech, tech }) {
  // const [techs, setTechs] = useState([]);
  // const [loading, setLoading] = useState(false);
  const { techs, loading } = tech;

  useEffect(() => {
    getTech();
    // eslint-disable-next-line
  }, []);

  // const getTechs = async () => {
  //   setLoading(true);
  //   const res = await fetch("/techs");
  //   const data = await res.json();

  //   setTechs(data);
  //   setLoading(false);
  // };

  return (
    <div id="tech-list-modal" className="modal">
      <div className="modal-content">
        <h4>Technician List</h4>
        <ul className="collection">
          {!loading &&
            techs !== null &&
            techs.map((tech) => {
              return <TechItem tech={tech} key={tech.id}></TechItem>;
            })}
        </ul>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => ({
  tech: state.tech,
});
export default connect(mapStateToProps, { getTech })(TechListModal);
