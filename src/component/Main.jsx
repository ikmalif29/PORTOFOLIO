/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-unknown-property */
import { useState, useEffect } from 'react';

const Main = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };
        
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const skills = [
        { name: 'Java', color: 'from-orange-500 to-red-600', icon: '☕' },
        { name: 'C', color: 'from-blue-500 to-blue-700', icon: '⚡' },
        { name: 'HTML', color: 'from-red-500 to-pink-600', icon: '🏗️' },
        { name: 'CSS', color: 'from-blue-400 to-cyan-600', icon: '🎨' },
        { name: 'JavaScript', color: 'from-yellow-400 to-yellow-600', icon: '🚀' }
    ];

    return (
        <section id="about" className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black relative overflow-hidden">
            {/* Enhanced Background Effects */}
            <div className="absolute inset-0">
                {/* Animated Grid */}
                <div className="absolute inset-0 opacity-10">
                    <div className="grid grid-cols-12 gap-4 h-full animate-pulse">
                        {Array.from({ length: 60 }).map((_, i) => (
                            <div key={i} className="bg-blue-500 rounded-full opacity-20 animate-bounce" 
                                 style={{ animationDelay: `${i * 0.1}s` }}></div>
                        ))}
                    </div>
                </div>

                {/* Floating Particles */}
                <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
                <div className="absolute top-3/4 left-1/3 w-3 h-3 bg-purple-400 rounded-full animate-ping" 
                     style={{ animationDelay: '0.5s' }}></div>
                <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-ping" 
                     style={{ animationDelay: '1s' }}></div>

                {/* Dynamic Gradient Orbs */}
                <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full opacity-20 animate-spin" 
                     style={{ animationDuration: '20s' }}></div>
                <div className="absolute bottom-20 left-20 w-48 h-48 bg-gradient-to-r from-green-500 to-blue-500 rounded-full opacity-20 animate-spin" 
                     style={{ animationDuration: '15s', animationDirection: 'reverse' }}></div>

                {/* Mouse Trail Effect */}
                <div 
                    className="absolute w-6 h-6 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full opacity-30 pointer-events-none transition-all duration-300 ease-out"
                    style={{
                        left: mousePosition.x - 12,
                        top: mousePosition.y - 12,
                        transform: `scale(${isHovered ? 1.5 : 1})`,
                    }}
                ></div>
            </div>

            <div className="relative z-10 flex flex-col lg:flex-row justify-center items-center text-white p-6 sm:p-12 min-h-screen">
                {/* Enhanced Photo Section */}
                <div className="lg:w-1/3 flex justify-center items-center mb-8 lg:mb-0 relative">
                    <div className="relative group">
                        {/* Rotating Border */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-full opacity-75 group-hover:opacity-100 animate-spin transition duration-1000 group-hover:duration-200" 
                             style={{ animationDuration: '3s' }}></div>
                        
                        {/* Pulsing Glow */}
                        <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full animate-pulse"></div>
                        
                        <img
                            src="saya.jpg"
                            alt="Raksa"
                            className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-full object-cover shadow-2xl transform transition-all duration-700 ease-in-out group-hover:scale-105 group-hover:rotate-12"
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                        />
                        
                        {/* Floating Icons */}
                        <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center text-2xl animate-bounce">
                            💻
                        </div>
                        <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center text-2xl animate-bounce" 
                             style={{ animationDelay: '0.5s' }}>
                            🔧
                        </div>
                    </div>
                </div>

                {/* Enhanced Text Section */}
                <div className="lg:w-2/3 text-center lg:text-left space-y-8 lg:pl-12">
                    {/* Animated Title */}
                    <div className="relative">
                        <h1 className="text-5xl lg:text-7xl font-extrabold mb-4 bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent animate-pulse">
                            Hi, I'm{' '}
                            <span className="relative inline-block">
                                <span className="relative z-10 bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
                                    Raksa
                                </span>
                                <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-600 opacity-30 blur-sm animate-ping"></span>
                            </span>
                        </h1>
                        
                        {/* Typewriter Effect Simulation */}
                        <div className="h-1 w-2 bg-blue-500 animate-ping inline-block ml-2"></div>
                    </div>

                    {/* Animated Subtitle */}
                    <div className="relative">
                        <p className="text-2xl lg:text-3xl font-semibold text-gray-300 mb-6">
                            A passionate{' '}
                            <span className="relative inline-block">
                                <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent font-bold animate-pulse">
                                    Backend Developer
                                </span>
                                <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-green-400 to-emerald-500 transform scale-x-0 animate-pulse group-hover:scale-x-100 transition-transform duration-300"></span>
                            </span>
                        </p>
                    </div>

                    {/* Enhanced Description */}
                    <p className="text-lg lg:text-xl font-light text-gray-300 leading-relaxed max-w-2xl opacity-90 hover:opacity-100 transition-opacity duration-300">
                        I specialize in building{' '}
                        <span className="text-blue-400 font-semibold">scalable</span> and{' '}
                        <span className="text-green-400 font-semibold">efficient</span> backend systems, 
                        with expertise in server-side programming, databases, and API development. 
                        Constantly evolving my skills to create{' '}
                        <span className="text-purple-400 font-semibold">powerful</span> and{' '}
                        <span className="text-cyan-400 font-semibold">reliable</span> applications.
                    </p>

                    {/* Enhanced Skills Section */}
                    <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-8">
                        {skills.map((skill, index) => (
                            <div
                                key={skill.name}
                                className="group relative"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div className={`absolute -inset-1 bg-gradient-to-r ${skill.color} rounded-full opacity-50 group-hover:opacity-100 blur transition duration-300`}></div>
                                <div className="relative px-6 py-3 bg-gray-900 rounded-full border border-gray-700 hover:border-transparent transform transition-all duration-300 hover:scale-110 hover:-translate-y-1 cursor-pointer">
                                    <span className="flex items-center space-x-2">
                                        <span className="text-lg">{skill.icon}</span>
                                        <span className="font-semibold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-white group-hover:to-gray-300">
                                            {skill.name}
                                        </span>
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Enhanced Contact Button */}
                    <div className="mt-8 lg:mt-12 flex justify-center lg:justify-start">
                        <div className="relative group">
                            <div className="absolute -inset-2 bg-gradient-to-r from-slate-400 via-slate-300 to-slate-400 rounded-full opacity-30 group-hover:opacity-50 blur transition duration-300"></div>
                            <a
                                href="#contact"
                                className="relative px-8 py-3 sm:px-12 sm:py-4 bg-gradient-to-r from-slate-600 to-slate-700 hover:from-slate-500 hover:to-slate-600 rounded-full text-white font-bold text-base sm:text-lg shadow-2xl transform transition-all duration-300 hover:scale-105 hover:-translate-y-1 flex items-center justify-center space-x-2 group backdrop-blur-sm border border-slate-500 hover:border-slate-300"
                            >
                                <span>Contact Me</span>
                                <span className="transform transition-transform duration-300 group-hover:translate-x-1">
                                    →
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Custom CSS for Additional Animations */}
            <style jsx>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px) rotate(0deg); }
                    50% { transform: translateY(-20px) rotate(180deg); }
                }
                
                @keyframes float-slow {
                    0%, 100% { transform: translateY(0px) scale(1); }
                    50% { transform: translateY(-10px) scale(1.1); }
                }
                
                @keyframes glow {
                    0%, 100% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.5); }
                    50% { box-shadow: 0 0 40px rgba(59, 130, 246, 0.8); }
                }

                .animate-float {
                    animation: float 6s ease-in-out infinite;
                }
                
                .animate-float-slow {
                    animation: float-slow 8s ease-in-out infinite;
                }
                
                .animate-glow {
                    animation: glow 2s ease-in-out infinite;
                }
            `}</style>
        </section>
    );
};

export default Main;