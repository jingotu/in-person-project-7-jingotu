import { useState, useEffect } from 'react';

const Skills = () => {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);

  // TODO: Fetch skills from API (optional challenge)
  // For now, using hardcoded data
  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setSkills([
        { id: 1, name: 'Python', level: 90, category: 'Programming' },
        { id: 2, name: 'R', level: 95, category: 'Data Analysis' },
        { id: 3, name: 'Molecular Modeling', level: 88, category: 'Structural Biology' },
        { id: 4, name: 'Protein Production and Purification', level: 85, category: 'Wet Lab' },
        { id: 5, name: 'HTML & CSS', level: 80, category: 'Web Development' },
        { id: 6, name: 'In vitro assays', level: 75, category: 'Chemistry' },
      ]);
      setLoading(false);
    }, 500);
  }, []);

  if (loading) {
    return (
      <section id="skills" className="skills">
        <div className="container">
          <h2>Skills</h2>
          <p>Loading skills...</p>
        </div>
      </section>
    );
  }

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2>Skills & Technologies</h2>
        <div className="skills-grid">
          {skills.map(skill => (
            <div key={skill.id} className="skill-item">
              <div className="skill-header">
                <span className="skill-name">{skill.name}</span>
                <span className="skill-level">{skill.level}%</span>
              </div>
              <div className="skill-bar">
                <div
                  className="skill-progress"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
              <span className="skill-category">{skill.category}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;