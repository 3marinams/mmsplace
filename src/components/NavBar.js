import { ArrowRightIcon } from "@heroicons/react/solid";
import React, { useState, useEffect } from 'react';

const NavBar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
    const handleScroll = () => {
        const isScrolled = window.scrollY > 0;
        setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
    }, []);

    return (
        <nav className={`bg-white ${scrolled ? 'shadow-md' : ''} bg-white md:sticky top-0 z-10`}>
            <header className="bg-white md:sticky top-0 z-10">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a className="title-font font-medium text-gray-800 mb-4 md:mb-0">
                    <a href="#about" className="ml-3 text-xl text-blue-900">
                    MMS place
                    </a>
                </a>
                <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
                    <a href="#projects" className="mr-5 hover:text-gray-400">
                    Career
                    </a>
                    <a href="#projects" className="mr-5 hover:text-gray-400">
                    Projects
                    </a>
                    <a href="#skills" className="mr-5 hover:text-gray-400">
                    Skills
                    </a>
                </nav>
                <a
                    href="#contact"
                    className="inline-flex items-center bg-white border-0  py-1 px-3 focus:outline-none hover:bg-blue-900 hover:text-white rounded text-base mt-4 md:mt-0">
                    Let's talk!
                    <ArrowRightIcon className="w-4 h-4 ml-1" />
                </a>
                </div>
            </header>
        </nav>
    );
};

export default NavBar;
