// pages/admin.js (or components/AdminPage.jsx)
import { useState, useContext } from "react";
import { PortfolioContext } from "@/contexts/PortfolioContext";

export default function AdminPage() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { projects, addProject, updateProject, deleteProject } =
    useContext(PortfolioContext);

  // Form state: if projectForm.id is empty, it's a new project; otherwise, it's editing an existing one.
  const [projectForm, setProjectForm] = useState({
    id: "",
    title: "",
    description: "",
    link: "",
  });

  function handleLogin() {
    if (username === "admin" && password === "password") {
      setLoggedIn(true);
    } else {
      alert("Invalid login");
    }
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setProjectForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (projectForm.id) {
      // If there is an id, update the existing project.
      updateProject(projectForm);
    } else {
      // Create a new project with a unique id.
      const newProject = { ...projectForm, id: Date.now().toString() };
      addProject(newProject);
    }

    // Reset the form.
    setProjectForm({ id: "", title: "", description: "", link: "" });
  }

  // Pre-fill the form when the user wants to edit a project.
  function handleEdit(project) {
    setProjectForm(project);
  }

  // Delete a project by its id.
  function handleDelete(id) {
    deleteProject(id);
  }

  function keyDown(e) {
    if (e.key === "Enter") {
      handleLogin();
    }
  }

  if (!loggedIn) {
    return (
      <div className="mx-auto max-w-sm p-4">
        <h2 className="text-2xl font-bold mb-4 text-center">Admin Login</h2>
        <div className="form-control mb-4">
          <label className="label">Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="input input-bordered"
            placeholder="Username"
          />
        </div>
        <div className="form-control mb-4">
          <label className="label">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input input-bordered"
            placeholder="Password"
            onKeyDown={keyDown}
          />
        </div>
        <button onClick={handleLogin} className="btn btn-primary w-full">
          Log In
        </button>
      </div>
    );
  }

  return (
    <>
      <div className="navbar bg-base-100 justify-end">
        <a href="/" className="btn btn-square btn-ghost">
          Home
        </a>
      </div>
      <div className="container mx-auto p-4">
        <h2 className="text-3xl font-bold mb-4 text-center">Admin Dashboard</h2>

        {/* Project Form */}
        <form onSubmit={handleSubmit} className="max-w-xl mx-auto mb-8">
          <div className="form-control mb-4">
            <label className="label">Title</label>
            <input
              type="text"
              name="title"
              value={projectForm.title}
              onChange={handleChange}
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <textarea
              name="description"
              value={projectForm.description}
              onChange={handleChange}
              className="textarea textarea-bordered"
              required
            ></textarea>
          </div>

          <div className="form-control mb-4">
            <label className="label">Project Link</label>
            <input
              type="text"
              name="link"
              value={projectForm.link}
              onChange={handleChange}
              className="input input-bordered"
            />
          </div>

          <button type="submit" className="btn btn-primary w-full">
            {projectForm.id ? "Update Project" : "Add Project"}
          </button>
        </form>

        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th>Title</th>
                <th>Description</th>
                <th>Link</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {projects.length === 0 ? (
                <tr>
                  <td colSpan="4" className="text-center">
                    No projects available.
                  </td>
                </tr>
              ) : (
                projects.map((project) => (
                  <tr key={project.id}>
                    <td>{project.title}</td>
                    <td>{project.description}</td>
                    <td>
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="link link-primary"
                        >
                          View
                        </a>
                      )}
                    </td>
                    <td>
                      <button
                        onClick={() => handleEdit(project)}
                        className="btn btn-sm btn-info mr-2"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(project.id)}
                        className="btn btn-sm btn-error"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
