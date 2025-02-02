import { useState, useEffect, createContext, useContext } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router";

const FilterContext = createContext();

function Projects() {
  const [projects, setProjects] = useState([]);
  const [filters, setFilters] = useState({
    search: "",
    type: "",
  });
  const navigate = useNavigate();

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };
  function toAddProject() {
    navigate("/add_project");
  }

  const filteredProjects = projects.filter((project) => {
    return (
      (filters.search === "" || project.title.includes(filters.search)) &&
      (filters.type === "" || project.type.includes(filters.type))
    );
  });

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
      <FilterContext.Provider
        value={{
          filters,
          handleFilterChange,
        }}
      >
        <FilterControls />
        <article className="fm acm">
          {filteredProjects.map((filteredProject) => (
            <Link
              className="akr bbl bjm la acd agd ati axp aze azr"
              to={`/Projects/${filteredProject.id}`}
              key={filteredProject.id}
            >
              <h1>{filteredProject.title}</h1>
            </Link>
          ))}
        </article>
      </FilterContext.Provider>
      <article className="fm acm">
      </article>
    </>
  );
}

const FilterControls = () => {
  const { filters, handleFilterChange } = useContext(FilterContext);
  return (
    <>
      <input
        type="text"
        name="search"
        onChange={handleFilterChange}
        value={filters.search}
      />
      <input
        type="text"
        name="type"
        onChange={handleFilterChange}
        value={filters.type}
      />
    </>
  );
};

export default Projects;
