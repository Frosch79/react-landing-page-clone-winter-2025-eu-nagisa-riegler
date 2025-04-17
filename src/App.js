import './App.css';
import '@fontsource-variable/noto-sans-jp';
import '@fontsource/pt-serif-caption';
import anyEditor from './images/any-editor.png';
import cloudHosted from './images/cloud-hosted.png';
import customDomains from './images/custom-domains.png';
import editAnywhere from './images/edit-anywhere.png';
import freeSsl from './images/free-ssl.png';
import globalCdn from './images/global-cdn.png';
import hero from './images/hero.png';
import logo from './images/icon-white.svg';
import instantPublish from './images/instant-publish.png';
import macNative from './images/mac-native.png';
import play from './images/play.svg';
import smartLocalhost from './images/smart-localhost.png';
import textLogo from './images/wunderbucket-type.svg';

export default function App() {
  return (
    <div className="App">
      <header>
        <div className="Information">
          <a href="https://wunderbucket.io/closing.html">
            Wunderbucket is shutting down on Oct 1st
          </a>
        </div>
        <div className="StartLink">
          <figure className="Logo">
            <a href="/">
              <img src={logo} alt="icon" className="icon" />
              <img src={textLogo} alt="text" className="text" />
            </a>
          </figure>

          <nav>
            <ul>
              <li>
                <a className="getting-started" href="/docs/">
                  Getting Started
                </a>
              </li>
              <li>
                <a className="pricing" href="/pricing.html">
                  Pricing
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <div className="Content">
        <figure className="hero">
          <img src={hero} alt="hero" />
        </figure>

        <div className="Content-inside">
          <h1>
            <span>Turn local folders into websites</span>
          </h1>
          <p>
            For designers & developers who want fast, secure websites without
            command lines, or configs. It’s like if Dropbox had a cute little
            static hosting service baby.
          </p>
          <nav>
            <a href="#tour-video">
              <img src={play} alt="play" />
              See how it works
            </a>
          </nav>
        </div>
      </div>
      <div className="Content-inside Item">
        <p className="subtitle ">
          Here's some of the highlights of the features you get when you build
          sites with Wunderbucket.
        </p>
        <div className="Container left">
          <img className="Item" src={cloudHosted} alt="cloud-hosted" />
          <aside className="Item">
            <h3>Cloud Hosted</h3>
            <p>
              All your content is hosted on Amazon's Cloud. This is the
              infrastructure that powers the world's biggest websites, not a
              server running out of a garage. You're in good hands.
            </p>
          </aside>
        </div>
        <div className="Container right">
          <img className="Item" src={instantPublish} alt="instant-publish" />
          <aside className="Item">
            <h3>Instant Publish</h3>
            <p>
              When you're done making changes in a local folder, just click
              "publish" and it's live. No branch, merge, build, deploy just to
              fix a typo or change a font. It lets you quickly iterate, and
              tinker. It works how you work.
            </p>
          </aside>
        </div>

        <div className="Container left">
          <img className="Item" src={editAnywhere} alt="edit-anywhere" />
          <aside className="Item">
            <h3>Edit Anywhere</h3>
            <p>
              Sync your site's code to multiple computers. Allow your teammates
              to made edits and publish sites from multiple desktops.
            </p>
          </aside>
        </div>
        <div className="Container right">
          <img className="Item" src={smartLocalhost} alt="smart-localhost" />
          <aside className="Item">
            <h3>Smart Localhost</h3>
            <p>
              When you add a folder to Wunderbucket, you get a localhost server
              that will reload the page any time you change your source code.
              You'll never need to hit refresh again.
            </p>
          </aside>
        </div>
        <div className="Container left">
          <img className="Item" src={macNative} alt="mac-native" />
          <aside className="Item">
            <h3>Mac Native</h3>
            <p>
              A totally different take on static hosting, Wunderbucket is deeply
              integrated in the macOS experience. It makes publishing static
              content a completely natural part of your normal Mac workflow.
            </p>
          </aside>
        </div>
        <div className="Container right">
          <img className="Item" src={anyEditor} alt="any-editor" />
          <aside className="Item">
            <h3>Works with any code editor</h3>
            <p>
              Use your favorite code editor to build your web sites: Nova, Coda,
              Espresso, Visual Studio Code, BBEdit, TextWangler, etc. Because
              Wunderbucket natively integrates with the macOS Finder it works
              with all of them.
            </p>
          </aside>
        </div>
        <div className="Container left">
          <img className="Item" src={customDomains} alt="custom-domains" />
          <aside className="Item">
            <h3>Use your own domain</h3>
            <p>
              All Wunderbucket sites support custom domains with minimal
              configuration. It only takes minutes to get your site running off
              of your own domain.
            </p>
          </aside>
        </div>
        <div className="Container right">
          <img className="Item" src={globalCdn} alt="global-cdn" />
          <aside className="Item">
            <h3>Global CDN</h3>
            <p>
              Your sites will load super fast on any device from any location
              when they're published over our global content distribution
              network.
            </p>
          </aside>
        </div>
        <div className="Container left ">
          <img className="Item" src={freeSsl} alt="free-ssl" />
          <aside className="Item">
            <h3>Free SSL</h3>
            <p>
              All of your pages and assets will be served over https. You won't
              have to worry about purchasing or renewing your SSL certificate.
            </p>
          </aside>
        </div>
        <div className="Container-end">
          <h3>Cloud by AWS</h3>
          <p>
            With Wunderbucket, your sites will be hosted on the AWS Cloud: The
            world's fastest and most reliable hosting platform.
          </p>
        </div>
      </div>

      <footer>
        <p>
          © 2023 <a href="https://smmall.site">Smmall Inc.</a>
          <br />
          Illustrations by <a href="https://humanities.studio">Humanities</a>
        </p>
        <nav>
          <a href="/about.html">About</a>
          <a href="/blog">Blog</a>
          <a href="/docs">Docs</a>
          <a href="https://status.wunderbucket.io/49572-Wunderbucket">
            System Status
          </a>
          <a href="/privacy.html">Privacy</a>
          <a href="/terms.html">Terms</a>
          <a href="/contact.html">Contact</a>
        </nav>
      </footer>
    </div>
  );
}
