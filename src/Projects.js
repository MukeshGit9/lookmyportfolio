import './projects/Projects.css'
function Projects(props){
	return(
		<>
		
		<div className="container-fluid ">
	      <div className="row justify-content-center align-items-center ">

	        <div className="col-12 ">
	        	<h1 className="heading-comman ff-p"><span>My</span>{props.heading}</h1>
	        </div>

	        <div class="col-12 ">
	        	<div className="row justify-content-center align-items-center projects-content-box-outer">

	        		  <div className="col-12 col-sm-12 col-md-10 col-lg=-10 col-xl=-10 col-xxl=-10 projects-content-box">
	        		  	<h1>QuickRents - Home and Rooms Rental Website</h1>
	        		  	<h4><span>Front-end :</span> HTML, CSS, JavaScript, jQuery, Bootstrap</h4>
	        		  	<h4><span>Back-end :</span> corePHP</h4>
	        		  	<h4><span>Server :</span> Apache</h4>
	        		  	<h4><span>DBMS :</span> MySQL</h4>
	        		  	<h4><span>Client :</span> Myself</h4>
	        		  	<h4><span>Worked-area :</span> All</h4>
	        		  	<h4><span>Live :</span> Yes - <a href="https://quickrents.infinityfreeapp.com/" target="_blank" rel="noopener noreferrer">Click to QuickRents</a></h4>
	        		  </div>

	        		  <div className="col-12 col-sm-12 col-md-10 col-lg=-10 col-xl=-10 col-xxl=-10 projects-content-box">
	        		  	<h1>LookmyPORTFOLIO - Personal Portfolio Website</h1>
	        		  	<h4><span>Front-end :</span> HTML, CSS, JavaScript, JSX, Bootstrap, ReactJS</h4>
	        		  	<h4><span>Back-end :</span> No</h4>
	        		  	<h4><span>Server :</span> No</h4>
	        		  	<h4><span>DBMS :</span> No</h4>
	        		  	<h4><span>Client :</span> Myself</h4>
	        		  	<h4><span>Worked-area :</span> All</h4>
	        		  	<h4><span>Live :</span> Yes - <a href="https://mukeshgit9.github.io/" target="_blank" rel="noopener noreferrer">Click to LookmyPORTFOLIO</a></h4>

	        		  </div>

	        		  
	        		  		           	   
	            </div>
	        </div>

	      </div>
	    </div>

		</>
		);
}

export default Projects;