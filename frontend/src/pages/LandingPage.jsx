import React, { useState, useEffect } from 'react';
import './LandingPage.css';

function LandingPage() {
  const [heading, setHeading] = useState('Hyper boost your Revenue Management, Marketing and Commercial Functions with Business Ready AI');
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  
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

  const toggleServices = () => {
    setIsServicesOpen(!isServicesOpen);
  };

  const features = [
    {
      id: 1,
      icon: "https://res.cloudinary.com/da3cchuki/image/upload/v1746863710/chevrons-right_kamowi.png",
      title: "Ready to Go Algos",
      description: "We have ready accelerators embedded with learnings from hundreds of past projects, generating actionable results."
    },
    {
      id: 2,
      icon: "https://res.cloudinary.com/da3cchuki/image/upload/v1746865633/codepen_tu51i2.png",
      title: "Internal capability building",
      description: "We productize all our work, enhance them with the latest AI technology, and train your internal teams to leverage them."
    },
    {
      id: 3,
      icon: "https://res.cloudinary.com/da3cchuki/image/upload/v1746865795/database_etxt9p.png",
      title: "Multi-source data",
      description: "Our solutions work with old, new, or incomplete datasets, in different formats, and from varied sources."
    },
    {
      id: 4,
      icon: "https://res.cloudinary.com/da3cchuki/image/upload/v1746865874/briefcase_mr2sju.png",
      title: "Stakeholder alignment",
      description: "No black boxes. Stakeholders understand the \"how\", \"so what\" and \"now what\", leading to clear decision-making trade offs."
    },
    {
      id: 5,
      icon: "https://res.cloudinary.com/da3cchuki/image/upload/v1746866017/refresh-cw_qjgd3t.png",
      title: "Continuous engagement",
      description: "We engage in the long-term to enhance, course-correct, and adopt new models to continuously refine your work."
    }
  ];

  return (
    <div className="landing-page">
      <header className="header">
        <div className="container">
          <nav className="navbar">
            <div className="nav-links">
              <p>About</p>
              <div className="services-dropdown">
                <p onClick={toggleServices}>
                  Services <span className="dropdown-icon">▼</span>
                </p>
                {isServicesOpen && (
                  <div className="dropdown-menu">
                    <a href="/">AI Solutions</a>
                    <a href="/">Data Analytics</a>
                    <a href="/">Consulting</a>
                  </div>
                )}
              </div>
            </div>
          </nav>
        </div>
      </header>

      <div className="hero-section">
        <div className="gradient-bg"></div>
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="highlighted-heading">
                {(() => {
                  const words = heading.trim().split(" ");
                  const middleIndex = Math.floor(words.length / 3);
                  return words.map((word, index) => (
                    <span
                      key={index}
                      className={index === middleIndex ? "highlight" : ""}
                    >
                      {word + " "}
                    </span>
                  ));
                })()}
              </h1>
              <p>
                Powerful AI solutions that go beyond mere data sorting and exploration. Use our array of AI enabled solutions that understand your business and recommend the optimal way forward.
              </p>
              <button className="primary-button">Get started</button>
            </div>
            <div className="hero-image"></div>
          </div>
        </div>
        <img 
          src="https://res.cloudinary.com/da3cchuki/image/upload/v1746866413/Asset_5_1_rudjmu.png"
          alt="Background Pattern" 
          className="bg-pattern"
        />
      </div>
      <div className="features-section">
        <div className="container">

          {/* First row of features */}
          <div className="features-row first-row">
            <div className="feature-card">
              <div className="feature-icon">
                <img src={features[0].icon} alt={features[0].title} />
              </div>
              <h3 className="feature-title">{features[0].title}</h3>
              <p className="feature-description">{features[0].description}</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <img src={features[1].icon} alt={features[1].title} />
              </div>
              <h3 className="feature-title">{features[1].title}</h3>
              <p className="feature-description">{features[1].description}</p>
            </div>
          </div>

          {/* Divider Line */}
          <div className="progress-timeline">
            <div className="timeline-track">
              <div className="track-progress"></div>
              <div className="progress-dot dot-active dot-1"></div>
              <div className="progress-dot dot-2"></div>
              <div className="progress-dot dot-3"></div>
              <div className="progress-dot dot-4"></div>
            </div>
          </div>
          
          {/* Second row of Features */}
          <div className="features-row second-row">
            <div className="feature-card">
              <div className="feature-icon">
                <img src={features[2].icon} alt={features[2].title} />
              </div>
              <h3 className="feature-title">{features[2].title}</h3>
              <p className="feature-description">{features[2].description}</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <img src={features[3].icon} alt={features[3].title} />
              </div>
              <h3 className="feature-title">{features[3].title}</h3>
              <p className="feature-description">{features[3].description}</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <img src={features[4].icon} alt={features[4].title} />
              </div>
              <h3 className="feature-title">{features[4].title}</h3>
              <p className="feature-description">{features[4].description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LandingPage;