import React from "react";
import '../output.css';
import geekMarina from '../assets/geekMarina.jpg';

function About() {
    return (
        <section id="about">
            <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                        Marina Moreno Soriano
                        {/* <br className="hidden lg:inline-block text-xs" />¿Me encanta construir aplicaciones web.? */}
                    </h1>
                    <p className="mb-8 leading-relaxed text-xs">
                    UX-UI Manager | Software engineer | VUX-VUI Designer | Visual Designer | Entrepreneur | User researcher expert | Frontend developer
                    </p>
                    {/* <br className="hidden lg:inline-block" /> */}
                    <p className="mb-8 leading-relaxed text-xl text-white">
                    I’m a software engineer from Polytechnic University of Catalonia with more than three years of experience in digital products. I’ve worked in Service Design, connecting user and business needs trough feasible digital experiences. 
                    <br  />
                    <br />
                    <h4 className="font-bold">I am a digital experience enthusiast.</h4>
                    <br className="hidden lg:inline-block" />
                    <br className="hidden lg:inline-block" />
                    Nowadays, I am based in Barcelona, but I am really keen on  taking challenging adventures abroad!                        <br className="hidden lg:inline-block" />
                    </p>
                    {/* <div className="flex justify-center">
                        <a
                        href="#contact"
                        className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                        Trabaja conmigo
                        </a>
                        <a
                        href="#projects"
                        className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                        Mira mis trabajos anteriores
                        </a>
                    </div> */}
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <img
                        className="object-cover object-center rounded"
                        alt="Marina's emojis"
                        src={geekMarina}
                    />
                </div>
            </div>
        </section>
);
}

export default About;