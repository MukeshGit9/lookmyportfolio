import './education/Education.css';
function Education(props){
	return(
		<>
		
		<div className="container-fluid">
	      <div className="row justify-content-center align-items-center ">

	        <div className="col-12 ">
	        	<h1 className="heading-comman ff-p"><span>My</span>{props.heading}</h1>
	        </div>

	        <div class="col-12 ">
	        	<div className="row justify-content-center align-items-center education-content-box-outer">

	        		  <div className="col-12 col-sm-12 col-md-10 col-lg-5 col-xl-5 col-xxl-5 education-content-box">
	        		  	<h1>10<sup>th</sup></h1>
	        		  	<h4><span>From :</span> Happy Model Sr. Sec. School, Gurugram</h4>
	        		  	<h5><span>Board :</span> H.B.S.E</h5>
	        		  	<h5><span>Passed :</span> 2016</h5>
	        		  	<h5><span>Percentage :</span> 83.2%</h5>
	        		  </div>

	        		  <div className="col-12 col-sm-12 col-md-10 col-lg-5 col-xl-5 col-xxl-5 education-content-box">
	        		  	<h1>12<sup>th</sup></h1>
	        		  	<h4><span>From :</span> Govt.(boys) Sr. Sec. School, Gurugram</h4>
	        		  	<h5><span>Board :</span> H.B.S.E</h5>
	        		  	<h5><span>Passed :</span> 2018</h5>
	        		  	<h5><span>Percentage :</span> 64.4%</h5>
	        		  </div>
	        		  
	        		  <div className="col-12 col-sm-12 col-md-10 col-lg-5 col-xl-5 col-xxl-5 education-content-box">
	        		  	<h1>I.T.I</h1>
	        		  	<h4><span>From :</span> Govt. Model Industrial Training Institute, Gurugram</h4>
	        		  	<h5><span>Trade :</span>Computer Operator and Programming Assistant</h5>
	        		  	<h5><span>Passed :</span> 2019</h5>
	        		  </div>

	        		  <div className="col-12 col-sm-12 col-md-10 col-lg-5 col-xl-5 col-xxl-5 education-content-box">
	        		  	<h1>Graduation</h1>
	        		  	<h4><span>From :</span>Indira Gandhi National Open University</h4>
	        		  	<h5><span>Programme :</span>Bachelor of Computer Applications [BCA]</h5>
	        		  	<h5><span>Passed :</span>Dec-2023</h5>
	        		  	<h5><span>Percentage :</span> 65.39% - First Division</h5>
	        		  </div>
	        		  		           	   
	            </div>
	        </div>

	      </div>
	    </div>

		</>
		);
}

export default Education;