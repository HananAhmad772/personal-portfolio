import { useEffect, useRef } from 'react'
import aboutImage from '../assets/About-section.png'

const About = () => {
  const aboutRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate')
          }
        })
      },
      { threshold: 0.1 }
    )

    if (aboutRef.current) {
      observer.observe(aboutRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="about" ref={aboutRef}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">Get to know me better</p>
        </div>

        <div className="about-content">
          <div className="about-text">
            <div className="about-intro">
              <h3>I'm a Passionate Full Stack Developer</h3>
              <p>
                With over 2 years of experience in web development, I specialize in 
                creating robust, scalable applications using Laravel, PHP as a backend and React as a frontend. My journey began with a curiosity for how things work 
                  behind the scenes, which led me to discover the power of Laravel and React.
                </p>
              <p>
                I believe in writing clean, maintainable code and following best 
                practices. My expertise extends beyond just Laravel to include 
                frontend technologies, databases, and cloud deployment solutions.
              </p>
            </div>

            <div className="about-highlights">
              <div className="highlight-item">
                <div className="highlight-icon">🚀</div>
                <div className="highlight-content">
                  <h4>Performance Focused</h4>
                  <p>Optimizing applications for speed and efficiency</p>
                </div>
              </div>
              <div className="highlight-item">
                <div className="highlight-icon">🔒</div>
                <div className="highlight-content">
                  <h4>Security First</h4>
                  <p>Implementing best security practices in every project</p>
                </div>
              </div>
              <div className="highlight-item">
                <div className="highlight-icon">📱</div>
                <div className="highlight-content">
                  <h4>Responsive Design</h4>
                  <p>Creating applications that work on all devices</p>
                </div>
              </div>
            </div>
          </div>

          <div className="about-image">
            <div className="about-photo">
              <div className="photo-placeholder">
                <img src={aboutImage} alt="Professional portrait" loading="lazy" />
              </div>
              <div className="about-bg-pattern"></div>
            </div>
          </div>
        </div>

        <div className="about-cta">
          <p>Interested in working together?</p>
          <button 
            className="btn btn-primary"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Let's Connect
          </button>
        </div>
      </div>
    </section>
  )
}

export default About
