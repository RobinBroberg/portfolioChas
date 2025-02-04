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

      <section className="hero bg-base-200">
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content flex flex-col md:flex-row items-center text-center md:text-left text-neutral-content">
          {/* Left Side: Text */}
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hello, I'm Robin</h1>
            <p className="mb-5">I’m a front-end developer.</p>
          </div>

          <div className="md:ml-10">
            <img
              src="/profile.jpg"
              alt="Robin's Profile"
              className="w-48 h-48 rounded-full  shadow-lg object-cover object-top"
            />
          </div>
        </div>
      </section>

      <div className="container mx-auto p-4 ">
        <section className="my-8 text-center">
          <h2 className="text-3xl font-semibold">Tech Skills</h2>
          <div className="flex flex-wrap gap-4 mt-4 justify-center">
            <span className="badge badge-primary">JavaScript</span>
            <span className="badge badge-primary">Java</span>
            <span className="badge badge-primary">React</span>

            <span className="badge badge-primary">CSS</span>
          </div>
        </section>

        <section className="my-8 text-center mb-20">
          <h2 className="text-3xl font-semibold">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            {projects.map((project) => (
              <div
                key={project.id}
                className="card card-compact bg-base-100 w-96 shadow-xl"
              >
                {/* Project Image (Optional) */}
                {project.image && (
                  <figure>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-48 w-full object-cover"
                    />
                  </figure>
                )}

                <div className="card-body">
                  <h2 className="card-title">{project.title}</h2>
                  <p>{project.description}</p>

                  {project.link && (
                    <div className="card-actions justify-end">
                      <a
                        href={project.link}
                        className="btn btn-primary"
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
      <footer className="footer footer-center bg-base-300 text-base-content p-4 fixed bottom-0">
        <aside>
          <p>Copyright © 2025 - All right reserved by Robin Broberg</p>
        </aside>
      </footer>
    </div>
  );
}
