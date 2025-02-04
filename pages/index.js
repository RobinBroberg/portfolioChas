import React, { useContext } from "react";
import { PortfolioContext } from "@/contexts/PortfolioContext";

export default function Home() {
  const { projects } = useContext(PortfolioContext);
  return (
    <div className="flex flex-col min-h-screen">
      <div className="navbar bg-base-100 justify-end">
        <a href="/admin" className="btn btn-square btn-ghost">
          Admin
        </a>
      </div>
      <div className="container mx-auto p-4 ">
        <section className="text-center mb-8 mt-14">
          <h1 className="text-4xl font-bold">Hello, I'm Robin</h1>
          <p className="mt-4">
            I’m a front-end developer passionate about building impactful
            projects.
          </p>
        </section>

        <section className="my-8 text-center">
          <h2 className="text-3xl font-semibold">Tech Skills</h2>
          <div className="flex flex-wrap gap-4 mt-4 justify-center">
            <span className="badge badge-primary">JavaScript</span>
            <span className="badge badge-primary">Java</span>
            <span className="badge badge-primary">React</span>

            <span className="badge badge-primary">CSS</span>
          </div>
        </section>

        <section className="my-8 text-center">
          <h2 className="text-3xl font-semibold">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            {projects.map((project) => (
              <div key={project.id} className="card bg-base-300 shadow-lg">
                <div className="card-body">
                  <h3 className="card-title mx-auto">{project.title}</h3>
                  <p>{project.description}</p>
                  {project.link && (
                    <div className="mt-2">
                      <a
                        href={project.link}
                        className="btn btn-sm btn-primary"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Project
                      </a>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
      <footer className="footer footer-center bg-base-300 text-base-content p-4 fixed bottom-0 mt-20">
        <aside>
          <p>Copyright © 2025 - All right reserved by Robin Broberg</p>
        </aside>
      </footer>
    </div>
  );
}
