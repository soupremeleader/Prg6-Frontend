import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { Link } from "react-router";
import Project from "../components/Project";

function DetailProject() {
  let params = useParams();
  const [project, setProject] = useState({
    id: "",
    title: "",
    type: "",
    size: "",
    wool: "",
    row: "",
    link: ""
  });

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
            id: data.id,
            title: data.title,
            type: data.type,
            size: data.size,
            wool: data.wool,
            row: data.row,
            link: data.link
        });
      } catch (error) {
        console.error("Er is een fout opgetreden:", error);
      }
    }

    getProject();
  }, []);
  return (<Project item={project} />);
}

export default DetailProject;
