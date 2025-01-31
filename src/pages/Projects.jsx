import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router";

function Projects() {
  const [projects, setProjects] = useState([]);
  const [search, setSearch] = useState("");
  const [filterType, setFilterType] = useState("");
  const navigate = useNavigate();

  function toAddProject() {
    navigate("/add_project");
  }

  const handleSearchInputChange = ({ target }) => {
    setSearch(target.value);
  };

  const handleFilterTypeInputChange = ({ target }) => {
    setFilterType(target.value);
  };

  useEffect(() => {
    async function getProjects() {
      try {
        const response = await fetch(`http://145.24.222.238:8000/projects`, {
          method: "GET",
          headers: {
            Accept: "application/json",
          },
        });

        let data = await response.json();
        setProjects(data.items);
      } catch (error) {
        console.error("Er is een fout opgetreden:", error);
      }
    }

    getProjects();
  }, []);

  return (
    <>
      <button
        onClick={toAddProject}
        className="agd amd aty aul ayp azr bdk bff btn car cat caz"
      >
        Voeg project toe.
      </button>
      <input type="text" onChange={handleSearchInputChange} value={search} />
      <input
        type="text"
        onChange={handleFilterTypeInputChange}
        value={filterType}
      />
      <article className="fm acm">
        {search === ""
          ? filterType === ""
            ? projects.map((project) => (
                <Link
                  className="akr bbl bjm la acd agd ati axp aze azr"
                  to={`/Projects/${project.id}`}
                  key={project.id}
                >
                  <h1>{project.title}</h1>
                </Link>
              ))
            : projects
                .filter((project) => project.type.includes(filterType))
                .map((project) => (
                  <Link
                    className="akr bbl bjm la acd agd ati axp aze azr"
                    to={`/Projects/${project.id}`}
                    key={project.id}
                  >
                    <h1>{project.title}</h1>
                  </Link>
                ))
          : filterType === ""
          ? projects
              .filter((project) => project.title.includes(search))
              .map((project) => (
                <Link
                  className="akr bbl bjm la acd agd ati axp aze azr"
                  to={`/Projects/${project.id}`}
                  key={project.id}
                >
                  <h1>{project.title}</h1>
                </Link>
              ))
          : projects
              .filter(
                (project) =>
                  project.title.includes(search) &&
                  project.type.includes(filterType)
              )
              .map((project) => (
                <Link
                  className="akr bbl bjm la acd agd ati axp aze azr"
                  to={`/Projects/${project.id}`}
                  key={project.id}
                >
                  <h1>{project.title}</h1>
                </Link>
              ))}
      </article>
    </>
  );
}

export default Projects;
