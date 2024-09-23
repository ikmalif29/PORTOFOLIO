// import React from 'react';

const Main = () => {
    return (
        <section className="min-h-screen bg-gradient-to-b from-gray-900 to-black flex flex-col sm:flex-row justify-center items-center text-white p-6 sm:p-12 relative overflow-hidden">
            {/* Floating Animation Elements */}
            <div className="absolute top-20 right-0 w-24 h-24 bg-blue-500 rounded-full opacity-30 animate-float"></div>
            <div className="absolute bottom-32 left-10 w-16 h-16 bg-green-500 rounded-full opacity-30 animate-float-slow"></div>

            {/* Photo Section */}
            <div className="sm:w-1/3 flex justify-center sm:justify-center items-center mb-8 sm:mb-0 relative z-10">
                <img
                    src="saya.jpg"
                    alt="Imals Fao"
                    className="w-48 h-48 sm:w-72 sm:h-72 rounded-full object-cover shadow-2xl border-4 border-gray-800 transform transition duration-500 ease-in-out hover:scale-110 hover:rotate-6 hover:shadow-blue-500"
                />
            </div>

            {/* Text Section */}
            <div className="sm:w-2/4 text-center sm:text-left space-y-6 sm:pl-8 relative z-10">
                <h1 className="text-4xl sm:text-6xl font-extrabold animate-bounce">
                    Hi, I’m <span className="text-blue-500">Imals Fao</span>
                </h1>
                <p className="text-xl sm:text-2xl font-medium text-gray-400 animate__animated animate__fadeInUp animate__delay-1s">
                    A passionate <span className="text-green-400">Frontend Developer</span>
                </p>

                {/* Profile Description */}
                <p className="text-lg sm:text-xl font-light text-gray-300 animate__animated animate__fadeInUp animate__delay-2s">
                    I specialize in building responsive and interactive web applications using modern technologies. With a deep understanding of JavaScript, HTML, CSS, and frameworks like React.js, I aim to deliver clean, efficient code that brings innovative designs to life. I’m always eager to learn new skills and stay up-to-date with the latest trends in web development.
                </p>

                {/* Programming Languages */}
                <div className="flex flex-wrap justify-center sm:justify-start space-x-4 mt-6">
                    <span className="px-5 py-2 bg-gray-800 rounded-full shadow-xl hover:bg-yellow-500 transition duration-300 ease-in-out transform hover:scale-110 animate-float-x">
                        JavaScript
                    </span>
                    <span className="px-5 py-2 bg-gray-800 rounded-full shadow-xl hover:bg-red-500 transition duration-300 ease-in-out transform hover:scale-110 animate-float-x">
                        HTML
                    </span>
                    <span className="px-5 py-2 bg-gray-800 rounded-full shadow-xl hover:bg-blue-500 transition duration-300 ease-in-out transform hover:scale-110 animate-float-x">
                        CSS
                    </span>
                    <span className="px-5 py-2 bg-gray-800 rounded-full shadow-xl hover:bg-cyan-300 transition duration-300 ease-in-out transform hover:scale-110 animate-float-x">
                        React.js
                    </span>
                </div>

                {/* Contact Button */}
                <div className="mt-10 flex justify-center sm:justify-start">
                    <a
                        href="#contact"
                        className="px-10 py-3 bg-blue-500 rounded-full text-white font-bold shadow-2xl hover:bg-blue-400 transition duration-300 ease-in-out transform hover:scale-105 animate-pulse">
                        Contact Me
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Main;