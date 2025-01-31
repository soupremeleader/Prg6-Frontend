import { useNavigate } from "react-router";
import { Link } from "react-router";

function Project({ item }) {
  const navigate = useNavigate();

  function toEditProject({ id }) {
    navigate(`/edit_project/${id}`);
  }

  function toDeleteProject({ id }) {
    navigate(`/delete_project/${id}`);
  }

  function toProjects() {
    navigate("/projects");
  }

  return (
    <>
      <button
        onClick={toProjects}
        className="agd amd aty aul ayp azr bdk bff btn car cat caz"
      >
        Terug
      </button>
      <div key={item.id}>
        <h1>{item.title}</h1>
        <button
          onClick={() => toEditProject(item)}
          className="agd amd aty aul ayp azr bdk bff btn car cat caz"
        >
          Edit
        </button>
        <button
          onClick={() => toDeleteProject(item)}
          className="agd amd aty aul ayp azr bdk bff btn car cat caz"
        >
          Delete
        </button>
        <p>
          Pattern:{" "}
          <Link
            className="akr bbl bjm la acd agd ati axp aze azr"
            to={item.link}
          >
            {item.link}
          </Link>
        </p>
        <p>Type: {item.type}</p>
        <p>Size: {item.size}</p>
        <p>Wool: {item.wool}</p>
        <p>Row: {item.row}</p>
      </div>
    </>
  );
}

export default Project;
