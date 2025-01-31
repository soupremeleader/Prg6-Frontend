import { useParams, useNavigate } from "react-router";
import { useEffect, useState } from "react";
import Form from "../components/Form";

function EditProject() {
  let params = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState({
    title: "",
    link: "",
    type: "",
    size: "",
    wool: "",
    row: "",
  });

  function toProjects() {
    navigate("/projects");
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setProject({
      ...project,
      [name]: value,
    });
    console.log(project);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    async function editProject() {
      try {
        const response = await fetch(
          `http://145.24.222.238:8000/projects/${params.id}`,
          {
            method: "PUT",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              title: project.title,
              link: project.link,
              type: project.type,
              size: project.size,
              wool: project.wool,
              row: project.row,
            }),
          }
        );
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error("Er is een fout opgetreden:", error);
      }
    }

    editProject().then(() => navigate(`/projects/${params.id}`));
  };

  useEffect(() => {
    async function getProject() {
      try {
        const response = await fetch(
          `http://145.24.222.238:8000/projects/${params.id}`,
          {
            method: "GET",
            headers: {
              Accept: "application/json",
            },
          }
        );

        let data = await response.json();
        setProject({
          title: data.title,
          link: data.link,
          type: data.type,
          size: data.size,
          wool: data.wool,
          row: data.row,
        });
      } catch (error) {
        console.error("Er is een fout opgetreden:", error);
      }
    }
    getProject();
  }, []);
  console.log(project);
  return (
    <>
      <button
        onClick={toProjects}
        className="agd amd aty aul ayp azr bdk bff btn car cat caz"
      >
        Terug
      </button>
      <Form
        formData={project}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
      ></Form>
    </>
  );
}

export default EditProject;
