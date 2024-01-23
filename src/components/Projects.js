import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import {projects} from "../data";

export default function Projects() {
    return (
    <section id="projects" className="text-gray-400 bg-white body-font">
        {/* <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20"> */}
        <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-2/3 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                {/* <CodeIcon className="mx-auto inline-block w-10 mb-4" /> */}
                <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-black">
                    Projects
                </h1>
                {/* <p className="mx-auto leading-relaxed text-base">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo
                facilis repellat ab cupiditate alias vero aliquid obcaecati quisquam
                fuga dolore.
                </p> */}
            </div>
            <div className="flex flex-wrap -m-4">
                {projects.map((project) => (
                    <a
                        href={project.link}
                        key={project.image}
                        className="sm:w-1/2 w-100 p-4">
                        <div className="flex relative">
                            <img
                                alt="gallery"
                                className="absolute inset-0 w-full h-full object-cover object-center"
                                src={project.image}
                            />
                            {/* border-1 border-indigo-500 */}
                            <div className="px-8 py-10 relative z-10 w-full  bg-white opacity-0 hover:opacity-100">
                                <h2 className="tracking-widest text-xs title-font font-medium text-indigo-500 mb-1">
                                    {project.subtitle}
                                </h2>
                                <h1 className="title-font text-lg font-medium text-indigo-500 mb-3">
                                    {project.title}
                                </h1>
                                <p className="leading-relaxed">{project.description}</p>
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    </section>
    );
}