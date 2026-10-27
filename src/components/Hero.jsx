const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">
            Hi, I'm <span className="highlight">Jingo (Chun-Hao) Tu</span>
          </h1>
          <p className="hero-subtitle">
            Bioengineering MEng Student at UC Berkeley
          </p>
          <p className="hero-description">
            Exploring computational approaches to solve real-world healthcare problems.
            My background spans chemistry, wet-lab research, structural biology,
            and statistical genomics.
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">View Projects</a>
            <a href="#contact" className="btn btn-secondary">Get In Touch</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;