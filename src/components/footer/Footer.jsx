import './footer.css';
import gmail from '../../assets/gmail.png';
import github from '../../assets/github.png';
import linkedin from '../../assets/linkedin.png';

function Footer() {
  return (
    <footer className="footer__container">
      <div className="footer__information">
        <h3 className="footer__title">About the developer</h3>
        <h4 className="footer__body">Santiago Valencia Álvarez</h4>
        <p className="footer__body">I am a Full Stack web developer whose excited to  make impact on the people and on this way discover new technologies</p>
        <p className="footer__body">Check out my social media</p>
        <div className="social-media__container">
          <a href="https://github.com/santy289" target="_blank" rel="noreferrer">
            <img className="social-media__icon" src={github} alt="GitHub" />
          </a>
          <a href="https://www.linkedin.com/in/santiagovalenciaalvarez/" target="_blank" rel="noreferrer">
            <img className="social-media__icon" src={linkedin} alt="LinkedIn" />
          </a>
          <a href="mailto:santiago.valencia4@udea.edu.co" target="_blank" rel="noreferrer">
            <img className="social-media__icon" src={gmail} alt="Email" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;