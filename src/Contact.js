import './contact/Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';


function Contact(props) {
	return(
		<>
		
		<div className="container-fluid ">
	      <div className="row justify-content-center align-items-center ">

	        <div className="col-12 ">
	        	<h1 className="heading-comman ff-p">{props.heading}<span>Me</span></h1>
	        </div>

	        <div class="col-12 ">
	        	<div className="row justify-content-center align-items-center contact-content-box">
	        		  <div className="col-12 text-center">
	        		  	<ul className="px-0">
						  <li class="list-group-item contact-items"><span><FontAwesomeIcon icon={faEnvelope} /></span>mukeshkumar2792000@gmail.com</li>
						</ul>
	        		  </div>

		              <div className="col-2 text-center">
		                <a href="https://www.facebook.com/profile.php?id=100009095791567" target="_blank" rel="noopener noreferrer" className="nav-social-icon nav-social-icon-purple">
		                  <FontAwesomeIcon icon={faFacebook} />
		                </a>
		              </div>

		              <div className="col-2 text-center">
		                <a href="https://www.instagram.com/im_mukesh_9/" target="_blank" rel="noopener noreferrer" className="nav-social-icon nav-social-icon-purple">
		                  <FontAwesomeIcon icon={faInstagram} />
		                </a>
		              </div>

		              <div className="col-2 text-center">
		                <a href="https://github.com/MukeshGit9" target="_blank" rel="noopener noreferrer" className="nav-social-icon nav-social-icon-purple">
		                  <FontAwesomeIcon icon={faGithub} />
		                </a>
		              </div>
	            </div>
	        </div>

	      </div>
	    </div>

		</>
		);
}

export default Contact;