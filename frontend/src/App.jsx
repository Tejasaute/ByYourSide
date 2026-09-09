 import './App.css'

function App() {
  return (
    <div className="app">
      {/* Navbar */}
      <header className="navbar">
        <div className="container navbar-inner">
          <a href="#" className="brand">
            <span className="brand-mark">♡</span>
            <span>ByYourSide</span>
          </a>

          <nav className="nav-links" aria-label="Main navigation">
            <a href="#how-it-works">How it works</a>
            <a href="#support">Support</a>
            <a href="#about">About</a>
          </nav>

          <div className="nav-actions">
            <button
              className="theme-toggle"
              type="button"
              aria-label="Toggle dark mode"
              title="Toggle dark mode"
            >
              ☾
            </button>

            <a href="#get-started" className="button button-primary">
              Get Started
            </a>
          </div>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="hero-section">
          <div className="container hero-content">
            <div className="hero-copy">
              <span className="eyebrow">A little care can go a long way</span>

              <h1>
                Be there.
                <br />
                <span>Start with noticing.</span>
              </h1>

              <p className="hero-description">
                ByYourSide helps you understand concerning changes you notice
                in someone you care about and find a thoughtful way to respond.
              </p>

              <div className="hero-actions">
                <a href="#get-started" className="button button-primary button-large">
                  Start a check-in
                  <span>→</span>
                </a>

                <a href="#how-it-works" className="button button-secondary button-large">
                  How it works
                </a>
              </div>

              <p className="hero-note">
                Simple guidance. No diagnosis. No judgment.
              </p>
            </div>

            <div className="hero-visual" aria-hidden="true">
              <div className="hero-glow"></div>

              <div className="hero-card hero-card-main">
                <div className="heart-icon">♡</div>

                <span className="small-label">Sometimes</span>

                <h3>
                  Someone you care about
                  <br />
                  may not say they need help.
                </h3>

                <div className="hero-card-line"></div>

                <p>
                  You noticed something changed.
                  <br />
                  That's a good place to start.
                </p>
              </div>

              <div className="floating-card floating-card-top">
                <span>👀</span>
                <div>
                  <strong>Notice</strong>
                  <small>What has changed?</small>
                </div>
              </div>

              <div className="floating-card floating-card-bottom">
                <span>🤝</span>
                <div>
                  <strong>Respond</strong>
                  <small>With care</small>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Notice → Understand → Respond */}
        <section className="process-section" id="how-it-works">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">The ByYourSide approach</span>

              <h2>Notice. Understand. Respond.</h2>

              <p>
                You don't need to have all the answers. Sometimes the first
                step is simply paying attention.
              </p>
            </div>

            <div className="process-grid">
              <article className="process-card">
                <div className="process-number">01</div>
                <div className="process-icon">👀</div>

                <h3>Notice</h3>

                <p>
                  Describe the changes you've noticed in someone's behaviour,
                  communication, or everyday interactions.
                </p>
              </article>

              <article className="process-card">
                <div className="process-number">02</div>
                <div className="process-icon">💭</div>

                <h3>Understand</h3>

                <p>
                  Get supportive guidance to help make sense of the patterns
                  you've described.
                </p>
              </article>

              <article className="process-card">
                <div className="process-number">03</div>
                <div className="process-icon">🤝</div>

                <h3>Respond</h3>

                <p>
                  Find practical suggestions for starting a caring,
                  respectful conversation.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* About */}
        <section className="about-section" id="about">
          <div className="container about-grid">
            <div>
              <span className="eyebrow">A calmer way to check in</span>

              <h2>
                You don't have to be an expert to show that you care.
              </h2>
            </div>

            <div className="about-copy">
              <p>
                When someone's behaviour changes, it can be difficult to know
                what to say or whether you should say anything at all.
              </p>

              <p>
                ByYourSide gives you a simple place to pause, reflect on what
                you've noticed, and consider a supportive next step.
              </p>

              <div className="info-box">
                <span className="info-icon">i</span>

                <p>
                  ByYourSide is a mental health awareness and support guidance
                  tool. It does not provide medical diagnoses or predict what
                  someone will do.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Support */}
        <section className="support-section" id="support">
          <div className="container">
            <div className="support-card">
              <div>
                <span className="eyebrow">When you're not sure what to say</span>

                <h2>
                  Start with a conversation,
                  <br />
                  not an assumption.
                </h2>

                <p>
                  A thoughtful question can open the door to support. ByYourSide
                  can help you prepare for that conversation.
                </p>
              </div>

              <a href="#get-started" className="button button-light button-large">
                Find guidance
                <span>→</span>
              </a>
            </div>
          </div>
        </section>

        {/* Get Started */}
        <section className="cta-section" id="get-started">
          <div className="container cta-content">
            <span className="eyebrow">Ready when you are</span>

            <h2>Sometimes caring starts with one small check-in.</h2>

            <p>
              Take a moment to understand what you've noticed and consider
              your next step.
            </p>

            <a href="#" className="button button-primary button-large">
              Start a check-in
              <span>→</span>
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="container footer-inner">
          <div className="footer-brand">
            <a href="#" className="brand">
              <span className="brand-mark">♡</span>
              <span>ByYourSide</span>
            </a>

            <p>Notice. Understand. Respond.</p>
          </div>

          <div className="footer-links">
            <a href="#how-it-works">How it works</a>
            <a href="#support">Support</a>
            <a href="#about">About</a>
          </div>

          <p className="copyright">
            © 2026 ByYourSide. Built with care.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App