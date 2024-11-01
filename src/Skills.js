import './skills/Skills.css';
import htmlimg from './img/html.png';
import cssimg from './img/css.png';
import jsimg from './img/js.png';
import phpimg from './img/php.png';
import bootstrapimg from './img/bootstrap.png';
import jqueryimg from './img/jquery.png';
import reactimg from './img/react.png';
import gitimg from './img/git.png';
import githubimg from './img/github.png';
import vscodeimg from './img/vscode.png';
import mysqlimg from './img/mysql.png';
function Skills(props){
	return(
		<>
		
		<div className="container-fluid ">
	      <div className="row justify-content-center  ">

	        <div className="col-12 ">
	        	<h1 className="heading-comman ff-p"><span>My</span>{props.heading}</h1>
	        </div>

{/*-------------------------programming language-------------------------------*/}
	        <div class="col-12 ">
	        	<div className="row justify-content-center align-items-center skill-content-box-outer">
	        		<div className="col-12 col-sm-12 col-md-10 col-lg-10 col-xl-10 col-xxl-10">
	        			<h1 className="about-heading-common skill-heading-comman ff-p">Programming Language</h1>
	        		</div>
	        		<div className="col-12 col-sm-12 col-md-10 col-lg-10 col-xl-10 col-xxl-10 skill-item-content-box">
	        			<div className="row justify-content-around">
	        				<div className="col-2 skill-item-box">
	        					<div className="skill-item-img"><img src={htmlimg} alt="html-img"/></div>
	        					<div className="skill-item-name">HTML5</div>
	        				</div>
	        				<div className="col-2 skill-item-box">
	        					<div className="skill-item-img"><img src={cssimg} alt="css-img"/></div>
	        					<div className="skill-item-name">CSS3</div>
	        				</div>
	        				<div className="col-2 skill-item-box">
	        					<div className="skill-item-img"><img src={jsimg} alt="js-img"/></div>
	        					<div className="skill-item-name">JavaScript6</div>
	        				</div>
	        				<div className="col-2 skill-item-box">
	        					<div className="skill-item-img"><img src={phpimg} alt="php-img"/></div>
	        					<div className="skill-item-name">corePHP</div>
	        				</div>

	        			</div>
	        		</div>  

{/*-------------------------framework-------------------------------*/}
	        		<div className="col-12 col-sm-12 col-md-10 col-lg-10 col-xl-10 col-xxl-10">
	        			<h1 className="about-heading-common skill-heading-comman  ff-p">Framework & Libraries</h1>
	        		</div>
	        		<div className="col-12 col-sm-12 col-md-10 col-lg-10 col-xl-10 col-xxl-10 skill-item-content-box">
	        			<div className="row justify-content-around">
	        				<div className="col-2 skill-item-box">
	        					<div className="skill-item-img"><img src={bootstrapimg} alt="bootstrap-img"/></div>
	        					<div className="skill-item-name">Bootstrap</div>
	        				</div>
	        				<div className="col-2 skill-item-box">
	        					<div className="skill-item-img"><img src={jqueryimg} alt="jquery-img"/></div>
	        					<div className="skill-item-name">jQuery</div>
	        				</div>
	        				<div className="col-2 skill-item-box">
	        					<div className="skill-item-img"><img src={reactimg} alt="react-img"/></div>
	        					<div className="skill-item-name">ReactJS</div>
	        				</div>
	        				
	        			</div>
	        		</div> 

{/*-------------------------database-------------------------------*/}
	        		<div className="col-12 col-sm-12 col-md-10 col-lg-10 col-xl-10 col-xxl-10">
	        			<h1 className="about-heading-common skill-heading-comman  ff-p">Database & DBMS</h1>
	        		</div>
	        		<div className="col-12 col-sm-12 col-md-10 col-lg-10 col-xl-10 col-xxl-10 skill-item-content-box">
	        			<div className="row justify-content-around">
	        				<div className="col-2 skill-item-box">
	        					<div className="skill-item-img"><img src={mysqlimg} alt="git-img"/></div>
	        					<div className="skill-item-name">MySQL</div>
	        				</div>
	        							
	        			</div>
	        		</div> 

{/*-------------------------tools-------------------------------*/}
	        		<div className="col-12 col-sm-12 col-md-10 col-lg-10 col-xl-10 col-xxl-10">
	        			<h1 className="about-heading-common skill-heading-comman  ff-p">Tools</h1>
	        		</div>
	        		<div className="col-12 col-sm-12 col-md-10 col-lg-10 col-xl-10 col-xxl-10 skill-item-content-box">
	        			<div className="row justify-content-around">
	        				<div className="col-2 skill-item-box">
	        					<div className="skill-item-img"><img src={gitimg} alt="git-img"/></div>
	        					<div className="skill-item-name">Git</div>
	        				</div>
	        				<div className="col-2 skill-item-box">
	        					<div className="skill-item-img"><img src={githubimg} alt="github-img"/></div>
	        					<div className="skill-item-name">Github</div>
	        				</div>
	        				<div className="col-2 skill-item-box">
	        					<div className="skill-item-img"><img src={vscodeimg} alt="vscode-img"/></div>
	        					<div className="skill-item-name">VScode</div>
	        				</div> 			
	        			</div>
	        		</div>

    		{/*-------------------------other-------------------------------*/}

    				<div className="col-12 col-sm-12 col-md-10 col-lg-10 col-xl-10 col-xxl-10">
	        			<h1 className="about-heading-common  skill-heading-comman ff-p">Others</h1>
	        		</div>
	        		<div className="col-12 col-sm-12 col-md-10 col-lg-10 col-xl-10 col-xxl-10 ">
						<ul className="ul-common">
							<li className="about-interest-item ">Responsive web design</li>
							<li className="about-interest-item ">Data manipulation using corePHP</li>
							<li className="about-interest-item ">Good communication in Hindi and English</li>
						</ul>
	        		</div>         
	        			              
	            </div>
	        </div>

	      </div>
	    </div>

		</>
		);
}

export default Skills;