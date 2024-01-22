import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import React from "react";
import {skills} from "../data";

export default function Skills() {
    return (
    <section id="skills">
        {/* container mx-auto flex px-10 py-20 md:flex-row flex-col items-center */}
        {/* <div className="container flex px-10 py-20 mx-auto md:flex-row flex-col items-center">
        <div className="text-center md:w-2/2"> */}

        {/* <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <ChipIcon className="w-10 inline-block mb-4" />
                <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
                    Habilidades y Tecnologías
                </h1>
                <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi sit
                    ipsa delectus eum quo voluptas aspernatur accusantium distinctio
                    possimus est.
                </p>
            </div>
            <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
                {skills.map((skill) => (
                    <div key={skill} className="p-2 sm:w-1/2 w-full">
                        <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                        <BadgeCheckIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
                            <span className="title-font font-medium text-white">
                                {skill.name}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div> */}
        <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center md:w-3/3">
            <div className="flex flex-wrap -m-4">
                {skills.map((skill) => (
                    <div key={skill} className="p-2 sm:w-1/2 w-full">
                    <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                    <BadgeCheckIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
                        <span className="title-font font-medium text-white">
                            {skill.name}
                        </span>
                    </div>
                </div>
                ))}
            </div>
            <div className="lg:flex-grow md:w-1/3 lg:pr-24 md:pr-16 flex flex-col md:items-end md:text-left mb-16 md:mb-0 justify-end text-center">
                <ChipIcon className="w-10 inline-block mb-4" />
                <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
                    Skills
                </h1>
            </div>
        </div>
    </section>
    );
}