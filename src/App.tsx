import './App.scss'
import { Arrow } from './components/arrow-icon'
import { Logo } from './components/logo'
import { Linkedin } from './components/linkedin'
import { Instagram } from './components/instagram'
import { Twitter } from './components/twitter'
import { Tiktok } from './components/tiktok'

function App() {
  return (
    <main>
      <header className="header-container">
        <Logo/>
        <div className="header-sp">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <nav className="menu-options">
          <a>What we offer</a>
          <a>How it works</a>
          <a>Portfolio</a>
        </nav>
        <button>
          <div className="btn-face-white">
            Contact us
            <Arrow />
          </div>
          <div className="btn-face-purple">
            Contact us
            <Arrow />
          </div>
        </button>
      </header>

      <div className="content-container">
        <div className="heading-container">
          <h2>Let's grow your</h2>
          <h2>social presence.</h2>
        </div>
        <div className="bubble target">
        🎯
        </div>
        <div className="bubble fire">
        🔥
        </div>
        <div className="bubble shop">
        🛍️
        </div>
        <div className="bubble rocket">
        🚀
        </div>
      </div>

      <div className="know-container">
        <div className="want-know" >
          <h1 className="know-you">
            We want to get to know you 😊
          </h1>
          <p className="know-quantify">
            01/05
          </p>
        </div>

        <div className="borders"></div>

        <div className="explains-container">
          <p className="best-products">Hi!😉What best explains you?</p>
          <div className="products-container">
            <div className="services">
              <a>📦</a>
              <p>Products</p>
            </div>
            <div className="services">
              <a>🤝</a>
              <p>Services</p>
            </div>
            <div className="services">
              <a>💻</a>
              <p>SaaS</p>
            </div>
            <div className="services">
              <a>🤳</a>
              <p>Personality</p>
            </div>
            <div className="services">
              <a>🤔</a>
              <p>Other</p>
            </div>
          </div>
        </div>

        <div className="borders"></div>

        <div className="button-container">
          <button className="next-container">Next</button>
        </div>
      </div>

      <div className="subscribe-container">
        <div className="seta">
          <p>Subscribe to our newsletter</p>
          <a>→</a>
        </div>
        <div className="image-perfil">
          <div className="image-color">
            <Linkedin />
          </div>
          <div className="image-color">
            <Tiktok />
          </div>
          <div className="image-color">
            <Instagram />
          </div>
          <div className="image-color">
            <Twitter />
          </div>
        </div>
      </div>

      <footer className="footer-container">
        <div className="borders"></div>

        <div className="footer-terms">
          <div className="footer-services">
            <div className="footer-emails">
              <p>For general inquiries on our services</p>
              <a href="#">hello@summerlymedia.com</a>
            </div>
            <div className="footer-emails">
              <p>To apply as a content creator or team member</p>
              <a href="#">creators@summerlymedia.com</a>
            </div>
          </div>
          <div className="footer-works">
            <div className="footer-portfolio">
              <p>Portfolio</p>
              <p>What we offer</p>
              <p>How it works</p>
              <p>Contacts us</p>
            </div>
            <div className="footer-privacy">
              <p>Privacy</p>
              <p>Terms</p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}

export default App