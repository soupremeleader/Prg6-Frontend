import React, { useState } from "react";
import { useNavigate } from "react-router";
import Form from "../components/Form";

function AddProject() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    link: "",
    type: "",
    size: "",
    wool: "",
    row: "",
  });

  // Generieke handler voor het bijwerken van de state
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    async function createNote() {
      try {
        const response = await fetch("http://145.24.222.238:8000/projects", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title: formData.title,
            link: formData.link,
            type: formData.type,
            size: formData.size,
            wool: formData.wool,
            row: formData.row,
          }),
        });
        const data = await response.json();
      } catch (error) {
        console.error("Er is een fout opgetreden:", error);
      }
    }

    createNote();
    navigate("/projects");
  };

  return (
    <Form
      formData={formData}
      handleInputChange={handleInputChange}
      handleSubmit={handleSubmit}
    ></Form>
  );
}

export default AddProject;
