import './about/About.css';
function About(props){
	return(
		<>
		
		<div className="container-fluid ">
	      <div className="row justify-content-center ">

	        <div className="col-12 ">
	        	<h1 className="heading-comman ff-p">{props.heading}<span>Me</span></h1>
	        </div>

	        {/*-------------------------about paragraph-------------------------------*/}
	        <div class="col-12 ">
	        	<div className="row justify-content-center align-items-center ">
	        		<div className="col-12 col-sm-12 col-md-10 col-lg-10 col-xl-10 col-xxl-10">
	        			<p className="about-paragraph ff-ml">" Hello, I'm Mukesh Kumar, 
		        			a budding front-end web developer on a mission to learn, grow, 
		        			and make an impact in the digital world. My journey into web development 
		        			began with a passion for technology and a desire to create beautiful and 
		        			functional websites. With a solid foundation in HTML, CSS, and JavaScript, 
		        			I'm eager to dive deeper into the world of front-end development and explore 
		        			new technologies and frameworks. Every project is an opportunity for me to expand 
		        			my skills and showcase my creativity, whether it's designing responsive layouts,
		        			 adding interactive elements, or refining user experiences. I approach 
		        			 each challenge with enthusiasm and a willingness to learn, 
		        			always seeking feedback and striving for improvement.  "
	        			</p>
	        		</div>

{/*-------------------------personal-------------------------------*/}
	        		<div className="col-12 col-sm-12 col-md-10 col-lg-10 col-xl-10 col-xxl-10">
	        			<h1 className="about-heading-common perosnal-heading ff-p">Personal</h1>
	        		</div>

	        		<div className="col-12 col-sm-12 col-md-5 col-lg-5 col-xl-5 col-xxl-5 about-personal-item">
	        			Name : <span>{props.about[0]}</span>
	        		</div>

	        		<div className="col-12 col-sm-12 col-md-5 col-lg-5 col-xl-5 col-xxl-5 about-personal-item">
						  D.O.B : <span>{props.about[1]}</span>
	        		</div>

	        		<div className="col-12 col-sm-12 col-md-5 col-lg-5 col-xl-5 col-xxl-5 about-personal-item">
						  Gender : <span>{props.about[2]}</span>
	        		</div>

	        		<div className="col-12 col-sm-12 col-md-5 col-lg-5 col-xl-5 col-xxl-5 about-personal-item">
						  Marital Status : <span>{props.about[3]}</span>
	        		</div>


	        		<div className="col-12 col-sm-12 col-md-5 col-lg-5 col-xl-5 col-xxl-5 about-personal-item">
						  Nationality : <span>{props.about[4]}</span>
	        		</div>

	        		<div className="col-12 col-sm-12 col-md-5 col-lg-5 col-xl-5 col-xxl-5 about-personal-item">
						  Religion : <span>{props.about[5]}</span>
	        		</div>	        	

	        		<div className="col-12 col-sm-12 col-md-5 col-lg-5 col-xl-5 col-xxl-5 about-personal-item">
						  Language : <span>{props.about[6]}</span>
	        		</div>	

	        		<div className="col-12 col-sm-12 col-md-5 col-lg-5 col-xl-5 col-xxl-5 about-personal-item">
						  City : <span>{props.about[7]}</span>
	        		</div>

	        		<div className="col-12 col-sm-12 col-md-5 col-lg-5 col-xl-5 col-xxl-5 about-personal-item">
						  State : <span>{props.about[8]}</span>
	        		</div>

	        		

	        		
	        		<div className="col-12 col-sm-12 col-md-5 col-lg-5 col-xl-5 col-xxl-5 about-personal-item">
	        		</div>

{/*-------------------------interest-------------------------------*/}
	        		<div className="col-12 col-sm-12 col-md-10 col-lg-10 col-xl-10 col-xxl-10">
	        			<h1 className="about-heading-common ff-p">Interests</h1>
	        		</div>
	        		<div className="col-12 col-sm-12 col-md-10 col-lg-10 col-xl-10 col-xxl-10 ">
						<ul className="ul-common">
							<li className="about-interest-item ">Watching and playing cricket</li>
							<li className="about-interest-item ">Create interactive and responsive web design</li>
						</ul>
	        		</div>

{/*-------------------------Experience-------------------------------*/}
	        		<div className="col-12 col-sm-12 col-md-10 col-lg-10 col-xl-10 col-xxl-10">
	        			<h1 className="about-heading-common  ff-p">Experience</h1>
	        		</div>
	        		<div className="col-12 col-sm-12 col-md-10 col-lg-10 col-xl-10 col-xxl-10 ">
						<ul className="ul-common">
							<li className="about-interest-item ">Apprentice - Excise and Taxation Department, Gurugram - 2020-21</li>
							<li className="about-interest-item ">2-3 - front-end design project</li>
						</ul>
	        		</div>


	            </div>
	        </div>

	      </div>
	    </div>


		</>
		);
}
export default About;