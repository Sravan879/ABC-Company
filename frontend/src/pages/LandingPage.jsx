import React, { useState, useEffect } from 'react';
import './LandingPage.css';

function LandingPage() {
  const [heading, setHeading] = useState('Hyper boost your Revenue Management, Marketing and Commercial Functions with Business Ready AI');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/heading/get');
        const data = await response.json();
        if (data.text) setHeading(data.text);
      } catch (error) {
        console.error('Error fetching heading:', error);
      }
    };
    
    fetchData();
    const interval = setInterval(fetchData, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="landing-container">
      <div className="gradient-bg"></div>
      
      <nav className="navbar">
        <div className="nav-links">
          <p>About</p>
          <p>Services</p>
        </div>
      </nav>
      
      <div className="main-content">
        <div className="text-section">
          <h1>{heading}</h1>
          <p>Powerful AI solutions that go beyond mere data sorting and exploration. Use our array of AI enabled solutions that understand your business and recommend the optimal way forward.</p>
          <button className="button">Get started</button>
        </div>
        <div className="image-section"></div>
      </div>

      <div className="features-container">
        <div className="features-row margin-up">
          <div className="feature-card">
            <h3 className="feature-title">Ready to Go Algos</h3>
            <p className="feature-description">
              We have ready accelerators embedded with learnings from hundreds of past projects, 
              generating actionable results.
            </p>
          </div>
          
          <div className="feature-card">
            <h3 className="feature-title">Internal capability building</h3>
            <p className="feature-description">
              We productize all our work, enhance them with the latest AI technology, 
              and train your internal teams to leverage them.
            </p>
          </div>
        </div>

        <div className="timeline-divider">
          <div className="divider-line"></div>
        </div>

        <div className="features-row margin-down">
          <div className="feature-card">
            <h3 className="feature-title">Multi-source data</h3>
            <p className="feature-description">
              Our solutions work with old, new, or incomplete datasets, in different formats, 
              and from varied sources.
            </p>
          </div>
          
          <div className="feature-card">
            <h3 className="feature-title">Stakeholder alignment</h3>
            <p className="feature-description">
              No black boxes. Stakeholders understand the "how", "so what" and "now what", 
              leading to clear decision-making trade offs.
            </p>
          </div>
          
          <div className="feature-card">
            <h3 className="feature-title">Continuous engagement</h3>
            <p className="feature-description">
              We engage in the long-term to enhance, course-correct, and adopt new models 
              to continuously refine your work.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LandingPage;