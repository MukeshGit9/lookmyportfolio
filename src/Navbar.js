import { Link, useLocation } from 'react-router-dom';
import logoImage from './img/logo-purple.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { useState , useEffect} from 'react';
import './nav/Navbar.css';


function Navbar() {
  const [isVisible, setIsVisible] = useState(false);
  const [isSmallViewport, setIsSmallViewport] = useState(window.innerWidth < 767);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallViewport(window.innerWidth < 767);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const showIcon=<FontAwesomeIcon icon={faBars}/>;
  const hideIcon=<FontAwesomeIcon icon={faXmark}/>;

  const location = useLocation();
  return (
    <>
      <div className="container-fluid nav-container">
        <div className="row nav-container-row justify-content-between align-items-between">

{/*this is logo here*/}
          <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 nav-logo-box">
            <Link to="/"><img src={logoImage} alt="site-logo" className="logoImage" /></Link>           
            <div className="nav-btn-box">
              <button onClick={toggleVisibility}> 
               {isVisible ? [hideIcon] : [showIcon]}
              </button>
            </div>
          </div>

{/*this is nav links here*/}
          <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
          {(!isSmallViewport || isVisible) && (
          <div className=" row justify-content-center nav-link-box " >
                  <div  className="col-12 nav-link-item">
                    <Link to="/about" className={location.pathname === '/about' ? 'active-link' : ''}>About Me</Link>
                    </div>
                  <div className="col-12 nav-link-item">
                    <Link to="/education" className={location.pathname === '/education' ? 'active-link' : ''}>Education</Link> 
                  </div>
                  <div className="col-12 nav-link-item">
                    <Link to="/skills" className={location.pathname === '/skills' ? 'active-link' : ''}>Skills</Link> 
                  </div>
                  <div className="col-12 nav-link-item">
                   <Link to="/projects" className={location.pathname === '/projects' ? 'active-link' : ''}>Projects</Link> 
                  </div>
                  <div className="col-12 nav-link-item">
                    <Link to="/contact" className={location.pathname === '/contact' ? 'active-link' : ''}>Contact</Link>
                  </div>
        

  {/*this is social links here*/}

                  <div className="col-12">
                    <a href="https://www.facebook.com/profile.php?id=100009095791567" target="_blank" rel="noopener noreferrer" className="nav-social-icon">
                      <FontAwesomeIcon icon={faFacebook} />
                    </a>
                    <a href="https://www.instagram.com/im_mukesh_9/" target="_blank" rel="noopener noreferrer" className="nav-social-icon">
                      <FontAwesomeIcon icon={faInstagram} />
                    </a>
                     <a href="https://github.com/MukeshGit9" target="_blank" rel="noopener noreferrer" className="nav-social-icon">
                      <FontAwesomeIcon icon={faGithub} />
                    </a>
                  </div>
              </div>
              )}

          </div>

        </div>
      </div>

    </>
  );
}

export default Navbar;
