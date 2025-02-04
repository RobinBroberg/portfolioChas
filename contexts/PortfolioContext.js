import { createContext, useState, useEffect } from "react";

export const PortfolioContext = createContext();

export default function PortfolioProvider({ children }) {
  const [projects, setProjects] = useState([]);
  const [techSkills, setTechSkills] = useState([]);

  useEffect(() => {
    const storedProjects = localStorage.getItem("projects");
    if (storedProjects) {
      setProjects(JSON.parse(storedProjects));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("projects", JSON.stringify(projects));
  }, [projects]);

  useEffect(() => {
    const storedTechSkills = localStorage.getItem("techSkills");
    if (storedTechSkills) {
      setTechSkills(JSON.parse(storedTechSkills));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("techSkills", JSON.stringify(techSkills));
  }, [techSkills]);

  function addProject(project) {
    setProjects([...projects, project]);
  }

  function updateProject(updatedProject) {
    setProjects(
      projects.map((project) =>
        project.id === updatedProject.id ? updatedProject : project
      )
    );
  }

  function deleteProject(id) {
    setProjects(projects.filter((project) => project.id !== id));
  }

  function addTechSkill(skill) {
    setTechSkills([...techSkills, skill]);
  }

  function deleteTechSkill(skillName) {
    setTechSkills(techSkills.filter((skill) => skill.name !== skillName));
  }

  return (
    <PortfolioContext.Provider
      value={{
        projects,
        addProject,
        updateProject,
        deleteProject,
        techSkills,
        addTechSkill,
        deleteTechSkill,
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
}
