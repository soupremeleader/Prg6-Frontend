import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";

function DeleteProject() {
    const navigate = useNavigate();
    let params = useParams();
    
    useEffect(() => {
        async function deleteProject() {
          try {
            const response = await fetch(
              `http://145.24.222.238:8000/projects/${params.id}`,
              {
                method: "DELETE",
                headers: {
                  Accept: "application/json",
                },
              }
            );
          } catch (error) {
            console.error("Er is een fout opgetreden:", error);
          }
        }
    
        deleteProject().then(() => navigate('/projects'));
      }, []);
    
    return (
        <>
        </>
    )
}

export default DeleteProject;