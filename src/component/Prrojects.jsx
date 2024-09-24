const projects = [
  {
    title: 'Sepokat Store',
    description: 'An online shoe store built with React and integrated with local storage for managing cart and checkout functionality.',
    link: 'https://github.com/ikmalif29/IKMAL_FAUZAENI',
    image: 'image1.jpg',
    technologies: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    title: 'Personal Portfolio',
    description: 'A portfolio website showcasing my web development skills and projects.',
    link: 'https://github.com/ikmalif29/PORTOFOLIO',
    image: 'image2.png',
    technologies: ['React', 'Tailwind CSS', 'HTML'],
  },
  {
    title: 'Film Project',
    description: 'A dynamic film website that allows users to explore movie details and watch trailers.',
    link: 'https://myfilmwebsite.com',
    image: 'https://mycoding.id/storage/covers/270.jpg',
    technologies: ['React', 'CSS', 'JavaScript'],
  },
];

const Projects = () => {
  return (
    <div id="project" className="container mx-auto p-6 bg-gradient-to-b from-gray-900 to-black">
      <h2 className="text-5xl font-extrabold text-center text-white mb-16 animate__animated animate__fadeInDown">My Projects</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="bg-gray-800 rounded-xl shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl animate__animated animate__fadeInUp"
          >
            <div className="overflow-hidden rounded-t-xl">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-48 object-cover transform transition duration-500 hover:scale-110"
              />
            </div>

            <div className="p-6">
              <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>
              <p className="text-gray-400 mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, idx) => (
                  <span 
                    key={idx} 
                    className="bg-gray-700 text-gray-300 px-3 py-1 rounded-lg text-sm font-medium hover:bg-blue-500 hover:text-white transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-block px-6 py-3 bg-blue-600 text-white rounded-full font-bold text-center hover:bg-blue-700 transition duration-300 transform hover:scale-105"
              >
                View Project &rarr;
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
