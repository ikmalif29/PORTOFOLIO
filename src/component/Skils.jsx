/* eslint-disable react/prop-types */
const skills = [
  { name: 'Java', percentage: 85 },
  { name: 'C', percentage: 70 },
  { name: 'HTML', percentage: 90 },
  { name: 'CSS', percentage: 85 },
  { name: 'JavaScript', percentage: 88 },
];

const SkillDonut = ({ name, percentage }) => {
  const circleStyle = {
    background: `conic-gradient(#4BC0C0 ${percentage}%, #2d2d2d ${percentage}% 100%)`,
  };

  return (
    <div className="flex flex-col items-center justify-center group transition-transform duration-300 hover:scale-105">
      <div
        className="w-24 h-24 rounded-full mb-4 relative flex items-center justify-center shadow-lg transition-all duration-300 hover:shadow-2xl"
        style={circleStyle}
      >
        <span className="absolute text-white font-bold text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {percentage}%
        </span>
      </div>
      <p className="text-gray-200 group-hover:text-teal-400 transition-colors duration-300">{name}</p>
    </div>
  );
};

const SkillsDummy = () => {
  return (
    <div id="skills" className="py-10 px-5 bg-gray-900 h-auto">
      <h2 className="text-3xl font-bold text-center text-teal-400 mb-6">
        Programming Skills
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
        {skills.map((skill, index) => (
          <SkillDonut key={index} name={skill.name} percentage={skill.percentage} />
        ))}
      </div>
    </div>
  );
};

export default SkillsDummy;
