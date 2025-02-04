import { createContext, useState, useEffect } from "react";

export const PortfolioContext = createContext();

export default function PortfolioProvider({ children }) {
  const [projects, setProjects] = useState([]);
  

  // Load projects from local storage on mount
  useEffect(() => {
    const storedProjects = localStorage.getItem("projects");
    if (storedProjects) {
      setProjects(JSON.parse(storedProjects));
    }
  }, []);

  // Save projects to local storage whenever projects change
  useEffect(() => {
    localStorage.setItem("projects", JSON.stringify(projects));
  }, [projects]);

  // Function to add a new project
  const addProject = (project) => {
    setProjects([...projects, project]);
  };

  // Function to update an existing project
  const updateProject = (updatedProject) => {
    setProjects(
      projects.map((project) =>
        project.id === updatedProject.id ? updatedProject : project
      )
    );
  };

  // Function to delete a project
  const deleteProject = (id) => {
    setProjects(projects.filter((project) => project.id !== id));
  };

  return (
    <PortfolioContext.Provider
      value={{ projects, addProject, updateProject, deleteProject }}
    >
      {children}
    </PortfolioContext.Provider>
  );
}
