'use client';

import { workExperience } from '@/data/workExperience';
import './Experience.css';

export default function Experience() {
  return (
    <section id="experience" className="experience">
      <div className="experience-container">
        <h2>Work Experience</h2>
        <div className="experience-list">
          {workExperience.map((job) => (
            <div key={job.id} className="experience-card">
              <div className="experience-header">
                <div className="experience-title-section">
                  <h3>{job.title}</h3>
                  <p className="company">{job.company}</p>
                </div>
                <p className="duration">{job.duration}</p>
              </div>

              <p className="description">{job.description}</p>

              <div className="skills">
                <p className="skills-label">Skills:</p>
                <div className="skills-list">
                  {job.skills.map((skill, index) => (
                    <span key={index} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="highlights">
                <p className="highlights-label">Key Achievements:</p>
                <ul>
                  {job.highlights.map((highlight, index) => (
                    <li key={index}>{highlight}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
